import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './providers/prisma/prisma.module';
import { BannerModule } from './modules/banner/banner.module';
import { UserModule } from './modules/user/user.module';
import { MemberModule } from './modules/member/member.module';
import { StockModule } from './modules/stock/stock.module';
import { SettingModule } from './modules/setting/setting.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule as AppScheduleModule } from './modules/schedule/schedule.module';
import { ConfigModule } from '@nestjs/config';
import { WebsocketModule } from './modules/websocket/websocket.module';
import { CacheModule } from './providers/cache/cache.module';
import { RedisModule } from './providers/redis/redis.module';
import { IndexModule } from './modules/index/index.module';
import { IpoModule } from './modules/ipo/ipo.module';
import { TradeModule } from './modules/trade/trade.module';
import { ArticleModule } from './modules/article/article.module';
import { CountryModule } from './providers/country/country.module';
import { FinanceModule } from './providers/finance/finance.module';
// import { AuthModule } from './modules/auth/auth.module';
import { CryptoModule } from './providers/crypto/crypto.module';
import { KlineModule } from './modules/kline/kline.module';
import { ShuhaiModule } from './providers/shuhai/shuhai.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AcceptLanguageResolver, I18nModule, QueryResolver } from 'nestjs-i18n';
import { MulterModule } from '@nestjs/platform-express';
import { ToolModule } from './modules/tool/tool.module';
import { RechargeAccountModule } from './modules/recharge-account/recharge-account.module';
import { RechargeModule } from './modules/recharge/recharge.module';
import { WithdrawModule } from './modules/withdraw/withdraw.module';
import { CardModule } from './modules/card/card.module';
import { InfoModule } from './modules/info/info.module';

const envFilePath = [`env.${process.env.NODE_ENV}`, '.env'];

const imports = [
  MulterModule.registerAsync({
    useFactory: async () => ({
      limits: {
        fileSize: 10000000000000,
      },
    }),
  }),
  I18nModule.forRoot({
    fallbackLanguage: 'en',
    loaderOptions: {
      path: join(__dirname, '/i18n/'),
      watch: true,
    },
    resolvers: [
      { use: QueryResolver, options: ['lang'] },
      AcceptLanguageResolver,
    ],
  }),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'static'),
    serveRoot: '/static',
  }),
  ConfigModule.forRoot({
    envFilePath,
    isGlobal: true,
  }),
  ScheduleModule.forRoot(),
  EventEmitterModule.forRoot({
    // set this to `true` to use wildcards
    wildcard: false,
    // the delimiter used to segment namespaces
    delimiter: '.',
    // set this to `true` if you want to emit the newListener event
    newListener: false,
    // set this to `true` if you want to emit the removeListener event
    removeListener: false,
    // the maximum amount of listeners that can be assigned to an event
    maxListeners: 10,
    // show event name in memory leak message when more than maximum amount of listeners is assigned
    verboseMemoryLeak: false,
    // disable throwing uncaughtException if an error event is emitted and it has no listeners
    ignoreErrors: false,
  }),
  InfoModule,
  ToolModule,
  CardModule,
  CryptoModule,
  CountryModule,
  FinanceModule,
  RechargeAccountModule,
  RechargeModule,
  WithdrawModule,
  // AuthModule,
  ShuhaiModule,
  KlineModule,
  IndexModule,
  IpoModule,
  TradeModule,
  ArticleModule,
  CacheModule,
  RedisModule,
  AppScheduleModule,
  WebsocketModule,
  SettingModule,
  PrismaModule,
  BannerModule,
  UserModule,
  MemberModule,
  StockModule,
];

@Module({
  imports,
})
export class AppModule {}
