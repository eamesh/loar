import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, OnModuleInit } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Cache } from 'cache-manager';
import { Cluster, Redis } from 'ioredis';
import { Observable, from, map } from 'rxjs';
import { Server, Socket } from 'socket.io';
import { WS_ONLINE, WS_SUBSCRIBE_TOPIC } from 'src/constants/websocket';
import { RedisService } from 'src/providers/redis/redis.service';
import { TopicService } from './topic.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WebsocketGateway implements OnGatewayDisconnect, OnModuleInit, OnGatewayConnection {
  private redisClient: Redis | Cluster
  constructor(private readonly redisService: RedisService, private readonly topicService: TopicService) {
    this.redisClient = this.redisService.client;
  }

  async handleConnection(@ConnectedSocket() client: Socket, ...args: any[]) {
    await this.redisClient.set(`${WS_ONLINE}_${client.id}`, 'guest');
  }
  async onModuleInit() {
    // 清除在线列表
    await this.redisClient.unlink(`${WS_ONLINE}_*`)
    await this.redisClient.unlink(`${WS_SUBSCRIBE_TOPIC}_*`)
  }
  async handleDisconnect(@ConnectedSocket() client: Socket) {
    console.log(`client ${client.id} close`)
    await this.redisClient.unlink(`${WS_ONLINE}_${client.id}`)
    await this.redisClient.unlink(`${WS_SUBSCRIBE_TOPIC}_${client.id}`)
  }
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: any,
  ): Observable<WsResponse<number>> {
    console.log(client.id, payload);
    client.send()
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  identity(@ConnectedSocket() client: Socket, @MessageBody() data: number): string {
    client.emit("events", "test")
    return 'data'
  }

  @SubscribeMessage('sub')
  async subscribeTopic(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    await this.topicService.subscrbe(data, client)
  }

  @SubscribeMessage('unsub')
  async unsubscribeTopic(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    await this.topicService.unsubscrbe(data, client)
  }
}
