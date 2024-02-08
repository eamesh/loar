
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
  gender: 'gender',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MemberScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  avatar: 'avatar',
  gender: 'gender',
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
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StockRecordScalarFieldEnum = {
  id: 'id',
  price: 'price',
  open: 'open',
  close: 'close',
  high: 'high',
  low: 'low',
  turnover: 'turnover',
  volume: 'volume',
  createdAt: 'createdAt',
  stockId: 'stockId'
};

exports.Prisma.StockOnMembersScalarFieldEnum = {
  id: 'id',
  memberId: 'memberId',
  stockId: 'stockId',
  createdAt: 'createdAt'
};

exports.Prisma.SettingScalarFieldEnum = {
  id: 'id',
  key: 'key',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
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
  Stock: 'Stock',
  StockRecord: 'StockRecord',
  StockOnMembers: 'StockOnMembers',
  Setting: 'Setting'
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
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuLi9nZW5lcmF0ZWQvcHJpc21hLWNsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCm1vZGVsIFVzZXIgewogIGlkICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgU3RyaW5nICAgIEB1bmlxdWUKICBuYW1lICAgICAgU3RyaW5nPwogIGF2YXRhciAgICBTdHJpbmc/CiAgZ2VuZGVyICAgIEdFTkRFUiAgICBAZGVmYXVsdChVTktOT1dOKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0IERhdGVUaW1lPwoKICBAQG1hcCgidXNlcnMiKQp9Cgptb2RlbCBNZW1iZXIgewogIGlkICAgICAgICBCaWdJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgU3RyaW5nICAgIEB1bmlxdWUKICBuYW1lICAgICAgU3RyaW5nPwogIGF2YXRhciAgICBTdHJpbmc/CiAgZ2VuZGVyICAgIEdFTkRFUiAgICBAZGVmYXVsdChVTktOT1dOKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIHN0b2NrcyBTdG9ja09uTWVtYmVyc1tdCgogIEBAbWFwKCJtZW1iZXJzIikKfQoKbW9kZWwgU3RvY2sgewogIGlkICAgICAgICBCaWdJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjb2RlICAgICAgU3RyaW5nICAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICBzeW1ib2wgICAgU3RyaW5nICAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICBuYW1lICAgICAgU3RyaW5nICAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICBjbmFtZSAgICAgU3RyaW5nPyAgICAgIEBkYi5WYXJDaGFyKDEwMCkKICB0eXBlICAgICAgU3RyaW5nICAgICAgIEBkYi5WYXJDaGFyKDIwKQogIGxvZ28gICAgICBTdHJpbmc/ICAgICAgQGRiLlZhckNoYXIoMjAwKQogIHNvayAgICAgICBTdHJpbmc/ICAgICAgQGRiLlZhckNoYXIoMzApCiAgb3B0aW9uYWwgIEJvb2xlYW4gICAgICBAZGVmYXVsdChmYWxzZSkKICBzdGF0dXMgICAgU1RPQ0tfU1RBVFVTIEBkZWZhdWx0KE5PUk1BTCkKICBjcmVhdGVkQXQgRGF0ZVRpbWUgICAgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKICB1cGRhdGVkQXQgRGF0ZVRpbWU/ICAgIEBtYXAoInVwZGF0ZWRfYXQiKQoKICBtZW1iZXJzICAgICBTdG9ja09uTWVtYmVyc1tdCiAgc3RvY2tSZWNvcmQgU3RvY2tSZWNvcmQ/CgogIEBAdW5pcXVlKFtjb2RlLCBzeW1ib2wsIHR5cGVdKQogIEBAbWFwKCJzdG9ja3MiKQp9Cgptb2RlbCBTdG9ja1JlY29yZCB7CiAgaWQgICAgICAgIEJpZ0ludCAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgLy8g5pyA5paw5Lu3CiAgcHJpY2UgICAgIFN0cmluZyAgIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDlvIDnm5jku7cKICBvcGVuICAgICAgU3RyaW5nICAgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaUtuebmOS7twogIGNsb3NlICAgICBTdHJpbmcgICBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5pyA6auYCiAgaGlnaCAgICAgIFN0cmluZyAgIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDmnIDkvY4KICBsb3cgICAgICAgU3RyaW5nICAgQGRiLlZhckNoYXIoMjAwKQogIC8vIOaIkOS6pOmHjwogIHR1cm5vdmVyICBTdHJpbmcgICBAZGIuVmFyQ2hhcigyMDApCiAgLy8g5oiQ5Lqk6aKdCiAgdm9sdW1lICAgIFN0cmluZyAgIEBkYi5WYXJDaGFyKDIwMCkKICAvLyDml7bpl7QKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQoKICBzdG9ja0lkIEJpZ0ludCBAdW5pcXVlIEBtYXAoInN0b2NrX2lkIikKICBzdG9jayAgIFN0b2NrICBAcmVsYXRpb24oZmllbGRzOiBbc3RvY2tJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAbWFwKCJzdG9ja19yZWNvcmRzIikKfQoKbW9kZWwgU3RvY2tPbk1lbWJlcnMgewogIGlkICAgICAgIEJpZ0ludCBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG1lbWJlciAgIE1lbWJlciBAcmVsYXRpb24oZmllbGRzOiBbbWVtYmVySWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIG1lbWJlcklkIEJpZ0ludCBAbWFwKCJtZW1iZXJfaWQiKQogIHN0b2NrICAgIFN0b2NrICBAcmVsYXRpb24oZmllbGRzOiBbc3RvY2tJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgc3RvY2tJZCAgQmlnSW50IEBtYXAoInN0b2NrX2lkIikKCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkX2F0IikKCiAgQEBtYXAoInN0b2NrX29uX21lbWJlcnMiKQp9Cgptb2RlbCBTZXR0aW5nIHsKICBpZCAgICAgICAgQmlnSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAga2V5ICAgICAgIFN0cmluZwogIHZhbHVlICAgICBTdHJpbmcgICAgQGRiLlRleHQoKQogIGNyZWF0ZWRBdCBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRfYXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZT8gQG1hcCgidXBkYXRlZF9hdCIpCgogIEBAbWFwKCJzZXR0aW5ncyIpCn0KCmVudW0gR0VOREVSIHsKICBVTktOT1dOCiAgTUFOCiAgV09NQU4KfQoKZW51bSBTVE9DS19TVEFUVVMgewogIE5PUk1BTAogIERJU0FCTEUKICBET1dOCn0K",
  "inlineSchemaHash": "5d31aac056416f8d99bc31482996ae4654300906376ddd4fbd2fbb1daaa0e484",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"users\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"GENDER\",\"default\":\"UNKNOWN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Member\":{\"dbName\":\"members\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatar\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"GENDER\",\"default\":\"UNKNOWN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stocks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockOnMembers\",\"relationName\":\"MemberToStockOnMembers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Stock\":{\"dbName\":\"stocks\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"symbol\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sok\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"optional\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"STOCK_STATUS\",\"default\":\"NORMAL\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"members\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockOnMembers\",\"relationName\":\"StockToStockOnMembers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockRecord\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"StockRecord\",\"relationName\":\"StockToStockRecord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"code\",\"symbol\",\"type\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"code\",\"symbol\",\"type\"]}],\"isGenerated\":false},\"StockRecord\":{\"dbName\":\"stock_records\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"open\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"close\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"high\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"low\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"turnover\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"volume\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockId\",\"dbName\":\"stock_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stock\",\"relationName\":\"StockToStockRecord\",\"relationFromFields\":[\"stockId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"StockOnMembers\":{\"dbName\":\"stock_on_members\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"member\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Member\",\"relationName\":\"MemberToStockOnMembers\",\"relationFromFields\":[\"memberId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"memberId\",\"dbName\":\"member_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Stock\",\"relationName\":\"StockToStockOnMembers\",\"relationFromFields\":[\"stockId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stockId\",\"dbName\":\"stock_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Setting\":{\"dbName\":\"settings\",\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"GENDER\":{\"values\":[{\"name\":\"UNKNOWN\",\"dbName\":null},{\"name\":\"MAN\",\"dbName\":null},{\"name\":\"WOMAN\",\"dbName\":null}],\"dbName\":null},\"STOCK_STATUS\":{\"values\":[{\"name\":\"NORMAL\",\"dbName\":null},{\"name\":\"DISABLE\",\"dbName\":null},{\"name\":\"DOWN\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
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

