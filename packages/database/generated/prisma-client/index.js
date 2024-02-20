
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.1
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.1",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  avatar: 'avatar',
  password: 'password',
  gender: 'gender',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MemberScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  avatar: 'avatar',
  password: 'password',
  gender: 'gender',
  address: 'address',
  accountBalance: 'accountBalance',
  status: 'status',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  balance: 'balance',
  unBalance: 'unBalance',
  lockBalance: 'lockBalance'
};

exports.Prisma.MemberRechargeScalarFieldEnum = {
  id: 'id',
  money: 'money',
  rechargeMoney: 'rechargeMoney',
  screen: 'screen',
  status: 'status',
  memberId: 'memberId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MemberWithdrawScalarFieldEnum = {
  id: 'id',
  money: 'money',
  remark: 'remark',
  status: 'status',
  address: 'address',
  memberId: 'memberId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StockSymbolScalarFieldEnum = {
  id: 'id',
  code: 'code',
  market: 'market',
  online: 'online',
  symbol: 'symbol',
  showName: 'showName',
  name: 'name',
  symbolShowName: 'symbolShowName',
  trade: 'trade',
  type: 'type',
  newPrice: 'newPrice',
  open: 'open',
  close: 'close',
  high: 'high',
  low: 'low',
  amount: 'amount',
  volume: 'volume',
  change: 'change',
  changePercent: 'changePercent',
  date: 'date',
  sync: 'sync',
  syncMarket: 'syncMarket',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StockScalarFieldEnum = {
  id: 'id',
  code: 'code',
  symbol: 'symbol',
  name: 'name',
  cname: 'cname',
  type: 'type',
  logo: 'logo',
  sok: 'sok',
  optional: 'optional',
  newPrice: 'newPrice',
  open: 'open',
  close: 'close',
  high: 'high',
  low: 'low',
  amount: 'amount',
  volume: 'volume',
  status: 'status',
  change: 'change',
  changePercent: 'changePercent',
  date: 'date',
  extra: 'extra',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StockRecordScalarFieldEnum = {
  id: 'id',
  newPrice: 'newPrice',
  open: 'open',
  close: 'close',
  high: 'high',
  low: 'low',
  amount: 'amount',
  volume: 'volume',
  date: 'date',
  extra: 'extra',
  createdAt: 'createdAt',
  stockId: 'stockId'
};

exports.Prisma.StockMarketScalarFieldEnum = {
  id: 'id',
  code: 'code',
  currency: 'currency',
  maxWithdrawal: 'maxWithdrawal',
  minWithdrawal: 'minWithdrawal',
  feeRate: 'feeRate',
  minFee: 'minFee',
  lever: 'lever',
  mmr: 'mmr',
  allocationRate: 'allocationRate',
  frequency: 'frequency',
  bindingHours: 'bindingHours',
  headSymbols: 'headSymbols',
  sort: 'sort',
  online: 'online',
  conline: 'conline',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StockFavoriteScalarFieldEnum = {
  id: 'id',
  newPrice: 'newPrice',
  open: 'open',
  close: 'close',
  high: 'high',
  low: 'low',
  amount: 'amount',
  volume: 'volume',
  date: 'date',
  extra: 'extra',
  memberId: 'memberId',
  stockSymbolId: 'stockSymbolId',
  createdAt: 'createdAt'
};

exports.Prisma.StockSubscribeScalarFieldEnum = {
  id: 'id',
  market: 'market',
  name: 'name',
  code: 'code',
  startAt: 'startAt',
  endAt: 'endAt',
  upAt: 'upAt',
  circulation: 'circulation',
  remainCirculation: 'remainCirculation',
  ipoPrice: 'ipoPrice',
  issuePrice: 'issuePrice',
  resultAt: 'resultAt',
  subAmount: 'subAmount',
  status: 'status',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MemberSubscribeScalarFieldEnum = {
  id: 'id',
  market: 'market',
  code: 'code',
  name: 'name',
  amount: 'amount',
  money: 'money',
  no: 'no',
  winningAmount: 'winningAmount',
  winningPrice: 'winningPrice',
  totalWinningPrice: 'totalWinningPrice',
  actualAmount: 'actualAmount',
  status: 'status',
  type: 'type',
  position: 'position',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  stockSubscribeId: 'stockSubscribeId',
  memberId: 'memberId'
};

exports.Prisma.StockPositionScalarFieldEnum = {
  id: 'id',
  amount: 'amount',
  blast: 'blast',
  price: 'price',
  mode: 'mode',
  status: 'status',
  bond: 'bond',
  identifier: 'identifier',
  lever: 'lever',
  stopLoss: 'stopLoss',
  takeProfit: 'takeProfit',
  market: 'market',
  pl: 'pl',
  rate: 'rate',
  currentPrice: 'currentPrice',
  memberId: 'memberId',
  stockSymbolId: 'stockSymbolId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MemberDetailScalarFieldEnum = {
  id: 'id',
  after: 'after',
  amount: 'amount',
  before: 'before',
  market: 'market',
  type: 'type',
  remark: 'remark',
  memberId: 'memberId'
};

exports.Prisma.CountryScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  en: 'en',
  tel: 'tel',
  py: 'py',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SettingScalarFieldEnum = {
  id: 'id',
  key: 'key',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StockResourceScalarFieldEnum = {
  id: 'id',
  amountScope: 'amountScope',
  frequencyScope: 'frequencyScope',
  market: 'market',
  spreadScope: 'spreadScope',
  endAt: 'endAt',
  startAt: 'startAt',
  symbol: 'symbol',
  type: 'type',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StockResourceRecordScalarFieldEnum = {
  id: 'id',
  open: 'open',
  high: 'high',
  close: 'close',
  low: 'low',
  time: 'time',
  stockResourceId: 'stockResourceId'
};

exports.Prisma.ArticleScalarFieldEnum = {
  id: 'id',
  thumb: 'thumb',
  title: 'title',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.GENDER = exports.$Enums.GENDER = {
  UNKNOWN: 'UNKNOWN',
  MAN: 'MAN',
  WOMAN: 'WOMAN'
};

exports.STOCK_STATUS = exports.$Enums.STOCK_STATUS = {
  NORMAL: 'NORMAL',
  DISABLE: 'DISABLE',
  DOWN: 'DOWN'
};

exports.Prisma.ModelName = {
  User: 'User',
  Member: 'Member',
  MemberRecharge: 'MemberRecharge',
  MemberWithdraw: 'MemberWithdraw',
  StockSymbol: 'StockSymbol',
  Stock: 'Stock',
  StockRecord: 'StockRecord',
  StockMarket: 'StockMarket',
  StockFavorite: 'StockFavorite',
  StockSubscribe: 'StockSubscribe',
  MemberSubscribe: 'MemberSubscribe',
  StockPosition: 'StockPosition',
  MemberDetail: 'MemberDetail',
  Country: 'Country',
  Setting: 'Setting',
  StockResource: 'StockResource',
  StockResourceRecord: 'StockResourceRecord',
  Article: 'Article'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/emesh/emesh/loar/packages/database/generated/prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.9.1",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvcHJpc21hLWNsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgU3RyaW5nICAgIEB1bmlxdWUKICBuYW1lICAgICAgU3RyaW5nPwogIGF2YXRhciAgICBTdHJpbmc/CiAgcGFzc3dvcmQgIFN0cmluZwogIGdlbmRlciAgICBHRU5ERVIgICAgQGRlZmF1bHQoVU5LTk9XTikKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8KCiAgQEBtYXAoInVzZXJzIikKfQoKbW9kZWwgTWVtYmVyIHsKICBpZCAgICAgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZQogIG5hbWUgICAgICAgICAgIFN0cmluZz8KICBhdmF0YXIgICAgICAgICBTdHJpbmc/CiAgcGFzc3dvcmQgICAgICAgU3RyaW5nCiAgZ2VuZGVyICAgICAgICAgR0VOREVSICAgIEBkZWZhdWx0KFVOS05PV04pCiAgYWRkcmVzcyAgICAgICAgU3RyaW5nPwogIGFjY291bnRCYWxhbmNlIEpzb24/CiAgc3RhdHVzICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApCiAgdHlwZSAgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgICAgICBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCiAgLy8g5L2Z6aKdCiAgYmFsYW5jZSAgICAgICAgRGVjaW1hbCAgIEBkZWZhdWx0KDApIEBkYi5EZWNpbWFsKDIwLCA1KQogIC8vIOWGu+e7k+S9meminQogIHVuQmFsYW5jZSAgICAgIERlY2ltYWwgICBAZGVmYXVsdCgwKSBAbWFwKCJ1bl9iYWxhbmNlIikgQGRiLkRlY2ltYWwoMjAsIDUpCiAgLy8g6ZSB5a6a5L2Z6aKdCiAgbG9ja0JhbGFuY2UgICAgRGVjaW1hbCAgIEBkZWZhdWx0KDApIEBtYXAoImxvY2tfYmFsYW5jZSIpIEBkYi5EZWNpbWFsKDIwLCA1KQoKICBzdG9ja1Bvc3Rpb24gICAgU3RvY2tQb3NpdGlvbltdCiAgbWVtYmVyRGV0YWlsICAgIE1lbWJlckRldGFpbFtdCiAgbWVtYmVyU3Vic2NyaWJlIE1lbWJlclN1YnNjcmliZVtdCiAgbWVtYmVyUmVjaGFyZ2VzIE1lbWJlclJlY2hhcmdlW10KICBtZW1iZXJXaXRoZHJhd3MgTWVtYmVyV2l0aGRyYXdbXQoKICBAQG1hcCgibWVtYmVycyIpCn0KCm1vZGVsIE1lbWJlclJlY2hhcmdlIHsKICBpZCAgICAgICAgICAgIEJpZ0ludCAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBtb25leSAgICAgICAgIERlY2ltYWwgQGRiLkRlY2ltYWwoMjAsIDUpCiAgcmVjaGFyZ2VNb25leSBEZWNpbWFsIEBkZWZhdWx0KDApIEBtYXAoInJlY2hhcmdlX21vbmV5IikgQGRiLkRlY2ltYWwoMjAsIDUpCiAgc2NyZWVuICAgICAgICBKc29uCgogIHN0YXR1cyBJbnQgQGRlZmF1bHQoMCkKCiAgbWVtYmVySWQgIEJpZ0ludCAgICBAbWFwKCJtZW1iZXJfaWQiKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIG1lbWJlciBNZW1iZXIgQHJlbGF0aW9uKGZpZWxkczogW21lbWJlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBtYXAoIm1lbWJlcl9yZWNoYXJnZXMiKQp9Cgptb2RlbCBNZW1iZXJXaXRoZHJhdyB7CiAgaWQgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG1vbmV5ICAgICBEZWNpbWFsICAgQGRiLkRlY2ltYWwoMjAsIDUpCiAgcmVtYXJrICAgIFN0cmluZz8KICBzdGF0dXMgICAgSW50ICAgICAgIEBkZWZhdWx0KDApCiAgYWRkcmVzcyAgIFN0cmluZz8KICBtZW1iZXJJZCAgQmlnSW50ICAgIEBtYXAoIm1lbWJlcl9pZCIpCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0IERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgbWVtYmVyIE1lbWJlciBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQG1hcCgibWVtYmVyX3dpdGhkcmF3cyIpCn0KCm1vZGVsIFN0b2NrU3ltYm9sIHsKICBpZCAgICAgICAgICAgICBCaWdJbnQgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g57O757ufQ09ERQogIGNvZGUgICAgICAgICAgIFN0cmluZwogIC8vIOivgeWIuOW4guWcugogIG1hcmtldCAgICAgICAgIFN0cmluZwogIC8vIOS4iue6v+eKtuaAgQogIG9ubGluZSAgICAgICAgIEludCAgICAgQGRlZmF1bHQoMSkKICAvLyDor4HliLjku6PnoIEKICBzeW1ib2wgICAgICAgICBTdHJpbmcKICAvLyDor4HliLjlkI3np7AKICBzaG93TmFtZSAgICAgICBTdHJpbmcKICBuYW1lICAgICAgICAgICBTdHJpbmc/CiAgc3ltYm9sU2hvd05hbWUgU3RyaW5nPyBAbWFwKCJzeW1ib2xfc2hvd19uYW1lIikKICB0cmFkZSAgICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDApCiAgLy8g6K+B5Yi457G75Z6LIDAg5oyH5pWwIDEg6K+B6IKhIDIgRVRGCiAgdHlwZSAgICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwKQogIC8vIOacgOaWsOS7twogIG5ld1ByaWNlICAgICAgIFN0cmluZz8gQG1hcCgibmV3X3ByaWNlIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOW8gOebmOS7twogIG9wZW4gICAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaUtuebmOS7twogIGNsb3NlICAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOmrmAogIGhpZ2ggICAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOS9jgogIGxvdyAgICAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOmHjwogIGFtb3VudCAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOminQogIHZvbHVtZSAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQoKICBjaGFuZ2UgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAiKQogIGNoYW5nZVBlcmNlbnQgU3RyaW5nPyBAZGVmYXVsdCgiMCIpCgogIGRhdGUgICAgICAgU3RyaW5nPwogIHN5bmMgICAgICAgSnNvbj8KICBzeW5jTWFya2V0IFN0cmluZyAgICBAbWFwKCJzeW5jX21hcmtldCIpCiAgY3JlYXRlZEF0ICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBzdG9ja1Bvc3Rpb24gU3RvY2tQb3NpdGlvbltdCgogIEBAdW5pcXVlKFtzeW1ib2wsIG1hcmtldF0pCiAgQEBtYXAoInN0b2NrX3N5bWJvbHMiKQp9Cgptb2RlbCBTdG9jayB7CiAgaWQgICAgICAgICAgICBCaWdJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjb2RlICAgICAgICAgIFN0cmluZyAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgc3ltYm9sICAgICAgICBTdHJpbmcgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIG5hbWUgICAgICAgICAgU3RyaW5nICAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICBjbmFtZSAgICAgICAgIFN0cmluZz8gICAgICBAZGIuVmFyQ2hhcigxMDApCiAgdHlwZSAgICAgICAgICBTdHJpbmcgICAgICAgQGRiLlZhckNoYXIoMjApCiAgbG9nbyAgICAgICAgICBTdHJpbmc/ICAgICAgQGRiLlZhckNoYXIoMjAwKQogIHNvayAgICAgICAgICAgU3RyaW5nPyAgICAgIEBkYi5WYXJDaGFyKDMwKQogIG9wdGlvbmFsICAgICAgQm9vbGVhbiAgICAgIEBkZWZhdWx0KGZhbHNlKQogIC8vIOacgOaWsOS7twogIG5ld1ByaWNlICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQG1hcCgibmV3X3ByaWNlIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOW8gOebmOS7twogIG9wZW4gICAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaUtuebmOS7twogIGNsb3NlICAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOmrmAogIGhpZ2ggICAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOS9jgogIGxvdyAgICAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOmHjwogIGFtb3VudCAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOminQogIHZvbHVtZSAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIHN0YXR1cyAgICAgICAgU1RPQ0tfU1RBVFVTIEBkZWZhdWx0KE5PUk1BTCkKICBjaGFuZ2UgICAgICAgIFN0cmluZz8gICAgICBAZGVmYXVsdCgiMCIpCiAgY2hhbmdlUGVyY2VudCBTdHJpbmc/ICAgICAgQGRlZmF1bHQoIjAlIikKICBkYXRlICAgICAgICAgIFN0cmluZz8KICBleHRyYSAgICAgICAgIEpzb24/CiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgRGF0ZVRpbWU/ICAgIEBtYXAoInVwZGF0ZWRfYXQiKQoKICBzdG9ja1JlY29yZCBTdG9ja1JlY29yZFtdCgogIEBAdW5pcXVlKFtjb2RlLCBzeW1ib2wsIHR5cGVdKQogIEBAbWFwKCJzdG9ja3MiKQp9Cgptb2RlbCBTdG9ja1JlY29yZCB7CiAgaWQgICAgICAgQmlnSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g5pyA5paw5Lu3CiAgbmV3UHJpY2UgU3RyaW5nIEBtYXAoIm5ld19wcmljZSIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDlvIDnm5jku7cKICBvcGVuICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaUtuebmOS7twogIGNsb3NlICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5pyA6auYCiAgaGlnaCAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmnIDkvY4KICBsb3cgICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOmHjwogIGFtb3VudCAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5oiQ5Lqk6aKdCiAgdm9sdW1lICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKCiAgZGF0ZSAgICAgIFN0cmluZwogIGV4dHJhICAgICBKc29uCiAgLy8g5pe26Ze0CiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKCiAgc3RvY2tJZCBCaWdJbnQgQG1hcCgic3RvY2tfaWQiKQogIHN0b2NrICAgU3RvY2sgIEByZWxhdGlvbihmaWVsZHM6IFtzdG9ja0lkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBtYXAoInN0b2NrX3JlY29yZHMiKQp9Cgptb2RlbCBTdG9ja01hcmtldCB7CiAgaWQgICAgICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g5biC5Zy65qCH6K+GCiAgY29kZSAgICAgICAgICAgU3RyaW5nPwogIC8vIOW4guWcuuS6pOaYk+i0p+W4gQogIGN1cnJlbmN5ICAgICAgIFN0cmluZz8KICAvLyDmnIDlpKflh7rph5EKICBtYXhXaXRoZHJhd2FsICBTdHJpbmc/ICAgQG1hcCgibWF4X3dpdGhkcmF3YWwiKQogIC8vIOacgOWwj+WHuumHkQogIG1pbldpdGhkcmF3YWwgIFN0cmluZz8gICBAbWFwKCJtaW5fd2l0aGRyYXdhbCIpCiAgLy8g5omL57ut6LS5546HCiAgZmVlUmF0ZSAgICAgICAgU3RyaW5nPyAgIEBtYXAoImZlZV9yYXRlIikKICAvLyDmnIDkvY7miYvnu63otLkKICBtaW5GZWUgICAgICAgICBTdHJpbmc/ICAgQG1hcCgibWluX2ZlZSIpCiAgLy8g5p2g5p2G5YCN5pWwCiAgbGV2ZXIgICAgICAgICAgU3RyaW5nPwogIC8vIOe7tOaMgeS/neivgemHkeeOhwogIG1tciAgICAgICAgICAgIFN0cmluZz8KICAvLyDphY3otYTotLnnjocKICBhbGxvY2F0aW9uUmF0ZSBTdHJpbmc/ICAgQG1hcCgiYWxsb2NhdGlvbl9yYXRlIikKICAvLyDkuIvljZXpopHnjocKICBmcmVxdWVuY3kgICAgICBJbnQ/CiAgLy8g6ZmQ5Yi25pe26Ze0L+enkgogIGJpbmRpbmdIb3VycyAgIEludD8gICAgICBAbWFwKCJiaW5kaW5nX2hvdXJzIikKICAvLyDluILlnLrlpLTpg6jor4HliLgKICBoZWFkU3ltYm9scyAgICBTdHJpbmc/ICAgQG1hcCgiaGVhZF9zeW1ib2xzIikKICAvLyDmjpLluo8KICBzb3J0ICAgICAgICAgICBJbnQ/ICAgICAgQGRlZmF1bHQoMCkKICAvLyDluILlnLrmmK/lkKbkuIrnur8KICBvbmxpbmUgICAgICAgICBJbnQ/ICAgICAgQGRlZmF1bHQoMSkKICAvLyDotKfluIHmmK/lkKbkuIrnur8KICBjb25saW5lICAgICAgICBJbnQ/ICAgICAgQGRlZmF1bHQoMSkKICBjcmVhdGVkQXQgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgIERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgQEBtYXAoInN0b2NrX21hcmtldHMiKQp9Cgptb2RlbCBTdG9ja0Zhdm9yaXRlIHsKICBpZCAgICAgICBCaWdJbnQgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICAvLyDmnIDmlrDku7cKICBuZXdQcmljZSBTdHJpbmcgQG1hcCgibmV3X3ByaWNlIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOW8gOebmOS7twogIG9wZW4gICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5pS255uY5Lu3CiAgY2xvc2UgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmnIDpq5gKICBoaWdoICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOS9jgogIGxvdyAgICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5oiQ5Lqk6YePCiAgYW1vdW50ICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmiJDkuqTpop0KICB2b2x1bWUgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQoKICBkYXRlICBTdHJpbmc/CiAgZXh0cmEgSnNvbj8KCiAgbWVtYmVySWQgICAgICBCaWdJbnQgQG1hcCgibWVtYmVyX2lkIikKICBzdG9ja1N5bWJvbElkIEJpZ0ludCBAbWFwKCJzdG9ja19zeW1ib2xfaWQiKQoKICAvLyDml7bpl7QKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQoKICBAQG1hcCgic3RvY2tfZmF2b3JpdGVzIikKfQoKbW9kZWwgU3RvY2tTdWJzY3JpYmUgewogIGlkICAgICAgICAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIC8vIOW4guWcugogIG1hcmtldCAgICAgICAgICAgIFN0cmluZwogIC8vIOiCoeelqOWQjeensAogIG5hbWUgICAgICAgICAgICAgIFN0cmluZwogIC8vIOiCoeelqOS7o+eggQogIGNvZGUgICAgICAgICAgICAgIFN0cmluZwogIC8vIOW8gOWni+iupOi0reaXtumXtAogIHN0YXJ0QXQgICAgICAgICAgIERhdGVUaW1lPyBAbWFwKCJzdGFydF9hdCIpCiAgLy8g57uT5p2f6K6k6LSt5pe26Ze0CiAgZW5kQXQgICAgICAgICAgICAgRGF0ZVRpbWU/IEBtYXAoImVuZF9hdCIpCiAgLy8g5LiK5biC5pe26Ze0CiAgdXBBdCAgICAgICAgICAgICAgRGF0ZVRpbWU/IEBtYXAoInVwX2F0IikKICAvLyDlj5HooYzph48KICBjaXJjdWxhdGlvbiAgICAgICBJbnQ/CiAgLy8g5Ymp5L2Z5Y+R6KGM6YePCiAgcmVtYWluQ2lyY3VsYXRpb24gSW50PyAgICAgIEBtYXAoInJlbWFpbl9jaXJjdWxhdGlvbiIpCiAgLy8g5Y+R6KGM5Lu3CiAgaXBvUHJpY2UgICAgICAgICAgRGVjaW1hbCAgIEBtYXAoImlwb19wcmljZSIpIEBkYi5EZWNpbWFsKDIwLCA1KQogIC8vIOaLm+iCoeS7twogIGlzc3VlUHJpY2UgICAgICAgIERlY2ltYWwgICBAbWFwKCJpc3N1ZV9wcmljZSIpIEBkYi5EZWNpbWFsKDIwLCA1KQogIC8vIOWFrOW4g+e7k+aenOaXtumXtAogIHJlc3VsdEF0ICAgICAgICAgIERhdGVUaW1lPyBAbWFwKCJyZXN1bHRfYXQiKQogIC8vIOiupOi0reaVsOmHj+S7t+agvAogIHN1YkFtb3VudCAgICAgICAgIEpzb24/ICAgICBAbWFwKCJzdWJfYW1vdW50IikKICAvLyDnirbmgIEKICBzdGF0dXMgICAgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMSkKICB0eXBlICAgICAgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkKICBjcmVhdGVkQXQgICAgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgICAgIERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgQEBtYXAoInN0b2NrX3N1YnNjcmliZXMiKQp9Cgptb2RlbCBNZW1iZXJTdWJzY3JpYmUgewogIGlkICAgICAgICAgICAgICAgIEJpZ0ludCAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbWFya2V0ICAgICAgICAgICAgU3RyaW5nCiAgY29kZSAgICAgICAgICAgICAgU3RyaW5nCiAgbmFtZSAgICAgICAgICAgICAgU3RyaW5nCiAgLy8g55Sz6LSt5pWw6YePCiAgYW1vdW50ICAgICAgICAgICAgSW50CiAgLy8g55Sz6LSt6YeR6aKdCiAgbW9uZXkgICAgICAgICAgICAgRGVjaW1hbCAgQGRiLkRlY2ltYWwoMjAsIDUpCiAgLy8g55Sz6LSt5Y2V5Y+3CiAgbm8gICAgICAgICAgICAgICAgU3RyaW5nCiAgLy8g5Lit562+5pWw6YePCiAgd2lubmluZ0Ftb3VudCAgICAgSW50PyAgICAgQG1hcCgid2lubmluZ19hbW91bnQiKQogIC8vIOS4reetvuS7t+agvAogIHdpbm5pbmdQcmljZSAgICAgIERlY2ltYWw/IEBtYXAoIndpbm5pbmdfcHJpY2UiKSBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDkuK3nrb7mgLvpop0KICB0b3RhbFdpbm5pbmdQcmljZSBEZWNpbWFsPyBAbWFwKCJ0b3RhbF93aW5uaW5nX3ByaWNlIikgQGRiLkRlY2ltYWwoMjAsIDUpCiAgLy8g5a6e6ZmF6YeR6aKdCiAgYWN0dWFsQW1vdW50ICAgICAgRGVjaW1hbD8gQG1hcCgiYWN0dWFsX2Ftb3VudCIpIEBkYi5EZWNpbWFsKDIwLCA1KQogIC8vIOiuouWNleeKtuaAgQogIHN0YXR1cyAgICAgICAgICAgIEludCAgICAgIEBkZWZhdWx0KDEpCiAgLy8g5Lit6Ze054q25oCBCiAgdHlwZSAgICAgICAgICAgICAgSW50ICAgICAgQGRlZmF1bHQoMCkKICAvLyDmmK/lkKblt7LmjIHku5MKICBwb3NpdGlvbiAgICAgICAgICBJbnQgICAgICBAZGVmYXVsdCgwKQoKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBzdG9ja1N1YnNjcmliZUlkIEJpZ0ludCBAbWFwKCJzdG9ja19zdWJzY3JpYmVfaWQiKQoKICBtZW1iZXJJZCBCaWdJbnQgQG1hcCgibWVtYmVyX2lkIikKICBtZW1iZXIgICBNZW1iZXIgQHJlbGF0aW9uKGZpZWxkczogW21lbWJlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBtYXAoIm1lbWJlcl9zdWJzY3JpYmVzIikKfQoKbW9kZWwgU3RvY2tQb3NpdGlvbiB7CiAgaWQgICAgICAgICBCaWdJbnQgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g5oyB5LuT5pWw6YePCiAgYW1vdW50ICAgICBJbnQKICAvLyDpooTkvLDniIbku5Pku7cKICBibGFzdCAgICAgIFN0cmluZwogIC8vIOaMgeS7k+Wdh+S7twogIHByaWNlICAgICAgU3RyaW5nCiAgLy8g5Lqk5piT5qih5byPCiAgbW9kZSAgICAgICBJbnQKICAvLyDmjIHku5PnirbmgIEKICBzdGF0dXMgICAgIEludAogIC8vIOS/neivgemHkQogIGJvbmQgICAgICAgU3RyaW5nPwogIC8vIOWNleWPtwogIGlkZW50aWZpZXIgU3RyaW5nPwogIC8vIOadoOadhgogIGxldmVyICAgICAgU3RyaW5nPyBAZGVmYXVsdCgiMSIpCiAgLy8g5q2i5o2fCiAgc3RvcExvc3MgICBTdHJpbmc/CiAgLy8g5q2i55uICiAgdGFrZVByb2ZpdCBTdHJpbmc/CiAgLy8g5biC5Zy6CiAgbWFya2V0ICAgICBTdHJpbmc/CgogIC8vIOaNn+ebigogIHBsICAgU3RyaW5nPyBAZGVmYXVsdCgiMCIpCiAgLy8g5o2f55uK546HCiAgcmF0ZSBTdHJpbmc/IEBkZWZhdWx0KCIwIikKCiAgY3VycmVudFByaWNlIFN0cmluZz8gQG1hcCgiY3VycmVudF9wcmljZSIpCgogIG1lbWJlcklkICAgICAgQmlnSW50IEBtYXAoIm1lbWJlcl9pZCIpCiAgc3RvY2tTeW1ib2xJZCBCaWdJbnQgQG1hcCgic3RvY2tfc3ltYm9sX2lkIikKCiAgbWVtYmVyICAgICAgTWVtYmVyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW21lbWJlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBzdG9ja1N5bWJvbCBTdG9ja1N5bWJvbCBAcmVsYXRpb24oZmllbGRzOiBbc3RvY2tTeW1ib2xJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAbWFwKCJzdG9ja19wb3NpdGlvbnMiKQp9Cgptb2RlbCBNZW1iZXJEZXRhaWwgewogIGlkICAgICAgIEJpZ0ludCAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBhZnRlciAgICBTdHJpbmc/CiAgYW1vdW50ICAgU3RyaW5nPwogIGJlZm9yZSAgIFN0cmluZz8KICBtYXJrZXQgICBTdHJpbmc/CiAgdHlwZSAgICAgSW50CiAgcmVtYXJrICAgU3RyaW5nPwogIG1lbWJlcklkIEJpZ0ludCAgQG1hcCgibWVtYmVyX2lkIikKICBtZW1iZXIgICBNZW1iZXIgIEByZWxhdGlvbihmaWVsZHM6IFttZW1iZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAbWFwKCJtZW1iZXJfZGV0YWlscyIpCn0KCm1vZGVsIENvdW50cnkgewogIGlkICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjb2RlICAgICAgU3RyaW5nPyAgIEBkYi5DaGFyKDMwKQogIG5hbWUgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNjApCiAgZW4gICAgICAgIFN0cmluZyAgICBAZGIuVmFyQ2hhcig2MCkKICB0ZWwgICAgICAgU3RyaW5nICAgIEBkYi5DaGFyKDEwKQogIHB5ICAgICAgICBTdHJpbmcgICAgQGRiLkNoYXIoMzApCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0IERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgQEB1bmlxdWUoW3B5LCB0ZWwsIG5hbWVdKQogIEBAbWFwKCJjb3VudHJpZXMiKQp9Cgptb2RlbCBTZXR0aW5nIHsKICBpZCAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAga2V5ICAgICAgIFN0cmluZwogIHZhbHVlICAgICBTdHJpbmcgICAgQGRiLlRleHQoKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAbWFwKCJzZXR0aW5ncyIpCn0KCm1vZGVsIFN0b2NrUmVzb3VyY2UgewogIGlkICAgICAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGFtb3VudFNjb3BlICAgIFN0cmluZyAgICBAbWFwKCJhbW91bnRfc2NvcGUiKQogIGZyZXF1ZW5jeVNjb3BlIFN0cmluZyAgICBAbWFwKCJmcmVxdWVuY3lfc2NvcGUiKQogIG1hcmtldCAgICAgICAgIFN0cmluZyAgICBAbWFwKCJtYXJrZXQiKQogIHNwcmVhZFNjb3BlICAgIFN0cmluZyAgICBAbWFwKCJzcHJlYWRfc2NvcGUiKQogIGVuZEF0ICAgICAgICAgIFN0cmluZyAgICBAbWFwKCJlbmRfYXQiKQogIHN0YXJ0QXQgICAgICAgIFN0cmluZyAgICBAbWFwKCJzdGFydF9hdCIpCiAgc3ltYm9sICAgICAgICAgU3RyaW5nCiAgdHlwZSAgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDEpCiAgc3RhdHVzICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDEpCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgICAgICBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAbWFwKCJzdG9ja19yZXNvdXJjZXMiKQp9Cgptb2RlbCBTdG9ja1Jlc291cmNlUmVjb3JkIHsKICBpZCAgICAgICAgICAgICAgQmlnSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgb3BlbiAgICAgICAgICAgIFN0cmluZwogIGhpZ2ggICAgICAgICAgICBTdHJpbmcKICBjbG9zZSAgICAgICAgICAgU3RyaW5nCiAgbG93ICAgICAgICAgICAgIFN0cmluZwogIHRpbWUgICAgICAgICAgICBTdHJpbmcKICBzdG9ja1Jlc291cmNlSWQgQmlnSW50IEBtYXAoInN0b2NrX3Jlc291cmNlX2lkIikKCiAgQEBtYXAoInN0b2NrX3Jlc291cmNlX3JlY29yZHMiKQp9CgplbnVtIEdFTkRFUiB7CiAgVU5LTk9XTgogIE1BTgogIFdPTUFOCn0KCmVudW0gU1RPQ0tfU1RBVFVTIHsKICBOT1JNQUwKICBESVNBQkxFCiAgRE9XTgp9Cgptb2RlbCBBcnRpY2xlIHsKICBpZCAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdGh1bWIgICAgIFN0cmluZwogIHRpdGxlICAgICBTdHJpbmcKICBjb250ZW50ICAgU3RyaW5nICAgIEBkYi5Mb25nVGV4dAogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAbWFwKCJhcnRpY2xlcyIpCn0K",
  "inlineSchemaHash": "098c2f4128e97226bea6b95d6a3062a446eb012a389d1c09ef763e65bc6dc16c",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma-client",
    "prisma-client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"GENDER\",\"default\":\"UNKNOWN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Member\":{\"dbName\":\"members\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"GENDER\",\"default\":\"UNKNOWN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountBalance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unBalance\",\"dbName\":\"un_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lockBalance\",\"dbName\":\"lock_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockPostion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockPosition\",\"relationName\":\"MemberToStockPosition\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberDetail\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberDetail\",\"relationName\":\"MemberToMemberDetail\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberSubscribe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberSubscribe\",\"relationName\":\"MemberToMemberSubscribe\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberRecharges\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberRecharge\",\"relationName\":\"MemberToMemberRecharge\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberWithdraws\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberWithdraw\",\"relationName\":\"MemberToMemberWithdraw\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberRecharge\":{\"dbName\":\"member_recharges\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rechargeMoney\",\"dbName\":\"recharge_money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"screen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberRecharge\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberWithdraw\":{\"dbName\":\"member_withdraws\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberWithdraw\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockSymbol\":{\"dbName\":\"stock_symbols\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbolShowName\",\"dbName\":\"symbol_show_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changePercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sync\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"syncMarket\",\"dbName\":\"sync_market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockPostion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockPosition\",\"relationName\":\"StockPositionToStockSymbol\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"symbol\",\"market\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"symbol\",\"market\"]}],\"isGenerated\":false},\"Stock\":{\"dbName\":\"stocks\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sok\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"optional\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"STOCK_STATUS\",\"default\":\"NORMAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changePercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0%\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockRecord\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockRecord\",\"relationName\":\"StockToStockRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"code\",\"symbol\",\"type\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"code\",\"symbol\",\"type\"]}],\"isGenerated\":false},\"StockRecord\":{\"dbName\":\"stock_records\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockId\",\"dbName\":\"stock_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stock\",\"relationName\":\"StockToStockRecord\",\"relationFromFields\":[\"stockId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockMarket\":{\"dbName\":\"stock_markets\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxWithdrawal\",\"dbName\":\"max_withdrawal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minWithdrawal\",\"dbName\":\"min_withdrawal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feeRate\",\"dbName\":\"fee_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minFee\",\"dbName\":\"min_fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lever\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mmr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allocationRate\",\"dbName\":\"allocation_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bindingHours\",\"dbName\":\"binding_hours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"headSymbols\",\"dbName\":\"head_symbols\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conline\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockFavorite\":{\"dbName\":\"stock_favorites\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSymbolId\",\"dbName\":\"stock_symbol_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockSubscribe\":{\"dbName\":\"stock_subscribes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startAt\",\"dbName\":\"start_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endAt\",\"dbName\":\"end_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upAt\",\"dbName\":\"up_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circulation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remainCirculation\",\"dbName\":\"remain_circulation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipoPrice\",\"dbName\":\"ipo_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuePrice\",\"dbName\":\"issue_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultAt\",\"dbName\":\"result_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAmount\",\"dbName\":\"sub_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberSubscribe\":{\"dbName\":\"member_subscribes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winningAmount\",\"dbName\":\"winning_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winningPrice\",\"dbName\":\"winning_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalWinningPrice\",\"dbName\":\"total_winning_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualAmount\",\"dbName\":\"actual_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSubscribeId\",\"dbName\":\"stock_subscribe_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberSubscribe\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockPosition\":{\"dbName\":\"stock_positions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blast\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bond\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lever\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stopLoss\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"takeProfit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentPrice\",\"dbName\":\"current_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSymbolId\",\"dbName\":\"stock_symbol_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToStockPosition\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSymbol\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockSymbol\",\"relationName\":\"StockPositionToStockSymbol\",\"relationFromFields\":[\"stockSymbolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberDetail\":{\"dbName\":\"member_details\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"after\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberDetail\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Country\":{\"dbName\":\"countries\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"py\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"py\",\"tel\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"py\",\"tel\",\"name\"]}],\"isGenerated\":false},\"Setting\":{\"dbName\":\"settings\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockResource\":{\"dbName\":\"stock_resources\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amountScope\",\"dbName\":\"amount_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequencyScope\",\"dbName\":\"frequency_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"dbName\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spreadScope\",\"dbName\":\"spread_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endAt\",\"dbName\":\"end_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startAt\",\"dbName\":\"start_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockResourceRecord\":{\"dbName\":\"stock_resource_records\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockResourceId\",\"dbName\":\"stock_resource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Article\":{\"dbName\":\"articles\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"GENDER\":{\"values\":[{\"name\":\"UNKNOWN\",\"dbName\":null},{\"name\":\"MAN\",\"dbName\":null},{\"name\":\"WOMAN\",\"dbName\":null}],\"dbName\":null},\"STOCK_STATUS\":{\"values\":[{\"name\":\"NORMAL\",\"dbName\":null},{\"name\":\"DISABLE\",\"dbName\":null},{\"name\":\"DOWN\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "generated/prisma-client/libquery_engine-darwin.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma-client/schema.prisma")
