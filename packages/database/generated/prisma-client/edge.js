
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
} = require('./runtime/edge.js')


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
  market: 'market',
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
  market: 'market',
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
  showName: 'showName',
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
  type: 'type',
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

exports.Prisma.MemberCardScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  detail: 'detail',
  memberId: 'memberId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
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
  market: 'market',
  crawlerThumb: 'crawlerThumb',
  source: 'source',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RechargeScalarFieldEnum = {
  id: 'id',
  market: 'market',
  money: 'money',
  type: 'type',
  account: 'account',
  accountNetwork: 'accountNetwork',
  screens: 'screens',
  status: 'status',
  passMoney: 'passMoney',
  convertMoney: 'convertMoney',
  memberId: 'memberId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WithdrawScalarFieldEnum = {
  id: 'id',
  market: 'market',
  money: 'money',
  type: 'type',
  currency: 'currency',
  cryptoType: 'cryptoType',
  cryptoNetwork: 'cryptoNetwork',
  card: 'card',
  convertMoney: 'convertMoney',
  status: 'status',
  memberId: 'memberId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RechargeAccountScalarFieldEnum = {
  id: 'id',
  account: 'account',
  accountAddress: 'accountAddress',
  currency: 'currency',
  max: 'max',
  min: 'min',
  status: 'status',
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

exports.RechargeType = exports.$Enums.RechargeType = {
  CARD: 'CARD',
  CRYPTO: 'CRYPTO'
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
  MemberCard: 'MemberCard',
  Country: 'Country',
  Setting: 'Setting',
  StockResource: 'StockResource',
  StockResourceRecord: 'StockResourceRecord',
  Article: 'Article',
  Recharge: 'Recharge',
  Withdraw: 'Withdraw',
  RechargeAccount: 'RechargeAccount'
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
      "value": "/Users/emesh/work/loar/packages/database/generated/prisma-client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
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
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvcHJpc21hLWNsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgU3RyaW5nICAgIEB1bmlxdWUKICBuYW1lICAgICAgU3RyaW5nPwogIGF2YXRhciAgICBTdHJpbmc/CiAgcGFzc3dvcmQgIFN0cmluZwogIGdlbmRlciAgICBHRU5ERVIgICAgQGRlZmF1bHQoVU5LTk9XTikKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8KCiAgQEBtYXAoInVzZXJzIikKfQoKbW9kZWwgTWVtYmVyIHsKICBpZCAgICAgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgICAgICBTdHJpbmcgICAgQHVuaXF1ZQogIG5hbWUgICAgICAgICAgIFN0cmluZz8KICBhdmF0YXIgICAgICAgICBTdHJpbmc/CiAgcGFzc3dvcmQgICAgICAgU3RyaW5nCiAgZ2VuZGVyICAgICAgICAgR0VOREVSICAgIEBkZWZhdWx0KFVOS05PV04pCiAgYWRkcmVzcyAgICAgICAgU3RyaW5nPwogIGFjY291bnRCYWxhbmNlIEpzb24/CiAgc3RhdHVzICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApCiAgdHlwZSAgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgICAgICBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCiAgLy8g5L2Z6aKdCiAgYmFsYW5jZSAgICAgICAgRGVjaW1hbCAgIEBkZWZhdWx0KDApIEBkYi5EZWNpbWFsKDIwLCA1KQogIC8vIOWGu+e7k+S9meminQogIHVuQmFsYW5jZSAgICAgIERlY2ltYWwgICBAZGVmYXVsdCgwKSBAbWFwKCJ1bl9iYWxhbmNlIikgQGRiLkRlY2ltYWwoMjAsIDUpCiAgLy8g6ZSB5a6a5L2Z6aKdCiAgbG9ja0JhbGFuY2UgICAgRGVjaW1hbCAgIEBkZWZhdWx0KDApIEBtYXAoImxvY2tfYmFsYW5jZSIpIEBkYi5EZWNpbWFsKDIwLCA1KQoKICBzdG9ja1Bvc3Rpb24gICAgU3RvY2tQb3NpdGlvbltdCiAgbWVtYmVyRGV0YWlsICAgIE1lbWJlckRldGFpbFtdCiAgbWVtYmVyU3Vic2NyaWJlIE1lbWJlclN1YnNjcmliZVtdCiAgbWVtYmVyUmVjaGFyZ2VzIE1lbWJlclJlY2hhcmdlW10KICBtZW1iZXJXaXRoZHJhd3MgTWVtYmVyV2l0aGRyYXdbXQogIG1lbWJlckNhcmRzICAgICBNZW1iZXJDYXJkW10KICByZWNoYXJnZXMgICAgICAgUmVjaGFyZ2VbXQogIHdpdGhkcmF3cyAgICAgICBXaXRoZHJhd1tdCgogIEBAbWFwKCJtZW1iZXJzIikKfQoKbW9kZWwgTWVtYmVyUmVjaGFyZ2UgewogIGlkICAgICAgICAgICAgQmlnSW50ICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG1vbmV5ICAgICAgICAgRGVjaW1hbCBAZGIuRGVjaW1hbCgyMCwgNSkKICByZWNoYXJnZU1vbmV5IERlY2ltYWwgQGRlZmF1bHQoMCkgQG1hcCgicmVjaGFyZ2VfbW9uZXkiKSBAZGIuRGVjaW1hbCgyMCwgNSkKICBzY3JlZW4gICAgICAgIEpzb24KICBtYXJrZXQgICAgICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwKQoKICBtZW1iZXJJZCAgQmlnSW50ICAgIEBtYXAoIm1lbWJlcl9pZCIpCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0IERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgbWVtYmVyIE1lbWJlciBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQG1hcCgibWVtYmVyX3JlY2hhcmdlcyIpCn0KCm1vZGVsIE1lbWJlcldpdGhkcmF3IHsKICBpZCAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbW9uZXkgICAgIERlY2ltYWwgICBAZGIuRGVjaW1hbCgyMCwgNSkKICByZW1hcmsgICAgU3RyaW5nPwogIHN0YXR1cyAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkKICBhZGRyZXNzICAgU3RyaW5nPwogIG1hcmtldCAgICBTdHJpbmcKICBtZW1iZXJJZCAgQmlnSW50ICAgIEBtYXAoIm1lbWJlcl9pZCIpCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0IERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgbWVtYmVyIE1lbWJlciBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQG1hcCgibWVtYmVyX3dpdGhkcmF3cyIpCn0KCm1vZGVsIFN0b2NrU3ltYm9sIHsKICBpZCAgICAgICAgICAgICBCaWdJbnQgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g57O757ufQ09ERQogIGNvZGUgICAgICAgICAgIFN0cmluZwogIC8vIOivgeWIuOW4guWcugogIG1hcmtldCAgICAgICAgIFN0cmluZwogIC8vIOS4iue6v+eKtuaAgQogIG9ubGluZSAgICAgICAgIEludCAgICAgQGRlZmF1bHQoMSkKICAvLyDor4HliLjku6PnoIEKICBzeW1ib2wgICAgICAgICBTdHJpbmcKICAvLyDor4HliLjlkI3np7AKICBzaG93TmFtZSAgICAgICBTdHJpbmcKICBuYW1lICAgICAgICAgICBTdHJpbmc/CiAgc3ltYm9sU2hvd05hbWUgU3RyaW5nPyBAbWFwKCJzeW1ib2xfc2hvd19uYW1lIikKICB0cmFkZSAgICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDApCiAgLy8g6K+B5Yi457G75Z6LIDAg5oyH5pWwIDEg6K+B6IKhIDIgRVRGCiAgdHlwZSAgICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwKQogIC8vIOacgOaWsOS7twogIG5ld1ByaWNlICAgICAgIFN0cmluZz8gQG1hcCgibmV3X3ByaWNlIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOW8gOebmOS7twogIG9wZW4gICAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaUtuebmOS7twogIGNsb3NlICAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOmrmAogIGhpZ2ggICAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOS9jgogIGxvdyAgICAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOmHjwogIGFtb3VudCAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOminQogIHZvbHVtZSAgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAuMDAwIikgQGRiLlZhckNoYXIoMjAwKQoKICBjaGFuZ2UgICAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjAiKQogIGNoYW5nZVBlcmNlbnQgU3RyaW5nPyBAZGVmYXVsdCgiMCIpCgogIGRhdGUgICAgICAgU3RyaW5nPwogIHN5bmMgICAgICAgSnNvbj8KICBzeW5jTWFya2V0IFN0cmluZyAgICBAbWFwKCJzeW5jX21hcmtldCIpCiAgY3JlYXRlZEF0ICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBzdG9ja1Bvc3Rpb24gU3RvY2tQb3NpdGlvbltdCgogIEBAdW5pcXVlKFtzeW1ib2wsIG1hcmtldF0pCiAgQEBtYXAoInN0b2NrX3N5bWJvbHMiKQp9Cgptb2RlbCBTdG9jayB7CiAgaWQgICAgICAgICAgICBCaWdJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjb2RlICAgICAgICAgIFN0cmluZyAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgc3ltYm9sICAgICAgICBTdHJpbmcgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIG5hbWUgICAgICAgICAgU3RyaW5nICAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICBjbmFtZSAgICAgICAgIFN0cmluZz8gICAgICBAZGIuVmFyQ2hhcigxMDApCiAgdHlwZSAgICAgICAgICBTdHJpbmcgICAgICAgQGRiLlZhckNoYXIoMjApCiAgbG9nbyAgICAgICAgICBTdHJpbmc/ICAgICAgQGRiLlZhckNoYXIoMjAwKQogIHNvayAgICAgICAgICAgU3RyaW5nPyAgICAgIEBkYi5WYXJDaGFyKDMwKQogIG9wdGlvbmFsICAgICAgQm9vbGVhbiAgICAgIEBkZWZhdWx0KGZhbHNlKQogIC8vIOacgOaWsOS7twogIG5ld1ByaWNlICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQG1hcCgibmV3X3ByaWNlIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOW8gOebmOS7twogIG9wZW4gICAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaUtuebmOS7twogIGNsb3NlICAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOmrmAogIGhpZ2ggICAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOS9jgogIGxvdyAgICAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOmHjwogIGFtb3VudCAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOminQogIHZvbHVtZSAgICAgICAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwIikgQGRiLlZhckNoYXIoMjAwKQogIHN0YXR1cyAgICAgICAgU1RPQ0tfU1RBVFVTIEBkZWZhdWx0KE5PUk1BTCkKICBjaGFuZ2UgICAgICAgIFN0cmluZz8gICAgICBAZGVmYXVsdCgiMCIpCiAgY2hhbmdlUGVyY2VudCBTdHJpbmc/ICAgICAgQGRlZmF1bHQoIjAlIikKICBkYXRlICAgICAgICAgIFN0cmluZz8KICBleHRyYSAgICAgICAgIEpzb24/CiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgRGF0ZVRpbWU/ICAgIEBtYXAoInVwZGF0ZWRfYXQiKQoKICBzdG9ja1JlY29yZCBTdG9ja1JlY29yZFtdCgogIEBAdW5pcXVlKFtjb2RlLCBzeW1ib2wsIHR5cGVdKQogIEBAbWFwKCJzdG9ja3MiKQp9Cgptb2RlbCBTdG9ja1JlY29yZCB7CiAgaWQgICAgICAgQmlnSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g5pyA5paw5Lu3CiAgbmV3UHJpY2UgU3RyaW5nIEBtYXAoIm5ld19wcmljZSIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDlvIDnm5jku7cKICBvcGVuICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaUtuebmOS7twogIGNsb3NlICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5pyA6auYCiAgaGlnaCAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmnIDkvY4KICBsb3cgICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOmHjwogIGFtb3VudCAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5oiQ5Lqk6aKdCiAgdm9sdW1lICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKCiAgZGF0ZSAgICAgIFN0cmluZwogIGV4dHJhICAgICBKc29uCiAgLy8g5pe26Ze0CiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKCiAgc3RvY2tJZCBCaWdJbnQgQG1hcCgic3RvY2tfaWQiKQogIHN0b2NrICAgU3RvY2sgIEByZWxhdGlvbihmaWVsZHM6IFtzdG9ja0lkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBtYXAoInN0b2NrX3JlY29yZHMiKQp9Cgptb2RlbCBTdG9ja01hcmtldCB7CiAgaWQgICAgICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g5biC5Zy65qCH6K+GCiAgY29kZSAgICAgICAgICAgU3RyaW5nPwogIC8vIOW4guWcuuS6pOaYk+i0p+W4gQogIGN1cnJlbmN5ICAgICAgIFN0cmluZz8KICBzaG93TmFtZSAgICAgICBTdHJpbmc/CiAgLy8g5pyA5aSn5Ye66YeRCiAgbWF4V2l0aGRyYXdhbCAgU3RyaW5nPyAgIEBtYXAoIm1heF93aXRoZHJhd2FsIikKICAvLyDmnIDlsI/lh7rph5EKICBtaW5XaXRoZHJhd2FsICBTdHJpbmc/ICAgQG1hcCgibWluX3dpdGhkcmF3YWwiKQogIC8vIOaJi+e7rei0ueeOhwogIGZlZVJhdGUgICAgICAgIFN0cmluZz8gICBAbWFwKCJmZWVfcmF0ZSIpCiAgLy8g5pyA5L2O5omL57ut6LS5CiAgbWluRmVlICAgICAgICAgU3RyaW5nPyAgIEBtYXAoIm1pbl9mZWUiKQogIC8vIOadoOadhuWAjeaVsAogIGxldmVyICAgICAgICAgIFN0cmluZz8KICAvLyDnu7TmjIHkv53or4Hph5HnjocKICBtbXIgICAgICAgICAgICBTdHJpbmc/CiAgLy8g6YWN6LWE6LS5546HCiAgYWxsb2NhdGlvblJhdGUgU3RyaW5nPyAgIEBtYXAoImFsbG9jYXRpb25fcmF0ZSIpCiAgLy8g5LiL5Y2V6aKR546HCiAgZnJlcXVlbmN5ICAgICAgSW50PwogIC8vIOmZkOWItuaXtumXtC/np5IKICBiaW5kaW5nSG91cnMgICBJbnQ/ICAgICAgQG1hcCgiYmluZGluZ19ob3VycyIpCiAgLy8g5biC5Zy65aS06YOo6K+B5Yi4CiAgaGVhZFN5bWJvbHMgICAgU3RyaW5nPyAgIEBtYXAoImhlYWRfc3ltYm9scyIpCiAgLy8g5o6S5bqPCiAgc29ydCAgICAgICAgICAgSW50PyAgICAgIEBkZWZhdWx0KDApCiAgLy8g5biC5Zy65piv5ZCm5LiK57q/CiAgb25saW5lICAgICAgICAgSW50PyAgICAgIEBkZWZhdWx0KDEpCiAgLy8g6LSn5biB5piv5ZCm5LiK57q/CiAgY29ubGluZSAgICAgICAgSW50PyAgICAgIEBkZWZhdWx0KDEpCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgICAgICBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAbWFwKCJzdG9ja19tYXJrZXRzIikKfQoKbW9kZWwgU3RvY2tGYXZvcml0ZSB7CiAgaWQgICAgICAgQmlnSW50IEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g5pyA5paw5Lu3CiAgbmV3UHJpY2UgU3RyaW5nIEBtYXAoIm5ld19wcmljZSIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDlvIDnm5jku7cKICBvcGVuICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaUtuebmOS7twogIGNsb3NlICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5pyA6auYCiAgaGlnaCAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmnIDkvY4KICBsb3cgICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOmHjwogIGFtb3VudCAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5oiQ5Lqk6aKdCiAgdm9sdW1lICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKCiAgZGF0ZSAgU3RyaW5nPwogIGV4dHJhIEpzb24/CgogIG1lbWJlcklkICAgICAgQmlnSW50IEBtYXAoIm1lbWJlcl9pZCIpCiAgc3RvY2tTeW1ib2xJZCBCaWdJbnQgQG1hcCgic3RvY2tfc3ltYm9sX2lkIikKCiAgLy8g5pe26Ze0CiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKCiAgQEBtYXAoInN0b2NrX2Zhdm9yaXRlcyIpCn0KCm1vZGVsIFN0b2NrU3Vic2NyaWJlIHsKICBpZCAgICAgICAgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICAvLyDluILlnLoKICBtYXJrZXQgICAgICAgICAgICBTdHJpbmcKICAvLyDogqHnpajlkI3np7AKICBuYW1lICAgICAgICAgICAgICBTdHJpbmcKICAvLyDogqHnpajku6PnoIEKICBjb2RlICAgICAgICAgICAgICBTdHJpbmcKICAvLyDlvIDlp4vorqTotK3ml7bpl7QKICBzdGFydEF0ICAgICAgICAgICBEYXRlVGltZT8gQG1hcCgic3RhcnRfYXQiKQogIC8vIOe7k+adn+iupOi0reaXtumXtAogIGVuZEF0ICAgICAgICAgICAgIERhdGVUaW1lPyBAbWFwKCJlbmRfYXQiKQogIC8vIOS4iuW4guaXtumXtAogIHVwQXQgICAgICAgICAgICAgIERhdGVUaW1lPyBAbWFwKCJ1cF9hdCIpCiAgLy8g5Y+R6KGM6YePCiAgY2lyY3VsYXRpb24gICAgICAgSW50PwogIC8vIOWJqeS9meWPkeihjOmHjwogIHJlbWFpbkNpcmN1bGF0aW9uIEludD8gICAgICBAbWFwKCJyZW1haW5fY2lyY3VsYXRpb24iKQogIC8vIOWPkeihjOS7twogIGlwb1ByaWNlICAgICAgICAgIERlY2ltYWwgICBAbWFwKCJpcG9fcHJpY2UiKSBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDmi5vogqHku7cKICBpc3N1ZVByaWNlICAgICAgICBEZWNpbWFsICAgQG1hcCgiaXNzdWVfcHJpY2UiKSBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDlhazluIPnu5Pmnpzml7bpl7QKICByZXN1bHRBdCAgICAgICAgICBEYXRlVGltZT8gQG1hcCgicmVzdWx0X2F0IikKICAvLyDorqTotK3mlbDph4/ku7fmoLwKICBzdWJBbW91bnQgICAgICAgICBKc29uPyAgICAgQG1hcCgic3ViX2Ftb3VudCIpCiAgLy8g54q25oCBCiAgc3RhdHVzICAgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDEpCiAgdHlwZSAgICAgICAgICAgICAgSW50ICAgICAgIEBkZWZhdWx0KDApCiAgY3JlYXRlZEF0ICAgICAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgICAgICAgICBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAbWFwKCJzdG9ja19zdWJzY3JpYmVzIikKfQoKbW9kZWwgTWVtYmVyU3Vic2NyaWJlIHsKICBpZCAgICAgICAgICAgICAgICBCaWdJbnQgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG1hcmtldCAgICAgICAgICAgIFN0cmluZwogIGNvZGUgICAgICAgICAgICAgIFN0cmluZwogIG5hbWUgICAgICAgICAgICAgIFN0cmluZwogIC8vIOeUs+i0reaVsOmHjwogIGFtb3VudCAgICAgICAgICAgIEludAogIC8vIOeUs+i0remHkeminQogIG1vbmV5ICAgICAgICAgICAgIERlY2ltYWwgIEBkYi5EZWNpbWFsKDIwLCA1KQogIC8vIOeUs+i0reWNleWPtwogIG5vICAgICAgICAgICAgICAgIFN0cmluZwogIC8vIOS4reetvuaVsOmHjwogIHdpbm5pbmdBbW91bnQgICAgIEludD8gICAgIEBtYXAoIndpbm5pbmdfYW1vdW50IikKICAvLyDkuK3nrb7ku7fmoLwKICB3aW5uaW5nUHJpY2UgICAgICBEZWNpbWFsPyBAbWFwKCJ3aW5uaW5nX3ByaWNlIikgQGRiLkRlY2ltYWwoMjAsIDUpCiAgLy8g5Lit562+5oC76aKdCiAgdG90YWxXaW5uaW5nUHJpY2UgRGVjaW1hbD8gQG1hcCgidG90YWxfd2lubmluZ19wcmljZSIpIEBkYi5EZWNpbWFsKDIwLCA1KQogIC8vIOWunumZhemHkeminQogIGFjdHVhbEFtb3VudCAgICAgIERlY2ltYWw/IEBtYXAoImFjdHVhbF9hbW91bnQiKSBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDorqLljZXnirbmgIEKICBzdGF0dXMgICAgICAgICAgICBJbnQgICAgICBAZGVmYXVsdCgxKQogIC8vIOS4remXtOeKtuaAgQogIHR5cGUgICAgICAgICAgICAgIEludCAgICAgIEBkZWZhdWx0KDApCiAgLy8g5piv5ZCm5bey5oyB5LuTCiAgcG9zaXRpb24gICAgICAgICAgSW50ICAgICAgQGRlZmF1bHQoMCkKCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0IERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgc3RvY2tTdWJzY3JpYmVJZCBCaWdJbnQgQG1hcCgic3RvY2tfc3Vic2NyaWJlX2lkIikKCiAgbWVtYmVySWQgQmlnSW50IEBtYXAoIm1lbWJlcl9pZCIpCiAgbWVtYmVyICAgTWVtYmVyIEByZWxhdGlvbihmaWVsZHM6IFttZW1iZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAbWFwKCJtZW1iZXJfc3Vic2NyaWJlcyIpCn0KCm1vZGVsIFN0b2NrUG9zaXRpb24gewogIGlkICAgICAgICAgQmlnSW50ICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIC8vIOaMgeS7k+aVsOmHjwogIGFtb3VudCAgICAgSW50CiAgLy8g6aKE5Lyw54iG5LuT5Lu3CiAgYmxhc3QgICAgICBTdHJpbmcKICAvLyDmjIHku5PlnYfku7cKICBwcmljZSAgICAgIFN0cmluZwogIC8vIOS6pOaYk+aooeW8jwogIG1vZGUgICAgICAgSW50CiAgLy8g5oyB5LuT54q25oCBCiAgc3RhdHVzICAgICBJbnQKICAvLyDkv53or4Hph5EKICBib25kICAgICAgIFN0cmluZz8KICAvLyDljZXlj7cKICBpZGVudGlmaWVyIFN0cmluZz8KICAvLyDmnaDmnYYKICBsZXZlciAgICAgIFN0cmluZz8gQGRlZmF1bHQoIjEiKQogIC8vIOatouaNnwogIHN0b3BMb3NzICAgU3RyaW5nPwogIC8vIOatouebiAogIHRha2VQcm9maXQgU3RyaW5nPwogIC8vIOW4guWcugogIG1hcmtldCAgICAgU3RyaW5nPwoKICAvLyDnsbvlnosKICB0eXBlIEludAoKICAvLyDmjZ/nm4oKICBwbCAgIFN0cmluZz8gQGRlZmF1bHQoIjAiKQogIC8vIOaNn+ebiueOhwogIHJhdGUgU3RyaW5nPyBAZGVmYXVsdCgiMCIpCgogIGN1cnJlbnRQcmljZSBTdHJpbmc/IEBtYXAoImN1cnJlbnRfcHJpY2UiKQoKICBtZW1iZXJJZCAgICAgIEJpZ0ludCBAbWFwKCJtZW1iZXJfaWQiKQogIHN0b2NrU3ltYm9sSWQgQmlnSW50IEBtYXAoInN0b2NrX3N5bWJvbF9pZCIpCgogIG1lbWJlciAgICAgIE1lbWJlciAgICAgIEByZWxhdGlvbihmaWVsZHM6IFttZW1iZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgc3RvY2tTeW1ib2wgU3RvY2tTeW1ib2wgQHJlbGF0aW9uKGZpZWxkczogW3N0b2NrU3ltYm9sSWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBAQG1hcCgic3RvY2tfcG9zaXRpb25zIikKfQoKbW9kZWwgTWVtYmVyRGV0YWlsIHsKICBpZCAgICAgICBCaWdJbnQgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYWZ0ZXIgICAgU3RyaW5nPwogIGFtb3VudCAgIFN0cmluZz8KICBiZWZvcmUgICBTdHJpbmc/CiAgbWFya2V0ICAgU3RyaW5nPwogIHR5cGUgICAgIEludAogIHJlbWFyayAgIFN0cmluZz8KICBtZW1iZXJJZCBCaWdJbnQgIEBtYXAoIm1lbWJlcl9pZCIpCiAgbWVtYmVyICAgTWVtYmVyICBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQG1hcCgibWVtYmVyX2RldGFpbHMiKQp9Cgptb2RlbCBNZW1iZXJDYXJkIHsKICBpZCAgICAgICAgQmlnSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgIFN0cmluZz8KICB0eXBlICAgICAgUmVjaGFyZ2VUeXBlCiAgZGV0YWlsICAgIEpzb24KICBtZW1iZXJJZCAgQmlnSW50ICAgICAgIEBtYXAoIm1lbWJlcl9pZCIpCiAgbWVtYmVyICAgIE1lbWJlciAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gICAgQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAbWFwKCJtZW1iZXJfY2FyZHMiKQp9Cgptb2RlbCBDb3VudHJ5IHsKICBpZCAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY29kZSAgICAgIFN0cmluZz8gICBAZGIuQ2hhcigzMCkKICBuYW1lICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDYwKQogIGVuICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNjApCiAgdGVsICAgICAgIFN0cmluZyAgICBAZGIuQ2hhcigxMCkKICBweSAgICAgICAgU3RyaW5nICAgIEBkYi5DaGFyKDMwKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAdW5pcXVlKFtweSwgdGVsLCBuYW1lXSkKICBAQG1hcCgiY291bnRyaWVzIikKfQoKbW9kZWwgU2V0dGluZyB7CiAgaWQgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGtleSAgICAgICBTdHJpbmcKICB2YWx1ZSAgICAgU3RyaW5nICAgIEBkYi5UZXh0KCkKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBAQG1hcCgic2V0dGluZ3MiKQp9Cgptb2RlbCBTdG9ja1Jlc291cmNlIHsKICBpZCAgICAgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBhbW91bnRTY29wZSAgICBTdHJpbmcgICAgQG1hcCgiYW1vdW50X3Njb3BlIikKICBmcmVxdWVuY3lTY29wZSBTdHJpbmcgICAgQG1hcCgiZnJlcXVlbmN5X3Njb3BlIikKICBtYXJrZXQgICAgICAgICBTdHJpbmcgICAgQG1hcCgibWFya2V0IikKICBzcHJlYWRTY29wZSAgICBTdHJpbmcgICAgQG1hcCgic3ByZWFkX3Njb3BlIikKICBlbmRBdCAgICAgICAgICBTdHJpbmcgICAgQG1hcCgiZW5kX2F0IikKICBzdGFydEF0ICAgICAgICBTdHJpbmcgICAgQG1hcCgic3RhcnRfYXQiKQogIHN5bWJvbCAgICAgICAgIFN0cmluZwogIHR5cGUgICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgxKQogIHN0YXR1cyAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgxKQogIGNyZWF0ZWRBdCAgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBAQG1hcCgic3RvY2tfcmVzb3VyY2VzIikKfQoKbW9kZWwgU3RvY2tSZXNvdXJjZVJlY29yZCB7CiAgaWQgICAgICAgICAgICAgIEJpZ0ludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG9wZW4gICAgICAgICAgICBTdHJpbmcKICBoaWdoICAgICAgICAgICAgU3RyaW5nCiAgY2xvc2UgICAgICAgICAgIFN0cmluZwogIGxvdyAgICAgICAgICAgICBTdHJpbmcKICB0aW1lICAgICAgICAgICAgU3RyaW5nCiAgc3RvY2tSZXNvdXJjZUlkIEJpZ0ludCBAbWFwKCJzdG9ja19yZXNvdXJjZV9pZCIpCgogIEBAbWFwKCJzdG9ja19yZXNvdXJjZV9yZWNvcmRzIikKfQoKZW51bSBHRU5ERVIgewogIFVOS05PV04KICBNQU4KICBXT01BTgp9CgplbnVtIFNUT0NLX1NUQVRVUyB7CiAgTk9STUFMCiAgRElTQUJMRQogIERPV04KfQoKbW9kZWwgQXJ0aWNsZSB7CiAgaWQgICAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHRodW1iICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjUwKQogIHRpdGxlICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjUwKQogIG1hcmtldCAgICAgICBTdHJpbmc/CiAgY3Jhd2xlclRodW1iIFN0cmluZz8gICBAbWFwKCJjcmF3bGVyX3RodW1iIikgQGRiLlZhckNoYXIoMjUwKQogIHNvdXJjZSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjUwKQogIGNvbnRlbnQgICAgICBTdHJpbmcgICAgQGRiLkxvbmdUZXh0CiAgY3JlYXRlZEF0ICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgIERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgQEBtYXAoImFydGljbGVzIikKfQoKbW9kZWwgUmVjaGFyZ2UgewogIGlkICAgICAgICAgICAgIEJpZ0ludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIC8vIOW4guWcugogIG1hcmtldCAgICAgICAgIFN0cmluZwogIC8vIOmHkeminQogIG1vbmV5ICAgICAgICAgIERlY2ltYWwgICAgICBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDlhYXlgLznsbvlnosKICB0eXBlICAgICAgICAgICBSZWNoYXJnZVR5cGUKICAvLyDlhYXlgLzluIHnp40KICBhY2NvdW50ICAgICAgICBTdHJpbmcKICAvLyDlhYXlgLznvZHnu5wKICBhY2NvdW50TmV0d29yayBTdHJpbmcgICAgICAgQG1hcCgiYWNjb3VudF9uZXR3b3JrIikKICAvLyDmiKrlm74KICBzY3JlZW5zICAgICAgICBKc29uCiAgLy8g5a6h5qC454q25oCBCiAgc3RhdHVzICAgICAgICAgSW50ICAgICAgICAgIEBkZWZhdWx0KDApCiAgcGFzc01vbmV5ICAgICAgRGVjaW1hbCAgICAgIEBkZWZhdWx0KDApIEBtYXAoInBhc3NfbW9uZXkiKSBAZGIuRGVjaW1hbCgyMCwgNSkKICBjb252ZXJ0TW9uZXkgICBEZWNpbWFsICAgICAgQGRlZmF1bHQoMCkgQG1hcCgiY29udmVydF9tb25leSIpIEBkYi5EZWNpbWFsKDIwLCA1KQoKICBtZW1iZXJJZCAgQmlnSW50ICAgIEBtYXAoIm1lbWJlcl9pZCIpCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0IERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgbWVtYmVyIE1lbWJlciBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQG1hcCgicmVjaGFyZ2VzIikKfQoKbW9kZWwgV2l0aGRyYXcgewogIGlkICAgICAgICAgICAgQmlnSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g5biC5Zy6CiAgbWFya2V0ICAgICAgICBTdHJpbmcKICAvLyDph5Hpop0KICBtb25leSAgICAgICAgIERlY2ltYWwgICAgICBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDmj5DnjrDnsbvlnosKICB0eXBlICAgICAgICAgIFJlY2hhcmdlVHlwZQogIC8vIOaPkOeOsOW4geenjQogIGN1cnJlbmN5ICAgICAgU3RyaW5nCiAgY3J5cHRvVHlwZSAgICBTdHJpbmc/ICAgICAgQG1hcCgiY3J5cHRvX3R5cGUiKQogIGNyeXB0b05ldHdvcmsgU3RyaW5nPyAgICAgIEBtYXAoImNyeXB0b19uZXR3b3JrIikKICBjYXJkICAgICAgICAgIEpzb24/CiAgY29udmVydE1vbmV5ICBEZWNpbWFsICAgICAgQGRlZmF1bHQoMCkgQG1hcCgiY29udmVydF9tb25leSIpIEBkYi5EZWNpbWFsKDIwLCA1KQogIC8vIOWuoeaguOeKtuaAgQogIHN0YXR1cyAgICAgICAgSW50ICAgICAgICAgIEBkZWZhdWx0KDApCiAgbWVtYmVySWQgICAgICBCaWdJbnQgICAgICAgQG1hcCgibWVtYmVyX2lkIikKICBjcmVhdGVkQXQgICAgIERhdGVUaW1lICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZT8gICAgQG1hcCgidXBkYXRlZF9hdCIpCgogIG1lbWJlciBNZW1iZXIgQHJlbGF0aW9uKGZpZWxkczogW21lbWJlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBtYXAoIndpdGhkcmF3cyIpCn0KCmVudW0gUmVjaGFyZ2VUeXBlIHsKICBDQVJECiAgQ1JZUFRPCn0KCm1vZGVsIFJlY2hhcmdlQWNjb3VudCB7CiAgaWQgICAgICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYWNjb3VudCAgICAgICAgU3RyaW5nCiAgYWNjb3VudEFkZHJlc3MgU3RyaW5nICAgIEBtYXAoImFjY291bnRfYWRkcmVzcyIpCiAgY3VycmVuY3kgICAgICAgU3RyaW5nCiAgbWF4ICAgICAgICAgICAgRGVjaW1hbCAgIEBkZWZhdWx0KDApIEBkYi5EZWNpbWFsKDIwLCA1KQogIG1pbiAgICAgICAgICAgIERlY2ltYWwgICBAZGVmYXVsdCgwKSBAZGIuRGVjaW1hbCgyMCwgNSkKICBzdGF0dXMgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkKICBjcmVhdGVkQXQgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgIERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgQEBtYXAoInJlY2hhcmdlX2FjY291bnRzIikKfQo=",
  "inlineSchemaHash": "8129e0a456a8e2c6b5fe22a53e4fe3b4b7fa75a0c5e4336b1f8d74ce7602a043",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"GENDER\",\"default\":\"UNKNOWN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Member\":{\"dbName\":\"members\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"GENDER\",\"default\":\"UNKNOWN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountBalance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unBalance\",\"dbName\":\"un_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lockBalance\",\"dbName\":\"lock_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockPostion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockPosition\",\"relationName\":\"MemberToStockPosition\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberDetail\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberDetail\",\"relationName\":\"MemberToMemberDetail\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberSubscribe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberSubscribe\",\"relationName\":\"MemberToMemberSubscribe\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberRecharges\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberRecharge\",\"relationName\":\"MemberToMemberRecharge\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberWithdraws\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberWithdraw\",\"relationName\":\"MemberToMemberWithdraw\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberCards\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberCard\",\"relationName\":\"MemberToMemberCard\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recharges\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Recharge\",\"relationName\":\"MemberToRecharge\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"withdraws\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Withdraw\",\"relationName\":\"MemberToWithdraw\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberRecharge\":{\"dbName\":\"member_recharges\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rechargeMoney\",\"dbName\":\"recharge_money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"screen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberRecharge\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberWithdraw\":{\"dbName\":\"member_withdraws\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberWithdraw\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockSymbol\":{\"dbName\":\"stock_symbols\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbolShowName\",\"dbName\":\"symbol_show_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changePercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sync\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"syncMarket\",\"dbName\":\"sync_market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockPostion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockPosition\",\"relationName\":\"StockPositionToStockSymbol\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"symbol\",\"market\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"symbol\",\"market\"]}],\"isGenerated\":false},\"Stock\":{\"dbName\":\"stocks\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sok\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"optional\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"STOCK_STATUS\",\"default\":\"NORMAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changePercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0%\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockRecord\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockRecord\",\"relationName\":\"StockToStockRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"code\",\"symbol\",\"type\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"code\",\"symbol\",\"type\"]}],\"isGenerated\":false},\"StockRecord\":{\"dbName\":\"stock_records\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockId\",\"dbName\":\"stock_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stock\",\"relationName\":\"StockToStockRecord\",\"relationFromFields\":[\"stockId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockMarket\":{\"dbName\":\"stock_markets\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxWithdrawal\",\"dbName\":\"max_withdrawal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minWithdrawal\",\"dbName\":\"min_withdrawal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feeRate\",\"dbName\":\"fee_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minFee\",\"dbName\":\"min_fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lever\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mmr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allocationRate\",\"dbName\":\"allocation_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bindingHours\",\"dbName\":\"binding_hours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"headSymbols\",\"dbName\":\"head_symbols\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conline\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockFavorite\":{\"dbName\":\"stock_favorites\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSymbolId\",\"dbName\":\"stock_symbol_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockSubscribe\":{\"dbName\":\"stock_subscribes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startAt\",\"dbName\":\"start_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endAt\",\"dbName\":\"end_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upAt\",\"dbName\":\"up_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circulation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remainCirculation\",\"dbName\":\"remain_circulation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipoPrice\",\"dbName\":\"ipo_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuePrice\",\"dbName\":\"issue_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultAt\",\"dbName\":\"result_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAmount\",\"dbName\":\"sub_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberSubscribe\":{\"dbName\":\"member_subscribes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winningAmount\",\"dbName\":\"winning_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winningPrice\",\"dbName\":\"winning_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalWinningPrice\",\"dbName\":\"total_winning_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualAmount\",\"dbName\":\"actual_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSubscribeId\",\"dbName\":\"stock_subscribe_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberSubscribe\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockPosition\":{\"dbName\":\"stock_positions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blast\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bond\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lever\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stopLoss\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"takeProfit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentPrice\",\"dbName\":\"current_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSymbolId\",\"dbName\":\"stock_symbol_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToStockPosition\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSymbol\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockSymbol\",\"relationName\":\"StockPositionToStockSymbol\",\"relationFromFields\":[\"stockSymbolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberDetail\":{\"dbName\":\"member_details\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"after\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberDetail\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberCard\":{\"dbName\":\"member_cards\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RechargeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberCard\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Country\":{\"dbName\":\"countries\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"py\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"py\",\"tel\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"py\",\"tel\",\"name\"]}],\"isGenerated\":false},\"Setting\":{\"dbName\":\"settings\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockResource\":{\"dbName\":\"stock_resources\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amountScope\",\"dbName\":\"amount_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequencyScope\",\"dbName\":\"frequency_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"dbName\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spreadScope\",\"dbName\":\"spread_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endAt\",\"dbName\":\"end_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startAt\",\"dbName\":\"start_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockResourceRecord\":{\"dbName\":\"stock_resource_records\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockResourceId\",\"dbName\":\"stock_resource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Article\":{\"dbName\":\"articles\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crawlerThumb\",\"dbName\":\"crawler_thumb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Recharge\":{\"dbName\":\"recharges\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RechargeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountNetwork\",\"dbName\":\"account_network\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"screens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passMoney\",\"dbName\":\"pass_money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"convertMoney\",\"dbName\":\"convert_money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToRecharge\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Withdraw\":{\"dbName\":\"withdraws\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RechargeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cryptoType\",\"dbName\":\"crypto_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cryptoNetwork\",\"dbName\":\"crypto_network\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"card\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"convertMoney\",\"dbName\":\"convert_money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToWithdraw\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RechargeAccount\":{\"dbName\":\"recharge_accounts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountAddress\",\"dbName\":\"account_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"GENDER\":{\"values\":[{\"name\":\"UNKNOWN\",\"dbName\":null},{\"name\":\"MAN\",\"dbName\":null},{\"name\":\"WOMAN\",\"dbName\":null}],\"dbName\":null},\"STOCK_STATUS\":{\"values\":[{\"name\":\"NORMAL\",\"dbName\":null},{\"name\":\"DISABLE\",\"dbName\":null},{\"name\":\"DOWN\",\"dbName\":null}],\"dbName\":null},\"RechargeType\":{\"values\":[{\"name\":\"CARD\",\"dbName\":null},{\"name\":\"CRYPTO\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

