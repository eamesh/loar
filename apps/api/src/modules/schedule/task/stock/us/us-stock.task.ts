import { Injectable } from '@nestjs/common';
import { ScheduleTask } from '../../../schedule-task.interfalce';
import { Cron, CronExpression } from '@nestjs/schedule';
import {
  US_EVERY_10_SECONDS,
  US_EVERY_20_SECONDS,
  US_EVERY_2_HOURS,
  US_EVERY_5_MINUTES,
  US_EVERY_MINUTE,
  US_TIMEZONE,
} from '../constants';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UsStockTask implements ScheduleTask {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Cron(CronExpression.EVERY_10_SECONDS, {
    name: US_EVERY_10_SECONDS,
    timeZone: US_TIMEZONE,
  })
  every10Seconds(): void {
    // throw new Error('Method not implemented.');
  }

  @Cron('*/20 * * * * *', {
    name: US_EVERY_20_SECONDS,
    timeZone: US_TIMEZONE,
  })
  every20Seconds(): void {
    // throw new Error('Method not implemented.');
  }

  @Cron(CronExpression.EVERY_2_HOURS, {
    name: US_EVERY_2_HOURS,
    timeZone: US_TIMEZONE,
  })
  every2Hours(): void {
    // this.eventEmitter.emit(US_EVERY_2_HOURS);
  }

  @Cron(CronExpression.EVERY_MINUTE, {
    name: US_EVERY_MINUTE,
    timeZone: US_TIMEZONE,
  })
  everyMinute(): void {
    // this.eventEmitter.emit(US_EVERY_MINUTE);
  }

  @Cron(CronExpression.EVERY_5_MINUTES, {
    name: US_EVERY_5_MINUTES,
    timeZone: US_TIMEZONE,
  })
  every5Minutes(): void {
    // this.eventEmitter.emit(US_EVERY_5_MINUTES);
  }
}
