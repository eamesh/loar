import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/providers/prisma/prisma.service';
import { SigninDto } from './dto/signin.dto';
import { CryptoService } from 'src/providers/crypto/crypto.service';
import { SignupDto } from './dto/signup.dto';
import { Prisma, User } from '@loar/database';
import { UserJwtPayload } from './interfaces/user-jwt.interface';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import {
  JWT_REFRESH_EXPIRE_IN,
  JWT_USER_REFRESH_SECRET,
  JWT_USER_SECRET,
} from 'src/constants/env';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cryptoService: CryptoService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signin(data: SigninDto) {
    const user = await this.findOneByEmail(data.email);

    if (!user)
      throw new UnprocessableEntityException(`email or password invalid`);

    const isMatch = await this.cryptoService.comparePasswords(
      data.password,
      user.password,
    );

    if (!isMatch) throw new BadRequestException('Invalid password');

    const token = this.generateToken({
      id: user.id,
    });
    return {
      ...token,
      user: {
        email: user.email,
        name: user.name,
      },
    };
  }

  async signup(data: SignupDto) {
    try {
      const cryptoPassword = await this.cryptoService.hashPassword(
        data.password,
      );

      await this.prisma.user.create({
        data: {
          ...data,
          password: cryptoPassword,
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

  generateToken(payload: UserJwtPayload) {
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

  private generateAccessToken(payload: UserJwtPayload): string {
    return this.jwtService.sign(payload, {
      secret: this.configService.get(JWT_USER_SECRET),
    });
  }

  private generateRefreshToken(payload: UserJwtPayload): string {
    return this.jwtService.sign(payload, {
      secret: this.configService.get(JWT_USER_REFRESH_SECRET),
      expiresIn: this.configService.get(JWT_REFRESH_EXPIRE_IN),
    });
  }

  async findOneByEmail(email: string) {
    return await this.prisma.user.findFirst({
      where: {
        email,
      },
    });
  }

  async findOneById(id: bigint) {
    return await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async changePassword(payload: any, user: User) {
    const cryptoPassword = await this.cryptoService.hashPassword(
      payload.password,
    );
    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: cryptoPassword,
      },
    });
  }
}
