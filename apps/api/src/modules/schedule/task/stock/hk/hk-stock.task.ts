import { Injectable } from '@nestjs/common';
import { ScheduleTask } from '../../../schedule-task.interfalce';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  HK_EVERY_10_SECONDS,
  HK_EVERY_20_SECONDS,
  HK_EVERY_2_HOURS,
  HK_EVERY_5_MINUTES,
  HK_EVERY_MINUTE,
  HK_TIMEZONE,
} from '../constants';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class HkStockTask implements ScheduleTask {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Cron(CronExpression.EVERY_10_SECONDS, {
    name: HK_EVERY_10_SECONDS,
    timeZone: HK_TIMEZONE,
  })
  every10Seconds(): void {
    // throw new Error('Method not implemented.');
  }

  @Cron('*/20 * * * * *', {
    name: HK_EVERY_20_SECONDS,
    timeZone: HK_TIMEZONE,
  })
  every20Seconds(): void {
    // throw new Error('Method not implemented.');
  }

  @Cron(CronExpression.EVERY_2_HOURS, {
    name: HK_EVERY_2_HOURS,
    timeZone: HK_TIMEZONE,
  })
  every2Hours(): void {
    // this.eventEmitter.emit(HK_EVERY_2_HOURS);
  }

  @Cron(CronExpression.EVERY_MINUTE, {
    name: HK_EVERY_MINUTE,
    timeZone: HK_TIMEZONE,
  })
  everyMinute(): void {
    // this.eventEmitter.emit(HK_EVERY_MINUTE);
  }

  @Cron(CronExpression.EVERY_5_MINUTES, {
    name: HK_EVERY_5_MINUTES,
    timeZone: HK_TIMEZONE,
  })
  every5Minutes(): void {
    // this.eventEmitter.emit(HK_EVERY_5_MINUTES);
  }
}
