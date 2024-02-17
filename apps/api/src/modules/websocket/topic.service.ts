import { Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { Cluster, Redis } from 'ioredis';
import { Server, Socket } from 'socket.io';
import { WS_SUBSCRIBE_TOPIC } from 'src/constants/websocket';
import { RedisService } from 'src/providers/redis/redis.service';

/**
 * topic: US.TSLA.1m | US.TSLA.5m | US.TSLA.1h
 */

@Injectable()
export class TopicService {
  @WebSocketServer()
  server: Server;

  private redisClient: Redis | Cluster;
  constructor(private readonly redisService: RedisService) {
    this.redisClient = this.redisService.client;
  }

  private formatTopic(topic: string) {
    const splitTopic = topic.split('.');

    const [type, symbol, time] = splitTopic;
    return {
      type,
      symbol,
      time,
    };
  }

  // 订阅topic
  async subscrbe(topic: string, client: Socket) {
    // 加入对应topic room
    // const {type, symbol, time} = this.formatTopic(topic);

    // 加入房间
    await client.join(topic);
    // 记录
    await this.redisClient.sadd(`${WS_SUBSCRIBE_TOPIC}_${client.id}`, topic);
  }

  // 取消订阅
  async unsubscrbe(topic: string, client: Socket) {
    // 离开房间
    client.leave(topic);
    // 移除记录
    await this.redisClient.srem(`${WS_SUBSCRIBE_TOPIC}_${client.id}`, topic);
  }

  async test(topic: string, server: Server) {
    server.in(topic).emit('events', 'intest');
    // server.to(topic).emit('events', 'test111');
  }
}
