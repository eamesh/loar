
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
  lockBalance: 'lockBalance',
  lastLoginTime: 'lastLoginTime'
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
  cat: 'cat',
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
  openTime: 'openTime',
  timezone: 'timezone',
  beforeTime: 'beforeTime',
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
  isBefore: 'isBefore',
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
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvcHJpc21hLWNsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgU3RyaW5nICAgIEB1bmlxdWUKICBuYW1lICAgICAgU3RyaW5nPwogIGF2YXRhciAgICBTdHJpbmc/CiAgcGFzc3dvcmQgIFN0cmluZwogIGdlbmRlciAgICBHRU5ERVIgICAgQGRlZmF1bHQoVU5LTk9XTikKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8KCiAgQEBtYXAoInVzZXJzIikKfQoKbW9kZWwgTWVtYmVyIHsKICBpZCAgICAgICAgICAgICAgQmlnSW50ICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgQHVuaXF1ZQogIG5hbWUgICAgICAgICAgICBTdHJpbmc/CiAgYXZhdGFyICAgICAgICAgIFN0cmluZz8KICBwYXNzd29yZCAgICAgICAgU3RyaW5nCiAgZ2VuZGVyICAgICAgICAgIEdFTkRFUiAgICAgICAgICAgIEBkZWZhdWx0KFVOS05PV04pCiAgYWRkcmVzcyAgICAgICAgIFN0cmluZz8KICBhY2NvdW50QmFsYW5jZSAgSnNvbj8KICBzdGF0dXMgICAgICAgICAgSW50ICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICB0eXBlICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBjcmVhdGVkQXQgICAgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgICBEYXRlVGltZT8gICAgICAgICBAbWFwKCJ1cGRhdGVkX2F0IikKICAvLyDkvZnpop0KICBiYWxhbmNlICAgICAgICAgRGVjaW1hbCAgICAgICAgICAgQGRlZmF1bHQoMCkgQGRiLkRlY2ltYWwoMjAsIDUpCiAgLy8g5Ya757uT5L2Z6aKdCiAgdW5CYWxhbmNlICAgICAgIERlY2ltYWwgICAgICAgICAgIEBkZWZhdWx0KDApIEBtYXAoInVuX2JhbGFuY2UiKSBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDplIHlrprkvZnpop0KICBsb2NrQmFsYW5jZSAgICAgRGVjaW1hbCAgICAgICAgICAgQGRlZmF1bHQoMCkgQG1hcCgibG9ja19iYWxhbmNlIikgQGRiLkRlY2ltYWwoMjAsIDUpCiAgbGFzdExvZ2luVGltZSAgIERhdGVUaW1lPwogIHN0b2NrUG9zdGlvbiAgICBTdG9ja1Bvc2l0aW9uW10KICBtZW1iZXJEZXRhaWwgICAgTWVtYmVyRGV0YWlsW10KICBtZW1iZXJTdWJzY3JpYmUgTWVtYmVyU3Vic2NyaWJlW10KICBtZW1iZXJSZWNoYXJnZXMgTWVtYmVyUmVjaGFyZ2VbXQogIG1lbWJlcldpdGhkcmF3cyBNZW1iZXJXaXRoZHJhd1tdCiAgbWVtYmVyQ2FyZHMgICAgIE1lbWJlckNhcmRbXQogIHJlY2hhcmdlcyAgICAgICBSZWNoYXJnZVtdCiAgd2l0aGRyYXdzICAgICAgIFdpdGhkcmF3W10KCiAgQEBtYXAoIm1lbWJlcnMiKQp9Cgptb2RlbCBNZW1iZXJSZWNoYXJnZSB7CiAgaWQgICAgICAgICAgICBCaWdJbnQgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbW9uZXkgICAgICAgICBEZWNpbWFsIEBkYi5EZWNpbWFsKDIwLCA1KQogIHJlY2hhcmdlTW9uZXkgRGVjaW1hbCBAZGVmYXVsdCgwKSBAbWFwKCJyZWNoYXJnZV9tb25leSIpIEBkYi5EZWNpbWFsKDIwLCA1KQogIHNjcmVlbiAgICAgICAgSnNvbgogIG1hcmtldCAgICAgICAgU3RyaW5nCiAgc3RhdHVzICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDApCgogIG1lbWJlcklkICBCaWdJbnQgICAgQG1hcCgibWVtYmVyX2lkIikKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBtZW1iZXIgTWVtYmVyIEByZWxhdGlvbihmaWVsZHM6IFttZW1iZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAbWFwKCJtZW1iZXJfcmVjaGFyZ2VzIikKfQoKbW9kZWwgTWVtYmVyV2l0aGRyYXcgewogIGlkICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBtb25leSAgICAgRGVjaW1hbCAgIEBkYi5EZWNpbWFsKDIwLCA1KQogIHJlbWFyayAgICBTdHJpbmc/CiAgc3RhdHVzICAgIEludCAgICAgICBAZGVmYXVsdCgwKQogIGFkZHJlc3MgICBTdHJpbmc/CiAgbWFya2V0ICAgIFN0cmluZwogIG1lbWJlcklkICBCaWdJbnQgICAgQG1hcCgibWVtYmVyX2lkIikKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBtZW1iZXIgTWVtYmVyIEByZWxhdGlvbihmaWVsZHM6IFttZW1iZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAbWFwKCJtZW1iZXJfd2l0aGRyYXdzIikKfQoKbW9kZWwgU3RvY2tTeW1ib2wgewogIGlkICAgICAgICAgICAgIEJpZ0ludCAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICAvLyDns7vnu59DT0RFCiAgY29kZSAgICAgICAgICAgU3RyaW5nCiAgY2F0ICAgICAgICAgICAgU3RyaW5nPyBAZGIuVmFyQ2hhcigyMCkKICAvLyDor4HliLjluILlnLoKICBtYXJrZXQgICAgICAgICBTdHJpbmcKICAvLyDkuIrnur/nirbmgIEKICBvbmxpbmUgICAgICAgICBJbnQgICAgIEBkZWZhdWx0KDEpCiAgLy8g6K+B5Yi45Luj56CBCiAgc3ltYm9sICAgICAgICAgU3RyaW5nCiAgLy8g6K+B5Yi45ZCN56ewCiAgc2hvd05hbWUgICAgICAgU3RyaW5nCiAgbmFtZSAgICAgICAgICAgU3RyaW5nPwogIHN5bWJvbFNob3dOYW1lIFN0cmluZz8gQG1hcCgic3ltYm9sX3Nob3dfbmFtZSIpCiAgdHJhZGUgICAgICAgICAgSW50ICAgICBAZGVmYXVsdCgwKQogIC8vIOivgeWIuOexu+WeiyAwIOaMh+aVsCAxIOivgeiCoSAyIEVURgogIHR5cGUgICAgICAgICAgIEludCAgICAgQGRlZmF1bHQoMCkKICAvLyDmnIDmlrDku7cKICBuZXdQcmljZSAgICAgICBTdHJpbmc/IEBtYXAoIm5ld19wcmljZSIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDlvIDnm5jku7cKICBvcGVuICAgICAgICAgICBTdHJpbmc/IEBkZWZhdWx0KCIwLjAwMCIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmlLbnm5jku7cKICBjbG9zZSAgICAgICAgICBTdHJpbmc/IEBkZWZhdWx0KCIwLjAwMCIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmnIDpq5gKICBoaWdoICAgICAgICAgICBTdHJpbmc/IEBkZWZhdWx0KCIwLjAwMCIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmnIDkvY4KICBsb3cgICAgICAgICAgICBTdHJpbmc/IEBkZWZhdWx0KCIwLjAwMCIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmiJDkuqTph48KICBhbW91bnQgICAgICAgICBTdHJpbmc/IEBkZWZhdWx0KCIwLjAwMCIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmiJDkuqTpop0KICB2b2x1bWUgICAgICAgICBTdHJpbmc/IEBkZWZhdWx0KCIwLjAwMCIpIEBkYi5WYXJDaGFyKDIwMCkKCiAgY2hhbmdlICAgICAgICBTdHJpbmc/IEBkZWZhdWx0KCIwIikKICBjaGFuZ2VQZXJjZW50IFN0cmluZz8gQGRlZmF1bHQoIjAiKQoKICBkYXRlICAgICAgIFN0cmluZz8KICBzeW5jICAgICAgIEpzb24/CiAgc3luY01hcmtldCBTdHJpbmcgICAgQG1hcCgic3luY19tYXJrZXQiKQogIGNyZWF0ZWRBdCAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgIERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgc3RvY2tQb3N0aW9uIFN0b2NrUG9zaXRpb25bXQoKICBAQHVuaXF1ZShbc3ltYm9sLCBtYXJrZXRdKQogIEBAbWFwKCJzdG9ja19zeW1ib2xzIikKfQoKbW9kZWwgU3RvY2sgewogIGlkICAgICAgICAgICAgQmlnSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY29kZSAgICAgICAgICBTdHJpbmcgICAgICAgQGRiLlZhckNoYXIoMTAwKQogIHN5bWJvbCAgICAgICAgU3RyaW5nICAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICBuYW1lICAgICAgICAgIFN0cmluZyAgICAgICBAZGIuVmFyQ2hhcigxMDApCiAgY25hbWUgICAgICAgICBTdHJpbmc/ICAgICAgQGRiLlZhckNoYXIoMTAwKQogIHR5cGUgICAgICAgICAgU3RyaW5nICAgICAgIEBkYi5WYXJDaGFyKDIwKQogIGxvZ28gICAgICAgICAgU3RyaW5nPyAgICAgIEBkYi5WYXJDaGFyKDIwMCkKICBzb2sgICAgICAgICAgIFN0cmluZz8gICAgICBAZGIuVmFyQ2hhcigzMCkKICBvcHRpb25hbCAgICAgIEJvb2xlYW4gICAgICBAZGVmYXVsdChmYWxzZSkKICAvLyDmnIDmlrDku7cKICBuZXdQcmljZSAgICAgIFN0cmluZz8gICAgICBAZGVmYXVsdCgiMCIpIEBtYXAoIm5ld19wcmljZSIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDlvIDnm5jku7cKICBvcGVuICAgICAgICAgIFN0cmluZz8gICAgICBAZGVmYXVsdCgiMCIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmlLbnm5jku7cKICBjbG9zZSAgICAgICAgIFN0cmluZz8gICAgICBAZGVmYXVsdCgiMCIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmnIDpq5gKICBoaWdoICAgICAgICAgIFN0cmluZz8gICAgICBAZGVmYXVsdCgiMCIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmnIDkvY4KICBsb3cgICAgICAgICAgIFN0cmluZz8gICAgICBAZGVmYXVsdCgiMCIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmiJDkuqTph48KICBhbW91bnQgICAgICAgIFN0cmluZz8gICAgICBAZGVmYXVsdCgiMCIpIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmiJDkuqTpop0KICB2b2x1bWUgICAgICAgIFN0cmluZz8gICAgICBAZGVmYXVsdCgiMCIpIEBkYi5WYXJDaGFyKDIwMCkKICBzdGF0dXMgICAgICAgIFNUT0NLX1NUQVRVUyBAZGVmYXVsdChOT1JNQUwpCiAgY2hhbmdlICAgICAgICBTdHJpbmc/ICAgICAgQGRlZmF1bHQoIjAiKQogIGNoYW5nZVBlcmNlbnQgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCIwJSIpCiAgZGF0ZSAgICAgICAgICBTdHJpbmc/CiAgZXh0cmEgICAgICAgICBKc29uPwogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgICAgIERhdGVUaW1lPyAgICBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgc3RvY2tSZWNvcmQgU3RvY2tSZWNvcmRbXQoKICBAQHVuaXF1ZShbY29kZSwgc3ltYm9sLCB0eXBlXSkKICBAQG1hcCgic3RvY2tzIikKfQoKbW9kZWwgU3RvY2tSZWNvcmQgewogIGlkICAgICAgIEJpZ0ludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIC8vIOacgOaWsOS7twogIG5ld1ByaWNlIFN0cmluZyBAbWFwKCJuZXdfcHJpY2UiKSBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5byA55uY5Lu3CiAgb3BlbiAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmlLbnm5jku7cKICBjbG9zZSAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOmrmAogIGhpZ2ggICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5pyA5L2OCiAgbG93ICAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmiJDkuqTph48KICBhbW91bnQgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOminQogIHZvbHVtZSAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCgogIGRhdGUgICAgICBTdHJpbmcKICBleHRyYSAgICAgSnNvbgogIC8vIOaXtumXtAogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCgogIHN0b2NrSWQgQmlnSW50IEBtYXAoInN0b2NrX2lkIikKICBzdG9jayAgIFN0b2NrICBAcmVsYXRpb24oZmllbGRzOiBbc3RvY2tJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAbWFwKCJzdG9ja19yZWNvcmRzIikKfQoKbW9kZWwgU3RvY2tNYXJrZXQgewogIGlkICAgICAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIC8vIOW4guWcuuagh+ivhgogIGNvZGUgICAgICAgICAgIFN0cmluZz8KICAvLyDluILlnLrkuqTmmJPotKfluIEKICBjdXJyZW5jeSAgICAgICBTdHJpbmc/CiAgc2hvd05hbWUgICAgICAgU3RyaW5nPwogIC8vIOacgOWkp+WHuumHkQogIG1heFdpdGhkcmF3YWwgIFN0cmluZz8gICBAbWFwKCJtYXhfd2l0aGRyYXdhbCIpCiAgLy8g5pyA5bCP5Ye66YeRCiAgbWluV2l0aGRyYXdhbCAgU3RyaW5nPyAgIEBtYXAoIm1pbl93aXRoZHJhd2FsIikKICAvLyDmiYvnu63otLnnjocKICBmZWVSYXRlICAgICAgICBTdHJpbmc/ICAgQG1hcCgiZmVlX3JhdGUiKQogIC8vIOacgOS9juaJi+e7rei0uQogIG1pbkZlZSAgICAgICAgIFN0cmluZz8gICBAbWFwKCJtaW5fZmVlIikKICAvLyDmnaDmnYblgI3mlbAKICBsZXZlciAgICAgICAgICBTdHJpbmc/CiAgLy8g57u05oyB5L+d6K+B6YeR546HCiAgbW1yICAgICAgICAgICAgU3RyaW5nPwogIC8vIOmFjei1hOi0ueeOhwogIGFsbG9jYXRpb25SYXRlIFN0cmluZz8gICBAbWFwKCJhbGxvY2F0aW9uX3JhdGUiKQogIC8vIOS4i+WNlemikeeOhwogIGZyZXF1ZW5jeSAgICAgIEludD8KICAvLyDpmZDliLbml7bpl7Qv56eSCiAgYmluZGluZ0hvdXJzICAgSW50PyAgICAgIEBtYXAoImJpbmRpbmdfaG91cnMiKQogIC8vIOW4guWcuuWktOmDqOivgeWIuAogIGhlYWRTeW1ib2xzICAgIFN0cmluZz8gICBAbWFwKCJoZWFkX3N5bWJvbHMiKQogIC8vIOaOkuW6jwogIHNvcnQgICAgICAgICAgIEludD8gICAgICBAZGVmYXVsdCgwKQogIC8vIOW4guWcuuaYr+WQpuS4iue6vwogIG9ubGluZSAgICAgICAgIEludD8gICAgICBAZGVmYXVsdCgxKQogIC8vIOi0p+W4geaYr+WQpuS4iue6vwogIGNvbmxpbmUgICAgICAgIEludD8gICAgICBAZGVmYXVsdCgxKQogIG9wZW5UaW1lICAgICAgIFN0cmluZz8KICB0aW1lem9uZSAgICAgICBTdHJpbmc/CiAgYmVmb3JlVGltZSAgICAgU3RyaW5nPwogIGNyZWF0ZWRBdCAgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBAQG1hcCgic3RvY2tfbWFya2V0cyIpCn0KCm1vZGVsIFN0b2NrRmF2b3JpdGUgewogIGlkICAgICAgIEJpZ0ludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIC8vIOacgOaWsOS7twogIG5ld1ByaWNlIFN0cmluZyBAbWFwKCJuZXdfcHJpY2UiKSBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5byA55uY5Lu3CiAgb3BlbiAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmlLbnm5jku7cKICBjbG9zZSAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOacgOmrmAogIGhpZ2ggICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5pyA5L2OCiAgbG93ICAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmiJDkuqTph48KICBhbW91bnQgICBTdHJpbmcgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOminQogIHZvbHVtZSAgIFN0cmluZyBAZGIuVmFyQ2hhcigyMDApCgogIGRhdGUgIFN0cmluZz8KICBleHRyYSBKc29uPwoKICBtZW1iZXJJZCAgICAgIEJpZ0ludCBAbWFwKCJtZW1iZXJfaWQiKQogIHN0b2NrU3ltYm9sSWQgQmlnSW50IEBtYXAoInN0b2NrX3N5bWJvbF9pZCIpCgogIC8vIOaXtumXtAogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCgogIEBAbWFwKCJzdG9ja19mYXZvcml0ZXMiKQp9Cgptb2RlbCBTdG9ja1N1YnNjcmliZSB7CiAgaWQgICAgICAgICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g5biC5Zy6CiAgbWFya2V0ICAgICAgICAgICAgU3RyaW5nCiAgLy8g6IKh56Wo5ZCN56ewCiAgbmFtZSAgICAgICAgICAgICAgU3RyaW5nCiAgLy8g6IKh56Wo5Luj56CBCiAgY29kZSAgICAgICAgICAgICAgU3RyaW5nCiAgLy8g5byA5aeL6K6k6LSt5pe26Ze0CiAgc3RhcnRBdCAgICAgICAgICAgRGF0ZVRpbWU/IEBtYXAoInN0YXJ0X2F0IikKICAvLyDnu5PmnZ/orqTotK3ml7bpl7QKICBlbmRBdCAgICAgICAgICAgICBEYXRlVGltZT8gQG1hcCgiZW5kX2F0IikKICAvLyDkuIrluILml7bpl7QKICB1cEF0ICAgICAgICAgICAgICBEYXRlVGltZT8gQG1hcCgidXBfYXQiKQogIC8vIOWPkeihjOmHjwogIGNpcmN1bGF0aW9uICAgICAgIEludD8KICAvLyDliankvZnlj5HooYzph48KICByZW1haW5DaXJjdWxhdGlvbiBJbnQ/ICAgICAgQG1hcCgicmVtYWluX2NpcmN1bGF0aW9uIikKICAvLyDlj5HooYzku7cKICBpcG9QcmljZSAgICAgICAgICBEZWNpbWFsICAgQG1hcCgiaXBvX3ByaWNlIikgQGRiLkRlY2ltYWwoMjAsIDUpCiAgLy8g5oub6IKh5Lu3CiAgaXNzdWVQcmljZSAgICAgICAgRGVjaW1hbCAgIEBtYXAoImlzc3VlX3ByaWNlIikgQGRiLkRlY2ltYWwoMjAsIDUpCiAgLy8g5YWs5biD57uT5p6c5pe26Ze0CiAgcmVzdWx0QXQgICAgICAgICAgRGF0ZVRpbWU/IEBtYXAoInJlc3VsdF9hdCIpCiAgLy8g6K6k6LSt5pWw6YeP5Lu35qC8CiAgc3ViQW1vdW50ICAgICAgICAgSnNvbj8gICAgIEBtYXAoInN1Yl9hbW91bnQiKQogIC8vIOeKtuaAgQogIHN0YXR1cyAgICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgxKQogIHR5cGUgICAgICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgwKQogIGNyZWF0ZWRBdCAgICAgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgICAgICAgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBAQG1hcCgic3RvY2tfc3Vic2NyaWJlcyIpCn0KCm1vZGVsIE1lbWJlclN1YnNjcmliZSB7CiAgaWQgICAgICAgICAgICAgICAgQmlnSW50ICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBtYXJrZXQgICAgICAgICAgICBTdHJpbmcKICBjb2RlICAgICAgICAgICAgICBTdHJpbmcKICBuYW1lICAgICAgICAgICAgICBTdHJpbmcKICAvLyDnlLPotK3mlbDph48KICBhbW91bnQgICAgICAgICAgICBJbnQKICAvLyDnlLPotK3ph5Hpop0KICBtb25leSAgICAgICAgICAgICBEZWNpbWFsICBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDnlLPotK3ljZXlj7cKICBubyAgICAgICAgICAgICAgICBTdHJpbmcKICAvLyDkuK3nrb7mlbDph48KICB3aW5uaW5nQW1vdW50ICAgICBJbnQ/ICAgICBAbWFwKCJ3aW5uaW5nX2Ftb3VudCIpCiAgLy8g5Lit562+5Lu35qC8CiAgd2lubmluZ1ByaWNlICAgICAgRGVjaW1hbD8gQG1hcCgid2lubmluZ19wcmljZSIpIEBkYi5EZWNpbWFsKDIwLCA1KQogIC8vIOS4reetvuaAu+minQogIHRvdGFsV2lubmluZ1ByaWNlIERlY2ltYWw/IEBtYXAoInRvdGFsX3dpbm5pbmdfcHJpY2UiKSBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDlrp7pmYXph5Hpop0KICBhY3R1YWxBbW91bnQgICAgICBEZWNpbWFsPyBAbWFwKCJhY3R1YWxfYW1vdW50IikgQGRiLkRlY2ltYWwoMjAsIDUpCiAgLy8g6K6i5Y2V54q25oCBCiAgc3RhdHVzICAgICAgICAgICAgSW50ICAgICAgQGRlZmF1bHQoMSkKICAvLyDkuK3pl7TnirbmgIEKICB0eXBlICAgICAgICAgICAgICBJbnQgICAgICBAZGVmYXVsdCgwKQogIC8vIOaYr+WQpuW3suaMgeS7kwogIHBvc2l0aW9uICAgICAgICAgIEludCAgICAgIEBkZWZhdWx0KDApCgogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIHN0b2NrU3Vic2NyaWJlSWQgQmlnSW50IEBtYXAoInN0b2NrX3N1YnNjcmliZV9pZCIpCgogIG1lbWJlcklkIEJpZ0ludCBAbWFwKCJtZW1iZXJfaWQiKQogIG1lbWJlciAgIE1lbWJlciBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQG1hcCgibWVtYmVyX3N1YnNjcmliZXMiKQp9Cgptb2RlbCBTdG9ja1Bvc2l0aW9uIHsKICBpZCAgICAgICAgIEJpZ0ludCAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICAvLyDmjIHku5PmlbDph48KICBhbW91bnQgICAgIEludAogIC8vIOmihOS8sOeIhuS7k+S7twogIGJsYXN0ICAgICAgU3RyaW5nCiAgLy8g5oyB5LuT5Z2H5Lu3CiAgcHJpY2UgICAgICBTdHJpbmcKICAvLyDkuqTmmJPmqKHlvI8KICBtb2RlICAgICAgIEludAogIC8vIOaMgeS7k+eKtuaAgQogIHN0YXR1cyAgICAgSW50CiAgLy8g5L+d6K+B6YeRCiAgYm9uZCAgICAgICBTdHJpbmc/CiAgLy8g5Y2V5Y+3CiAgaWRlbnRpZmllciBTdHJpbmc/CiAgLy8g5p2g5p2GCiAgbGV2ZXIgICAgICBTdHJpbmc/IEBkZWZhdWx0KCIxIikKICAvLyDmraLmjZ8KICBzdG9wTG9zcyAgIFN0cmluZz8KICAvLyDmraLnm4gKICB0YWtlUHJvZml0IFN0cmluZz8KICAvLyDluILlnLoKICBtYXJrZXQgICAgIFN0cmluZz8KCiAgLy8g57G75Z6LCiAgdHlwZSBJbnQKCiAgLy8g5o2f55uKCiAgcGwgICBTdHJpbmc/IEBkZWZhdWx0KCIwIikKICAvLyDmjZ/nm4rnjocKICByYXRlIFN0cmluZz8gQGRlZmF1bHQoIjAiKQoKICBpc0JlZm9yZSBCb29sZWFuIEBkZWZhdWx0KGZhbHNlKQoKICBjdXJyZW50UHJpY2UgU3RyaW5nPyBAbWFwKCJjdXJyZW50X3ByaWNlIikKCiAgbWVtYmVySWQgICAgICBCaWdJbnQgQG1hcCgibWVtYmVyX2lkIikKICBzdG9ja1N5bWJvbElkIEJpZ0ludCBAbWFwKCJzdG9ja19zeW1ib2xfaWQiKQoKICBtZW1iZXIgICAgICBNZW1iZXIgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHN0b2NrU3ltYm9sIFN0b2NrU3ltYm9sIEByZWxhdGlvbihmaWVsZHM6IFtzdG9ja1N5bWJvbElkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0IERhdGVUaW1lPyBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBAQG1hcCgic3RvY2tfcG9zaXRpb25zIikKfQoKbW9kZWwgTWVtYmVyRGV0YWlsIHsKICBpZCAgICAgICBCaWdJbnQgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYWZ0ZXIgICAgU3RyaW5nPwogIGFtb3VudCAgIFN0cmluZz8KICBiZWZvcmUgICBTdHJpbmc/CiAgbWFya2V0ICAgU3RyaW5nPwogIHR5cGUgICAgIEludAogIHJlbWFyayAgIFN0cmluZz8KICBtZW1iZXJJZCBCaWdJbnQgIEBtYXAoIm1lbWJlcl9pZCIpCiAgbWVtYmVyICAgTWVtYmVyICBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQG1hcCgibWVtYmVyX2RldGFpbHMiKQp9Cgptb2RlbCBNZW1iZXJDYXJkIHsKICBpZCAgICAgICAgQmlnSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmFtZSAgICAgIFN0cmluZz8KICB0eXBlICAgICAgUmVjaGFyZ2VUeXBlCiAgZGV0YWlsICAgIEpzb24KICBtZW1iZXJJZCAgQmlnSW50ICAgICAgIEBtYXAoIm1lbWJlcl9pZCIpCiAgbWVtYmVyICAgIE1lbWJlciAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gICAgQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAbWFwKCJtZW1iZXJfY2FyZHMiKQp9Cgptb2RlbCBDb3VudHJ5IHsKICBpZCAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY29kZSAgICAgIFN0cmluZz8gICBAZGIuQ2hhcigzMCkKICBuYW1lICAgICAgU3RyaW5nICAgIEBkYi5WYXJDaGFyKDYwKQogIGVuICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoNjApCiAgdGVsICAgICAgIFN0cmluZyAgICBAZGIuQ2hhcigxMCkKICBweSAgICAgICAgU3RyaW5nICAgIEBkYi5DaGFyKDMwKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAdW5pcXVlKFtweSwgdGVsLCBuYW1lXSkKICBAQG1hcCgiY291bnRyaWVzIikKfQoKbW9kZWwgU2V0dGluZyB7CiAgaWQgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGtleSAgICAgICBTdHJpbmcKICB2YWx1ZSAgICAgU3RyaW5nICAgIEBkYi5UZXh0KCkKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBAQG1hcCgic2V0dGluZ3MiKQp9Cgptb2RlbCBTdG9ja1Jlc291cmNlIHsKICBpZCAgICAgICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBhbW91bnRTY29wZSAgICBTdHJpbmcgICAgQG1hcCgiYW1vdW50X3Njb3BlIikKICBmcmVxdWVuY3lTY29wZSBTdHJpbmcgICAgQG1hcCgiZnJlcXVlbmN5X3Njb3BlIikKICBtYXJrZXQgICAgICAgICBTdHJpbmcgICAgQG1hcCgibWFya2V0IikKICBzcHJlYWRTY29wZSAgICBTdHJpbmcgICAgQG1hcCgic3ByZWFkX3Njb3BlIikKICBlbmRBdCAgICAgICAgICBTdHJpbmcgICAgQG1hcCgiZW5kX2F0IikKICBzdGFydEF0ICAgICAgICBTdHJpbmcgICAgQG1hcCgic3RhcnRfYXQiKQogIHN5bWJvbCAgICAgICAgIFN0cmluZwogIHR5cGUgICAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgxKQogIHN0YXR1cyAgICAgICAgIEludCAgICAgICBAZGVmYXVsdCgxKQogIGNyZWF0ZWRBdCAgICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWU/IEBtYXAoInVwZGF0ZWRfYXQiKQoKICBAQG1hcCgic3RvY2tfcmVzb3VyY2VzIikKfQoKbW9kZWwgU3RvY2tSZXNvdXJjZVJlY29yZCB7CiAgaWQgICAgICAgICAgICAgIEJpZ0ludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG9wZW4gICAgICAgICAgICBTdHJpbmcKICBoaWdoICAgICAgICAgICAgU3RyaW5nCiAgY2xvc2UgICAgICAgICAgIFN0cmluZwogIGxvdyAgICAgICAgICAgICBTdHJpbmcKICB0aW1lICAgICAgICAgICAgU3RyaW5nCiAgc3RvY2tSZXNvdXJjZUlkIEJpZ0ludCBAbWFwKCJzdG9ja19yZXNvdXJjZV9pZCIpCgogIEBAbWFwKCJzdG9ja19yZXNvdXJjZV9yZWNvcmRzIikKfQoKZW51bSBHRU5ERVIgewogIFVOS05PV04KICBNQU4KICBXT01BTgp9CgplbnVtIFNUT0NLX1NUQVRVUyB7CiAgTk9STUFMCiAgRElTQUJMRQogIERPV04KfQoKbW9kZWwgQXJ0aWNsZSB7CiAgaWQgICAgICAgICAgIEJpZ0ludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHRodW1iICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjUwKQogIHRpdGxlICAgICAgICBTdHJpbmcgICAgQGRiLlZhckNoYXIoMjUwKQogIG1hcmtldCAgICAgICBTdHJpbmc/CiAgY3Jhd2xlclRodW1iIFN0cmluZz8gICBAbWFwKCJjcmF3bGVyX3RodW1iIikgQGRiLlZhckNoYXIoMjUwKQogIHNvdXJjZSAgICAgICBTdHJpbmc/ICAgQGRiLlZhckNoYXIoMjUwKQogIGNvbnRlbnQgICAgICBTdHJpbmcgICAgQGRiLkxvbmdUZXh0CiAgY3JlYXRlZEF0ICAgIERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgIERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgQEBtYXAoImFydGljbGVzIikKfQoKbW9kZWwgUmVjaGFyZ2UgewogIGlkICAgICAgICAgICAgIEJpZ0ludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIC8vIOW4guWcugogIG1hcmtldCAgICAgICAgIFN0cmluZwogIC8vIOmHkeminQogIG1vbmV5ICAgICAgICAgIERlY2ltYWwgICAgICBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDlhYXlgLznsbvlnosKICB0eXBlICAgICAgICAgICBSZWNoYXJnZVR5cGUKICAvLyDlhYXlgLzluIHnp40KICBhY2NvdW50ICAgICAgICBTdHJpbmcKICAvLyDlhYXlgLznvZHnu5wKICBhY2NvdW50TmV0d29yayBTdHJpbmcgICAgICAgQG1hcCgiYWNjb3VudF9uZXR3b3JrIikKICAvLyDmiKrlm74KICBzY3JlZW5zICAgICAgICBKc29uCiAgLy8g5a6h5qC454q25oCBCiAgc3RhdHVzICAgICAgICAgSW50ICAgICAgICAgIEBkZWZhdWx0KDApCiAgcGFzc01vbmV5ICAgICAgRGVjaW1hbCAgICAgIEBkZWZhdWx0KDApIEBtYXAoInBhc3NfbW9uZXkiKSBAZGIuRGVjaW1hbCgyMCwgNSkKICBjb252ZXJ0TW9uZXkgICBEZWNpbWFsICAgICAgQGRlZmF1bHQoMCkgQG1hcCgiY29udmVydF9tb25leSIpIEBkYi5EZWNpbWFsKDIwLCA1KQoKICBtZW1iZXJJZCAgQmlnSW50ICAgIEBtYXAoIm1lbWJlcl9pZCIpCiAgY3JlYXRlZEF0IERhdGVUaW1lICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0IERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgbWVtYmVyIE1lbWJlciBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQG1hcCgicmVjaGFyZ2VzIikKfQoKbW9kZWwgV2l0aGRyYXcgewogIGlkICAgICAgICAgICAgQmlnSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g5biC5Zy6CiAgbWFya2V0ICAgICAgICBTdHJpbmcKICAvLyDph5Hpop0KICBtb25leSAgICAgICAgIERlY2ltYWwgICAgICBAZGIuRGVjaW1hbCgyMCwgNSkKICAvLyDmj5DnjrDnsbvlnosKICB0eXBlICAgICAgICAgIFJlY2hhcmdlVHlwZQogIC8vIOaPkOeOsOW4geenjQogIGN1cnJlbmN5ICAgICAgU3RyaW5nCiAgY3J5cHRvVHlwZSAgICBTdHJpbmc/ICAgICAgQG1hcCgiY3J5cHRvX3R5cGUiKQogIGNyeXB0b05ldHdvcmsgU3RyaW5nPyAgICAgIEBtYXAoImNyeXB0b19uZXR3b3JrIikKICBjYXJkICAgICAgICAgIEpzb24/CiAgY29udmVydE1vbmV5ICBEZWNpbWFsICAgICAgQGRlZmF1bHQoMCkgQG1hcCgiY29udmVydF9tb25leSIpIEBkYi5EZWNpbWFsKDIwLCA1KQogIC8vIOWuoeaguOeKtuaAgQogIHN0YXR1cyAgICAgICAgSW50ICAgICAgICAgIEBkZWZhdWx0KDApCiAgbWVtYmVySWQgICAgICBCaWdJbnQgICAgICAgQG1hcCgibWVtYmVyX2lkIikKICBjcmVhdGVkQXQgICAgIERhdGVUaW1lICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZF9hdCIpCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZT8gICAgQG1hcCgidXBkYXRlZF9hdCIpCgogIG1lbWJlciBNZW1iZXIgQHJlbGF0aW9uKGZpZWxkczogW21lbWJlcklkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBtYXAoIndpdGhkcmF3cyIpCn0KCmVudW0gUmVjaGFyZ2VUeXBlIHsKICBDQVJECiAgQ1JZUFRPCn0KCm1vZGVsIFJlY2hhcmdlQWNjb3VudCB7CiAgaWQgICAgICAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYWNjb3VudCAgICAgICAgU3RyaW5nCiAgYWNjb3VudEFkZHJlc3MgU3RyaW5nICAgIEBtYXAoImFjY291bnRfYWRkcmVzcyIpCiAgY3VycmVuY3kgICAgICAgU3RyaW5nCiAgbWF4ICAgICAgICAgICAgRGVjaW1hbCAgIEBkZWZhdWx0KDApIEBkYi5EZWNpbWFsKDIwLCA1KQogIG1pbiAgICAgICAgICAgIERlY2ltYWwgICBAZGVmYXVsdCgwKSBAZGIuRGVjaW1hbCgyMCwgNSkKICBzdGF0dXMgICAgICAgICBJbnQgICAgICAgQGRlZmF1bHQoMCkKICBjcmVhdGVkQXQgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCAgICAgIERhdGVUaW1lPyBAbWFwKCJ1cGRhdGVkX2F0IikKCiAgQEBtYXAoInJlY2hhcmdlX2FjY291bnRzIikKfQo=",
  "inlineSchemaHash": "47c68db1473304de8d3931e12d64e42baa540ec308a5218953654db599fb034f",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"GENDER\",\"default\":\"UNKNOWN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Member\":{\"dbName\":\"members\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"GENDER\",\"default\":\"UNKNOWN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountBalance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"unBalance\",\"dbName\":\"un_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lockBalance\",\"dbName\":\"lock_balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastLoginTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockPostion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockPosition\",\"relationName\":\"MemberToStockPosition\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberDetail\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberDetail\",\"relationName\":\"MemberToMemberDetail\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberSubscribe\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberSubscribe\",\"relationName\":\"MemberToMemberSubscribe\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberRecharges\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberRecharge\",\"relationName\":\"MemberToMemberRecharge\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberWithdraws\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberWithdraw\",\"relationName\":\"MemberToMemberWithdraw\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberCards\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MemberCard\",\"relationName\":\"MemberToMemberCard\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recharges\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Recharge\",\"relationName\":\"MemberToRecharge\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"withdraws\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Withdraw\",\"relationName\":\"MemberToWithdraw\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberRecharge\":{\"dbName\":\"member_recharges\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rechargeMoney\",\"dbName\":\"recharge_money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"screen\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberRecharge\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberWithdraw\":{\"dbName\":\"member_withdraws\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberWithdraw\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockSymbol\":{\"dbName\":\"stock_symbols\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbolShowName\",\"dbName\":\"symbol_show_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0.000\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changePercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sync\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"syncMarket\",\"dbName\":\"sync_market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockPostion\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockPosition\",\"relationName\":\"StockPositionToStockSymbol\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"symbol\",\"market\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"symbol\",\"market\"]}],\"isGenerated\":false},\"Stock\":{\"dbName\":\"stocks\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sok\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"optional\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"STOCK_STATUS\",\"default\":\"NORMAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"change\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changePercent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0%\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockRecord\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockRecord\",\"relationName\":\"StockToStockRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"code\",\"symbol\",\"type\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"code\",\"symbol\",\"type\"]}],\"isGenerated\":false},\"StockRecord\":{\"dbName\":\"stock_records\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockId\",\"dbName\":\"stock_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stock\",\"relationName\":\"StockToStockRecord\",\"relationFromFields\":[\"stockId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockMarket\":{\"dbName\":\"stock_markets\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maxWithdrawal\",\"dbName\":\"max_withdrawal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minWithdrawal\",\"dbName\":\"min_withdrawal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feeRate\",\"dbName\":\"fee_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"minFee\",\"dbName\":\"min_fee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lever\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mmr\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"allocationRate\",\"dbName\":\"allocation_rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bindingHours\",\"dbName\":\"binding_hours\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"headSymbols\",\"dbName\":\"head_symbols\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"online\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"conline\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"openTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"timezone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"beforeTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockFavorite\":{\"dbName\":\"stock_favorites\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"newPrice\",\"dbName\":\"new_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"extra\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSymbolId\",\"dbName\":\"stock_symbol_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockSubscribe\":{\"dbName\":\"stock_subscribes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startAt\",\"dbName\":\"start_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endAt\",\"dbName\":\"end_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upAt\",\"dbName\":\"up_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"circulation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remainCirculation\",\"dbName\":\"remain_circulation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ipoPrice\",\"dbName\":\"ipo_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"issuePrice\",\"dbName\":\"issue_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"resultAt\",\"dbName\":\"result_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAmount\",\"dbName\":\"sub_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberSubscribe\":{\"dbName\":\"member_subscribes\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winningAmount\",\"dbName\":\"winning_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winningPrice\",\"dbName\":\"winning_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalWinningPrice\",\"dbName\":\"total_winning_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualAmount\",\"dbName\":\"actual_amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"position\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSubscribeId\",\"dbName\":\"stock_subscribe_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberSubscribe\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockPosition\":{\"dbName\":\"stock_positions\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"blast\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bond\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"identifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lever\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"1\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stopLoss\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"takeProfit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isBefore\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentPrice\",\"dbName\":\"current_price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSymbolId\",\"dbName\":\"stock_symbol_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToStockPosition\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockSymbol\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockSymbol\",\"relationName\":\"StockPositionToStockSymbol\",\"relationFromFields\":[\"stockSymbolId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberDetail\":{\"dbName\":\"member_details\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"after\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"before\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"remark\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberDetail\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MemberCard\":{\"dbName\":\"member_cards\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RechargeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"detail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToMemberCard\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Country\":{\"dbName\":\"countries\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"en\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"py\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"py\",\"tel\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"py\",\"tel\",\"name\"]}],\"isGenerated\":false},\"Setting\":{\"dbName\":\"settings\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockResource\":{\"dbName\":\"stock_resources\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amountScope\",\"dbName\":\"amount_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"frequencyScope\",\"dbName\":\"frequency_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"dbName\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spreadScope\",\"dbName\":\"spread_scope\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endAt\",\"dbName\":\"end_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startAt\",\"dbName\":\"start_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockResourceRecord\":{\"dbName\":\"stock_resource_records\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockResourceId\",\"dbName\":\"stock_resource_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Article\":{\"dbName\":\"articles\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"crawlerThumb\",\"dbName\":\"crawler_thumb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"source\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Recharge\":{\"dbName\":\"recharges\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RechargeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountNetwork\",\"dbName\":\"account_network\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"screens\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passMoney\",\"dbName\":\"pass_money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"convertMoney\",\"dbName\":\"convert_money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToRecharge\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Withdraw\":{\"dbName\":\"withdraws\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"market\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RechargeType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cryptoType\",\"dbName\":\"crypto_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cryptoNetwork\",\"dbName\":\"crypto_network\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"card\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"convertMoney\",\"dbName\":\"convert_money\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToWithdraw\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RechargeAccount\":{\"dbName\":\"recharge_accounts\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"account\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accountAddress\",\"dbName\":\"account_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currency\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"min\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"GENDER\":{\"values\":[{\"name\":\"UNKNOWN\",\"dbName\":null},{\"name\":\"MAN\",\"dbName\":null},{\"name\":\"WOMAN\",\"dbName\":null}],\"dbName\":null},\"STOCK_STATUS\":{\"values\":[{\"name\":\"NORMAL\",\"dbName\":null},{\"name\":\"DISABLE\",\"dbName\":null},{\"name\":\"DOWN\",\"dbName\":null}],\"dbName\":null},\"RechargeType\":{\"values\":[{\"name\":\"CARD\",\"dbName\":null},{\"name\":\"CRYPTO\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

