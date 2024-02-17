import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { JWT_MEMBER_SECRET } from 'src/constants/env';
import { MemberJwtPayload } from '../interfaces/member-jwt.interface';
import { MemberService } from '../member.service';

@Injectable()
export class MemberJwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly memberService: MemberService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(JWT_MEMBER_SECRET),
    });
  }

  async validate(payload: MemberJwtPayload, done: VerifiedCallback) {
    const member = await this.memberService.findOneById(payload.id);
    console.log(member);
    if (!member) {
      return done(new HttpException({}, HttpStatus.UNAUTHORIZED));
    }

    return done(null, member, payload.iat);
  }
}
