import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { JWT_USER_SECRET } from 'src/constants/env';
import { UserJwtPayload } from '../interfaces/user-jwt.interface';
import { UserService } from '../user.service';

@Injectable()
export class UserJwtStrategy extends PassportStrategy(Strategy, 'user-jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>(JWT_USER_SECRET),
    });
  }

  async validate(payload: UserJwtPayload, done: VerifiedCallback) {
    const user = await this.userService.findOneById(payload.id);
    if (!user) {
      return done(new HttpException({}, HttpStatus.UNAUTHORIZED));
    }

    return done(null, user, payload.iat);
  }
}
