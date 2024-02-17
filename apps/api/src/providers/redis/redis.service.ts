import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { RedisStore } from 'cache-manager-ioredis-yet';

@Injectable()
export class RedisService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cache: Cache<RedisStore>,
  ) {}

  get client() {
    return this.cache.store.client;
  }
}
