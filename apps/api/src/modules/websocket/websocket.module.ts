import { Module } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';
import { TopicService } from './topic.service';
import { StockModule } from '../stock/stock.module';
// import { SyncService } from './sync.service';
import { HandleEvent } from './event/handle.event';
import { PositionEvent } from './event/position.event';
import { GuguTask } from './gugu.task';
import { HkexEvent } from './markets/hkex.event';
import { UsEvent } from './markets/us.event';
// import { UsTask } from './us.task';

@Module({
  imports: [StockModule],
  providers: [
    WebsocketGateway,
    TopicService,
    // SyncService,
    HandleEvent,
    PositionEvent,
    GuguTask,
    HkexEvent,
    UsEvent,
    // UsTask,
  ],
})
export class WebsocketModule {}
