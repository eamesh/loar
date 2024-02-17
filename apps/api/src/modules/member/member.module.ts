import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JWT_EXPIRES_IN, JWT_MEMBER_SECRET } from 'src/constants/env';
import { CryptoModule } from 'src/providers/crypto/crypto.module';
import { MemberJwtStrategy } from './strategy/member-jwt.strategy';
import { MemberGuard } from './guard/member.guard';
import { AccountService } from './account/account.service';

@Module({
  imports: [
    CryptoModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>(JWT_MEMBER_SECRET),
          signOptions: {
            expiresIn: configService.get<string>(JWT_EXPIRES_IN),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [MemberService, MemberJwtStrategy, MemberGuard, AccountService],
  controllers: [MemberController],
  exports: [MemberService, MemberJwtStrategy, MemberGuard, AccountService],
})
export class MemberModule {}
