import { Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';
import { TopicService } from './topic.service';
import { StockModule } from '../stock/stock.module';
// import { SyncService } from './sync.service';
import { HandleEvent } from './event/handle.event';
import { PositionEvent } from './event/position.event';

@Module({
  imports: [StockModule],
  providers: [
    WebsocketGateway,
    TopicService,
    // SyncService,
    HandleEvent,
    PositionEvent,
  ],
})
export class WebsocketModule {}
