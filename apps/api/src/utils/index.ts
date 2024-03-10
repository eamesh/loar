// import dayjs from 'dayjs';
// import utc from 'dayjs/plugin/utc';
// import timezone from 'dayjs/plugin/timezone';
// import isBetween from 'dayjs/plugin/isBetween';

// dayjs.extend(utc);
// dayjs.extend(timezone);
// dayjs.extend(isBetween);

// /**
//  * 0 未开盘
//  * 1 开盘
//  * 2 盘前交易
//  *
//  */
// export function getTradingPhase(marketType: string, currentTime: string) {
//   let marketTime;
//   if (marketType === 'US') {
//     marketTime = dayjs(currentTime).tz('America/New_York');
//   } else if (marketType === 'HK') {
//     marketTime = dayjs(currentTime).tz('Asia/Hong_Kong');
//   } else {
//     return 0;
//   }

//   // Check if it's weekend
//   const dayOfWeek = marketTime.day();
//   if (dayOfWeek === 0 || dayOfWeek === 6) {
//     return 0;
//   }

//   const preMarketStartTime = marketTime.clone().hour(4).minute(0).second(0);
//   const preMarketEndTime = marketTime.clone().hour(9).minute(30).second(0);
//   const morningStartTime = marketTime.clone().hour(9).minute(30).second(0);
//   const morningEndTime = marketTime.clone().hour(12).minute(0).second(0);
//   const afternoonStartTime = marketTime.clone().hour(13).minute(0).second(0);
//   const afternoonEndTime = marketTime.clone().hour(16).minute(0).second(0);

//   if (marketTime.isBetween(preMarketStartTime, preMarketEndTime, null, '[]')) {
//     return 2;
//   } else if (
//     marketTime.isBetween(morningStartTime, morningEndTime, null, '[]') ||
//     marketTime.isBetween(afternoonStartTime, afternoonEndTime, null, '[]')
//   ) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
