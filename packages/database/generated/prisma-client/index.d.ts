
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Stock
 * 
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>
/**
 * Model StockRecord
 * 
 */
export type StockRecord = $Result.DefaultSelection<Prisma.$StockRecordPayload>
/**
 * Model StockOnMembers
 * 
 */
export type StockOnMembers = $Result.DefaultSelection<Prisma.$StockOnMembersPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GENDER: {
  UNKNOWN: 'UNKNOWN',
  MAN: 'MAN',
  WOMAN: 'WOMAN'
};

export type GENDER = (typeof GENDER)[keyof typeof GENDER]


export const STOCK_STATUS: {
  NORMAL: 'NORMAL',
  DISABLE: 'DISABLE',
  DOWN: 'DOWN'
};

export type STOCK_STATUS = (typeof STOCK_STATUS)[keyof typeof STOCK_STATUS]

}

export type GENDER = $Enums.GENDER

export const GENDER: typeof $Enums.GENDER

export type STOCK_STATUS = $Enums.STOCK_STATUS

export const STOCK_STATUS: typeof $Enums.STOCK_STATUS

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.StockDelegate<ExtArgs>;

  /**
   * `prisma.stockRecord`: Exposes CRUD operations for the **StockRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockRecords
    * const stockRecords = await prisma.stockRecord.findMany()
    * ```
    */
  get stockRecord(): Prisma.StockRecordDelegate<ExtArgs>;

  /**
   * `prisma.stockOnMembers`: Exposes CRUD operations for the **StockOnMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockOnMembers
    * const stockOnMembers = await prisma.stockOnMembers.findMany()
    * ```
    */
  get stockOnMembers(): Prisma.StockOnMembersDelegate<ExtArgs>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Member: 'Member',
    Stock: 'Stock',
    StockRecord: 'StockRecord',
    StockOnMembers: 'StockOnMembers',
    Setting: 'Setting'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'member' | 'stock' | 'stockRecord' | 'stockOnMembers' | 'setting'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>,
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>
        fields: Prisma.StockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockCountArgs<ExtArgs>,
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      StockRecord: {
        payload: Prisma.$StockRecordPayload<ExtArgs>
        fields: Prisma.StockRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockRecordFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockRecordFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockRecordPayload>
          }
          findFirst: {
            args: Prisma.StockRecordFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockRecordFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockRecordPayload>
          }
          findMany: {
            args: Prisma.StockRecordFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockRecordPayload>[]
          }
          create: {
            args: Prisma.StockRecordCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockRecordPayload>
          }
          createMany: {
            args: Prisma.StockRecordCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StockRecordDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockRecordPayload>
          }
          update: {
            args: Prisma.StockRecordUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockRecordPayload>
          }
          deleteMany: {
            args: Prisma.StockRecordDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StockRecordUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StockRecordUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockRecordPayload>
          }
          aggregate: {
            args: Prisma.StockRecordAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStockRecord>
          }
          groupBy: {
            args: Prisma.StockRecordGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StockRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockRecordCountArgs<ExtArgs>,
            result: $Utils.Optional<StockRecordCountAggregateOutputType> | number
          }
        }
      }
      StockOnMembers: {
        payload: Prisma.$StockOnMembersPayload<ExtArgs>
        fields: Prisma.StockOnMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockOnMembersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOnMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockOnMembersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOnMembersPayload>
          }
          findFirst: {
            args: Prisma.StockOnMembersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOnMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockOnMembersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOnMembersPayload>
          }
          findMany: {
            args: Prisma.StockOnMembersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOnMembersPayload>[]
          }
          create: {
            args: Prisma.StockOnMembersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOnMembersPayload>
          }
          createMany: {
            args: Prisma.StockOnMembersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StockOnMembersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOnMembersPayload>
          }
          update: {
            args: Prisma.StockOnMembersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOnMembersPayload>
          }
          deleteMany: {
            args: Prisma.StockOnMembersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StockOnMembersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StockOnMembersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StockOnMembersPayload>
          }
          aggregate: {
            args: Prisma.StockOnMembersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStockOnMembers>
          }
          groupBy: {
            args: Prisma.StockOnMembersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StockOnMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockOnMembersCountArgs<ExtArgs>,
            result: $Utils.Optional<StockOnMembersCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>,
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    stocks: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | MemberCountOutputTypeCountStocksArgs
  }

  // Custom InputTypes

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockOnMembersWhereInput
  }



  /**
   * Count Type StockCountOutputType
   */

  export type StockCountOutputType = {
    members: number
  }

  export type StockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | StockCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes

  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockCountOutputType
     */
    select?: StockCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockOnMembersWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    name: string | null
    avatar: string | null
    gender: $Enums.GENDER | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    name: string | null
    avatar: string | null
    gender: $Enums.GENDER | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatar: number
    gender: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    email: string
    name: string | null
    avatar: string | null
    gender: $Enums.GENDER
    createdAt: Date
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
      name: string | null
      avatar: string | null
      gender: $Enums.GENDER
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'GENDER'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: bigint | null
  }

  export type MemberMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    name: string | null
    avatar: string | null
    gender: $Enums.GENDER | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    name: string | null
    avatar: string | null
    gender: $Enums.GENDER | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatar: number
    gender: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatar?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: bigint
    email: string
    name: string | null
    avatar: string | null
    gender: $Enums.GENDER
    createdAt: Date
    updatedAt: Date | null
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stocks?: boolean | Member$stocksArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatar?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | Member$stocksArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      stocks: Prisma.$StockOnMembersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
      name: string | null
      avatar: string | null
      gender: $Enums.GENDER
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["member"]>
    composites: {}
  }


  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
    **/
    create<T extends MemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberCreateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Members.
     *     @param {MemberCreateManyArgs} args - Arguments to create many Members.
     *     @example
     *     // Create many Members
     *     const member = await prisma.member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
    **/
    delete<T extends MemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
    **/
    upsert<T extends MemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    stocks<T extends Member$stocksArgs<ExtArgs> = {}>(args?: Subset<T, Member$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Member model
   */ 
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'BigInt'>
    readonly email: FieldRef<"Member", 'String'>
    readonly name: FieldRef<"Member", 'String'>
    readonly avatar: FieldRef<"Member", 'String'>
    readonly gender: FieldRef<"Member", 'GENDER'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }


  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
  }


  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }


  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
  }


  /**
   * Member.stocks
   */
  export type Member$stocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    where?: StockOnMembersWhereInput
    orderBy?: StockOnMembersOrderByWithRelationInput | StockOnMembersOrderByWithRelationInput[]
    cursor?: StockOnMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockOnMembersScalarFieldEnum | StockOnMembersScalarFieldEnum[]
  }


  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
  }



  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    id: number | null
  }

  export type StockSumAggregateOutputType = {
    id: bigint | null
  }

  export type StockMinAggregateOutputType = {
    id: bigint | null
    code: string | null
    symbol: string | null
    name: string | null
    cname: string | null
    type: string | null
    logo: string | null
    sok: string | null
    optional: boolean | null
    status: $Enums.STOCK_STATUS | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StockMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    symbol: string | null
    name: string | null
    cname: string | null
    type: string | null
    logo: string | null
    sok: string | null
    optional: boolean | null
    status: $Enums.STOCK_STATUS | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    code: number
    symbol: number
    name: number
    cname: number
    type: number
    logo: number
    sok: number
    optional: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    id?: true
  }

  export type StockSumAggregateInputType = {
    id?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    code?: true
    symbol?: true
    name?: true
    cname?: true
    type?: true
    logo?: true
    sok?: true
    optional?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    code?: true
    symbol?: true
    name?: true
    cname?: true
    type?: true
    logo?: true
    sok?: true
    optional?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    code?: true
    symbol?: true
    name?: true
    cname?: true
    type?: true
    logo?: true
    sok?: true
    optional?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type StockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
    orderBy?: StockOrderByWithAggregationInput | StockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: StockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: bigint
    code: string
    symbol: string
    name: string
    cname: string | null
    type: string
    logo: string | null
    sok: string | null
    optional: boolean
    status: $Enums.STOCK_STATUS
    createdAt: Date
    updatedAt: Date | null
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends StockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type StockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    symbol?: boolean
    name?: boolean
    cname?: boolean
    type?: boolean
    logo?: boolean
    sok?: boolean
    optional?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Stock$membersArgs<ExtArgs>
    stockRecord?: boolean | Stock$stockRecordArgs<ExtArgs>
    _count?: boolean | StockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectScalar = {
    id?: boolean
    code?: boolean
    symbol?: boolean
    name?: boolean
    cname?: boolean
    type?: boolean
    logo?: boolean
    sok?: boolean
    optional?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Stock$membersArgs<ExtArgs>
    stockRecord?: boolean | Stock$stockRecordArgs<ExtArgs>
    _count?: boolean | StockCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock"
    objects: {
      members: Prisma.$StockOnMembersPayload<ExtArgs>[]
      stockRecord: Prisma.$StockRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      code: string
      symbol: string
      name: string
      cname: string | null
      type: string
      logo: string | null
      sok: string | null
      optional: boolean
      status: $Enums.STOCK_STATUS
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }


  type StockGetPayload<S extends boolean | null | undefined | StockDefaultArgs> = $Result.GetResult<Prisma.$StockPayload, S>

  type StockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface StockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock'], meta: { name: 'Stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>
    ): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Stock that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>
    ): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
    **/
    create<T extends StockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StockCreateArgs<ExtArgs>>
    ): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stocks.
     *     @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     *     @example
     *     // Create many Stocks
     *     const stock = await prisma.stock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
    **/
    delete<T extends StockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StockDeleteArgs<ExtArgs>>
    ): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StockUpdateArgs<ExtArgs>>
    ): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
    **/
    upsert<T extends StockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StockUpsertArgs<ExtArgs>>
    ): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock model
   */
  readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    members<T extends Stock$membersArgs<ExtArgs> = {}>(args?: Subset<T, Stock$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'findMany'> | Null>;

    stockRecord<T extends Stock$stockRecordArgs<ExtArgs> = {}>(args?: Subset<T, Stock$stockRecordArgs<ExtArgs>>): Prisma__StockRecordClient<$Result.GetResult<Prisma.$StockRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Stock model
   */ 
  interface StockFieldRefs {
    readonly id: FieldRef<"Stock", 'BigInt'>
    readonly code: FieldRef<"Stock", 'String'>
    readonly symbol: FieldRef<"Stock", 'String'>
    readonly name: FieldRef<"Stock", 'String'>
    readonly cname: FieldRef<"Stock", 'String'>
    readonly type: FieldRef<"Stock", 'String'>
    readonly logo: FieldRef<"Stock", 'String'>
    readonly sok: FieldRef<"Stock", 'String'>
    readonly optional: FieldRef<"Stock", 'Boolean'>
    readonly status: FieldRef<"Stock", 'STOCK_STATUS'>
    readonly createdAt: FieldRef<"Stock", 'DateTime'>
    readonly updatedAt: FieldRef<"Stock", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }


  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }


  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }


  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }


  /**
   * Stock findMany
   */
  export type StockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }


  /**
   * Stock create
   */
  export type StockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>
  }


  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Stock update
   */
  export type StockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput
  }


  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
  }


  /**
   * Stock upsert
   */
  export type StockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>
  }


  /**
   * Stock delete
   */
  export type StockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput
  }


  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput
  }


  /**
   * Stock.members
   */
  export type Stock$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    where?: StockOnMembersWhereInput
    orderBy?: StockOnMembersOrderByWithRelationInput | StockOnMembersOrderByWithRelationInput[]
    cursor?: StockOnMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockOnMembersScalarFieldEnum | StockOnMembersScalarFieldEnum[]
  }


  /**
   * Stock.stockRecord
   */
  export type Stock$stockRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
    where?: StockRecordWhereInput
  }


  /**
   * Stock without action
   */
  export type StockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockInclude<ExtArgs> | null
  }



  /**
   * Model StockRecord
   */

  export type AggregateStockRecord = {
    _count: StockRecordCountAggregateOutputType | null
    _avg: StockRecordAvgAggregateOutputType | null
    _sum: StockRecordSumAggregateOutputType | null
    _min: StockRecordMinAggregateOutputType | null
    _max: StockRecordMaxAggregateOutputType | null
  }

  export type StockRecordAvgAggregateOutputType = {
    id: number | null
    stockId: number | null
  }

  export type StockRecordSumAggregateOutputType = {
    id: bigint | null
    stockId: bigint | null
  }

  export type StockRecordMinAggregateOutputType = {
    id: bigint | null
    price: string | null
    open: string | null
    close: string | null
    high: string | null
    low: string | null
    turnover: string | null
    volume: string | null
    createdAt: Date | null
    stockId: bigint | null
  }

  export type StockRecordMaxAggregateOutputType = {
    id: bigint | null
    price: string | null
    open: string | null
    close: string | null
    high: string | null
    low: string | null
    turnover: string | null
    volume: string | null
    createdAt: Date | null
    stockId: bigint | null
  }

  export type StockRecordCountAggregateOutputType = {
    id: number
    price: number
    open: number
    close: number
    high: number
    low: number
    turnover: number
    volume: number
    createdAt: number
    stockId: number
    _all: number
  }


  export type StockRecordAvgAggregateInputType = {
    id?: true
    stockId?: true
  }

  export type StockRecordSumAggregateInputType = {
    id?: true
    stockId?: true
  }

  export type StockRecordMinAggregateInputType = {
    id?: true
    price?: true
    open?: true
    close?: true
    high?: true
    low?: true
    turnover?: true
    volume?: true
    createdAt?: true
    stockId?: true
  }

  export type StockRecordMaxAggregateInputType = {
    id?: true
    price?: true
    open?: true
    close?: true
    high?: true
    low?: true
    turnover?: true
    volume?: true
    createdAt?: true
    stockId?: true
  }

  export type StockRecordCountAggregateInputType = {
    id?: true
    price?: true
    open?: true
    close?: true
    high?: true
    low?: true
    turnover?: true
    volume?: true
    createdAt?: true
    stockId?: true
    _all?: true
  }

  export type StockRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockRecord to aggregate.
     */
    where?: StockRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockRecords to fetch.
     */
    orderBy?: StockRecordOrderByWithRelationInput | StockRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockRecords
    **/
    _count?: true | StockRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockRecordMaxAggregateInputType
  }

  export type GetStockRecordAggregateType<T extends StockRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateStockRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockRecord[P]>
      : GetScalarType<T[P], AggregateStockRecord[P]>
  }




  export type StockRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockRecordWhereInput
    orderBy?: StockRecordOrderByWithAggregationInput | StockRecordOrderByWithAggregationInput[]
    by: StockRecordScalarFieldEnum[] | StockRecordScalarFieldEnum
    having?: StockRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockRecordCountAggregateInputType | true
    _avg?: StockRecordAvgAggregateInputType
    _sum?: StockRecordSumAggregateInputType
    _min?: StockRecordMinAggregateInputType
    _max?: StockRecordMaxAggregateInputType
  }

  export type StockRecordGroupByOutputType = {
    id: bigint
    price: string
    open: string
    close: string
    high: string
    low: string
    turnover: string
    volume: string
    createdAt: Date
    stockId: bigint
    _count: StockRecordCountAggregateOutputType | null
    _avg: StockRecordAvgAggregateOutputType | null
    _sum: StockRecordSumAggregateOutputType | null
    _min: StockRecordMinAggregateOutputType | null
    _max: StockRecordMaxAggregateOutputType | null
  }

  type GetStockRecordGroupByPayload<T extends StockRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockRecordGroupByOutputType[P]>
            : GetScalarType<T[P], StockRecordGroupByOutputType[P]>
        }
      >
    >


  export type StockRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    open?: boolean
    close?: boolean
    high?: boolean
    low?: boolean
    turnover?: boolean
    volume?: boolean
    createdAt?: boolean
    stockId?: boolean
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockRecord"]>

  export type StockRecordSelectScalar = {
    id?: boolean
    price?: boolean
    open?: boolean
    close?: boolean
    high?: boolean
    low?: boolean
    turnover?: boolean
    volume?: boolean
    createdAt?: boolean
    stockId?: boolean
  }

  export type StockRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }


  export type $StockRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockRecord"
    objects: {
      stock: Prisma.$StockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      price: string
      open: string
      close: string
      high: string
      low: string
      turnover: string
      volume: string
      createdAt: Date
      stockId: bigint
    }, ExtArgs["result"]["stockRecord"]>
    composites: {}
  }


  type StockRecordGetPayload<S extends boolean | null | undefined | StockRecordDefaultArgs> = $Result.GetResult<Prisma.$StockRecordPayload, S>

  type StockRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockRecordCountAggregateInputType | true
    }

  export interface StockRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockRecord'], meta: { name: 'StockRecord' } }
    /**
     * Find zero or one StockRecord that matches the filter.
     * @param {StockRecordFindUniqueArgs} args - Arguments to find a StockRecord
     * @example
     * // Get one StockRecord
     * const stockRecord = await prisma.stockRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StockRecordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StockRecordFindUniqueArgs<ExtArgs>>
    ): Prisma__StockRecordClient<$Result.GetResult<Prisma.$StockRecordPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StockRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StockRecordFindUniqueOrThrowArgs} args - Arguments to find a StockRecord
     * @example
     * // Get one StockRecord
     * const stockRecord = await prisma.stockRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StockRecordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StockRecordFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StockRecordClient<$Result.GetResult<Prisma.$StockRecordPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StockRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockRecordFindFirstArgs} args - Arguments to find a StockRecord
     * @example
     * // Get one StockRecord
     * const stockRecord = await prisma.stockRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StockRecordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StockRecordFindFirstArgs<ExtArgs>>
    ): Prisma__StockRecordClient<$Result.GetResult<Prisma.$StockRecordPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StockRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockRecordFindFirstOrThrowArgs} args - Arguments to find a StockRecord
     * @example
     * // Get one StockRecord
     * const stockRecord = await prisma.stockRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StockRecordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StockRecordFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StockRecordClient<$Result.GetResult<Prisma.$StockRecordPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StockRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockRecords
     * const stockRecords = await prisma.stockRecord.findMany()
     * 
     * // Get first 10 StockRecords
     * const stockRecords = await prisma.stockRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockRecordWithIdOnly = await prisma.stockRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StockRecordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockRecordFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockRecordPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StockRecord.
     * @param {StockRecordCreateArgs} args - Arguments to create a StockRecord.
     * @example
     * // Create one StockRecord
     * const StockRecord = await prisma.stockRecord.create({
     *   data: {
     *     // ... data to create a StockRecord
     *   }
     * })
     * 
    **/
    create<T extends StockRecordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StockRecordCreateArgs<ExtArgs>>
    ): Prisma__StockRecordClient<$Result.GetResult<Prisma.$StockRecordPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StockRecords.
     *     @param {StockRecordCreateManyArgs} args - Arguments to create many StockRecords.
     *     @example
     *     // Create many StockRecords
     *     const stockRecord = await prisma.stockRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StockRecordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockRecordCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StockRecord.
     * @param {StockRecordDeleteArgs} args - Arguments to delete one StockRecord.
     * @example
     * // Delete one StockRecord
     * const StockRecord = await prisma.stockRecord.delete({
     *   where: {
     *     // ... filter to delete one StockRecord
     *   }
     * })
     * 
    **/
    delete<T extends StockRecordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StockRecordDeleteArgs<ExtArgs>>
    ): Prisma__StockRecordClient<$Result.GetResult<Prisma.$StockRecordPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StockRecord.
     * @param {StockRecordUpdateArgs} args - Arguments to update one StockRecord.
     * @example
     * // Update one StockRecord
     * const stockRecord = await prisma.stockRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StockRecordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StockRecordUpdateArgs<ExtArgs>>
    ): Prisma__StockRecordClient<$Result.GetResult<Prisma.$StockRecordPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StockRecords.
     * @param {StockRecordDeleteManyArgs} args - Arguments to filter StockRecords to delete.
     * @example
     * // Delete a few StockRecords
     * const { count } = await prisma.stockRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StockRecordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockRecordDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockRecords
     * const stockRecord = await prisma.stockRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StockRecordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StockRecordUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockRecord.
     * @param {StockRecordUpsertArgs} args - Arguments to update or create a StockRecord.
     * @example
     * // Update or create a StockRecord
     * const stockRecord = await prisma.stockRecord.upsert({
     *   create: {
     *     // ... data to create a StockRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockRecord we want to update
     *   }
     * })
    **/
    upsert<T extends StockRecordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StockRecordUpsertArgs<ExtArgs>>
    ): Prisma__StockRecordClient<$Result.GetResult<Prisma.$StockRecordPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StockRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockRecordCountArgs} args - Arguments to filter StockRecords to count.
     * @example
     * // Count the number of StockRecords
     * const count = await prisma.stockRecord.count({
     *   where: {
     *     // ... the filter for the StockRecords we want to count
     *   }
     * })
    **/
    count<T extends StockRecordCountArgs>(
      args?: Subset<T, StockRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockRecordAggregateArgs>(args: Subset<T, StockRecordAggregateArgs>): Prisma.PrismaPromise<GetStockRecordAggregateType<T>>

    /**
     * Group by StockRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockRecordGroupByArgs['orderBy'] }
        : { orderBy?: StockRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockRecord model
   */
  readonly fields: StockRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    stock<T extends StockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockDefaultArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the StockRecord model
   */ 
  interface StockRecordFieldRefs {
    readonly id: FieldRef<"StockRecord", 'BigInt'>
    readonly price: FieldRef<"StockRecord", 'String'>
    readonly open: FieldRef<"StockRecord", 'String'>
    readonly close: FieldRef<"StockRecord", 'String'>
    readonly high: FieldRef<"StockRecord", 'String'>
    readonly low: FieldRef<"StockRecord", 'String'>
    readonly turnover: FieldRef<"StockRecord", 'String'>
    readonly volume: FieldRef<"StockRecord", 'String'>
    readonly createdAt: FieldRef<"StockRecord", 'DateTime'>
    readonly stockId: FieldRef<"StockRecord", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * StockRecord findUnique
   */
  export type StockRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
    /**
     * Filter, which StockRecord to fetch.
     */
    where: StockRecordWhereUniqueInput
  }


  /**
   * StockRecord findUniqueOrThrow
   */
  export type StockRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
    /**
     * Filter, which StockRecord to fetch.
     */
    where: StockRecordWhereUniqueInput
  }


  /**
   * StockRecord findFirst
   */
  export type StockRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
    /**
     * Filter, which StockRecord to fetch.
     */
    where?: StockRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockRecords to fetch.
     */
    orderBy?: StockRecordOrderByWithRelationInput | StockRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockRecords.
     */
    cursor?: StockRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockRecords.
     */
    distinct?: StockRecordScalarFieldEnum | StockRecordScalarFieldEnum[]
  }


  /**
   * StockRecord findFirstOrThrow
   */
  export type StockRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
    /**
     * Filter, which StockRecord to fetch.
     */
    where?: StockRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockRecords to fetch.
     */
    orderBy?: StockRecordOrderByWithRelationInput | StockRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockRecords.
     */
    cursor?: StockRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockRecords.
     */
    distinct?: StockRecordScalarFieldEnum | StockRecordScalarFieldEnum[]
  }


  /**
   * StockRecord findMany
   */
  export type StockRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
    /**
     * Filter, which StockRecords to fetch.
     */
    where?: StockRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockRecords to fetch.
     */
    orderBy?: StockRecordOrderByWithRelationInput | StockRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockRecords.
     */
    cursor?: StockRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockRecords.
     */
    skip?: number
    distinct?: StockRecordScalarFieldEnum | StockRecordScalarFieldEnum[]
  }


  /**
   * StockRecord create
   */
  export type StockRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a StockRecord.
     */
    data: XOR<StockRecordCreateInput, StockRecordUncheckedCreateInput>
  }


  /**
   * StockRecord createMany
   */
  export type StockRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockRecords.
     */
    data: StockRecordCreateManyInput | StockRecordCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * StockRecord update
   */
  export type StockRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a StockRecord.
     */
    data: XOR<StockRecordUpdateInput, StockRecordUncheckedUpdateInput>
    /**
     * Choose, which StockRecord to update.
     */
    where: StockRecordWhereUniqueInput
  }


  /**
   * StockRecord updateMany
   */
  export type StockRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockRecords.
     */
    data: XOR<StockRecordUpdateManyMutationInput, StockRecordUncheckedUpdateManyInput>
    /**
     * Filter which StockRecords to update
     */
    where?: StockRecordWhereInput
  }


  /**
   * StockRecord upsert
   */
  export type StockRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the StockRecord to update in case it exists.
     */
    where: StockRecordWhereUniqueInput
    /**
     * In case the StockRecord found by the `where` argument doesn't exist, create a new StockRecord with this data.
     */
    create: XOR<StockRecordCreateInput, StockRecordUncheckedCreateInput>
    /**
     * In case the StockRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockRecordUpdateInput, StockRecordUncheckedUpdateInput>
  }


  /**
   * StockRecord delete
   */
  export type StockRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
    /**
     * Filter which StockRecord to delete.
     */
    where: StockRecordWhereUniqueInput
  }


  /**
   * StockRecord deleteMany
   */
  export type StockRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockRecords to delete
     */
    where?: StockRecordWhereInput
  }


  /**
   * StockRecord without action
   */
  export type StockRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockRecord
     */
    select?: StockRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockRecordInclude<ExtArgs> | null
  }



  /**
   * Model StockOnMembers
   */

  export type AggregateStockOnMembers = {
    _count: StockOnMembersCountAggregateOutputType | null
    _avg: StockOnMembersAvgAggregateOutputType | null
    _sum: StockOnMembersSumAggregateOutputType | null
    _min: StockOnMembersMinAggregateOutputType | null
    _max: StockOnMembersMaxAggregateOutputType | null
  }

  export type StockOnMembersAvgAggregateOutputType = {
    id: number | null
    memberId: number | null
    stockId: number | null
  }

  export type StockOnMembersSumAggregateOutputType = {
    id: bigint | null
    memberId: bigint | null
    stockId: bigint | null
  }

  export type StockOnMembersMinAggregateOutputType = {
    id: bigint | null
    memberId: bigint | null
    stockId: bigint | null
    createdAt: Date | null
  }

  export type StockOnMembersMaxAggregateOutputType = {
    id: bigint | null
    memberId: bigint | null
    stockId: bigint | null
    createdAt: Date | null
  }

  export type StockOnMembersCountAggregateOutputType = {
    id: number
    memberId: number
    stockId: number
    createdAt: number
    _all: number
  }


  export type StockOnMembersAvgAggregateInputType = {
    id?: true
    memberId?: true
    stockId?: true
  }

  export type StockOnMembersSumAggregateInputType = {
    id?: true
    memberId?: true
    stockId?: true
  }

  export type StockOnMembersMinAggregateInputType = {
    id?: true
    memberId?: true
    stockId?: true
    createdAt?: true
  }

  export type StockOnMembersMaxAggregateInputType = {
    id?: true
    memberId?: true
    stockId?: true
    createdAt?: true
  }

  export type StockOnMembersCountAggregateInputType = {
    id?: true
    memberId?: true
    stockId?: true
    createdAt?: true
    _all?: true
  }

  export type StockOnMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockOnMembers to aggregate.
     */
    where?: StockOnMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockOnMembers to fetch.
     */
    orderBy?: StockOnMembersOrderByWithRelationInput | StockOnMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockOnMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockOnMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockOnMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockOnMembers
    **/
    _count?: true | StockOnMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockOnMembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockOnMembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockOnMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockOnMembersMaxAggregateInputType
  }

  export type GetStockOnMembersAggregateType<T extends StockOnMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateStockOnMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockOnMembers[P]>
      : GetScalarType<T[P], AggregateStockOnMembers[P]>
  }




  export type StockOnMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockOnMembersWhereInput
    orderBy?: StockOnMembersOrderByWithAggregationInput | StockOnMembersOrderByWithAggregationInput[]
    by: StockOnMembersScalarFieldEnum[] | StockOnMembersScalarFieldEnum
    having?: StockOnMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockOnMembersCountAggregateInputType | true
    _avg?: StockOnMembersAvgAggregateInputType
    _sum?: StockOnMembersSumAggregateInputType
    _min?: StockOnMembersMinAggregateInputType
    _max?: StockOnMembersMaxAggregateInputType
  }

  export type StockOnMembersGroupByOutputType = {
    id: bigint
    memberId: bigint
    stockId: bigint
    createdAt: Date
    _count: StockOnMembersCountAggregateOutputType | null
    _avg: StockOnMembersAvgAggregateOutputType | null
    _sum: StockOnMembersSumAggregateOutputType | null
    _min: StockOnMembersMinAggregateOutputType | null
    _max: StockOnMembersMaxAggregateOutputType | null
  }

  type GetStockOnMembersGroupByPayload<T extends StockOnMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockOnMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockOnMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockOnMembersGroupByOutputType[P]>
            : GetScalarType<T[P], StockOnMembersGroupByOutputType[P]>
        }
      >
    >


  export type StockOnMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    stockId?: boolean
    createdAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockOnMembers"]>

  export type StockOnMembersSelectScalar = {
    id?: boolean
    memberId?: boolean
    stockId?: boolean
    createdAt?: boolean
  }

  export type StockOnMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }


  export type $StockOnMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockOnMembers"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      stock: Prisma.$StockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      memberId: bigint
      stockId: bigint
      createdAt: Date
    }, ExtArgs["result"]["stockOnMembers"]>
    composites: {}
  }


  type StockOnMembersGetPayload<S extends boolean | null | undefined | StockOnMembersDefaultArgs> = $Result.GetResult<Prisma.$StockOnMembersPayload, S>

  type StockOnMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockOnMembersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockOnMembersCountAggregateInputType | true
    }

  export interface StockOnMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockOnMembers'], meta: { name: 'StockOnMembers' } }
    /**
     * Find zero or one StockOnMembers that matches the filter.
     * @param {StockOnMembersFindUniqueArgs} args - Arguments to find a StockOnMembers
     * @example
     * // Get one StockOnMembers
     * const stockOnMembers = await prisma.stockOnMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StockOnMembersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StockOnMembersFindUniqueArgs<ExtArgs>>
    ): Prisma__StockOnMembersClient<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one StockOnMembers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StockOnMembersFindUniqueOrThrowArgs} args - Arguments to find a StockOnMembers
     * @example
     * // Get one StockOnMembers
     * const stockOnMembers = await prisma.stockOnMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StockOnMembersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOnMembersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StockOnMembersClient<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first StockOnMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOnMembersFindFirstArgs} args - Arguments to find a StockOnMembers
     * @example
     * // Get one StockOnMembers
     * const stockOnMembers = await prisma.stockOnMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StockOnMembersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOnMembersFindFirstArgs<ExtArgs>>
    ): Prisma__StockOnMembersClient<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first StockOnMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOnMembersFindFirstOrThrowArgs} args - Arguments to find a StockOnMembers
     * @example
     * // Get one StockOnMembers
     * const stockOnMembers = await prisma.stockOnMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StockOnMembersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOnMembersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StockOnMembersClient<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more StockOnMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOnMembersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockOnMembers
     * const stockOnMembers = await prisma.stockOnMembers.findMany()
     * 
     * // Get first 10 StockOnMembers
     * const stockOnMembers = await prisma.stockOnMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockOnMembersWithIdOnly = await prisma.stockOnMembers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StockOnMembersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOnMembersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a StockOnMembers.
     * @param {StockOnMembersCreateArgs} args - Arguments to create a StockOnMembers.
     * @example
     * // Create one StockOnMembers
     * const StockOnMembers = await prisma.stockOnMembers.create({
     *   data: {
     *     // ... data to create a StockOnMembers
     *   }
     * })
     * 
    **/
    create<T extends StockOnMembersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StockOnMembersCreateArgs<ExtArgs>>
    ): Prisma__StockOnMembersClient<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many StockOnMembers.
     *     @param {StockOnMembersCreateManyArgs} args - Arguments to create many StockOnMembers.
     *     @example
     *     // Create many StockOnMembers
     *     const stockOnMembers = await prisma.stockOnMembers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StockOnMembersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOnMembersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StockOnMembers.
     * @param {StockOnMembersDeleteArgs} args - Arguments to delete one StockOnMembers.
     * @example
     * // Delete one StockOnMembers
     * const StockOnMembers = await prisma.stockOnMembers.delete({
     *   where: {
     *     // ... filter to delete one StockOnMembers
     *   }
     * })
     * 
    **/
    delete<T extends StockOnMembersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StockOnMembersDeleteArgs<ExtArgs>>
    ): Prisma__StockOnMembersClient<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one StockOnMembers.
     * @param {StockOnMembersUpdateArgs} args - Arguments to update one StockOnMembers.
     * @example
     * // Update one StockOnMembers
     * const stockOnMembers = await prisma.stockOnMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StockOnMembersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StockOnMembersUpdateArgs<ExtArgs>>
    ): Prisma__StockOnMembersClient<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more StockOnMembers.
     * @param {StockOnMembersDeleteManyArgs} args - Arguments to filter StockOnMembers to delete.
     * @example
     * // Delete a few StockOnMembers
     * const { count } = await prisma.stockOnMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StockOnMembersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StockOnMembersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockOnMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOnMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockOnMembers
     * const stockOnMembers = await prisma.stockOnMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StockOnMembersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StockOnMembersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockOnMembers.
     * @param {StockOnMembersUpsertArgs} args - Arguments to update or create a StockOnMembers.
     * @example
     * // Update or create a StockOnMembers
     * const stockOnMembers = await prisma.stockOnMembers.upsert({
     *   create: {
     *     // ... data to create a StockOnMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockOnMembers we want to update
     *   }
     * })
    **/
    upsert<T extends StockOnMembersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StockOnMembersUpsertArgs<ExtArgs>>
    ): Prisma__StockOnMembersClient<$Result.GetResult<Prisma.$StockOnMembersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of StockOnMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOnMembersCountArgs} args - Arguments to filter StockOnMembers to count.
     * @example
     * // Count the number of StockOnMembers
     * const count = await prisma.stockOnMembers.count({
     *   where: {
     *     // ... the filter for the StockOnMembers we want to count
     *   }
     * })
    **/
    count<T extends StockOnMembersCountArgs>(
      args?: Subset<T, StockOnMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockOnMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockOnMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOnMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockOnMembersAggregateArgs>(args: Subset<T, StockOnMembersAggregateArgs>): Prisma.PrismaPromise<GetStockOnMembersAggregateType<T>>

    /**
     * Group by StockOnMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockOnMembersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockOnMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockOnMembersGroupByArgs['orderBy'] }
        : { orderBy?: StockOnMembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockOnMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockOnMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockOnMembers model
   */
  readonly fields: StockOnMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockOnMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockOnMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    stock<T extends StockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockDefaultArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the StockOnMembers model
   */ 
  interface StockOnMembersFieldRefs {
    readonly id: FieldRef<"StockOnMembers", 'BigInt'>
    readonly memberId: FieldRef<"StockOnMembers", 'BigInt'>
    readonly stockId: FieldRef<"StockOnMembers", 'BigInt'>
    readonly createdAt: FieldRef<"StockOnMembers", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * StockOnMembers findUnique
   */
  export type StockOnMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    /**
     * Filter, which StockOnMembers to fetch.
     */
    where: StockOnMembersWhereUniqueInput
  }


  /**
   * StockOnMembers findUniqueOrThrow
   */
  export type StockOnMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    /**
     * Filter, which StockOnMembers to fetch.
     */
    where: StockOnMembersWhereUniqueInput
  }


  /**
   * StockOnMembers findFirst
   */
  export type StockOnMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    /**
     * Filter, which StockOnMembers to fetch.
     */
    where?: StockOnMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockOnMembers to fetch.
     */
    orderBy?: StockOnMembersOrderByWithRelationInput | StockOnMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockOnMembers.
     */
    cursor?: StockOnMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockOnMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockOnMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockOnMembers.
     */
    distinct?: StockOnMembersScalarFieldEnum | StockOnMembersScalarFieldEnum[]
  }


  /**
   * StockOnMembers findFirstOrThrow
   */
  export type StockOnMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    /**
     * Filter, which StockOnMembers to fetch.
     */
    where?: StockOnMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockOnMembers to fetch.
     */
    orderBy?: StockOnMembersOrderByWithRelationInput | StockOnMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockOnMembers.
     */
    cursor?: StockOnMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockOnMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockOnMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockOnMembers.
     */
    distinct?: StockOnMembersScalarFieldEnum | StockOnMembersScalarFieldEnum[]
  }


  /**
   * StockOnMembers findMany
   */
  export type StockOnMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    /**
     * Filter, which StockOnMembers to fetch.
     */
    where?: StockOnMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockOnMembers to fetch.
     */
    orderBy?: StockOnMembersOrderByWithRelationInput | StockOnMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockOnMembers.
     */
    cursor?: StockOnMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockOnMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockOnMembers.
     */
    skip?: number
    distinct?: StockOnMembersScalarFieldEnum | StockOnMembersScalarFieldEnum[]
  }


  /**
   * StockOnMembers create
   */
  export type StockOnMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a StockOnMembers.
     */
    data: XOR<StockOnMembersCreateInput, StockOnMembersUncheckedCreateInput>
  }


  /**
   * StockOnMembers createMany
   */
  export type StockOnMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockOnMembers.
     */
    data: StockOnMembersCreateManyInput | StockOnMembersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * StockOnMembers update
   */
  export type StockOnMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a StockOnMembers.
     */
    data: XOR<StockOnMembersUpdateInput, StockOnMembersUncheckedUpdateInput>
    /**
     * Choose, which StockOnMembers to update.
     */
    where: StockOnMembersWhereUniqueInput
  }


  /**
   * StockOnMembers updateMany
   */
  export type StockOnMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockOnMembers.
     */
    data: XOR<StockOnMembersUpdateManyMutationInput, StockOnMembersUncheckedUpdateManyInput>
    /**
     * Filter which StockOnMembers to update
     */
    where?: StockOnMembersWhereInput
  }


  /**
   * StockOnMembers upsert
   */
  export type StockOnMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the StockOnMembers to update in case it exists.
     */
    where: StockOnMembersWhereUniqueInput
    /**
     * In case the StockOnMembers found by the `where` argument doesn't exist, create a new StockOnMembers with this data.
     */
    create: XOR<StockOnMembersCreateInput, StockOnMembersUncheckedCreateInput>
    /**
     * In case the StockOnMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockOnMembersUpdateInput, StockOnMembersUncheckedUpdateInput>
  }


  /**
   * StockOnMembers delete
   */
  export type StockOnMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
    /**
     * Filter which StockOnMembers to delete.
     */
    where: StockOnMembersWhereUniqueInput
  }


  /**
   * StockOnMembers deleteMany
   */
  export type StockOnMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockOnMembers to delete
     */
    where?: StockOnMembersWhereInput
  }


  /**
   * StockOnMembers without action
   */
  export type StockOnMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockOnMembers
     */
    select?: StockOnMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StockOnMembersInclude<ExtArgs> | null
  }



  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingSumAggregateOutputType = {
    id: bigint | null
  }

  export type SettingMinAggregateOutputType = {
    id: bigint | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingMaxAggregateOutputType = {
    id: bigint | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SettingAvgAggregateInputType = {
    id?: true
  }

  export type SettingSumAggregateInputType = {
    id?: true
  }

  export type SettingMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _avg?: SettingAvgAggregateInputType
    _sum?: SettingSumAggregateInputType
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: bigint
    key: string
    value: string
    createdAt: Date
    updatedAt: Date | null
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["setting"]>

  export type SettingSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      key: string
      value: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }


  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SettingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>
    ): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Setting that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SettingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>
    ): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SettingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
    **/
    create<T extends SettingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SettingCreateArgs<ExtArgs>>
    ): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Settings.
     *     @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     *     @example
     *     // Create many Settings
     *     const setting = await prisma.setting.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SettingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
    **/
    delete<T extends SettingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>
    ): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SettingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>
    ): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SettingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SettingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
    **/
    upsert<T extends SettingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>
    ): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Setting model
   */ 
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'BigInt'>
    readonly key: FieldRef<"Setting", 'String'>
    readonly value: FieldRef<"Setting", 'String'>
    readonly createdAt: FieldRef<"Setting", 'DateTime'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }


  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }


  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }


  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }


  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }


  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }


  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }


  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
  }


  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }


  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }


  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
  }


  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    gender: 'gender',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatar: 'avatar',
    gender: 'gender',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const StockScalarFieldEnum: {
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

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const StockRecordScalarFieldEnum: {
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

  export type StockRecordScalarFieldEnum = (typeof StockRecordScalarFieldEnum)[keyof typeof StockRecordScalarFieldEnum]


  export const StockOnMembersScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    stockId: 'stockId',
    createdAt: 'createdAt'
  };

  export type StockOnMembersScalarFieldEnum = (typeof StockOnMembersScalarFieldEnum)[keyof typeof StockOnMembersScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'GENDER'
   */
  export type EnumGENDERFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GENDER'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'STOCK_STATUS'
   */
  export type EnumSTOCK_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STOCK_STATUS'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    gender?: EnumGENDERFilter<"User"> | $Enums.GENDER
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    gender?: EnumGENDERFilter<"User"> | $Enums.GENDER
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: EnumGENDERWithAggregatesFilter<"User"> | $Enums.GENDER
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: BigIntFilter<"Member"> | bigint | number
    email?: StringFilter<"Member"> | string
    name?: StringNullableFilter<"Member"> | string | null
    avatar?: StringNullableFilter<"Member"> | string | null
    gender?: EnumGENDERFilter<"Member"> | $Enums.GENDER
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    stocks?: StockOnMembersListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    stocks?: StockOnMembersOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    name?: StringNullableFilter<"Member"> | string | null
    avatar?: StringNullableFilter<"Member"> | string | null
    gender?: EnumGENDERFilter<"Member"> | $Enums.GENDER
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    stocks?: StockOnMembersListRelationFilter
  }, "id" | "email">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Member"> | bigint | number
    email?: StringWithAggregatesFilter<"Member"> | string
    name?: StringNullableWithAggregatesFilter<"Member"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Member"> | string | null
    gender?: EnumGENDERWithAggregatesFilter<"Member"> | $Enums.GENDER
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
  }

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    id?: BigIntFilter<"Stock"> | bigint | number
    code?: StringFilter<"Stock"> | string
    symbol?: StringFilter<"Stock"> | string
    name?: StringFilter<"Stock"> | string
    cname?: StringNullableFilter<"Stock"> | string | null
    type?: StringFilter<"Stock"> | string
    logo?: StringNullableFilter<"Stock"> | string | null
    sok?: StringNullableFilter<"Stock"> | string | null
    optional?: BoolFilter<"Stock"> | boolean
    status?: EnumSTOCK_STATUSFilter<"Stock"> | $Enums.STOCK_STATUS
    createdAt?: DateTimeFilter<"Stock"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Stock"> | Date | string | null
    members?: StockOnMembersListRelationFilter
    stockRecord?: XOR<StockRecordNullableRelationFilter, StockRecordWhereInput> | null
  }

  export type StockOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    cname?: SortOrderInput | SortOrder
    type?: SortOrder
    logo?: SortOrderInput | SortOrder
    sok?: SortOrderInput | SortOrder
    optional?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    members?: StockOnMembersOrderByRelationAggregateInput
    stockRecord?: StockRecordOrderByWithRelationInput
  }

  export type StockWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    code_symbol_type?: StockCodeSymbolTypeCompoundUniqueInput
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    code?: StringFilter<"Stock"> | string
    symbol?: StringFilter<"Stock"> | string
    name?: StringFilter<"Stock"> | string
    cname?: StringNullableFilter<"Stock"> | string | null
    type?: StringFilter<"Stock"> | string
    logo?: StringNullableFilter<"Stock"> | string | null
    sok?: StringNullableFilter<"Stock"> | string | null
    optional?: BoolFilter<"Stock"> | boolean
    status?: EnumSTOCK_STATUSFilter<"Stock"> | $Enums.STOCK_STATUS
    createdAt?: DateTimeFilter<"Stock"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Stock"> | Date | string | null
    members?: StockOnMembersListRelationFilter
    stockRecord?: XOR<StockRecordNullableRelationFilter, StockRecordWhereInput> | null
  }, "id" | "code_symbol_type">

  export type StockOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    cname?: SortOrderInput | SortOrder
    type?: SortOrder
    logo?: SortOrderInput | SortOrder
    sok?: SortOrderInput | SortOrder
    optional?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: StockCountOrderByAggregateInput
    _avg?: StockAvgOrderByAggregateInput
    _max?: StockMaxOrderByAggregateInput
    _min?: StockMinOrderByAggregateInput
    _sum?: StockSumOrderByAggregateInput
  }

  export type StockScalarWhereWithAggregatesInput = {
    AND?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    OR?: StockScalarWhereWithAggregatesInput[]
    NOT?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Stock"> | bigint | number
    code?: StringWithAggregatesFilter<"Stock"> | string
    symbol?: StringWithAggregatesFilter<"Stock"> | string
    name?: StringWithAggregatesFilter<"Stock"> | string
    cname?: StringNullableWithAggregatesFilter<"Stock"> | string | null
    type?: StringWithAggregatesFilter<"Stock"> | string
    logo?: StringNullableWithAggregatesFilter<"Stock"> | string | null
    sok?: StringNullableWithAggregatesFilter<"Stock"> | string | null
    optional?: BoolWithAggregatesFilter<"Stock"> | boolean
    status?: EnumSTOCK_STATUSWithAggregatesFilter<"Stock"> | $Enums.STOCK_STATUS
    createdAt?: DateTimeWithAggregatesFilter<"Stock"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Stock"> | Date | string | null
  }

  export type StockRecordWhereInput = {
    AND?: StockRecordWhereInput | StockRecordWhereInput[]
    OR?: StockRecordWhereInput[]
    NOT?: StockRecordWhereInput | StockRecordWhereInput[]
    id?: BigIntFilter<"StockRecord"> | bigint | number
    price?: StringFilter<"StockRecord"> | string
    open?: StringFilter<"StockRecord"> | string
    close?: StringFilter<"StockRecord"> | string
    high?: StringFilter<"StockRecord"> | string
    low?: StringFilter<"StockRecord"> | string
    turnover?: StringFilter<"StockRecord"> | string
    volume?: StringFilter<"StockRecord"> | string
    createdAt?: DateTimeFilter<"StockRecord"> | Date | string
    stockId?: BigIntFilter<"StockRecord"> | bigint | number
    stock?: XOR<StockRelationFilter, StockWhereInput>
  }

  export type StockRecordOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    open?: SortOrder
    close?: SortOrder
    high?: SortOrder
    low?: SortOrder
    turnover?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    stockId?: SortOrder
    stock?: StockOrderByWithRelationInput
  }

  export type StockRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    stockId?: bigint | number
    AND?: StockRecordWhereInput | StockRecordWhereInput[]
    OR?: StockRecordWhereInput[]
    NOT?: StockRecordWhereInput | StockRecordWhereInput[]
    price?: StringFilter<"StockRecord"> | string
    open?: StringFilter<"StockRecord"> | string
    close?: StringFilter<"StockRecord"> | string
    high?: StringFilter<"StockRecord"> | string
    low?: StringFilter<"StockRecord"> | string
    turnover?: StringFilter<"StockRecord"> | string
    volume?: StringFilter<"StockRecord"> | string
    createdAt?: DateTimeFilter<"StockRecord"> | Date | string
    stock?: XOR<StockRelationFilter, StockWhereInput>
  }, "id" | "stockId">

  export type StockRecordOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    open?: SortOrder
    close?: SortOrder
    high?: SortOrder
    low?: SortOrder
    turnover?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    stockId?: SortOrder
    _count?: StockRecordCountOrderByAggregateInput
    _avg?: StockRecordAvgOrderByAggregateInput
    _max?: StockRecordMaxOrderByAggregateInput
    _min?: StockRecordMinOrderByAggregateInput
    _sum?: StockRecordSumOrderByAggregateInput
  }

  export type StockRecordScalarWhereWithAggregatesInput = {
    AND?: StockRecordScalarWhereWithAggregatesInput | StockRecordScalarWhereWithAggregatesInput[]
    OR?: StockRecordScalarWhereWithAggregatesInput[]
    NOT?: StockRecordScalarWhereWithAggregatesInput | StockRecordScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"StockRecord"> | bigint | number
    price?: StringWithAggregatesFilter<"StockRecord"> | string
    open?: StringWithAggregatesFilter<"StockRecord"> | string
    close?: StringWithAggregatesFilter<"StockRecord"> | string
    high?: StringWithAggregatesFilter<"StockRecord"> | string
    low?: StringWithAggregatesFilter<"StockRecord"> | string
    turnover?: StringWithAggregatesFilter<"StockRecord"> | string
    volume?: StringWithAggregatesFilter<"StockRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StockRecord"> | Date | string
    stockId?: BigIntWithAggregatesFilter<"StockRecord"> | bigint | number
  }

  export type StockOnMembersWhereInput = {
    AND?: StockOnMembersWhereInput | StockOnMembersWhereInput[]
    OR?: StockOnMembersWhereInput[]
    NOT?: StockOnMembersWhereInput | StockOnMembersWhereInput[]
    id?: BigIntFilter<"StockOnMembers"> | bigint | number
    memberId?: BigIntFilter<"StockOnMembers"> | bigint | number
    stockId?: BigIntFilter<"StockOnMembers"> | bigint | number
    createdAt?: DateTimeFilter<"StockOnMembers"> | Date | string
    member?: XOR<MemberRelationFilter, MemberWhereInput>
    stock?: XOR<StockRelationFilter, StockWhereInput>
  }

  export type StockOnMembersOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    stockId?: SortOrder
    createdAt?: SortOrder
    member?: MemberOrderByWithRelationInput
    stock?: StockOrderByWithRelationInput
  }

  export type StockOnMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: StockOnMembersWhereInput | StockOnMembersWhereInput[]
    OR?: StockOnMembersWhereInput[]
    NOT?: StockOnMembersWhereInput | StockOnMembersWhereInput[]
    memberId?: BigIntFilter<"StockOnMembers"> | bigint | number
    stockId?: BigIntFilter<"StockOnMembers"> | bigint | number
    createdAt?: DateTimeFilter<"StockOnMembers"> | Date | string
    member?: XOR<MemberRelationFilter, MemberWhereInput>
    stock?: XOR<StockRelationFilter, StockWhereInput>
  }, "id">

  export type StockOnMembersOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    stockId?: SortOrder
    createdAt?: SortOrder
    _count?: StockOnMembersCountOrderByAggregateInput
    _avg?: StockOnMembersAvgOrderByAggregateInput
    _max?: StockOnMembersMaxOrderByAggregateInput
    _min?: StockOnMembersMinOrderByAggregateInput
    _sum?: StockOnMembersSumOrderByAggregateInput
  }

  export type StockOnMembersScalarWhereWithAggregatesInput = {
    AND?: StockOnMembersScalarWhereWithAggregatesInput | StockOnMembersScalarWhereWithAggregatesInput[]
    OR?: StockOnMembersScalarWhereWithAggregatesInput[]
    NOT?: StockOnMembersScalarWhereWithAggregatesInput | StockOnMembersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"StockOnMembers"> | bigint | number
    memberId?: BigIntWithAggregatesFilter<"StockOnMembers"> | bigint | number
    stockId?: BigIntWithAggregatesFilter<"StockOnMembers"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"StockOnMembers"> | Date | string
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: BigIntFilter<"Setting"> | bigint | number
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    createdAt?: DateTimeFilter<"Setting"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Setting"> | Date | string | null
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    key?: StringFilter<"Setting"> | string
    value?: StringFilter<"Setting"> | string
    createdAt?: DateTimeFilter<"Setting"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Setting"> | Date | string | null
  }, "id">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: SettingCountOrderByAggregateInput
    _avg?: SettingAvgOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
    _sum?: SettingSumOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Setting"> | bigint | number
    key?: StringWithAggregatesFilter<"Setting"> | string
    value?: StringWithAggregatesFilter<"Setting"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Setting"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: bigint | number
    email: string
    name?: string | null
    avatar?: string | null
    gender?: $Enums.GENDER
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    email: string
    name?: string | null
    avatar?: string | null
    gender?: $Enums.GENDER
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGENDERFieldUpdateOperationsInput | $Enums.GENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGENDERFieldUpdateOperationsInput | $Enums.GENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    email: string
    name?: string | null
    avatar?: string | null
    gender?: $Enums.GENDER
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGENDERFieldUpdateOperationsInput | $Enums.GENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGENDERFieldUpdateOperationsInput | $Enums.GENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberCreateInput = {
    id?: bigint | number
    email: string
    name?: string | null
    avatar?: string | null
    gender?: $Enums.GENDER
    createdAt?: Date | string
    updatedAt?: Date | string | null
    stocks?: StockOnMembersCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: bigint | number
    email: string
    name?: string | null
    avatar?: string | null
    gender?: $Enums.GENDER
    createdAt?: Date | string
    updatedAt?: Date | string | null
    stocks?: StockOnMembersUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGENDERFieldUpdateOperationsInput | $Enums.GENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stocks?: StockOnMembersUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGENDERFieldUpdateOperationsInput | $Enums.GENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stocks?: StockOnMembersUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: bigint | number
    email: string
    name?: string | null
    avatar?: string | null
    gender?: $Enums.GENDER
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MemberUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGENDERFieldUpdateOperationsInput | $Enums.GENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGENDERFieldUpdateOperationsInput | $Enums.GENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockCreateInput = {
    id?: bigint | number
    code: string
    symbol: string
    name: string
    cname?: string | null
    type: string
    logo?: string | null
    sok?: string | null
    optional?: boolean
    status?: $Enums.STOCK_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string | null
    members?: StockOnMembersCreateNestedManyWithoutStockInput
    stockRecord?: StockRecordCreateNestedOneWithoutStockInput
  }

  export type StockUncheckedCreateInput = {
    id?: bigint | number
    code: string
    symbol: string
    name: string
    cname?: string | null
    type: string
    logo?: string | null
    sok?: string | null
    optional?: boolean
    status?: $Enums.STOCK_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string | null
    members?: StockOnMembersUncheckedCreateNestedManyWithoutStockInput
    stockRecord?: StockRecordUncheckedCreateNestedOneWithoutStockInput
  }

  export type StockUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sok?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSTOCK_STATUSFieldUpdateOperationsInput | $Enums.STOCK_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: StockOnMembersUpdateManyWithoutStockNestedInput
    stockRecord?: StockRecordUpdateOneWithoutStockNestedInput
  }

  export type StockUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sok?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSTOCK_STATUSFieldUpdateOperationsInput | $Enums.STOCK_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: StockOnMembersUncheckedUpdateManyWithoutStockNestedInput
    stockRecord?: StockRecordUncheckedUpdateOneWithoutStockNestedInput
  }

  export type StockCreateManyInput = {
    id?: bigint | number
    code: string
    symbol: string
    name: string
    cname?: string | null
    type: string
    logo?: string | null
    sok?: string | null
    optional?: boolean
    status?: $Enums.STOCK_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type StockUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sok?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSTOCK_STATUSFieldUpdateOperationsInput | $Enums.STOCK_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sok?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSTOCK_STATUSFieldUpdateOperationsInput | $Enums.STOCK_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockRecordCreateInput = {
    id?: bigint | number
    price: string
    open: string
    close: string
    high: string
    low: string
    turnover: string
    volume: string
    createdAt?: Date | string
    stock: StockCreateNestedOneWithoutStockRecordInput
  }

  export type StockRecordUncheckedCreateInput = {
    id?: bigint | number
    price: string
    open: string
    close: string
    high: string
    low: string
    turnover: string
    volume: string
    createdAt?: Date | string
    stockId: bigint | number
  }

  export type StockRecordUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: StringFieldUpdateOperationsInput | string
    open?: StringFieldUpdateOperationsInput | string
    close?: StringFieldUpdateOperationsInput | string
    high?: StringFieldUpdateOperationsInput | string
    low?: StringFieldUpdateOperationsInput | string
    turnover?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: StockUpdateOneRequiredWithoutStockRecordNestedInput
  }

  export type StockRecordUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: StringFieldUpdateOperationsInput | string
    open?: StringFieldUpdateOperationsInput | string
    close?: StringFieldUpdateOperationsInput | string
    high?: StringFieldUpdateOperationsInput | string
    low?: StringFieldUpdateOperationsInput | string
    turnover?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StockRecordCreateManyInput = {
    id?: bigint | number
    price: string
    open: string
    close: string
    high: string
    low: string
    turnover: string
    volume: string
    createdAt?: Date | string
    stockId: bigint | number
  }

  export type StockRecordUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: StringFieldUpdateOperationsInput | string
    open?: StringFieldUpdateOperationsInput | string
    close?: StringFieldUpdateOperationsInput | string
    high?: StringFieldUpdateOperationsInput | string
    low?: StringFieldUpdateOperationsInput | string
    turnover?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockRecordUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: StringFieldUpdateOperationsInput | string
    open?: StringFieldUpdateOperationsInput | string
    close?: StringFieldUpdateOperationsInput | string
    high?: StringFieldUpdateOperationsInput | string
    low?: StringFieldUpdateOperationsInput | string
    turnover?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StockOnMembersCreateInput = {
    id?: bigint | number
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutStocksInput
    stock: StockCreateNestedOneWithoutMembersInput
  }

  export type StockOnMembersUncheckedCreateInput = {
    id?: bigint | number
    memberId: bigint | number
    stockId: bigint | number
    createdAt?: Date | string
  }

  export type StockOnMembersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutStocksNestedInput
    stock?: StockUpdateOneRequiredWithoutMembersNestedInput
  }

  export type StockOnMembersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    memberId?: BigIntFieldUpdateOperationsInput | bigint | number
    stockId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockOnMembersCreateManyInput = {
    id?: bigint | number
    memberId: bigint | number
    stockId: bigint | number
    createdAt?: Date | string
  }

  export type StockOnMembersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockOnMembersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    memberId?: BigIntFieldUpdateOperationsInput | bigint | number
    stockId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingCreateInput = {
    id?: bigint | number
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SettingUncheckedCreateInput = {
    id?: bigint | number
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SettingUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettingUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettingCreateManyInput = {
    id?: bigint | number
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SettingUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumGENDERFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER | EnumGENDERFieldRefInput<$PrismaModel>
    in?: $Enums.GENDER[]
    notIn?: $Enums.GENDER[]
    not?: NestedEnumGENDERFilter<$PrismaModel> | $Enums.GENDER
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumGENDERWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER | EnumGENDERFieldRefInput<$PrismaModel>
    in?: $Enums.GENDER[]
    notIn?: $Enums.GENDER[]
    not?: NestedEnumGENDERWithAggregatesFilter<$PrismaModel> | $Enums.GENDER
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGENDERFilter<$PrismaModel>
    _max?: NestedEnumGENDERFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StockOnMembersListRelationFilter = {
    every?: StockOnMembersWhereInput
    some?: StockOnMembersWhereInput
    none?: StockOnMembersWhereInput
  }

  export type StockOnMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumSTOCK_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STOCK_STATUS | EnumSTOCK_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STOCK_STATUS[]
    notIn?: $Enums.STOCK_STATUS[]
    not?: NestedEnumSTOCK_STATUSFilter<$PrismaModel> | $Enums.STOCK_STATUS
  }

  export type StockRecordNullableRelationFilter = {
    is?: StockRecordWhereInput | null
    isNot?: StockRecordWhereInput | null
  }

  export type StockCodeSymbolTypeCompoundUniqueInput = {
    code: string
    symbol: string
    type: string
  }

  export type StockCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    cname?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    sok?: SortOrder
    optional?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StockMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    cname?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    sok?: SortOrder
    optional?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    cname?: SortOrder
    type?: SortOrder
    logo?: SortOrder
    sok?: SortOrder
    optional?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSTOCK_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STOCK_STATUS | EnumSTOCK_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STOCK_STATUS[]
    notIn?: $Enums.STOCK_STATUS[]
    not?: NestedEnumSTOCK_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.STOCK_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTOCK_STATUSFilter<$PrismaModel>
    _max?: NestedEnumSTOCK_STATUSFilter<$PrismaModel>
  }

  export type StockRelationFilter = {
    is?: StockWhereInput
    isNot?: StockWhereInput
  }

  export type StockRecordCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    open?: SortOrder
    close?: SortOrder
    high?: SortOrder
    low?: SortOrder
    turnover?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    stockId?: SortOrder
  }

  export type StockRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
  }

  export type StockRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    open?: SortOrder
    close?: SortOrder
    high?: SortOrder
    low?: SortOrder
    turnover?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    stockId?: SortOrder
  }

  export type StockRecordMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    open?: SortOrder
    close?: SortOrder
    high?: SortOrder
    low?: SortOrder
    turnover?: SortOrder
    volume?: SortOrder
    createdAt?: SortOrder
    stockId?: SortOrder
  }

  export type StockRecordSumOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
  }

  export type MemberRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type StockOnMembersCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    stockId?: SortOrder
    createdAt?: SortOrder
  }

  export type StockOnMembersAvgOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    stockId?: SortOrder
  }

  export type StockOnMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    stockId?: SortOrder
    createdAt?: SortOrder
  }

  export type StockOnMembersMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    stockId?: SortOrder
    createdAt?: SortOrder
  }

  export type StockOnMembersSumOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    stockId?: SortOrder
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGENDERFieldUpdateOperationsInput = {
    set?: $Enums.GENDER
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StockOnMembersCreateNestedManyWithoutMemberInput = {
    create?: XOR<StockOnMembersCreateWithoutMemberInput, StockOnMembersUncheckedCreateWithoutMemberInput> | StockOnMembersCreateWithoutMemberInput[] | StockOnMembersUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: StockOnMembersCreateOrConnectWithoutMemberInput | StockOnMembersCreateOrConnectWithoutMemberInput[]
    createMany?: StockOnMembersCreateManyMemberInputEnvelope
    connect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
  }

  export type StockOnMembersUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<StockOnMembersCreateWithoutMemberInput, StockOnMembersUncheckedCreateWithoutMemberInput> | StockOnMembersCreateWithoutMemberInput[] | StockOnMembersUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: StockOnMembersCreateOrConnectWithoutMemberInput | StockOnMembersCreateOrConnectWithoutMemberInput[]
    createMany?: StockOnMembersCreateManyMemberInputEnvelope
    connect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
  }

  export type StockOnMembersUpdateManyWithoutMemberNestedInput = {
    create?: XOR<StockOnMembersCreateWithoutMemberInput, StockOnMembersUncheckedCreateWithoutMemberInput> | StockOnMembersCreateWithoutMemberInput[] | StockOnMembersUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: StockOnMembersCreateOrConnectWithoutMemberInput | StockOnMembersCreateOrConnectWithoutMemberInput[]
    upsert?: StockOnMembersUpsertWithWhereUniqueWithoutMemberInput | StockOnMembersUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: StockOnMembersCreateManyMemberInputEnvelope
    set?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    disconnect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    delete?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    connect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    update?: StockOnMembersUpdateWithWhereUniqueWithoutMemberInput | StockOnMembersUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: StockOnMembersUpdateManyWithWhereWithoutMemberInput | StockOnMembersUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: StockOnMembersScalarWhereInput | StockOnMembersScalarWhereInput[]
  }

  export type StockOnMembersUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<StockOnMembersCreateWithoutMemberInput, StockOnMembersUncheckedCreateWithoutMemberInput> | StockOnMembersCreateWithoutMemberInput[] | StockOnMembersUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: StockOnMembersCreateOrConnectWithoutMemberInput | StockOnMembersCreateOrConnectWithoutMemberInput[]
    upsert?: StockOnMembersUpsertWithWhereUniqueWithoutMemberInput | StockOnMembersUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: StockOnMembersCreateManyMemberInputEnvelope
    set?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    disconnect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    delete?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    connect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    update?: StockOnMembersUpdateWithWhereUniqueWithoutMemberInput | StockOnMembersUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: StockOnMembersUpdateManyWithWhereWithoutMemberInput | StockOnMembersUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: StockOnMembersScalarWhereInput | StockOnMembersScalarWhereInput[]
  }

  export type StockOnMembersCreateNestedManyWithoutStockInput = {
    create?: XOR<StockOnMembersCreateWithoutStockInput, StockOnMembersUncheckedCreateWithoutStockInput> | StockOnMembersCreateWithoutStockInput[] | StockOnMembersUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockOnMembersCreateOrConnectWithoutStockInput | StockOnMembersCreateOrConnectWithoutStockInput[]
    createMany?: StockOnMembersCreateManyStockInputEnvelope
    connect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
  }

  export type StockRecordCreateNestedOneWithoutStockInput = {
    create?: XOR<StockRecordCreateWithoutStockInput, StockRecordUncheckedCreateWithoutStockInput>
    connectOrCreate?: StockRecordCreateOrConnectWithoutStockInput
    connect?: StockRecordWhereUniqueInput
  }

  export type StockOnMembersUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<StockOnMembersCreateWithoutStockInput, StockOnMembersUncheckedCreateWithoutStockInput> | StockOnMembersCreateWithoutStockInput[] | StockOnMembersUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockOnMembersCreateOrConnectWithoutStockInput | StockOnMembersCreateOrConnectWithoutStockInput[]
    createMany?: StockOnMembersCreateManyStockInputEnvelope
    connect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
  }

  export type StockRecordUncheckedCreateNestedOneWithoutStockInput = {
    create?: XOR<StockRecordCreateWithoutStockInput, StockRecordUncheckedCreateWithoutStockInput>
    connectOrCreate?: StockRecordCreateOrConnectWithoutStockInput
    connect?: StockRecordWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumSTOCK_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.STOCK_STATUS
  }

  export type StockOnMembersUpdateManyWithoutStockNestedInput = {
    create?: XOR<StockOnMembersCreateWithoutStockInput, StockOnMembersUncheckedCreateWithoutStockInput> | StockOnMembersCreateWithoutStockInput[] | StockOnMembersUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockOnMembersCreateOrConnectWithoutStockInput | StockOnMembersCreateOrConnectWithoutStockInput[]
    upsert?: StockOnMembersUpsertWithWhereUniqueWithoutStockInput | StockOnMembersUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: StockOnMembersCreateManyStockInputEnvelope
    set?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    disconnect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    delete?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    connect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    update?: StockOnMembersUpdateWithWhereUniqueWithoutStockInput | StockOnMembersUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: StockOnMembersUpdateManyWithWhereWithoutStockInput | StockOnMembersUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: StockOnMembersScalarWhereInput | StockOnMembersScalarWhereInput[]
  }

  export type StockRecordUpdateOneWithoutStockNestedInput = {
    create?: XOR<StockRecordCreateWithoutStockInput, StockRecordUncheckedCreateWithoutStockInput>
    connectOrCreate?: StockRecordCreateOrConnectWithoutStockInput
    upsert?: StockRecordUpsertWithoutStockInput
    disconnect?: StockRecordWhereInput | boolean
    delete?: StockRecordWhereInput | boolean
    connect?: StockRecordWhereUniqueInput
    update?: XOR<XOR<StockRecordUpdateToOneWithWhereWithoutStockInput, StockRecordUpdateWithoutStockInput>, StockRecordUncheckedUpdateWithoutStockInput>
  }

  export type StockOnMembersUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<StockOnMembersCreateWithoutStockInput, StockOnMembersUncheckedCreateWithoutStockInput> | StockOnMembersCreateWithoutStockInput[] | StockOnMembersUncheckedCreateWithoutStockInput[]
    connectOrCreate?: StockOnMembersCreateOrConnectWithoutStockInput | StockOnMembersCreateOrConnectWithoutStockInput[]
    upsert?: StockOnMembersUpsertWithWhereUniqueWithoutStockInput | StockOnMembersUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: StockOnMembersCreateManyStockInputEnvelope
    set?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    disconnect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    delete?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    connect?: StockOnMembersWhereUniqueInput | StockOnMembersWhereUniqueInput[]
    update?: StockOnMembersUpdateWithWhereUniqueWithoutStockInput | StockOnMembersUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: StockOnMembersUpdateManyWithWhereWithoutStockInput | StockOnMembersUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: StockOnMembersScalarWhereInput | StockOnMembersScalarWhereInput[]
  }

  export type StockRecordUncheckedUpdateOneWithoutStockNestedInput = {
    create?: XOR<StockRecordCreateWithoutStockInput, StockRecordUncheckedCreateWithoutStockInput>
    connectOrCreate?: StockRecordCreateOrConnectWithoutStockInput
    upsert?: StockRecordUpsertWithoutStockInput
    disconnect?: StockRecordWhereInput | boolean
    delete?: StockRecordWhereInput | boolean
    connect?: StockRecordWhereUniqueInput
    update?: XOR<XOR<StockRecordUpdateToOneWithWhereWithoutStockInput, StockRecordUpdateWithoutStockInput>, StockRecordUncheckedUpdateWithoutStockInput>
  }

  export type StockCreateNestedOneWithoutStockRecordInput = {
    create?: XOR<StockCreateWithoutStockRecordInput, StockUncheckedCreateWithoutStockRecordInput>
    connectOrCreate?: StockCreateOrConnectWithoutStockRecordInput
    connect?: StockWhereUniqueInput
  }

  export type StockUpdateOneRequiredWithoutStockRecordNestedInput = {
    create?: XOR<StockCreateWithoutStockRecordInput, StockUncheckedCreateWithoutStockRecordInput>
    connectOrCreate?: StockCreateOrConnectWithoutStockRecordInput
    upsert?: StockUpsertWithoutStockRecordInput
    connect?: StockWhereUniqueInput
    update?: XOR<XOR<StockUpdateToOneWithWhereWithoutStockRecordInput, StockUpdateWithoutStockRecordInput>, StockUncheckedUpdateWithoutStockRecordInput>
  }

  export type MemberCreateNestedOneWithoutStocksInput = {
    create?: XOR<MemberCreateWithoutStocksInput, MemberUncheckedCreateWithoutStocksInput>
    connectOrCreate?: MemberCreateOrConnectWithoutStocksInput
    connect?: MemberWhereUniqueInput
  }

  export type StockCreateNestedOneWithoutMembersInput = {
    create?: XOR<StockCreateWithoutMembersInput, StockUncheckedCreateWithoutMembersInput>
    connectOrCreate?: StockCreateOrConnectWithoutMembersInput
    connect?: StockWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<MemberCreateWithoutStocksInput, MemberUncheckedCreateWithoutStocksInput>
    connectOrCreate?: MemberCreateOrConnectWithoutStocksInput
    upsert?: MemberUpsertWithoutStocksInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutStocksInput, MemberUpdateWithoutStocksInput>, MemberUncheckedUpdateWithoutStocksInput>
  }

  export type StockUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<StockCreateWithoutMembersInput, StockUncheckedCreateWithoutMembersInput>
    connectOrCreate?: StockCreateOrConnectWithoutMembersInput
    upsert?: StockUpsertWithoutMembersInput
    connect?: StockWhereUniqueInput
    update?: XOR<XOR<StockUpdateToOneWithWhereWithoutMembersInput, StockUpdateWithoutMembersInput>, StockUncheckedUpdateWithoutMembersInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumGENDERFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER | EnumGENDERFieldRefInput<$PrismaModel>
    in?: $Enums.GENDER[]
    notIn?: $Enums.GENDER[]
    not?: NestedEnumGENDERFilter<$PrismaModel> | $Enums.GENDER
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGENDERWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GENDER | EnumGENDERFieldRefInput<$PrismaModel>
    in?: $Enums.GENDER[]
    notIn?: $Enums.GENDER[]
    not?: NestedEnumGENDERWithAggregatesFilter<$PrismaModel> | $Enums.GENDER
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGENDERFilter<$PrismaModel>
    _max?: NestedEnumGENDERFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSTOCK_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STOCK_STATUS | EnumSTOCK_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STOCK_STATUS[]
    notIn?: $Enums.STOCK_STATUS[]
    not?: NestedEnumSTOCK_STATUSFilter<$PrismaModel> | $Enums.STOCK_STATUS
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSTOCK_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STOCK_STATUS | EnumSTOCK_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STOCK_STATUS[]
    notIn?: $Enums.STOCK_STATUS[]
    not?: NestedEnumSTOCK_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.STOCK_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTOCK_STATUSFilter<$PrismaModel>
    _max?: NestedEnumSTOCK_STATUSFilter<$PrismaModel>
  }

  export type StockOnMembersCreateWithoutMemberInput = {
    id?: bigint | number
    createdAt?: Date | string
    stock: StockCreateNestedOneWithoutMembersInput
  }

  export type StockOnMembersUncheckedCreateWithoutMemberInput = {
    id?: bigint | number
    stockId: bigint | number
    createdAt?: Date | string
  }

  export type StockOnMembersCreateOrConnectWithoutMemberInput = {
    where: StockOnMembersWhereUniqueInput
    create: XOR<StockOnMembersCreateWithoutMemberInput, StockOnMembersUncheckedCreateWithoutMemberInput>
  }

  export type StockOnMembersCreateManyMemberInputEnvelope = {
    data: StockOnMembersCreateManyMemberInput | StockOnMembersCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type StockOnMembersUpsertWithWhereUniqueWithoutMemberInput = {
    where: StockOnMembersWhereUniqueInput
    update: XOR<StockOnMembersUpdateWithoutMemberInput, StockOnMembersUncheckedUpdateWithoutMemberInput>
    create: XOR<StockOnMembersCreateWithoutMemberInput, StockOnMembersUncheckedCreateWithoutMemberInput>
  }

  export type StockOnMembersUpdateWithWhereUniqueWithoutMemberInput = {
    where: StockOnMembersWhereUniqueInput
    data: XOR<StockOnMembersUpdateWithoutMemberInput, StockOnMembersUncheckedUpdateWithoutMemberInput>
  }

  export type StockOnMembersUpdateManyWithWhereWithoutMemberInput = {
    where: StockOnMembersScalarWhereInput
    data: XOR<StockOnMembersUpdateManyMutationInput, StockOnMembersUncheckedUpdateManyWithoutMemberInput>
  }

  export type StockOnMembersScalarWhereInput = {
    AND?: StockOnMembersScalarWhereInput | StockOnMembersScalarWhereInput[]
    OR?: StockOnMembersScalarWhereInput[]
    NOT?: StockOnMembersScalarWhereInput | StockOnMembersScalarWhereInput[]
    id?: BigIntFilter<"StockOnMembers"> | bigint | number
    memberId?: BigIntFilter<"StockOnMembers"> | bigint | number
    stockId?: BigIntFilter<"StockOnMembers"> | bigint | number
    createdAt?: DateTimeFilter<"StockOnMembers"> | Date | string
  }

  export type StockOnMembersCreateWithoutStockInput = {
    id?: bigint | number
    createdAt?: Date | string
    member: MemberCreateNestedOneWithoutStocksInput
  }

  export type StockOnMembersUncheckedCreateWithoutStockInput = {
    id?: bigint | number
    memberId: bigint | number
    createdAt?: Date | string
  }

  export type StockOnMembersCreateOrConnectWithoutStockInput = {
    where: StockOnMembersWhereUniqueInput
    create: XOR<StockOnMembersCreateWithoutStockInput, StockOnMembersUncheckedCreateWithoutStockInput>
  }

  export type StockOnMembersCreateManyStockInputEnvelope = {
    data: StockOnMembersCreateManyStockInput | StockOnMembersCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type StockRecordCreateWithoutStockInput = {
    id?: bigint | number
    price: string
    open: string
    close: string
    high: string
    low: string
    turnover: string
    volume: string
    createdAt?: Date | string
  }

  export type StockRecordUncheckedCreateWithoutStockInput = {
    id?: bigint | number
    price: string
    open: string
    close: string
    high: string
    low: string
    turnover: string
    volume: string
    createdAt?: Date | string
  }

  export type StockRecordCreateOrConnectWithoutStockInput = {
    where: StockRecordWhereUniqueInput
    create: XOR<StockRecordCreateWithoutStockInput, StockRecordUncheckedCreateWithoutStockInput>
  }

  export type StockOnMembersUpsertWithWhereUniqueWithoutStockInput = {
    where: StockOnMembersWhereUniqueInput
    update: XOR<StockOnMembersUpdateWithoutStockInput, StockOnMembersUncheckedUpdateWithoutStockInput>
    create: XOR<StockOnMembersCreateWithoutStockInput, StockOnMembersUncheckedCreateWithoutStockInput>
  }

  export type StockOnMembersUpdateWithWhereUniqueWithoutStockInput = {
    where: StockOnMembersWhereUniqueInput
    data: XOR<StockOnMembersUpdateWithoutStockInput, StockOnMembersUncheckedUpdateWithoutStockInput>
  }

  export type StockOnMembersUpdateManyWithWhereWithoutStockInput = {
    where: StockOnMembersScalarWhereInput
    data: XOR<StockOnMembersUpdateManyMutationInput, StockOnMembersUncheckedUpdateManyWithoutStockInput>
  }

  export type StockRecordUpsertWithoutStockInput = {
    update: XOR<StockRecordUpdateWithoutStockInput, StockRecordUncheckedUpdateWithoutStockInput>
    create: XOR<StockRecordCreateWithoutStockInput, StockRecordUncheckedCreateWithoutStockInput>
    where?: StockRecordWhereInput
  }

  export type StockRecordUpdateToOneWithWhereWithoutStockInput = {
    where?: StockRecordWhereInput
    data: XOR<StockRecordUpdateWithoutStockInput, StockRecordUncheckedUpdateWithoutStockInput>
  }

  export type StockRecordUpdateWithoutStockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: StringFieldUpdateOperationsInput | string
    open?: StringFieldUpdateOperationsInput | string
    close?: StringFieldUpdateOperationsInput | string
    high?: StringFieldUpdateOperationsInput | string
    low?: StringFieldUpdateOperationsInput | string
    turnover?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockRecordUncheckedUpdateWithoutStockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    price?: StringFieldUpdateOperationsInput | string
    open?: StringFieldUpdateOperationsInput | string
    close?: StringFieldUpdateOperationsInput | string
    high?: StringFieldUpdateOperationsInput | string
    low?: StringFieldUpdateOperationsInput | string
    turnover?: StringFieldUpdateOperationsInput | string
    volume?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockCreateWithoutStockRecordInput = {
    id?: bigint | number
    code: string
    symbol: string
    name: string
    cname?: string | null
    type: string
    logo?: string | null
    sok?: string | null
    optional?: boolean
    status?: $Enums.STOCK_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string | null
    members?: StockOnMembersCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateWithoutStockRecordInput = {
    id?: bigint | number
    code: string
    symbol: string
    name: string
    cname?: string | null
    type: string
    logo?: string | null
    sok?: string | null
    optional?: boolean
    status?: $Enums.STOCK_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string | null
    members?: StockOnMembersUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockCreateOrConnectWithoutStockRecordInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutStockRecordInput, StockUncheckedCreateWithoutStockRecordInput>
  }

  export type StockUpsertWithoutStockRecordInput = {
    update: XOR<StockUpdateWithoutStockRecordInput, StockUncheckedUpdateWithoutStockRecordInput>
    create: XOR<StockCreateWithoutStockRecordInput, StockUncheckedCreateWithoutStockRecordInput>
    where?: StockWhereInput
  }

  export type StockUpdateToOneWithWhereWithoutStockRecordInput = {
    where?: StockWhereInput
    data: XOR<StockUpdateWithoutStockRecordInput, StockUncheckedUpdateWithoutStockRecordInput>
  }

  export type StockUpdateWithoutStockRecordInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sok?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSTOCK_STATUSFieldUpdateOperationsInput | $Enums.STOCK_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: StockOnMembersUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutStockRecordInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sok?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSTOCK_STATUSFieldUpdateOperationsInput | $Enums.STOCK_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: StockOnMembersUncheckedUpdateManyWithoutStockNestedInput
  }

  export type MemberCreateWithoutStocksInput = {
    id?: bigint | number
    email: string
    name?: string | null
    avatar?: string | null
    gender?: $Enums.GENDER
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MemberUncheckedCreateWithoutStocksInput = {
    id?: bigint | number
    email: string
    name?: string | null
    avatar?: string | null
    gender?: $Enums.GENDER
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type MemberCreateOrConnectWithoutStocksInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutStocksInput, MemberUncheckedCreateWithoutStocksInput>
  }

  export type StockCreateWithoutMembersInput = {
    id?: bigint | number
    code: string
    symbol: string
    name: string
    cname?: string | null
    type: string
    logo?: string | null
    sok?: string | null
    optional?: boolean
    status?: $Enums.STOCK_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string | null
    stockRecord?: StockRecordCreateNestedOneWithoutStockInput
  }

  export type StockUncheckedCreateWithoutMembersInput = {
    id?: bigint | number
    code: string
    symbol: string
    name: string
    cname?: string | null
    type: string
    logo?: string | null
    sok?: string | null
    optional?: boolean
    status?: $Enums.STOCK_STATUS
    createdAt?: Date | string
    updatedAt?: Date | string | null
    stockRecord?: StockRecordUncheckedCreateNestedOneWithoutStockInput
  }

  export type StockCreateOrConnectWithoutMembersInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutMembersInput, StockUncheckedCreateWithoutMembersInput>
  }

  export type MemberUpsertWithoutStocksInput = {
    update: XOR<MemberUpdateWithoutStocksInput, MemberUncheckedUpdateWithoutStocksInput>
    create: XOR<MemberCreateWithoutStocksInput, MemberUncheckedCreateWithoutStocksInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutStocksInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutStocksInput, MemberUncheckedUpdateWithoutStocksInput>
  }

  export type MemberUpdateWithoutStocksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGENDERFieldUpdateOperationsInput | $Enums.GENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberUncheckedUpdateWithoutStocksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGENDERFieldUpdateOperationsInput | $Enums.GENDER
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StockUpsertWithoutMembersInput = {
    update: XOR<StockUpdateWithoutMembersInput, StockUncheckedUpdateWithoutMembersInput>
    create: XOR<StockCreateWithoutMembersInput, StockUncheckedCreateWithoutMembersInput>
    where?: StockWhereInput
  }

  export type StockUpdateToOneWithWhereWithoutMembersInput = {
    where?: StockWhereInput
    data: XOR<StockUpdateWithoutMembersInput, StockUncheckedUpdateWithoutMembersInput>
  }

  export type StockUpdateWithoutMembersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sok?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSTOCK_STATUSFieldUpdateOperationsInput | $Enums.STOCK_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockRecord?: StockRecordUpdateOneWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutMembersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    sok?: NullableStringFieldUpdateOperationsInput | string | null
    optional?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumSTOCK_STATUSFieldUpdateOperationsInput | $Enums.STOCK_STATUS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stockRecord?: StockRecordUncheckedUpdateOneWithoutStockNestedInput
  }

  export type StockOnMembersCreateManyMemberInput = {
    id?: bigint | number
    stockId: bigint | number
    createdAt?: Date | string
  }

  export type StockOnMembersUpdateWithoutMemberInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: StockUpdateOneRequiredWithoutMembersNestedInput
  }

  export type StockOnMembersUncheckedUpdateWithoutMemberInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    stockId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockOnMembersUncheckedUpdateManyWithoutMemberInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    stockId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockOnMembersCreateManyStockInput = {
    id?: bigint | number
    memberId: bigint | number
    createdAt?: Date | string
  }

  export type StockOnMembersUpdateWithoutStockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    member?: MemberUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StockOnMembersUncheckedUpdateWithoutStockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    memberId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockOnMembersUncheckedUpdateManyWithoutStockInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    memberId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use MemberCountOutputTypeDefaultArgs instead
     */
    export type MemberCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockCountOutputTypeDefaultArgs instead
     */
    export type StockCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemberDefaultArgs instead
     */
    export type MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockDefaultArgs instead
     */
    export type StockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockRecordDefaultArgs instead
     */
    export type StockRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockRecordDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockOnMembersDefaultArgs instead
     */
    export type StockOnMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockOnMembersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettingDefaultArgs instead
     */
    export type SettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettingDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}