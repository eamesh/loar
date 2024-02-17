import { OnModuleInit } from '@nestjs/common';
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
export class WebsocketGateway
  implements OnGatewayDisconnect, OnModuleInit, OnGatewayConnection
{
  @WebSocketServer()
  server: Server;

  private redisClient: Redis | Cluster;

  constructor(
    private readonly redisService: RedisService,
    private readonly topicService: TopicService,
  ) {
    this.redisClient = this.redisService.client;
  }

  async handleConnection(@ConnectedSocket() client: Socket) {
    await this.redisClient.set(`${WS_ONLINE}_${client.id}`, 'guest');
    client.emit('events', '12aa3');
  }

  async onModuleInit() {
    // 清除在线列表
    await this.redisClient.unlink(`${WS_ONLINE}_*`);
    await this.redisClient.unlink(`${WS_SUBSCRIBE_TOPIC}_*`);

    // 启动监听服务
  }

  //

  async handleDisconnect(@ConnectedSocket() client: Socket) {
    await this.redisClient.unlink(`${WS_ONLINE}_${client.id}`);
    await this.redisClient.unlink(`${WS_SUBSCRIBE_TOPIC}_${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
  ): Observable<WsResponse<number>> {
    client.send();
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }

  @SubscribeMessage('events')
  findAll() // @MessageBody() data: any
  : Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }

  @SubscribeMessage('identity')
  identity(
    @ConnectedSocket() client: Socket,
    // @MessageBody() data: number,
  ): string {
    client.emit('events', 'test');
    return 'data';
  }

  @SubscribeMessage('sub')
  async subscribeTopic(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    await this.topicService.subscrbe(data, client);
  }

  @SubscribeMessage('unsub')
  async unsubscribeTopic(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: any,
  ) {
    await this.topicService.unsubscrbe(data, client);
  }

  @SubscribeMessage('test')
  async test(@MessageBody() data: any) {
    this.topicService.test(data, this.server);
  }
}
