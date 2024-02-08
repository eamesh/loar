import type {
  CacheModuleOptions,
  CacheOptionsFactory,
} from '@nestjs/cache-manager';
import { Injectable } from '@nestjs/common';
import type { RedisClusterConfig } from 'cache-manager-ioredis-yet';
import { redisStore } from 'cache-manager-ioredis-yet';
import type { Config } from 'cache-manager';
import type { RedisOptions } from 'ioredis';
import { ConfigService } from '@nestjs/config';
import {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_USERNAME,
  REDIS_PASSWORD,
  CACHE_PREFIX,
  CACHE_TTL,
} from 'src/constants/env'

export interface demo {
  name: string;
}

@Injectable()
export class CacheService implements CacheOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createCacheOptions():
    | CacheModuleOptions<
        (RedisOptions | { clusterConfig: RedisClusterConfig }) & Config
      >
    | Promise<
        CacheModuleOptions<
          (
            | RedisOptions
            | {
                clusterConfig: RedisClusterConfig;
              }
          ) &
            Config
        >
      > {

    return {
      store: redisStore,
      host: this.configService.get<string>(REDIS_HOST),
      port: this.configService.get<number>(REDIS_PORT),
      password: this.configService.get<string>(REDIS_PASSWORD) || undefined,
      username: this.configService.get<string>(REDIS_USERNAME) || undefined,
      keyPrefix: this.configService.get<string>(CACHE_PREFIX),
      ttl: this.configService.get<number>(CACHE_TTL) || undefined,
    };
  }
}
