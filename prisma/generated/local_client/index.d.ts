
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model datasource_sql
 * 
 */
export type datasource_sql = {
  id: number
  select: string
  from: string
  condition: string | null
  join: string | null
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model key_value
 * 
 */
export type key_value = {
  id: number
  source_sql_id: number | null
  key: string | null
  value: string | null
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model service
 * 
 */
export type service = {
  id: number
  title: string | null
  keyword: string | null
  sample: string | null
  desc: string | null
  separator: string | null
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model template_reply
 * 
 */
export type template_reply = {
  id: number
  service_id: number
  text: string
  loop: template_reply_loop
  created_at: Date | null
  updated_at: Date | null
}

/**
 * Model reply_key
 * 
 */
export type reply_key = {
  id: number
  key_value_id: number
  template_reply_id: number
  created_at: Date | null
  updated_at: Date | null
}


/**
 * Enums
 */

export const template_reply_loop: {
  loop: 'loop',
  single: 'single'
};

export type template_reply_loop = (typeof template_reply_loop)[keyof typeof template_reply_loop]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Datasource_sqls
 * const datasource_sqls = await prisma.datasource_sql.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Datasource_sqls
   * const datasource_sqls = await prisma.datasource_sql.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.datasource_sql`: Exposes CRUD operations for the **datasource_sql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datasource_sqls
    * const datasource_sqls = await prisma.datasource_sql.findMany()
    * ```
    */
  get datasource_sql(): Prisma.datasource_sqlDelegate<GlobalReject>;

  /**
   * `prisma.key_value`: Exposes CRUD operations for the **key_value** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Key_values
    * const key_values = await prisma.key_value.findMany()
    * ```
    */
  get key_value(): Prisma.key_valueDelegate<GlobalReject>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.serviceDelegate<GlobalReject>;

  /**
   * `prisma.template_reply`: Exposes CRUD operations for the **template_reply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Template_replies
    * const template_replies = await prisma.template_reply.findMany()
    * ```
    */
  get template_reply(): Prisma.template_replyDelegate<GlobalReject>;

  /**
   * `prisma.reply_key`: Exposes CRUD operations for the **reply_key** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reply_keys
    * const reply_keys = await prisma.reply_key.findMany()
    * ```
    */
  get reply_key(): Prisma.reply_keyDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    datasource_sql: 'datasource_sql',
    key_value: 'key_value',
    service: 'service',
    template_reply: 'template_reply',
    reply_key: 'reply_key'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model datasource_sql
   */


  export type AggregateDatasource_sql = {
    _count: Datasource_sqlCountAggregateOutputType | null
    _avg: Datasource_sqlAvgAggregateOutputType | null
    _sum: Datasource_sqlSumAggregateOutputType | null
    _min: Datasource_sqlMinAggregateOutputType | null
    _max: Datasource_sqlMaxAggregateOutputType | null
  }

  export type Datasource_sqlAvgAggregateOutputType = {
    id: number | null
  }

  export type Datasource_sqlSumAggregateOutputType = {
    id: number | null
  }

  export type Datasource_sqlMinAggregateOutputType = {
    id: number | null
    select: string | null
    from: string | null
    condition: string | null
    join: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Datasource_sqlMaxAggregateOutputType = {
    id: number | null
    select: string | null
    from: string | null
    condition: string | null
    join: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Datasource_sqlCountAggregateOutputType = {
    id: number
    select: number
    from: number
    condition: number
    join: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Datasource_sqlAvgAggregateInputType = {
    id?: true
  }

  export type Datasource_sqlSumAggregateInputType = {
    id?: true
  }

  export type Datasource_sqlMinAggregateInputType = {
    id?: true
    select?: true
    from?: true
    condition?: true
    join?: true
    created_at?: true
    updated_at?: true
  }

  export type Datasource_sqlMaxAggregateInputType = {
    id?: true
    select?: true
    from?: true
    condition?: true
    join?: true
    created_at?: true
    updated_at?: true
  }

  export type Datasource_sqlCountAggregateInputType = {
    id?: true
    select?: true
    from?: true
    condition?: true
    join?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Datasource_sqlAggregateArgs = {
    /**
     * Filter which datasource_sql to aggregate.
     */
    where?: datasource_sqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datasource_sqls to fetch.
     */
    orderBy?: Enumerable<datasource_sqlOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: datasource_sqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datasource_sqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datasource_sqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned datasource_sqls
    **/
    _count?: true | Datasource_sqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Datasource_sqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Datasource_sqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Datasource_sqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Datasource_sqlMaxAggregateInputType
  }

  export type GetDatasource_sqlAggregateType<T extends Datasource_sqlAggregateArgs> = {
        [P in keyof T & keyof AggregateDatasource_sql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatasource_sql[P]>
      : GetScalarType<T[P], AggregateDatasource_sql[P]>
  }




  export type Datasource_sqlGroupByArgs = {
    where?: datasource_sqlWhereInput
    orderBy?: Enumerable<datasource_sqlOrderByWithAggregationInput>
    by: Datasource_sqlScalarFieldEnum[]
    having?: datasource_sqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Datasource_sqlCountAggregateInputType | true
    _avg?: Datasource_sqlAvgAggregateInputType
    _sum?: Datasource_sqlSumAggregateInputType
    _min?: Datasource_sqlMinAggregateInputType
    _max?: Datasource_sqlMaxAggregateInputType
  }


  export type Datasource_sqlGroupByOutputType = {
    id: number
    select: string
    from: string
    condition: string | null
    join: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Datasource_sqlCountAggregateOutputType | null
    _avg: Datasource_sqlAvgAggregateOutputType | null
    _sum: Datasource_sqlSumAggregateOutputType | null
    _min: Datasource_sqlMinAggregateOutputType | null
    _max: Datasource_sqlMaxAggregateOutputType | null
  }

  type GetDatasource_sqlGroupByPayload<T extends Datasource_sqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Datasource_sqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Datasource_sqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Datasource_sqlGroupByOutputType[P]>
            : GetScalarType<T[P], Datasource_sqlGroupByOutputType[P]>
        }
      >
    >


  export type datasource_sqlSelect = {
    id?: boolean
    select?: boolean
    from?: boolean
    condition?: boolean
    join?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type datasource_sqlGetPayload<S extends boolean | null | undefined | datasource_sqlArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? datasource_sql :
    S extends undefined ? never :
    S extends { include: any } & (datasource_sqlArgs | datasource_sqlFindManyArgs)
    ? datasource_sql 
    : S extends { select: any } & (datasource_sqlArgs | datasource_sqlFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof datasource_sql ? datasource_sql[P] : never
  } 
      : datasource_sql


  type datasource_sqlCountArgs = 
    Omit<datasource_sqlFindManyArgs, 'select' | 'include'> & {
      select?: Datasource_sqlCountAggregateInputType | true
    }

  export interface datasource_sqlDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Datasource_sql that matches the filter.
     * @param {datasource_sqlFindUniqueArgs} args - Arguments to find a Datasource_sql
     * @example
     * // Get one Datasource_sql
     * const datasource_sql = await prisma.datasource_sql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends datasource_sqlFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, datasource_sqlFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'datasource_sql'> extends True ? Prisma__datasource_sqlClient<datasource_sqlGetPayload<T>> : Prisma__datasource_sqlClient<datasource_sqlGetPayload<T> | null, null>

    /**
     * Find one Datasource_sql that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {datasource_sqlFindUniqueOrThrowArgs} args - Arguments to find a Datasource_sql
     * @example
     * // Get one Datasource_sql
     * const datasource_sql = await prisma.datasource_sql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends datasource_sqlFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, datasource_sqlFindUniqueOrThrowArgs>
    ): Prisma__datasource_sqlClient<datasource_sqlGetPayload<T>>

    /**
     * Find the first Datasource_sql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasource_sqlFindFirstArgs} args - Arguments to find a Datasource_sql
     * @example
     * // Get one Datasource_sql
     * const datasource_sql = await prisma.datasource_sql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends datasource_sqlFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, datasource_sqlFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'datasource_sql'> extends True ? Prisma__datasource_sqlClient<datasource_sqlGetPayload<T>> : Prisma__datasource_sqlClient<datasource_sqlGetPayload<T> | null, null>

    /**
     * Find the first Datasource_sql that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasource_sqlFindFirstOrThrowArgs} args - Arguments to find a Datasource_sql
     * @example
     * // Get one Datasource_sql
     * const datasource_sql = await prisma.datasource_sql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends datasource_sqlFindFirstOrThrowArgs>(
      args?: SelectSubset<T, datasource_sqlFindFirstOrThrowArgs>
    ): Prisma__datasource_sqlClient<datasource_sqlGetPayload<T>>

    /**
     * Find zero or more Datasource_sqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasource_sqlFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datasource_sqls
     * const datasource_sqls = await prisma.datasource_sql.findMany()
     * 
     * // Get first 10 Datasource_sqls
     * const datasource_sqls = await prisma.datasource_sql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasource_sqlWithIdOnly = await prisma.datasource_sql.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends datasource_sqlFindManyArgs>(
      args?: SelectSubset<T, datasource_sqlFindManyArgs>
    ): Prisma.PrismaPromise<Array<datasource_sqlGetPayload<T>>>

    /**
     * Create a Datasource_sql.
     * @param {datasource_sqlCreateArgs} args - Arguments to create a Datasource_sql.
     * @example
     * // Create one Datasource_sql
     * const Datasource_sql = await prisma.datasource_sql.create({
     *   data: {
     *     // ... data to create a Datasource_sql
     *   }
     * })
     * 
    **/
    create<T extends datasource_sqlCreateArgs>(
      args: SelectSubset<T, datasource_sqlCreateArgs>
    ): Prisma__datasource_sqlClient<datasource_sqlGetPayload<T>>

    /**
     * Create many Datasource_sqls.
     *     @param {datasource_sqlCreateManyArgs} args - Arguments to create many Datasource_sqls.
     *     @example
     *     // Create many Datasource_sqls
     *     const datasource_sql = await prisma.datasource_sql.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends datasource_sqlCreateManyArgs>(
      args?: SelectSubset<T, datasource_sqlCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Datasource_sql.
     * @param {datasource_sqlDeleteArgs} args - Arguments to delete one Datasource_sql.
     * @example
     * // Delete one Datasource_sql
     * const Datasource_sql = await prisma.datasource_sql.delete({
     *   where: {
     *     // ... filter to delete one Datasource_sql
     *   }
     * })
     * 
    **/
    delete<T extends datasource_sqlDeleteArgs>(
      args: SelectSubset<T, datasource_sqlDeleteArgs>
    ): Prisma__datasource_sqlClient<datasource_sqlGetPayload<T>>

    /**
     * Update one Datasource_sql.
     * @param {datasource_sqlUpdateArgs} args - Arguments to update one Datasource_sql.
     * @example
     * // Update one Datasource_sql
     * const datasource_sql = await prisma.datasource_sql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends datasource_sqlUpdateArgs>(
      args: SelectSubset<T, datasource_sqlUpdateArgs>
    ): Prisma__datasource_sqlClient<datasource_sqlGetPayload<T>>

    /**
     * Delete zero or more Datasource_sqls.
     * @param {datasource_sqlDeleteManyArgs} args - Arguments to filter Datasource_sqls to delete.
     * @example
     * // Delete a few Datasource_sqls
     * const { count } = await prisma.datasource_sql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends datasource_sqlDeleteManyArgs>(
      args?: SelectSubset<T, datasource_sqlDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasource_sqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasource_sqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datasource_sqls
     * const datasource_sql = await prisma.datasource_sql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends datasource_sqlUpdateManyArgs>(
      args: SelectSubset<T, datasource_sqlUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Datasource_sql.
     * @param {datasource_sqlUpsertArgs} args - Arguments to update or create a Datasource_sql.
     * @example
     * // Update or create a Datasource_sql
     * const datasource_sql = await prisma.datasource_sql.upsert({
     *   create: {
     *     // ... data to create a Datasource_sql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Datasource_sql we want to update
     *   }
     * })
    **/
    upsert<T extends datasource_sqlUpsertArgs>(
      args: SelectSubset<T, datasource_sqlUpsertArgs>
    ): Prisma__datasource_sqlClient<datasource_sqlGetPayload<T>>

    /**
     * Count the number of Datasource_sqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {datasource_sqlCountArgs} args - Arguments to filter Datasource_sqls to count.
     * @example
     * // Count the number of Datasource_sqls
     * const count = await prisma.datasource_sql.count({
     *   where: {
     *     // ... the filter for the Datasource_sqls we want to count
     *   }
     * })
    **/
    count<T extends datasource_sqlCountArgs>(
      args?: Subset<T, datasource_sqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Datasource_sqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Datasource_sql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Datasource_sqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Datasource_sqlAggregateArgs>(args: Subset<T, Datasource_sqlAggregateArgs>): Prisma.PrismaPromise<GetDatasource_sqlAggregateType<T>>

    /**
     * Group by Datasource_sql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Datasource_sqlGroupByArgs} args - Group by arguments.
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
      T extends Datasource_sqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Datasource_sqlGroupByArgs['orderBy'] }
        : { orderBy?: Datasource_sqlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Datasource_sqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasource_sqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for datasource_sql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__datasource_sqlClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * datasource_sql base type for findUnique actions
   */
  export type datasource_sqlFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the datasource_sql
     */
    select?: datasource_sqlSelect | null
    /**
     * Filter, which datasource_sql to fetch.
     */
    where: datasource_sqlWhereUniqueInput
  }

  /**
   * datasource_sql findUnique
   */
  export interface datasource_sqlFindUniqueArgs extends datasource_sqlFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * datasource_sql findUniqueOrThrow
   */
  export type datasource_sqlFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the datasource_sql
     */
    select?: datasource_sqlSelect | null
    /**
     * Filter, which datasource_sql to fetch.
     */
    where: datasource_sqlWhereUniqueInput
  }


  /**
   * datasource_sql base type for findFirst actions
   */
  export type datasource_sqlFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the datasource_sql
     */
    select?: datasource_sqlSelect | null
    /**
     * Filter, which datasource_sql to fetch.
     */
    where?: datasource_sqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datasource_sqls to fetch.
     */
    orderBy?: Enumerable<datasource_sqlOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datasource_sqls.
     */
    cursor?: datasource_sqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datasource_sqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datasource_sqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datasource_sqls.
     */
    distinct?: Enumerable<Datasource_sqlScalarFieldEnum>
  }

  /**
   * datasource_sql findFirst
   */
  export interface datasource_sqlFindFirstArgs extends datasource_sqlFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * datasource_sql findFirstOrThrow
   */
  export type datasource_sqlFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the datasource_sql
     */
    select?: datasource_sqlSelect | null
    /**
     * Filter, which datasource_sql to fetch.
     */
    where?: datasource_sqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datasource_sqls to fetch.
     */
    orderBy?: Enumerable<datasource_sqlOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for datasource_sqls.
     */
    cursor?: datasource_sqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datasource_sqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datasource_sqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of datasource_sqls.
     */
    distinct?: Enumerable<Datasource_sqlScalarFieldEnum>
  }


  /**
   * datasource_sql findMany
   */
  export type datasource_sqlFindManyArgs = {
    /**
     * Select specific fields to fetch from the datasource_sql
     */
    select?: datasource_sqlSelect | null
    /**
     * Filter, which datasource_sqls to fetch.
     */
    where?: datasource_sqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of datasource_sqls to fetch.
     */
    orderBy?: Enumerable<datasource_sqlOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing datasource_sqls.
     */
    cursor?: datasource_sqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` datasource_sqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` datasource_sqls.
     */
    skip?: number
    distinct?: Enumerable<Datasource_sqlScalarFieldEnum>
  }


  /**
   * datasource_sql create
   */
  export type datasource_sqlCreateArgs = {
    /**
     * Select specific fields to fetch from the datasource_sql
     */
    select?: datasource_sqlSelect | null
    /**
     * The data needed to create a datasource_sql.
     */
    data: XOR<datasource_sqlCreateInput, datasource_sqlUncheckedCreateInput>
  }


  /**
   * datasource_sql createMany
   */
  export type datasource_sqlCreateManyArgs = {
    /**
     * The data used to create many datasource_sqls.
     */
    data: Enumerable<datasource_sqlCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * datasource_sql update
   */
  export type datasource_sqlUpdateArgs = {
    /**
     * Select specific fields to fetch from the datasource_sql
     */
    select?: datasource_sqlSelect | null
    /**
     * The data needed to update a datasource_sql.
     */
    data: XOR<datasource_sqlUpdateInput, datasource_sqlUncheckedUpdateInput>
    /**
     * Choose, which datasource_sql to update.
     */
    where: datasource_sqlWhereUniqueInput
  }


  /**
   * datasource_sql updateMany
   */
  export type datasource_sqlUpdateManyArgs = {
    /**
     * The data used to update datasource_sqls.
     */
    data: XOR<datasource_sqlUpdateManyMutationInput, datasource_sqlUncheckedUpdateManyInput>
    /**
     * Filter which datasource_sqls to update
     */
    where?: datasource_sqlWhereInput
  }


  /**
   * datasource_sql upsert
   */
  export type datasource_sqlUpsertArgs = {
    /**
     * Select specific fields to fetch from the datasource_sql
     */
    select?: datasource_sqlSelect | null
    /**
     * The filter to search for the datasource_sql to update in case it exists.
     */
    where: datasource_sqlWhereUniqueInput
    /**
     * In case the datasource_sql found by the `where` argument doesn't exist, create a new datasource_sql with this data.
     */
    create: XOR<datasource_sqlCreateInput, datasource_sqlUncheckedCreateInput>
    /**
     * In case the datasource_sql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<datasource_sqlUpdateInput, datasource_sqlUncheckedUpdateInput>
  }


  /**
   * datasource_sql delete
   */
  export type datasource_sqlDeleteArgs = {
    /**
     * Select specific fields to fetch from the datasource_sql
     */
    select?: datasource_sqlSelect | null
    /**
     * Filter which datasource_sql to delete.
     */
    where: datasource_sqlWhereUniqueInput
  }


  /**
   * datasource_sql deleteMany
   */
  export type datasource_sqlDeleteManyArgs = {
    /**
     * Filter which datasource_sqls to delete
     */
    where?: datasource_sqlWhereInput
  }


  /**
   * datasource_sql without action
   */
  export type datasource_sqlArgs = {
    /**
     * Select specific fields to fetch from the datasource_sql
     */
    select?: datasource_sqlSelect | null
  }



  /**
   * Model key_value
   */


  export type AggregateKey_value = {
    _count: Key_valueCountAggregateOutputType | null
    _avg: Key_valueAvgAggregateOutputType | null
    _sum: Key_valueSumAggregateOutputType | null
    _min: Key_valueMinAggregateOutputType | null
    _max: Key_valueMaxAggregateOutputType | null
  }

  export type Key_valueAvgAggregateOutputType = {
    id: number | null
    source_sql_id: number | null
  }

  export type Key_valueSumAggregateOutputType = {
    id: number | null
    source_sql_id: number | null
  }

  export type Key_valueMinAggregateOutputType = {
    id: number | null
    source_sql_id: number | null
    key: string | null
    value: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Key_valueMaxAggregateOutputType = {
    id: number | null
    source_sql_id: number | null
    key: string | null
    value: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Key_valueCountAggregateOutputType = {
    id: number
    source_sql_id: number
    key: number
    value: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Key_valueAvgAggregateInputType = {
    id?: true
    source_sql_id?: true
  }

  export type Key_valueSumAggregateInputType = {
    id?: true
    source_sql_id?: true
  }

  export type Key_valueMinAggregateInputType = {
    id?: true
    source_sql_id?: true
    key?: true
    value?: true
    created_at?: true
    updated_at?: true
  }

  export type Key_valueMaxAggregateInputType = {
    id?: true
    source_sql_id?: true
    key?: true
    value?: true
    created_at?: true
    updated_at?: true
  }

  export type Key_valueCountAggregateInputType = {
    id?: true
    source_sql_id?: true
    key?: true
    value?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Key_valueAggregateArgs = {
    /**
     * Filter which key_value to aggregate.
     */
    where?: key_valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of key_values to fetch.
     */
    orderBy?: Enumerable<key_valueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: key_valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` key_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` key_values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned key_values
    **/
    _count?: true | Key_valueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Key_valueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Key_valueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Key_valueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Key_valueMaxAggregateInputType
  }

  export type GetKey_valueAggregateType<T extends Key_valueAggregateArgs> = {
        [P in keyof T & keyof AggregateKey_value]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKey_value[P]>
      : GetScalarType<T[P], AggregateKey_value[P]>
  }




  export type Key_valueGroupByArgs = {
    where?: key_valueWhereInput
    orderBy?: Enumerable<key_valueOrderByWithAggregationInput>
    by: Key_valueScalarFieldEnum[]
    having?: key_valueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Key_valueCountAggregateInputType | true
    _avg?: Key_valueAvgAggregateInputType
    _sum?: Key_valueSumAggregateInputType
    _min?: Key_valueMinAggregateInputType
    _max?: Key_valueMaxAggregateInputType
  }


  export type Key_valueGroupByOutputType = {
    id: number
    source_sql_id: number | null
    key: string | null
    value: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: Key_valueCountAggregateOutputType | null
    _avg: Key_valueAvgAggregateOutputType | null
    _sum: Key_valueSumAggregateOutputType | null
    _min: Key_valueMinAggregateOutputType | null
    _max: Key_valueMaxAggregateOutputType | null
  }

  type GetKey_valueGroupByPayload<T extends Key_valueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Key_valueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Key_valueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Key_valueGroupByOutputType[P]>
            : GetScalarType<T[P], Key_valueGroupByOutputType[P]>
        }
      >
    >


  export type key_valueSelect = {
    id?: boolean
    source_sql_id?: boolean
    key?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type key_valueGetPayload<S extends boolean | null | undefined | key_valueArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? key_value :
    S extends undefined ? never :
    S extends { include: any } & (key_valueArgs | key_valueFindManyArgs)
    ? key_value 
    : S extends { select: any } & (key_valueArgs | key_valueFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof key_value ? key_value[P] : never
  } 
      : key_value


  type key_valueCountArgs = 
    Omit<key_valueFindManyArgs, 'select' | 'include'> & {
      select?: Key_valueCountAggregateInputType | true
    }

  export interface key_valueDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Key_value that matches the filter.
     * @param {key_valueFindUniqueArgs} args - Arguments to find a Key_value
     * @example
     * // Get one Key_value
     * const key_value = await prisma.key_value.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends key_valueFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, key_valueFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'key_value'> extends True ? Prisma__key_valueClient<key_valueGetPayload<T>> : Prisma__key_valueClient<key_valueGetPayload<T> | null, null>

    /**
     * Find one Key_value that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {key_valueFindUniqueOrThrowArgs} args - Arguments to find a Key_value
     * @example
     * // Get one Key_value
     * const key_value = await prisma.key_value.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends key_valueFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, key_valueFindUniqueOrThrowArgs>
    ): Prisma__key_valueClient<key_valueGetPayload<T>>

    /**
     * Find the first Key_value that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {key_valueFindFirstArgs} args - Arguments to find a Key_value
     * @example
     * // Get one Key_value
     * const key_value = await prisma.key_value.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends key_valueFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, key_valueFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'key_value'> extends True ? Prisma__key_valueClient<key_valueGetPayload<T>> : Prisma__key_valueClient<key_valueGetPayload<T> | null, null>

    /**
     * Find the first Key_value that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {key_valueFindFirstOrThrowArgs} args - Arguments to find a Key_value
     * @example
     * // Get one Key_value
     * const key_value = await prisma.key_value.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends key_valueFindFirstOrThrowArgs>(
      args?: SelectSubset<T, key_valueFindFirstOrThrowArgs>
    ): Prisma__key_valueClient<key_valueGetPayload<T>>

    /**
     * Find zero or more Key_values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {key_valueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Key_values
     * const key_values = await prisma.key_value.findMany()
     * 
     * // Get first 10 Key_values
     * const key_values = await prisma.key_value.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const key_valueWithIdOnly = await prisma.key_value.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends key_valueFindManyArgs>(
      args?: SelectSubset<T, key_valueFindManyArgs>
    ): Prisma.PrismaPromise<Array<key_valueGetPayload<T>>>

    /**
     * Create a Key_value.
     * @param {key_valueCreateArgs} args - Arguments to create a Key_value.
     * @example
     * // Create one Key_value
     * const Key_value = await prisma.key_value.create({
     *   data: {
     *     // ... data to create a Key_value
     *   }
     * })
     * 
    **/
    create<T extends key_valueCreateArgs>(
      args: SelectSubset<T, key_valueCreateArgs>
    ): Prisma__key_valueClient<key_valueGetPayload<T>>

    /**
     * Create many Key_values.
     *     @param {key_valueCreateManyArgs} args - Arguments to create many Key_values.
     *     @example
     *     // Create many Key_values
     *     const key_value = await prisma.key_value.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends key_valueCreateManyArgs>(
      args?: SelectSubset<T, key_valueCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Key_value.
     * @param {key_valueDeleteArgs} args - Arguments to delete one Key_value.
     * @example
     * // Delete one Key_value
     * const Key_value = await prisma.key_value.delete({
     *   where: {
     *     // ... filter to delete one Key_value
     *   }
     * })
     * 
    **/
    delete<T extends key_valueDeleteArgs>(
      args: SelectSubset<T, key_valueDeleteArgs>
    ): Prisma__key_valueClient<key_valueGetPayload<T>>

    /**
     * Update one Key_value.
     * @param {key_valueUpdateArgs} args - Arguments to update one Key_value.
     * @example
     * // Update one Key_value
     * const key_value = await prisma.key_value.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends key_valueUpdateArgs>(
      args: SelectSubset<T, key_valueUpdateArgs>
    ): Prisma__key_valueClient<key_valueGetPayload<T>>

    /**
     * Delete zero or more Key_values.
     * @param {key_valueDeleteManyArgs} args - Arguments to filter Key_values to delete.
     * @example
     * // Delete a few Key_values
     * const { count } = await prisma.key_value.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends key_valueDeleteManyArgs>(
      args?: SelectSubset<T, key_valueDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Key_values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {key_valueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Key_values
     * const key_value = await prisma.key_value.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends key_valueUpdateManyArgs>(
      args: SelectSubset<T, key_valueUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Key_value.
     * @param {key_valueUpsertArgs} args - Arguments to update or create a Key_value.
     * @example
     * // Update or create a Key_value
     * const key_value = await prisma.key_value.upsert({
     *   create: {
     *     // ... data to create a Key_value
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Key_value we want to update
     *   }
     * })
    **/
    upsert<T extends key_valueUpsertArgs>(
      args: SelectSubset<T, key_valueUpsertArgs>
    ): Prisma__key_valueClient<key_valueGetPayload<T>>

    /**
     * Count the number of Key_values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {key_valueCountArgs} args - Arguments to filter Key_values to count.
     * @example
     * // Count the number of Key_values
     * const count = await prisma.key_value.count({
     *   where: {
     *     // ... the filter for the Key_values we want to count
     *   }
     * })
    **/
    count<T extends key_valueCountArgs>(
      args?: Subset<T, key_valueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Key_valueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Key_value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Key_valueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Key_valueAggregateArgs>(args: Subset<T, Key_valueAggregateArgs>): Prisma.PrismaPromise<GetKey_valueAggregateType<T>>

    /**
     * Group by Key_value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Key_valueGroupByArgs} args - Group by arguments.
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
      T extends Key_valueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Key_valueGroupByArgs['orderBy'] }
        : { orderBy?: Key_valueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Key_valueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKey_valueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for key_value.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__key_valueClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * key_value base type for findUnique actions
   */
  export type key_valueFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the key_value
     */
    select?: key_valueSelect | null
    /**
     * Filter, which key_value to fetch.
     */
    where: key_valueWhereUniqueInput
  }

  /**
   * key_value findUnique
   */
  export interface key_valueFindUniqueArgs extends key_valueFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * key_value findUniqueOrThrow
   */
  export type key_valueFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the key_value
     */
    select?: key_valueSelect | null
    /**
     * Filter, which key_value to fetch.
     */
    where: key_valueWhereUniqueInput
  }


  /**
   * key_value base type for findFirst actions
   */
  export type key_valueFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the key_value
     */
    select?: key_valueSelect | null
    /**
     * Filter, which key_value to fetch.
     */
    where?: key_valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of key_values to fetch.
     */
    orderBy?: Enumerable<key_valueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for key_values.
     */
    cursor?: key_valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` key_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` key_values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of key_values.
     */
    distinct?: Enumerable<Key_valueScalarFieldEnum>
  }

  /**
   * key_value findFirst
   */
  export interface key_valueFindFirstArgs extends key_valueFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * key_value findFirstOrThrow
   */
  export type key_valueFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the key_value
     */
    select?: key_valueSelect | null
    /**
     * Filter, which key_value to fetch.
     */
    where?: key_valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of key_values to fetch.
     */
    orderBy?: Enumerable<key_valueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for key_values.
     */
    cursor?: key_valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` key_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` key_values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of key_values.
     */
    distinct?: Enumerable<Key_valueScalarFieldEnum>
  }


  /**
   * key_value findMany
   */
  export type key_valueFindManyArgs = {
    /**
     * Select specific fields to fetch from the key_value
     */
    select?: key_valueSelect | null
    /**
     * Filter, which key_values to fetch.
     */
    where?: key_valueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of key_values to fetch.
     */
    orderBy?: Enumerable<key_valueOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing key_values.
     */
    cursor?: key_valueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` key_values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` key_values.
     */
    skip?: number
    distinct?: Enumerable<Key_valueScalarFieldEnum>
  }


  /**
   * key_value create
   */
  export type key_valueCreateArgs = {
    /**
     * Select specific fields to fetch from the key_value
     */
    select?: key_valueSelect | null
    /**
     * The data needed to create a key_value.
     */
    data: XOR<key_valueCreateInput, key_valueUncheckedCreateInput>
  }


  /**
   * key_value createMany
   */
  export type key_valueCreateManyArgs = {
    /**
     * The data used to create many key_values.
     */
    data: Enumerable<key_valueCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * key_value update
   */
  export type key_valueUpdateArgs = {
    /**
     * Select specific fields to fetch from the key_value
     */
    select?: key_valueSelect | null
    /**
     * The data needed to update a key_value.
     */
    data: XOR<key_valueUpdateInput, key_valueUncheckedUpdateInput>
    /**
     * Choose, which key_value to update.
     */
    where: key_valueWhereUniqueInput
  }


  /**
   * key_value updateMany
   */
  export type key_valueUpdateManyArgs = {
    /**
     * The data used to update key_values.
     */
    data: XOR<key_valueUpdateManyMutationInput, key_valueUncheckedUpdateManyInput>
    /**
     * Filter which key_values to update
     */
    where?: key_valueWhereInput
  }


  /**
   * key_value upsert
   */
  export type key_valueUpsertArgs = {
    /**
     * Select specific fields to fetch from the key_value
     */
    select?: key_valueSelect | null
    /**
     * The filter to search for the key_value to update in case it exists.
     */
    where: key_valueWhereUniqueInput
    /**
     * In case the key_value found by the `where` argument doesn't exist, create a new key_value with this data.
     */
    create: XOR<key_valueCreateInput, key_valueUncheckedCreateInput>
    /**
     * In case the key_value was found with the provided `where` argument, update it with this data.
     */
    update: XOR<key_valueUpdateInput, key_valueUncheckedUpdateInput>
  }


  /**
   * key_value delete
   */
  export type key_valueDeleteArgs = {
    /**
     * Select specific fields to fetch from the key_value
     */
    select?: key_valueSelect | null
    /**
     * Filter which key_value to delete.
     */
    where: key_valueWhereUniqueInput
  }


  /**
   * key_value deleteMany
   */
  export type key_valueDeleteManyArgs = {
    /**
     * Filter which key_values to delete
     */
    where?: key_valueWhereInput
  }


  /**
   * key_value without action
   */
  export type key_valueArgs = {
    /**
     * Select specific fields to fetch from the key_value
     */
    select?: key_valueSelect | null
  }



  /**
   * Model service
   */


  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    title: string | null
    keyword: string | null
    sample: string | null
    desc: string | null
    separator: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    keyword: string | null
    sample: string | null
    desc: string | null
    separator: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    title: number
    keyword: number
    sample: number
    desc: number
    separator: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    title?: true
    keyword?: true
    sample?: true
    desc?: true
    separator?: true
    created_at?: true
    updated_at?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    title?: true
    keyword?: true
    sample?: true
    desc?: true
    separator?: true
    created_at?: true
    updated_at?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    title?: true
    keyword?: true
    sample?: true
    desc?: true
    separator?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ServiceAggregateArgs = {
    /**
     * Filter which service to aggregate.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: Enumerable<serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs = {
    where?: serviceWhereInput
    orderBy?: Enumerable<serviceOrderByWithAggregationInput>
    by: ServiceScalarFieldEnum[]
    having?: serviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }


  export type ServiceGroupByOutputType = {
    id: number
    title: string | null
    keyword: string | null
    sample: string | null
    desc: string | null
    separator: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type serviceSelect = {
    id?: boolean
    title?: boolean
    keyword?: boolean
    sample?: boolean
    desc?: boolean
    separator?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type serviceGetPayload<S extends boolean | null | undefined | serviceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? service :
    S extends undefined ? never :
    S extends { include: any } & (serviceArgs | serviceFindManyArgs)
    ? service 
    : S extends { select: any } & (serviceArgs | serviceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof service ? service[P] : never
  } 
      : service


  type serviceCountArgs = 
    Omit<serviceFindManyArgs, 'select' | 'include'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface serviceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Service that matches the filter.
     * @param {serviceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends serviceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, serviceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'service'> extends True ? Prisma__serviceClient<serviceGetPayload<T>> : Prisma__serviceClient<serviceGetPayload<T> | null, null>

    /**
     * Find one Service that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {serviceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends serviceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, serviceFindUniqueOrThrowArgs>
    ): Prisma__serviceClient<serviceGetPayload<T>>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends serviceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, serviceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'service'> extends True ? Prisma__serviceClient<serviceGetPayload<T>> : Prisma__serviceClient<serviceGetPayload<T> | null, null>

    /**
     * Find the first Service that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends serviceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, serviceFindFirstOrThrowArgs>
    ): Prisma__serviceClient<serviceGetPayload<T>>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends serviceFindManyArgs>(
      args?: SelectSubset<T, serviceFindManyArgs>
    ): Prisma.PrismaPromise<Array<serviceGetPayload<T>>>

    /**
     * Create a Service.
     * @param {serviceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
    **/
    create<T extends serviceCreateArgs>(
      args: SelectSubset<T, serviceCreateArgs>
    ): Prisma__serviceClient<serviceGetPayload<T>>

    /**
     * Create many Services.
     *     @param {serviceCreateManyArgs} args - Arguments to create many Services.
     *     @example
     *     // Create many Services
     *     const service = await prisma.service.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends serviceCreateManyArgs>(
      args?: SelectSubset<T, serviceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {serviceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
    **/
    delete<T extends serviceDeleteArgs>(
      args: SelectSubset<T, serviceDeleteArgs>
    ): Prisma__serviceClient<serviceGetPayload<T>>

    /**
     * Update one Service.
     * @param {serviceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends serviceUpdateArgs>(
      args: SelectSubset<T, serviceUpdateArgs>
    ): Prisma__serviceClient<serviceGetPayload<T>>

    /**
     * Delete zero or more Services.
     * @param {serviceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends serviceDeleteManyArgs>(
      args?: SelectSubset<T, serviceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends serviceUpdateManyArgs>(
      args: SelectSubset<T, serviceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {serviceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
    **/
    upsert<T extends serviceUpsertArgs>(
      args: SelectSubset<T, serviceUpsertArgs>
    ): Prisma__serviceClient<serviceGetPayload<T>>

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends serviceCountArgs>(
      args?: Subset<T, serviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__serviceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * service base type for findUnique actions
   */
  export type serviceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect | null
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput
  }

  /**
   * service findUnique
   */
  export interface serviceFindUniqueArgs extends serviceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * service findUniqueOrThrow
   */
  export type serviceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect | null
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput
  }


  /**
   * service base type for findFirst actions
   */
  export type serviceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect | null
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: Enumerable<serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: Enumerable<ServiceScalarFieldEnum>
  }

  /**
   * service findFirst
   */
  export interface serviceFindFirstArgs extends serviceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * service findFirstOrThrow
   */
  export type serviceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect | null
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: Enumerable<serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: Enumerable<ServiceScalarFieldEnum>
  }


  /**
   * service findMany
   */
  export type serviceFindManyArgs = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect | null
    /**
     * Filter, which services to fetch.
     */
    where?: serviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: Enumerable<serviceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     */
    cursor?: serviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    distinct?: Enumerable<ServiceScalarFieldEnum>
  }


  /**
   * service create
   */
  export type serviceCreateArgs = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect | null
    /**
     * The data needed to create a service.
     */
    data: XOR<serviceCreateInput, serviceUncheckedCreateInput>
  }


  /**
   * service createMany
   */
  export type serviceCreateManyArgs = {
    /**
     * The data used to create many services.
     */
    data: Enumerable<serviceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * service update
   */
  export type serviceUpdateArgs = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect | null
    /**
     * The data needed to update a service.
     */
    data: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>
    /**
     * Choose, which service to update.
     */
    where: serviceWhereUniqueInput
  }


  /**
   * service updateMany
   */
  export type serviceUpdateManyArgs = {
    /**
     * The data used to update services.
     */
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: serviceWhereInput
  }


  /**
   * service upsert
   */
  export type serviceUpsertArgs = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect | null
    /**
     * The filter to search for the service to update in case it exists.
     */
    where: serviceWhereUniqueInput
    /**
     * In case the service found by the `where` argument doesn't exist, create a new service with this data.
     */
    create: XOR<serviceCreateInput, serviceUncheckedCreateInput>
    /**
     * In case the service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>
  }


  /**
   * service delete
   */
  export type serviceDeleteArgs = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect | null
    /**
     * Filter which service to delete.
     */
    where: serviceWhereUniqueInput
  }


  /**
   * service deleteMany
   */
  export type serviceDeleteManyArgs = {
    /**
     * Filter which services to delete
     */
    where?: serviceWhereInput
  }


  /**
   * service without action
   */
  export type serviceArgs = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect | null
  }



  /**
   * Model template_reply
   */


  export type AggregateTemplate_reply = {
    _count: Template_replyCountAggregateOutputType | null
    _avg: Template_replyAvgAggregateOutputType | null
    _sum: Template_replySumAggregateOutputType | null
    _min: Template_replyMinAggregateOutputType | null
    _max: Template_replyMaxAggregateOutputType | null
  }

  export type Template_replyAvgAggregateOutputType = {
    id: number | null
    service_id: number | null
  }

  export type Template_replySumAggregateOutputType = {
    id: number | null
    service_id: number | null
  }

  export type Template_replyMinAggregateOutputType = {
    id: number | null
    service_id: number | null
    text: string | null
    loop: template_reply_loop | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Template_replyMaxAggregateOutputType = {
    id: number | null
    service_id: number | null
    text: string | null
    loop: template_reply_loop | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Template_replyCountAggregateOutputType = {
    id: number
    service_id: number
    text: number
    loop: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Template_replyAvgAggregateInputType = {
    id?: true
    service_id?: true
  }

  export type Template_replySumAggregateInputType = {
    id?: true
    service_id?: true
  }

  export type Template_replyMinAggregateInputType = {
    id?: true
    service_id?: true
    text?: true
    loop?: true
    created_at?: true
    updated_at?: true
  }

  export type Template_replyMaxAggregateInputType = {
    id?: true
    service_id?: true
    text?: true
    loop?: true
    created_at?: true
    updated_at?: true
  }

  export type Template_replyCountAggregateInputType = {
    id?: true
    service_id?: true
    text?: true
    loop?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Template_replyAggregateArgs = {
    /**
     * Filter which template_reply to aggregate.
     */
    where?: template_replyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_replies to fetch.
     */
    orderBy?: Enumerable<template_replyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: template_replyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned template_replies
    **/
    _count?: true | Template_replyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Template_replyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Template_replySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Template_replyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Template_replyMaxAggregateInputType
  }

  export type GetTemplate_replyAggregateType<T extends Template_replyAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate_reply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate_reply[P]>
      : GetScalarType<T[P], AggregateTemplate_reply[P]>
  }




  export type Template_replyGroupByArgs = {
    where?: template_replyWhereInput
    orderBy?: Enumerable<template_replyOrderByWithAggregationInput>
    by: Template_replyScalarFieldEnum[]
    having?: template_replyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Template_replyCountAggregateInputType | true
    _avg?: Template_replyAvgAggregateInputType
    _sum?: Template_replySumAggregateInputType
    _min?: Template_replyMinAggregateInputType
    _max?: Template_replyMaxAggregateInputType
  }


  export type Template_replyGroupByOutputType = {
    id: number
    service_id: number
    text: string
    loop: template_reply_loop
    created_at: Date | null
    updated_at: Date | null
    _count: Template_replyCountAggregateOutputType | null
    _avg: Template_replyAvgAggregateOutputType | null
    _sum: Template_replySumAggregateOutputType | null
    _min: Template_replyMinAggregateOutputType | null
    _max: Template_replyMaxAggregateOutputType | null
  }

  type GetTemplate_replyGroupByPayload<T extends Template_replyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Template_replyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Template_replyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Template_replyGroupByOutputType[P]>
            : GetScalarType<T[P], Template_replyGroupByOutputType[P]>
        }
      >
    >


  export type template_replySelect = {
    id?: boolean
    service_id?: boolean
    text?: boolean
    loop?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type template_replyGetPayload<S extends boolean | null | undefined | template_replyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? template_reply :
    S extends undefined ? never :
    S extends { include: any } & (template_replyArgs | template_replyFindManyArgs)
    ? template_reply 
    : S extends { select: any } & (template_replyArgs | template_replyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof template_reply ? template_reply[P] : never
  } 
      : template_reply


  type template_replyCountArgs = 
    Omit<template_replyFindManyArgs, 'select' | 'include'> & {
      select?: Template_replyCountAggregateInputType | true
    }

  export interface template_replyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Template_reply that matches the filter.
     * @param {template_replyFindUniqueArgs} args - Arguments to find a Template_reply
     * @example
     * // Get one Template_reply
     * const template_reply = await prisma.template_reply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends template_replyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, template_replyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'template_reply'> extends True ? Prisma__template_replyClient<template_replyGetPayload<T>> : Prisma__template_replyClient<template_replyGetPayload<T> | null, null>

    /**
     * Find one Template_reply that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {template_replyFindUniqueOrThrowArgs} args - Arguments to find a Template_reply
     * @example
     * // Get one Template_reply
     * const template_reply = await prisma.template_reply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends template_replyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, template_replyFindUniqueOrThrowArgs>
    ): Prisma__template_replyClient<template_replyGetPayload<T>>

    /**
     * Find the first Template_reply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_replyFindFirstArgs} args - Arguments to find a Template_reply
     * @example
     * // Get one Template_reply
     * const template_reply = await prisma.template_reply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends template_replyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, template_replyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'template_reply'> extends True ? Prisma__template_replyClient<template_replyGetPayload<T>> : Prisma__template_replyClient<template_replyGetPayload<T> | null, null>

    /**
     * Find the first Template_reply that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_replyFindFirstOrThrowArgs} args - Arguments to find a Template_reply
     * @example
     * // Get one Template_reply
     * const template_reply = await prisma.template_reply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends template_replyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, template_replyFindFirstOrThrowArgs>
    ): Prisma__template_replyClient<template_replyGetPayload<T>>

    /**
     * Find zero or more Template_replies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_replyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Template_replies
     * const template_replies = await prisma.template_reply.findMany()
     * 
     * // Get first 10 Template_replies
     * const template_replies = await prisma.template_reply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const template_replyWithIdOnly = await prisma.template_reply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends template_replyFindManyArgs>(
      args?: SelectSubset<T, template_replyFindManyArgs>
    ): Prisma.PrismaPromise<Array<template_replyGetPayload<T>>>

    /**
     * Create a Template_reply.
     * @param {template_replyCreateArgs} args - Arguments to create a Template_reply.
     * @example
     * // Create one Template_reply
     * const Template_reply = await prisma.template_reply.create({
     *   data: {
     *     // ... data to create a Template_reply
     *   }
     * })
     * 
    **/
    create<T extends template_replyCreateArgs>(
      args: SelectSubset<T, template_replyCreateArgs>
    ): Prisma__template_replyClient<template_replyGetPayload<T>>

    /**
     * Create many Template_replies.
     *     @param {template_replyCreateManyArgs} args - Arguments to create many Template_replies.
     *     @example
     *     // Create many Template_replies
     *     const template_reply = await prisma.template_reply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends template_replyCreateManyArgs>(
      args?: SelectSubset<T, template_replyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Template_reply.
     * @param {template_replyDeleteArgs} args - Arguments to delete one Template_reply.
     * @example
     * // Delete one Template_reply
     * const Template_reply = await prisma.template_reply.delete({
     *   where: {
     *     // ... filter to delete one Template_reply
     *   }
     * })
     * 
    **/
    delete<T extends template_replyDeleteArgs>(
      args: SelectSubset<T, template_replyDeleteArgs>
    ): Prisma__template_replyClient<template_replyGetPayload<T>>

    /**
     * Update one Template_reply.
     * @param {template_replyUpdateArgs} args - Arguments to update one Template_reply.
     * @example
     * // Update one Template_reply
     * const template_reply = await prisma.template_reply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends template_replyUpdateArgs>(
      args: SelectSubset<T, template_replyUpdateArgs>
    ): Prisma__template_replyClient<template_replyGetPayload<T>>

    /**
     * Delete zero or more Template_replies.
     * @param {template_replyDeleteManyArgs} args - Arguments to filter Template_replies to delete.
     * @example
     * // Delete a few Template_replies
     * const { count } = await prisma.template_reply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends template_replyDeleteManyArgs>(
      args?: SelectSubset<T, template_replyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Template_replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_replyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Template_replies
     * const template_reply = await prisma.template_reply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends template_replyUpdateManyArgs>(
      args: SelectSubset<T, template_replyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Template_reply.
     * @param {template_replyUpsertArgs} args - Arguments to update or create a Template_reply.
     * @example
     * // Update or create a Template_reply
     * const template_reply = await prisma.template_reply.upsert({
     *   create: {
     *     // ... data to create a Template_reply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template_reply we want to update
     *   }
     * })
    **/
    upsert<T extends template_replyUpsertArgs>(
      args: SelectSubset<T, template_replyUpsertArgs>
    ): Prisma__template_replyClient<template_replyGetPayload<T>>

    /**
     * Count the number of Template_replies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {template_replyCountArgs} args - Arguments to filter Template_replies to count.
     * @example
     * // Count the number of Template_replies
     * const count = await prisma.template_reply.count({
     *   where: {
     *     // ... the filter for the Template_replies we want to count
     *   }
     * })
    **/
    count<T extends template_replyCountArgs>(
      args?: Subset<T, template_replyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Template_replyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template_reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Template_replyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Template_replyAggregateArgs>(args: Subset<T, Template_replyAggregateArgs>): Prisma.PrismaPromise<GetTemplate_replyAggregateType<T>>

    /**
     * Group by Template_reply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Template_replyGroupByArgs} args - Group by arguments.
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
      T extends Template_replyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Template_replyGroupByArgs['orderBy'] }
        : { orderBy?: Template_replyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Template_replyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplate_replyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for template_reply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__template_replyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * template_reply base type for findUnique actions
   */
  export type template_replyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the template_reply
     */
    select?: template_replySelect | null
    /**
     * Filter, which template_reply to fetch.
     */
    where: template_replyWhereUniqueInput
  }

  /**
   * template_reply findUnique
   */
  export interface template_replyFindUniqueArgs extends template_replyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * template_reply findUniqueOrThrow
   */
  export type template_replyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the template_reply
     */
    select?: template_replySelect | null
    /**
     * Filter, which template_reply to fetch.
     */
    where: template_replyWhereUniqueInput
  }


  /**
   * template_reply base type for findFirst actions
   */
  export type template_replyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the template_reply
     */
    select?: template_replySelect | null
    /**
     * Filter, which template_reply to fetch.
     */
    where?: template_replyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_replies to fetch.
     */
    orderBy?: Enumerable<template_replyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for template_replies.
     */
    cursor?: template_replyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of template_replies.
     */
    distinct?: Enumerable<Template_replyScalarFieldEnum>
  }

  /**
   * template_reply findFirst
   */
  export interface template_replyFindFirstArgs extends template_replyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * template_reply findFirstOrThrow
   */
  export type template_replyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the template_reply
     */
    select?: template_replySelect | null
    /**
     * Filter, which template_reply to fetch.
     */
    where?: template_replyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_replies to fetch.
     */
    orderBy?: Enumerable<template_replyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for template_replies.
     */
    cursor?: template_replyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_replies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of template_replies.
     */
    distinct?: Enumerable<Template_replyScalarFieldEnum>
  }


  /**
   * template_reply findMany
   */
  export type template_replyFindManyArgs = {
    /**
     * Select specific fields to fetch from the template_reply
     */
    select?: template_replySelect | null
    /**
     * Filter, which template_replies to fetch.
     */
    where?: template_replyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of template_replies to fetch.
     */
    orderBy?: Enumerable<template_replyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing template_replies.
     */
    cursor?: template_replyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` template_replies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` template_replies.
     */
    skip?: number
    distinct?: Enumerable<Template_replyScalarFieldEnum>
  }


  /**
   * template_reply create
   */
  export type template_replyCreateArgs = {
    /**
     * Select specific fields to fetch from the template_reply
     */
    select?: template_replySelect | null
    /**
     * The data needed to create a template_reply.
     */
    data: XOR<template_replyCreateInput, template_replyUncheckedCreateInput>
  }


  /**
   * template_reply createMany
   */
  export type template_replyCreateManyArgs = {
    /**
     * The data used to create many template_replies.
     */
    data: Enumerable<template_replyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * template_reply update
   */
  export type template_replyUpdateArgs = {
    /**
     * Select specific fields to fetch from the template_reply
     */
    select?: template_replySelect | null
    /**
     * The data needed to update a template_reply.
     */
    data: XOR<template_replyUpdateInput, template_replyUncheckedUpdateInput>
    /**
     * Choose, which template_reply to update.
     */
    where: template_replyWhereUniqueInput
  }


  /**
   * template_reply updateMany
   */
  export type template_replyUpdateManyArgs = {
    /**
     * The data used to update template_replies.
     */
    data: XOR<template_replyUpdateManyMutationInput, template_replyUncheckedUpdateManyInput>
    /**
     * Filter which template_replies to update
     */
    where?: template_replyWhereInput
  }


  /**
   * template_reply upsert
   */
  export type template_replyUpsertArgs = {
    /**
     * Select specific fields to fetch from the template_reply
     */
    select?: template_replySelect | null
    /**
     * The filter to search for the template_reply to update in case it exists.
     */
    where: template_replyWhereUniqueInput
    /**
     * In case the template_reply found by the `where` argument doesn't exist, create a new template_reply with this data.
     */
    create: XOR<template_replyCreateInput, template_replyUncheckedCreateInput>
    /**
     * In case the template_reply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<template_replyUpdateInput, template_replyUncheckedUpdateInput>
  }


  /**
   * template_reply delete
   */
  export type template_replyDeleteArgs = {
    /**
     * Select specific fields to fetch from the template_reply
     */
    select?: template_replySelect | null
    /**
     * Filter which template_reply to delete.
     */
    where: template_replyWhereUniqueInput
  }


  /**
   * template_reply deleteMany
   */
  export type template_replyDeleteManyArgs = {
    /**
     * Filter which template_replies to delete
     */
    where?: template_replyWhereInput
  }


  /**
   * template_reply without action
   */
  export type template_replyArgs = {
    /**
     * Select specific fields to fetch from the template_reply
     */
    select?: template_replySelect | null
  }



  /**
   * Model reply_key
   */


  export type AggregateReply_key = {
    _count: Reply_keyCountAggregateOutputType | null
    _avg: Reply_keyAvgAggregateOutputType | null
    _sum: Reply_keySumAggregateOutputType | null
    _min: Reply_keyMinAggregateOutputType | null
    _max: Reply_keyMaxAggregateOutputType | null
  }

  export type Reply_keyAvgAggregateOutputType = {
    id: number | null
    key_value_id: number | null
    template_reply_id: number | null
  }

  export type Reply_keySumAggregateOutputType = {
    id: number | null
    key_value_id: number | null
    template_reply_id: number | null
  }

  export type Reply_keyMinAggregateOutputType = {
    id: number | null
    key_value_id: number | null
    template_reply_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Reply_keyMaxAggregateOutputType = {
    id: number | null
    key_value_id: number | null
    template_reply_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Reply_keyCountAggregateOutputType = {
    id: number
    key_value_id: number
    template_reply_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Reply_keyAvgAggregateInputType = {
    id?: true
    key_value_id?: true
    template_reply_id?: true
  }

  export type Reply_keySumAggregateInputType = {
    id?: true
    key_value_id?: true
    template_reply_id?: true
  }

  export type Reply_keyMinAggregateInputType = {
    id?: true
    key_value_id?: true
    template_reply_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Reply_keyMaxAggregateInputType = {
    id?: true
    key_value_id?: true
    template_reply_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Reply_keyCountAggregateInputType = {
    id?: true
    key_value_id?: true
    template_reply_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Reply_keyAggregateArgs = {
    /**
     * Filter which reply_key to aggregate.
     */
    where?: reply_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reply_keys to fetch.
     */
    orderBy?: Enumerable<reply_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reply_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reply_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reply_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reply_keys
    **/
    _count?: true | Reply_keyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Reply_keyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Reply_keySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Reply_keyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Reply_keyMaxAggregateInputType
  }

  export type GetReply_keyAggregateType<T extends Reply_keyAggregateArgs> = {
        [P in keyof T & keyof AggregateReply_key]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReply_key[P]>
      : GetScalarType<T[P], AggregateReply_key[P]>
  }




  export type Reply_keyGroupByArgs = {
    where?: reply_keyWhereInput
    orderBy?: Enumerable<reply_keyOrderByWithAggregationInput>
    by: Reply_keyScalarFieldEnum[]
    having?: reply_keyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Reply_keyCountAggregateInputType | true
    _avg?: Reply_keyAvgAggregateInputType
    _sum?: Reply_keySumAggregateInputType
    _min?: Reply_keyMinAggregateInputType
    _max?: Reply_keyMaxAggregateInputType
  }


  export type Reply_keyGroupByOutputType = {
    id: number
    key_value_id: number
    template_reply_id: number
    created_at: Date | null
    updated_at: Date | null
    _count: Reply_keyCountAggregateOutputType | null
    _avg: Reply_keyAvgAggregateOutputType | null
    _sum: Reply_keySumAggregateOutputType | null
    _min: Reply_keyMinAggregateOutputType | null
    _max: Reply_keyMaxAggregateOutputType | null
  }

  type GetReply_keyGroupByPayload<T extends Reply_keyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Reply_keyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Reply_keyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Reply_keyGroupByOutputType[P]>
            : GetScalarType<T[P], Reply_keyGroupByOutputType[P]>
        }
      >
    >


  export type reply_keySelect = {
    id?: boolean
    key_value_id?: boolean
    template_reply_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type reply_keyGetPayload<S extends boolean | null | undefined | reply_keyArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? reply_key :
    S extends undefined ? never :
    S extends { include: any } & (reply_keyArgs | reply_keyFindManyArgs)
    ? reply_key 
    : S extends { select: any } & (reply_keyArgs | reply_keyFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof reply_key ? reply_key[P] : never
  } 
      : reply_key


  type reply_keyCountArgs = 
    Omit<reply_keyFindManyArgs, 'select' | 'include'> & {
      select?: Reply_keyCountAggregateInputType | true
    }

  export interface reply_keyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Reply_key that matches the filter.
     * @param {reply_keyFindUniqueArgs} args - Arguments to find a Reply_key
     * @example
     * // Get one Reply_key
     * const reply_key = await prisma.reply_key.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends reply_keyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, reply_keyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'reply_key'> extends True ? Prisma__reply_keyClient<reply_keyGetPayload<T>> : Prisma__reply_keyClient<reply_keyGetPayload<T> | null, null>

    /**
     * Find one Reply_key that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {reply_keyFindUniqueOrThrowArgs} args - Arguments to find a Reply_key
     * @example
     * // Get one Reply_key
     * const reply_key = await prisma.reply_key.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends reply_keyFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, reply_keyFindUniqueOrThrowArgs>
    ): Prisma__reply_keyClient<reply_keyGetPayload<T>>

    /**
     * Find the first Reply_key that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reply_keyFindFirstArgs} args - Arguments to find a Reply_key
     * @example
     * // Get one Reply_key
     * const reply_key = await prisma.reply_key.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends reply_keyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, reply_keyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'reply_key'> extends True ? Prisma__reply_keyClient<reply_keyGetPayload<T>> : Prisma__reply_keyClient<reply_keyGetPayload<T> | null, null>

    /**
     * Find the first Reply_key that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reply_keyFindFirstOrThrowArgs} args - Arguments to find a Reply_key
     * @example
     * // Get one Reply_key
     * const reply_key = await prisma.reply_key.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends reply_keyFindFirstOrThrowArgs>(
      args?: SelectSubset<T, reply_keyFindFirstOrThrowArgs>
    ): Prisma__reply_keyClient<reply_keyGetPayload<T>>

    /**
     * Find zero or more Reply_keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reply_keyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reply_keys
     * const reply_keys = await prisma.reply_key.findMany()
     * 
     * // Get first 10 Reply_keys
     * const reply_keys = await prisma.reply_key.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reply_keyWithIdOnly = await prisma.reply_key.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends reply_keyFindManyArgs>(
      args?: SelectSubset<T, reply_keyFindManyArgs>
    ): Prisma.PrismaPromise<Array<reply_keyGetPayload<T>>>

    /**
     * Create a Reply_key.
     * @param {reply_keyCreateArgs} args - Arguments to create a Reply_key.
     * @example
     * // Create one Reply_key
     * const Reply_key = await prisma.reply_key.create({
     *   data: {
     *     // ... data to create a Reply_key
     *   }
     * })
     * 
    **/
    create<T extends reply_keyCreateArgs>(
      args: SelectSubset<T, reply_keyCreateArgs>
    ): Prisma__reply_keyClient<reply_keyGetPayload<T>>

    /**
     * Create many Reply_keys.
     *     @param {reply_keyCreateManyArgs} args - Arguments to create many Reply_keys.
     *     @example
     *     // Create many Reply_keys
     *     const reply_key = await prisma.reply_key.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends reply_keyCreateManyArgs>(
      args?: SelectSubset<T, reply_keyCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reply_key.
     * @param {reply_keyDeleteArgs} args - Arguments to delete one Reply_key.
     * @example
     * // Delete one Reply_key
     * const Reply_key = await prisma.reply_key.delete({
     *   where: {
     *     // ... filter to delete one Reply_key
     *   }
     * })
     * 
    **/
    delete<T extends reply_keyDeleteArgs>(
      args: SelectSubset<T, reply_keyDeleteArgs>
    ): Prisma__reply_keyClient<reply_keyGetPayload<T>>

    /**
     * Update one Reply_key.
     * @param {reply_keyUpdateArgs} args - Arguments to update one Reply_key.
     * @example
     * // Update one Reply_key
     * const reply_key = await prisma.reply_key.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends reply_keyUpdateArgs>(
      args: SelectSubset<T, reply_keyUpdateArgs>
    ): Prisma__reply_keyClient<reply_keyGetPayload<T>>

    /**
     * Delete zero or more Reply_keys.
     * @param {reply_keyDeleteManyArgs} args - Arguments to filter Reply_keys to delete.
     * @example
     * // Delete a few Reply_keys
     * const { count } = await prisma.reply_key.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends reply_keyDeleteManyArgs>(
      args?: SelectSubset<T, reply_keyDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reply_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reply_keyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reply_keys
     * const reply_key = await prisma.reply_key.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends reply_keyUpdateManyArgs>(
      args: SelectSubset<T, reply_keyUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reply_key.
     * @param {reply_keyUpsertArgs} args - Arguments to update or create a Reply_key.
     * @example
     * // Update or create a Reply_key
     * const reply_key = await prisma.reply_key.upsert({
     *   create: {
     *     // ... data to create a Reply_key
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reply_key we want to update
     *   }
     * })
    **/
    upsert<T extends reply_keyUpsertArgs>(
      args: SelectSubset<T, reply_keyUpsertArgs>
    ): Prisma__reply_keyClient<reply_keyGetPayload<T>>

    /**
     * Count the number of Reply_keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reply_keyCountArgs} args - Arguments to filter Reply_keys to count.
     * @example
     * // Count the number of Reply_keys
     * const count = await prisma.reply_key.count({
     *   where: {
     *     // ... the filter for the Reply_keys we want to count
     *   }
     * })
    **/
    count<T extends reply_keyCountArgs>(
      args?: Subset<T, reply_keyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Reply_keyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reply_key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reply_keyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Reply_keyAggregateArgs>(args: Subset<T, Reply_keyAggregateArgs>): Prisma.PrismaPromise<GetReply_keyAggregateType<T>>

    /**
     * Group by Reply_key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Reply_keyGroupByArgs} args - Group by arguments.
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
      T extends Reply_keyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Reply_keyGroupByArgs['orderBy'] }
        : { orderBy?: Reply_keyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, Reply_keyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReply_keyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for reply_key.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__reply_keyClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * reply_key base type for findUnique actions
   */
  export type reply_keyFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the reply_key
     */
    select?: reply_keySelect | null
    /**
     * Filter, which reply_key to fetch.
     */
    where: reply_keyWhereUniqueInput
  }

  /**
   * reply_key findUnique
   */
  export interface reply_keyFindUniqueArgs extends reply_keyFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reply_key findUniqueOrThrow
   */
  export type reply_keyFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reply_key
     */
    select?: reply_keySelect | null
    /**
     * Filter, which reply_key to fetch.
     */
    where: reply_keyWhereUniqueInput
  }


  /**
   * reply_key base type for findFirst actions
   */
  export type reply_keyFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the reply_key
     */
    select?: reply_keySelect | null
    /**
     * Filter, which reply_key to fetch.
     */
    where?: reply_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reply_keys to fetch.
     */
    orderBy?: Enumerable<reply_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reply_keys.
     */
    cursor?: reply_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reply_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reply_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reply_keys.
     */
    distinct?: Enumerable<Reply_keyScalarFieldEnum>
  }

  /**
   * reply_key findFirst
   */
  export interface reply_keyFindFirstArgs extends reply_keyFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * reply_key findFirstOrThrow
   */
  export type reply_keyFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the reply_key
     */
    select?: reply_keySelect | null
    /**
     * Filter, which reply_key to fetch.
     */
    where?: reply_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reply_keys to fetch.
     */
    orderBy?: Enumerable<reply_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reply_keys.
     */
    cursor?: reply_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reply_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reply_keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reply_keys.
     */
    distinct?: Enumerable<Reply_keyScalarFieldEnum>
  }


  /**
   * reply_key findMany
   */
  export type reply_keyFindManyArgs = {
    /**
     * Select specific fields to fetch from the reply_key
     */
    select?: reply_keySelect | null
    /**
     * Filter, which reply_keys to fetch.
     */
    where?: reply_keyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reply_keys to fetch.
     */
    orderBy?: Enumerable<reply_keyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reply_keys.
     */
    cursor?: reply_keyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reply_keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reply_keys.
     */
    skip?: number
    distinct?: Enumerable<Reply_keyScalarFieldEnum>
  }


  /**
   * reply_key create
   */
  export type reply_keyCreateArgs = {
    /**
     * Select specific fields to fetch from the reply_key
     */
    select?: reply_keySelect | null
    /**
     * The data needed to create a reply_key.
     */
    data: XOR<reply_keyCreateInput, reply_keyUncheckedCreateInput>
  }


  /**
   * reply_key createMany
   */
  export type reply_keyCreateManyArgs = {
    /**
     * The data used to create many reply_keys.
     */
    data: Enumerable<reply_keyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * reply_key update
   */
  export type reply_keyUpdateArgs = {
    /**
     * Select specific fields to fetch from the reply_key
     */
    select?: reply_keySelect | null
    /**
     * The data needed to update a reply_key.
     */
    data: XOR<reply_keyUpdateInput, reply_keyUncheckedUpdateInput>
    /**
     * Choose, which reply_key to update.
     */
    where: reply_keyWhereUniqueInput
  }


  /**
   * reply_key updateMany
   */
  export type reply_keyUpdateManyArgs = {
    /**
     * The data used to update reply_keys.
     */
    data: XOR<reply_keyUpdateManyMutationInput, reply_keyUncheckedUpdateManyInput>
    /**
     * Filter which reply_keys to update
     */
    where?: reply_keyWhereInput
  }


  /**
   * reply_key upsert
   */
  export type reply_keyUpsertArgs = {
    /**
     * Select specific fields to fetch from the reply_key
     */
    select?: reply_keySelect | null
    /**
     * The filter to search for the reply_key to update in case it exists.
     */
    where: reply_keyWhereUniqueInput
    /**
     * In case the reply_key found by the `where` argument doesn't exist, create a new reply_key with this data.
     */
    create: XOR<reply_keyCreateInput, reply_keyUncheckedCreateInput>
    /**
     * In case the reply_key was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reply_keyUpdateInput, reply_keyUncheckedUpdateInput>
  }


  /**
   * reply_key delete
   */
  export type reply_keyDeleteArgs = {
    /**
     * Select specific fields to fetch from the reply_key
     */
    select?: reply_keySelect | null
    /**
     * Filter which reply_key to delete.
     */
    where: reply_keyWhereUniqueInput
  }


  /**
   * reply_key deleteMany
   */
  export type reply_keyDeleteManyArgs = {
    /**
     * Filter which reply_keys to delete
     */
    where?: reply_keyWhereInput
  }


  /**
   * reply_key without action
   */
  export type reply_keyArgs = {
    /**
     * Select specific fields to fetch from the reply_key
     */
    select?: reply_keySelect | null
  }



  /**
   * Enums
   */

  export const Datasource_sqlScalarFieldEnum: {
    id: 'id',
    select: 'select',
    from: 'from',
    condition: 'condition',
    join: 'join',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Datasource_sqlScalarFieldEnum = (typeof Datasource_sqlScalarFieldEnum)[keyof typeof Datasource_sqlScalarFieldEnum]


  export const Key_valueScalarFieldEnum: {
    id: 'id',
    source_sql_id: 'source_sql_id',
    key: 'key',
    value: 'value',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Key_valueScalarFieldEnum = (typeof Key_valueScalarFieldEnum)[keyof typeof Key_valueScalarFieldEnum]


  export const Reply_keyScalarFieldEnum: {
    id: 'id',
    key_value_id: 'key_value_id',
    template_reply_id: 'template_reply_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Reply_keyScalarFieldEnum = (typeof Reply_keyScalarFieldEnum)[keyof typeof Reply_keyScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    keyword: 'keyword',
    sample: 'sample',
    desc: 'desc',
    separator: 'separator',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const Template_replyScalarFieldEnum: {
    id: 'id',
    service_id: 'service_id',
    text: 'text',
    loop: 'loop',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Template_replyScalarFieldEnum = (typeof Template_replyScalarFieldEnum)[keyof typeof Template_replyScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type datasource_sqlWhereInput = {
    AND?: Enumerable<datasource_sqlWhereInput>
    OR?: Enumerable<datasource_sqlWhereInput>
    NOT?: Enumerable<datasource_sqlWhereInput>
    id?: IntFilter | number
    select?: StringFilter | string
    from?: StringFilter | string
    condition?: StringNullableFilter | string | null
    join?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type datasource_sqlOrderByWithRelationInput = {
    id?: SortOrder
    select?: SortOrder
    from?: SortOrder
    condition?: SortOrder
    join?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type datasource_sqlWhereUniqueInput = {
    id?: number
  }

  export type datasource_sqlOrderByWithAggregationInput = {
    id?: SortOrder
    select?: SortOrder
    from?: SortOrder
    condition?: SortOrder
    join?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: datasource_sqlCountOrderByAggregateInput
    _avg?: datasource_sqlAvgOrderByAggregateInput
    _max?: datasource_sqlMaxOrderByAggregateInput
    _min?: datasource_sqlMinOrderByAggregateInput
    _sum?: datasource_sqlSumOrderByAggregateInput
  }

  export type datasource_sqlScalarWhereWithAggregatesInput = {
    AND?: Enumerable<datasource_sqlScalarWhereWithAggregatesInput>
    OR?: Enumerable<datasource_sqlScalarWhereWithAggregatesInput>
    NOT?: Enumerable<datasource_sqlScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    select?: StringWithAggregatesFilter | string
    from?: StringWithAggregatesFilter | string
    condition?: StringNullableWithAggregatesFilter | string | null
    join?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type key_valueWhereInput = {
    AND?: Enumerable<key_valueWhereInput>
    OR?: Enumerable<key_valueWhereInput>
    NOT?: Enumerable<key_valueWhereInput>
    id?: IntFilter | number
    source_sql_id?: IntNullableFilter | number | null
    key?: StringNullableFilter | string | null
    value?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type key_valueOrderByWithRelationInput = {
    id?: SortOrder
    source_sql_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type key_valueWhereUniqueInput = {
    id?: number
  }

  export type key_valueOrderByWithAggregationInput = {
    id?: SortOrder
    source_sql_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: key_valueCountOrderByAggregateInput
    _avg?: key_valueAvgOrderByAggregateInput
    _max?: key_valueMaxOrderByAggregateInput
    _min?: key_valueMinOrderByAggregateInput
    _sum?: key_valueSumOrderByAggregateInput
  }

  export type key_valueScalarWhereWithAggregatesInput = {
    AND?: Enumerable<key_valueScalarWhereWithAggregatesInput>
    OR?: Enumerable<key_valueScalarWhereWithAggregatesInput>
    NOT?: Enumerable<key_valueScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    source_sql_id?: IntNullableWithAggregatesFilter | number | null
    key?: StringNullableWithAggregatesFilter | string | null
    value?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type serviceWhereInput = {
    AND?: Enumerable<serviceWhereInput>
    OR?: Enumerable<serviceWhereInput>
    NOT?: Enumerable<serviceWhereInput>
    id?: IntFilter | number
    title?: StringNullableFilter | string | null
    keyword?: StringNullableFilter | string | null
    sample?: StringNullableFilter | string | null
    desc?: StringNullableFilter | string | null
    separator?: StringNullableFilter | string | null
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type serviceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    keyword?: SortOrder
    sample?: SortOrder
    desc?: SortOrder
    separator?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type serviceWhereUniqueInput = {
    id?: number
  }

  export type serviceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    keyword?: SortOrder
    sample?: SortOrder
    desc?: SortOrder
    separator?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: serviceCountOrderByAggregateInput
    _avg?: serviceAvgOrderByAggregateInput
    _max?: serviceMaxOrderByAggregateInput
    _min?: serviceMinOrderByAggregateInput
    _sum?: serviceSumOrderByAggregateInput
  }

  export type serviceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<serviceScalarWhereWithAggregatesInput>
    OR?: Enumerable<serviceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<serviceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringNullableWithAggregatesFilter | string | null
    keyword?: StringNullableWithAggregatesFilter | string | null
    sample?: StringNullableWithAggregatesFilter | string | null
    desc?: StringNullableWithAggregatesFilter | string | null
    separator?: StringNullableWithAggregatesFilter | string | null
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type template_replyWhereInput = {
    AND?: Enumerable<template_replyWhereInput>
    OR?: Enumerable<template_replyWhereInput>
    NOT?: Enumerable<template_replyWhereInput>
    id?: IntFilter | number
    service_id?: IntFilter | number
    text?: StringFilter | string
    loop?: Enumtemplate_reply_loopFilter | template_reply_loop
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type template_replyOrderByWithRelationInput = {
    id?: SortOrder
    service_id?: SortOrder
    text?: SortOrder
    loop?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type template_replyWhereUniqueInput = {
    id?: number
  }

  export type template_replyOrderByWithAggregationInput = {
    id?: SortOrder
    service_id?: SortOrder
    text?: SortOrder
    loop?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: template_replyCountOrderByAggregateInput
    _avg?: template_replyAvgOrderByAggregateInput
    _max?: template_replyMaxOrderByAggregateInput
    _min?: template_replyMinOrderByAggregateInput
    _sum?: template_replySumOrderByAggregateInput
  }

  export type template_replyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<template_replyScalarWhereWithAggregatesInput>
    OR?: Enumerable<template_replyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<template_replyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    service_id?: IntWithAggregatesFilter | number
    text?: StringWithAggregatesFilter | string
    loop?: Enumtemplate_reply_loopWithAggregatesFilter | template_reply_loop
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type reply_keyWhereInput = {
    AND?: Enumerable<reply_keyWhereInput>
    OR?: Enumerable<reply_keyWhereInput>
    NOT?: Enumerable<reply_keyWhereInput>
    id?: IntFilter | number
    key_value_id?: IntFilter | number
    template_reply_id?: IntFilter | number
    created_at?: DateTimeNullableFilter | Date | string | null
    updated_at?: DateTimeNullableFilter | Date | string | null
  }

  export type reply_keyOrderByWithRelationInput = {
    id?: SortOrder
    key_value_id?: SortOrder
    template_reply_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reply_keyWhereUniqueInput = {
    id?: number
  }

  export type reply_keyOrderByWithAggregationInput = {
    id?: SortOrder
    key_value_id?: SortOrder
    template_reply_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: reply_keyCountOrderByAggregateInput
    _avg?: reply_keyAvgOrderByAggregateInput
    _max?: reply_keyMaxOrderByAggregateInput
    _min?: reply_keyMinOrderByAggregateInput
    _sum?: reply_keySumOrderByAggregateInput
  }

  export type reply_keyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<reply_keyScalarWhereWithAggregatesInput>
    OR?: Enumerable<reply_keyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<reply_keyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    key_value_id?: IntWithAggregatesFilter | number
    template_reply_id?: IntWithAggregatesFilter | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type datasource_sqlCreateInput = {
    select: string
    from: string
    condition?: string | null
    join?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type datasource_sqlUncheckedCreateInput = {
    id?: number
    select: string
    from: string
    condition?: string | null
    join?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type datasource_sqlUpdateInput = {
    select?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    join?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type datasource_sqlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    select?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    join?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type datasource_sqlCreateManyInput = {
    id?: number
    select: string
    from: string
    condition?: string | null
    join?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type datasource_sqlUpdateManyMutationInput = {
    select?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    join?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type datasource_sqlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    select?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    join?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type key_valueCreateInput = {
    source_sql_id?: number | null
    key?: string | null
    value?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type key_valueUncheckedCreateInput = {
    id?: number
    source_sql_id?: number | null
    key?: string | null
    value?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type key_valueUpdateInput = {
    source_sql_id?: NullableIntFieldUpdateOperationsInput | number | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type key_valueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    source_sql_id?: NullableIntFieldUpdateOperationsInput | number | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type key_valueCreateManyInput = {
    id?: number
    source_sql_id?: number | null
    key?: string | null
    value?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type key_valueUpdateManyMutationInput = {
    source_sql_id?: NullableIntFieldUpdateOperationsInput | number | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type key_valueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    source_sql_id?: NullableIntFieldUpdateOperationsInput | number | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type serviceCreateInput = {
    title?: string | null
    keyword?: string | null
    sample?: string | null
    desc?: string | null
    separator?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type serviceUncheckedCreateInput = {
    id?: number
    title?: string | null
    keyword?: string | null
    sample?: string | null
    desc?: string | null
    separator?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type serviceUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    sample?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    separator?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type serviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    sample?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    separator?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type serviceCreateManyInput = {
    id?: number
    title?: string | null
    keyword?: string | null
    sample?: string | null
    desc?: string | null
    separator?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type serviceUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    sample?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    separator?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type serviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    keyword?: NullableStringFieldUpdateOperationsInput | string | null
    sample?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    separator?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type template_replyCreateInput = {
    service_id: number
    text: string
    loop?: template_reply_loop
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type template_replyUncheckedCreateInput = {
    id?: number
    service_id: number
    text: string
    loop?: template_reply_loop
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type template_replyUpdateInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    loop?: Enumtemplate_reply_loopFieldUpdateOperationsInput | template_reply_loop
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type template_replyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    loop?: Enumtemplate_reply_loopFieldUpdateOperationsInput | template_reply_loop
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type template_replyCreateManyInput = {
    id?: number
    service_id: number
    text: string
    loop?: template_reply_loop
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type template_replyUpdateManyMutationInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    loop?: Enumtemplate_reply_loopFieldUpdateOperationsInput | template_reply_loop
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type template_replyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    loop?: Enumtemplate_reply_loopFieldUpdateOperationsInput | template_reply_loop
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reply_keyCreateInput = {
    key_value_id: number
    template_reply_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type reply_keyUncheckedCreateInput = {
    id?: number
    key_value_id: number
    template_reply_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type reply_keyUpdateInput = {
    key_value_id?: IntFieldUpdateOperationsInput | number
    template_reply_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reply_keyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key_value_id?: IntFieldUpdateOperationsInput | number
    template_reply_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reply_keyCreateManyInput = {
    id?: number
    key_value_id: number
    template_reply_id: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type reply_keyUpdateManyMutationInput = {
    key_value_id?: IntFieldUpdateOperationsInput | number
    template_reply_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type reply_keyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key_value_id?: IntFieldUpdateOperationsInput | number
    template_reply_id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type datasource_sqlCountOrderByAggregateInput = {
    id?: SortOrder
    select?: SortOrder
    from?: SortOrder
    condition?: SortOrder
    join?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type datasource_sqlAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type datasource_sqlMaxOrderByAggregateInput = {
    id?: SortOrder
    select?: SortOrder
    from?: SortOrder
    condition?: SortOrder
    join?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type datasource_sqlMinOrderByAggregateInput = {
    id?: SortOrder
    select?: SortOrder
    from?: SortOrder
    condition?: SortOrder
    join?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type datasource_sqlSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type key_valueCountOrderByAggregateInput = {
    id?: SortOrder
    source_sql_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type key_valueAvgOrderByAggregateInput = {
    id?: SortOrder
    source_sql_id?: SortOrder
  }

  export type key_valueMaxOrderByAggregateInput = {
    id?: SortOrder
    source_sql_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type key_valueMinOrderByAggregateInput = {
    id?: SortOrder
    source_sql_id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type key_valueSumOrderByAggregateInput = {
    id?: SortOrder
    source_sql_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type serviceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    keyword?: SortOrder
    sample?: SortOrder
    desc?: SortOrder
    separator?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type serviceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type serviceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    keyword?: SortOrder
    sample?: SortOrder
    desc?: SortOrder
    separator?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type serviceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    keyword?: SortOrder
    sample?: SortOrder
    desc?: SortOrder
    separator?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type serviceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumtemplate_reply_loopFilter = {
    equals?: template_reply_loop
    in?: Enumerable<template_reply_loop>
    notIn?: Enumerable<template_reply_loop>
    not?: NestedEnumtemplate_reply_loopFilter | template_reply_loop
  }

  export type template_replyCountOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    text?: SortOrder
    loop?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type template_replyAvgOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
  }

  export type template_replyMaxOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    text?: SortOrder
    loop?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type template_replyMinOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
    text?: SortOrder
    loop?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type template_replySumOrderByAggregateInput = {
    id?: SortOrder
    service_id?: SortOrder
  }

  export type Enumtemplate_reply_loopWithAggregatesFilter = {
    equals?: template_reply_loop
    in?: Enumerable<template_reply_loop>
    notIn?: Enumerable<template_reply_loop>
    not?: NestedEnumtemplate_reply_loopWithAggregatesFilter | template_reply_loop
    _count?: NestedIntFilter
    _min?: NestedEnumtemplate_reply_loopFilter
    _max?: NestedEnumtemplate_reply_loopFilter
  }

  export type reply_keyCountOrderByAggregateInput = {
    id?: SortOrder
    key_value_id?: SortOrder
    template_reply_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reply_keyAvgOrderByAggregateInput = {
    id?: SortOrder
    key_value_id?: SortOrder
    template_reply_id?: SortOrder
  }

  export type reply_keyMaxOrderByAggregateInput = {
    id?: SortOrder
    key_value_id?: SortOrder
    template_reply_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reply_keyMinOrderByAggregateInput = {
    id?: SortOrder
    key_value_id?: SortOrder
    template_reply_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type reply_keySumOrderByAggregateInput = {
    id?: SortOrder
    key_value_id?: SortOrder
    template_reply_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumtemplate_reply_loopFieldUpdateOperationsInput = {
    set?: template_reply_loop
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | Date | string | null
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumtemplate_reply_loopFilter = {
    equals?: template_reply_loop
    in?: Enumerable<template_reply_loop>
    notIn?: Enumerable<template_reply_loop>
    not?: NestedEnumtemplate_reply_loopFilter | template_reply_loop
  }

  export type NestedEnumtemplate_reply_loopWithAggregatesFilter = {
    equals?: template_reply_loop
    in?: Enumerable<template_reply_loop>
    notIn?: Enumerable<template_reply_loop>
    not?: NestedEnumtemplate_reply_loopWithAggregatesFilter | template_reply_loop
    _count?: NestedIntFilter
    _min?: NestedEnumtemplate_reply_loopFilter
    _max?: NestedEnumtemplate_reply_loopFilter
  }



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