import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { SigninDto } from './dto/signin.dto';
import { CryptoService } from 'src/providers/crypto/crypto.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import {
  JWT_MEMBER_REFRESH_SECRET,
  JWT_MEMBER_SECRET,
  JWT_REFRESH_EXPIRE_IN,
} from 'src/constants/env';
import { SignupDto } from './dto/signup.dto';
import { Member, PaginateFunction, Prisma, paginator } from '@loar/database';
import { MemberJwtPayload } from './interfaces/member-jwt.interface';
import { MemberEntity } from './entities/member.entity';
import { PasswordDto } from './dto/password.dto';
import Decimal from 'decimal.js';
import { MemberRechargeEntity } from './entities/member-recharge.entity';
import { MemberWithdrawEntity } from './entities/member-withdraw.entity';

@Injectable()
export class MemberService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async getMembers({
    where,
    orderBy,
    page,
    perPage = 20,
  }: {
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput;
    page?: number;
    perPage?: number;
  }) {
    const paginate: PaginateFunction = paginator({ perPage });

    return await paginate(
      this.prisma.member,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    );
  }

  async updateMemberType(type: number, id: number) {
    const data = { type, status: 0 };

    if (type === 1) {
      data.status = 1;
    } else {
      data.status = 0;
    }

    await this.prisma.member.update({
      where: {
        id,
      },
      data: data,
    });
  }

  async changePassword(payload: PasswordDto, member: Member) {
    const { password, oldPassword } = payload;

    // const member = await this.prisma.member.findFirst({
    //   where: {
    //     id: member.id,
    //   },
    // });

    const isMatch = await this.cryptoService.comparePasswords(
      oldPassword,
      member.password,
    );

    if (!isMatch) throw new BadRequestException('Invalid password');

    const cryptoPassword = await this.cryptoService.hashPassword(password);
    await this.prisma.member.update({
      where: {
        id: member.id,
      },
      data: {
        password: cryptoPassword,
      },
    });
  }

  async signin(data: SigninDto) {
    const member = await this.prisma.member.findFirst({
      where: {
        email: data.email,
      },
    });

    if (member.status === 0 || member.type === 0) {
      throw new UnprocessableEntityException(`等待审核`);
    }

    if (!member)
      throw new UnprocessableEntityException(`email or password invalid`);

    const isMatch = await this.cryptoService.comparePasswords(
      data.password,
      member.password,
    );

    if (!isMatch) throw new BadRequestException('Invalid password');

    const payload = this.generateToken({
      id: member.id,
    });
    return {
      ...payload,
      member: new MemberEntity(member),
    };
  }

  async signup(data: SignupDto) {
    try {
      const cryptoPassword = await this.cryptoService.hashPassword(
        data.password,
      );

      const markets = await this.prisma.stockMarket.findMany();

      // const accountBalance = markets.map((item) => {
      //   const code = item.code;

      //   return {
      //     [code]: 0,
      //     [`${code}_LOCK`]: 0,
      //     [`${code}_UNBALANCE`]: 0,
      //   };
      // });

      const accountBalance = {};
      markets.forEach((item) => {
        accountBalance[item.code] = {
          balance: 0,
          unBalance: 0,
          lock: 0,
        };
      });

      await this.prisma.member.create({
        data: {
          email: data.email,
          password: cryptoPassword,
          accountBalance: accountBalance,
          status: 0,
          type: 0,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new UnprocessableEntityException(
          `Email ${data.email} already used.`,
        );
      } else {
        throw new Error(error);
      }
    }
  }

  generateToken(payload: MemberJwtPayload) {
    const { iat, exp } = this.jwtService.decode(
      this.generateAccessToken(payload),
    );

    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
      exp,
      iat,
    };
  }

  private generateAccessToken(payload: MemberJwtPayload): string {
    return this.jwtService.sign(payload, {
      secret: this.configService.get(JWT_MEMBER_SECRET),
    });
  }

  private generateRefreshToken(payload: MemberJwtPayload): string {
    return this.jwtService.sign(payload, {
      secret: this.configService.get(JWT_MEMBER_REFRESH_SECRET),
      expiresIn: this.configService.get(JWT_REFRESH_EXPIRE_IN),
    });
  }

  async findOneByEmail(email: string) {
    return await this.prisma.member.findFirst({
      where: {
        email,
      },
    });
  }

  async findOneById(id: bigint) {
    return await this.prisma.member.findFirst({
      where: {
        id,
      },
    });
  }

  refreshToken(token: string) {
    try {
      const { id } = this.jwtService.verify<MemberJwtPayload>(token, {
        secret: this.configService.get(JWT_MEMBER_REFRESH_SECRET),
      });

      return this.generateToken({
        id,
      });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  // 修改用户充值状态, 自动修改余额
  async passMemberRecharge(id: number, payload: any) {
    const { status } = payload;

    if (status < 0) {
      return await this.prisma.memberRecharge.update({
        where: {
          id,
        },
        data: {
          status,
        },
      });
    }
    const record = await this.prisma.memberRecharge.findFirst({
      where: {
        id,
      },
      include: {
        member: true,
      },
    });

    const member = record.member;

    await this.prisma.member.update({
      where: {
        id: member.id,
      },
      data: {
        balance: member.balance.add(record.money),
      },
    });
  }

  // 修改用户余额
  async changeRecharge(id: number, payload: any) {
    const member = await this.prisma.member.findFirst({
      where: {
        id,
      },
    });

    const { money } = payload;
    // const { type, market, money } = payload;
    // const accountBalance = member.accountBalance;
    // const current = accountBalance[market].balance;
    // const total = +type === 0 ? current + +money : current - +money;

    // accountBalance[market].balance = total;
    await this.prisma.member.update({
      where: {
        id,
      },
      data: {
        balance: member.balance.add(money),
      },
    });
  }

  async createMemberByAdmin(payload: any) {
    try {
      const cryptoPassword = await this.cryptoService.hashPassword(
        payload.password,
      );
      const markets = await this.prisma.stockMarket.findMany();

      const accountBalance = {};
      markets.forEach((item) => {
        accountBalance[item.code] = {
          balance: 0,
          unBalance: 0,
          lock: 0,
        };
      });
      return await this.prisma.member.create({
        data: {
          ...payload,
          status: 1,
          type: 1,
          password: cryptoPassword,
          accountBalance,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new UnprocessableEntityException(`邮箱已经被占用.`);
      } else {
        throw new Error(error);
      }
    }
  }

  async updateMemberByAdmin(id: number, payload: any) {
    const { name, email, password } = payload;
    const data: any = { name, email };

    if (password !== '') {
      data.password = await this.cryptoService.hashPassword(password);
    }

    try {
      return await this.prisma.member.update({
        where: {
          id,
        },
        data,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new UnprocessableEntityException(`邮箱已经被占用.`);
      } else {
        throw new Error(error);
      }
    }
  }

  async getMemberDetail(id: number) {
    return await this.prisma.member.findFirst({
      where: {
        id,
      },
    });
  }

  async uploadRecharge(payload: any, member: Member) {
    const { money, screen } = payload;
    const result = await this.prisma.memberRecharge.create({
      data: {
        money: new Decimal(money),
        screen,
        memberId: member.id,
      },
    });

    return new MemberRechargeEntity(result);
  }

  async getRechargeList(member: Member) {
    const result = await this.prisma.memberRecharge.findMany({
      where: {
        id: member.id,
      },
    });

    return result.length
      ? result.map((item) => new MemberRechargeEntity(item))
      : [];
  }

  async requestWithdraw(payload: any, member: Member) {
    const { money } = payload;

    if (member.balance.lt(money)) {
      throw new BadRequestException('余额不足');
    }

    await this.prisma.memberWithdraw.create({
      data: {
        memberId: member.id,
        money,
      },
    });
  }

  async getWithdrawy(member: Member) {
    const result = await this.prisma.memberWithdraw.findMany({
      where: {
        id: member.id,
      },
    });

    return result.length
      ? result.map((item) => new MemberWithdrawEntity(item))
      : [];
  }

  async getWithdrawByAdmin() {}
}
