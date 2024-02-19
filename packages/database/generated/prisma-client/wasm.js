
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions or Edge Middleware',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
