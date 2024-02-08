import { Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';
import { TopicService } from './topic.service';

@Module({
  providers: [WebsocketGateway, TopicService],
})
export class WebsocketModule {}
