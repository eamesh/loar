export interface ScheduleTask {
  every2Hours(): void;
  everyMinute(): void;
  every5Minutes(): void;
  every10Seconds(): void;
  every20Seconds(): void;
}
