import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CryptoModule } from 'src/providers/crypto/crypto.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JWT_EXPIRES_IN, JWT_USER_SECRET } from 'src/constants/env';
import { UserJwtStrategy } from './strategy/member-jwt.strategy';
import { UserGuard } from './guard/user.guard';

@Module({
  imports: [
    CryptoModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>(JWT_USER_SECRET),
          signOptions: {
            expiresIn: configService.get<string>(JWT_EXPIRES_IN),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserJwtStrategy, UserGuard],
  exports: [UserJwtStrategy, UserGuard],
})
export class UserModule {}
