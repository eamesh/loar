import { Injectable } from "@nestjs/common";
import { Cluster, Redis } from "ioredis";
import { Socket } from "socket.io";
import { WS_SUBSCRIBE_TOPIC } from "src/constants/websocket";
import { RedisService } from "src/providers/redis/redis.service";

/**
 * topic: US.TSLA.1m | US.TSLA.5m | US.TSLA.1h
 */

@Injectable()
export class TopicService {
  private redisClient: Redis | Cluster
  constructor(private readonly redisService: RedisService) {
    this.redisClient = this.redisService.client;
  }

  // 订阅topic
  async subscrbe(topic: string, client: Socket) {
    await this.redisClient.sadd(`${WS_SUBSCRIBE_TOPIC}_${client.id}`, topic);
  }

  // 取消订阅
  async unsubscrbe(topic: string, client: Socket) {
    await this.redisClient.srem(`${WS_SUBSCRIBE_TOPIC}_${client.id}`, topic);
  }

}
