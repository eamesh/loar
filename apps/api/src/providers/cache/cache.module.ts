import { Global, Module } from '@nestjs/common';
import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';
import type { Config } from 'cache-manager';
import type { RedisOptions } from 'ioredis';
import type { RedisClusterConfig } from 'cache-manager-ioredis-yet';
import { CacheService } from './cache.service';

@Global()
@Module({
  imports: [
    NestCacheModule.registerAsync<
      (RedisOptions | { clusterConfig: RedisClusterConfig }) & Config
    >({
      isGlobal: true,
      useClass: CacheService,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModule {}
