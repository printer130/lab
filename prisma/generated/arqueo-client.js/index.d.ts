
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Lab
 * 
 */
export type Lab = {
  createdAt: Date
  lab_name: string
  image: string | null
}

/**
 * Model Arqueo
 * 
 */
export type Arqueo = {
  cuiid: string
  createdAt: Date
  username: string
  total: number
  caja: number
  lab_id: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Labs
 * const labs = await prisma.lab.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Labs
   * const labs = await prisma.lab.findMany()
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.lab`: Exposes CRUD operations for the **Lab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labs
    * const labs = await prisma.lab.findMany()
    * ```
    */
  get lab(): Prisma.LabDelegate<GlobalReject>;

  /**
   * `prisma.arqueo`: Exposes CRUD operations for the **Arqueo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arqueos
    * const arqueos = await prisma.arqueo.findMany()
    * ```
    */
  get arqueo(): Prisma.ArqueoDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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

  /**
   * Prisma Client JS version: 3.9.0
   * Query Engine version: bcc2ff906db47790ee902e7bbc76d7ffb1893009
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
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Lab: 'Lab',
    Arqueo: 'Arqueo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    arqueo?: Datasource
  }

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
      ? GlobalRejectSettings[Action] extends boolean
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
     *  * @example
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
     * Overwrites the datasource url from your prisma.schema file
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

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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

  /**
   * These options are being passed in to the middleware as "params"
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
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LabCountOutputType
   */


  export type LabCountOutputType = {
    arqueo: number
  }

  export type LabCountOutputTypeSelect = {
    arqueo?: boolean
  }

  export type LabCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LabCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LabCountOutputType
    : S extends undefined
    ? never
    : S extends LabCountOutputTypeArgs
    ?'include' extends U
    ? LabCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof LabCountOutputType ?LabCountOutputType [P]
  : 
     never
  } 
    : LabCountOutputType
  : LabCountOutputType




  // Custom InputTypes

  /**
   * LabCountOutputType without action
   */
  export type LabCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LabCountOutputType
     * 
    **/
    select?: LabCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Lab
   */


  export type AggregateLab = {
    _count: LabCountAggregateOutputType | null
    _min: LabMinAggregateOutputType | null
    _max: LabMaxAggregateOutputType | null
  }

  export type LabMinAggregateOutputType = {
    createdAt: Date | null
    lab_name: string | null
    image: string | null
  }

  export type LabMaxAggregateOutputType = {
    createdAt: Date | null
    lab_name: string | null
    image: string | null
  }

  export type LabCountAggregateOutputType = {
    createdAt: number
    lab_name: number
    image: number
    _all: number
  }


  export type LabMinAggregateInputType = {
    createdAt?: true
    lab_name?: true
    image?: true
  }

  export type LabMaxAggregateInputType = {
    createdAt?: true
    lab_name?: true
    image?: true
  }

  export type LabCountAggregateInputType = {
    createdAt?: true
    lab_name?: true
    image?: true
    _all?: true
  }

  export type LabAggregateArgs = {
    /**
     * Filter which Lab to aggregate.
     * 
    **/
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     * 
    **/
    orderBy?: Enumerable<LabOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Labs
    **/
    _count?: true | LabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabMaxAggregateInputType
  }

  export type GetLabAggregateType<T extends LabAggregateArgs> = {
        [P in keyof T & keyof AggregateLab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLab[P]>
      : GetScalarType<T[P], AggregateLab[P]>
  }




  export type LabGroupByArgs = {
    where?: LabWhereInput
    orderBy?: Enumerable<LabOrderByWithAggregationInput>
    by: Array<LabScalarFieldEnum>
    having?: LabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabCountAggregateInputType | true
    _min?: LabMinAggregateInputType
    _max?: LabMaxAggregateInputType
  }


  export type LabGroupByOutputType = {
    createdAt: Date
    lab_name: string
    image: string | null
    _count: LabCountAggregateOutputType | null
    _min: LabMinAggregateOutputType | null
    _max: LabMaxAggregateOutputType | null
  }

  type GetLabGroupByPayload<T extends LabGroupByArgs> = Promise<
    Array<
      PickArray<LabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabGroupByOutputType[P]>
            : GetScalarType<T[P], LabGroupByOutputType[P]>
        }
      >
    >


  export type LabSelect = {
    createdAt?: boolean
    lab_name?: boolean
    image?: boolean
    arqueo?: boolean | ArqueoFindManyArgs
    _count?: boolean | LabCountOutputTypeArgs
  }

  export type LabInclude = {
    arqueo?: boolean | ArqueoFindManyArgs
    _count?: boolean | LabCountOutputTypeArgs
  }

  export type LabGetPayload<
    S extends boolean | null | undefined | LabArgs,
    U = keyof S
      > = S extends true
        ? Lab
    : S extends undefined
    ? never
    : S extends LabArgs | LabFindManyArgs
    ?'include' extends U
    ? Lab  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'arqueo'
        ? Array < ArqueoGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? LabCountOutputTypeGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Lab ?Lab [P]
  : 
          P extends 'arqueo'
        ? Array < ArqueoGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? LabCountOutputTypeGetPayload<S['select'][P]> : never
  } 
    : Lab
  : Lab


  type LabCountArgs = Merge<
    Omit<LabFindManyArgs, 'select' | 'include'> & {
      select?: LabCountAggregateInputType | true
    }
  >

  export interface LabDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Lab that matches the filter.
     * @param {LabFindUniqueArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LabFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LabFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Lab'> extends True ? CheckSelect<T, Prisma__LabClient<Lab>, Prisma__LabClient<LabGetPayload<T>>> : CheckSelect<T, Prisma__LabClient<Lab | null >, Prisma__LabClient<LabGetPayload<T> | null >>

    /**
     * Find the first Lab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindFirstArgs} args - Arguments to find a Lab
     * @example
     * // Get one Lab
     * const lab = await prisma.lab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LabFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LabFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Lab'> extends True ? CheckSelect<T, Prisma__LabClient<Lab>, Prisma__LabClient<LabGetPayload<T>>> : CheckSelect<T, Prisma__LabClient<Lab | null >, Prisma__LabClient<LabGetPayload<T> | null >>

    /**
     * Find zero or more Labs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labs
     * const labs = await prisma.lab.findMany()
     * 
     * // Get first 10 Labs
     * const labs = await prisma.lab.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const labWithCreatedAtOnly = await prisma.lab.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends LabFindManyArgs>(
      args?: SelectSubset<T, LabFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Lab>>, PrismaPromise<Array<LabGetPayload<T>>>>

    /**
     * Create a Lab.
     * @param {LabCreateArgs} args - Arguments to create a Lab.
     * @example
     * // Create one Lab
     * const Lab = await prisma.lab.create({
     *   data: {
     *     // ... data to create a Lab
     *   }
     * })
     * 
    **/
    create<T extends LabCreateArgs>(
      args: SelectSubset<T, LabCreateArgs>
    ): CheckSelect<T, Prisma__LabClient<Lab>, Prisma__LabClient<LabGetPayload<T>>>

    /**
     * Create many Labs.
     *     @param {LabCreateManyArgs} args - Arguments to create many Labs.
     *     @example
     *     // Create many Labs
     *     const lab = await prisma.lab.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LabCreateManyArgs>(
      args?: SelectSubset<T, LabCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Lab.
     * @param {LabDeleteArgs} args - Arguments to delete one Lab.
     * @example
     * // Delete one Lab
     * const Lab = await prisma.lab.delete({
     *   where: {
     *     // ... filter to delete one Lab
     *   }
     * })
     * 
    **/
    delete<T extends LabDeleteArgs>(
      args: SelectSubset<T, LabDeleteArgs>
    ): CheckSelect<T, Prisma__LabClient<Lab>, Prisma__LabClient<LabGetPayload<T>>>

    /**
     * Update one Lab.
     * @param {LabUpdateArgs} args - Arguments to update one Lab.
     * @example
     * // Update one Lab
     * const lab = await prisma.lab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LabUpdateArgs>(
      args: SelectSubset<T, LabUpdateArgs>
    ): CheckSelect<T, Prisma__LabClient<Lab>, Prisma__LabClient<LabGetPayload<T>>>

    /**
     * Delete zero or more Labs.
     * @param {LabDeleteManyArgs} args - Arguments to filter Labs to delete.
     * @example
     * // Delete a few Labs
     * const { count } = await prisma.lab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LabDeleteManyArgs>(
      args?: SelectSubset<T, LabDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labs
     * const lab = await prisma.lab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LabUpdateManyArgs>(
      args: SelectSubset<T, LabUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Lab.
     * @param {LabUpsertArgs} args - Arguments to update or create a Lab.
     * @example
     * // Update or create a Lab
     * const lab = await prisma.lab.upsert({
     *   create: {
     *     // ... data to create a Lab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lab we want to update
     *   }
     * })
    **/
    upsert<T extends LabUpsertArgs>(
      args: SelectSubset<T, LabUpsertArgs>
    ): CheckSelect<T, Prisma__LabClient<Lab>, Prisma__LabClient<LabGetPayload<T>>>

    /**
     * Count the number of Labs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabCountArgs} args - Arguments to filter Labs to count.
     * @example
     * // Count the number of Labs
     * const count = await prisma.lab.count({
     *   where: {
     *     // ... the filter for the Labs we want to count
     *   }
     * })
    **/
    count<T extends LabCountArgs>(
      args?: Subset<T, LabCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabAggregateArgs>(args: Subset<T, LabAggregateArgs>): PrismaPromise<GetLabAggregateType<T>>

    /**
     * Group by Lab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabGroupByArgs} args - Group by arguments.
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
      T extends LabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabGroupByArgs['orderBy'] }
        : { orderBy?: LabGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LabClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    arqueo<T extends ArqueoFindManyArgs = {}>(args?: Subset<T, ArqueoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Arqueo>>, PrismaPromise<Array<ArqueoGetPayload<T>>>>;

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
   * Lab findUnique
   */
  export type LabFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Lab
     * 
    **/
    select?: LabSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LabInclude | null
    /**
     * Throw an Error if a Lab can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Lab to fetch.
     * 
    **/
    where: LabWhereUniqueInput
  }


  /**
   * Lab findFirst
   */
  export type LabFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Lab
     * 
    **/
    select?: LabSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LabInclude | null
    /**
     * Throw an Error if a Lab can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Lab to fetch.
     * 
    **/
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     * 
    **/
    orderBy?: Enumerable<LabOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labs.
     * 
    **/
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labs.
     * 
    **/
    distinct?: Enumerable<LabScalarFieldEnum>
  }


  /**
   * Lab findMany
   */
  export type LabFindManyArgs = {
    /**
     * Select specific fields to fetch from the Lab
     * 
    **/
    select?: LabSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LabInclude | null
    /**
     * Filter, which Labs to fetch.
     * 
    **/
    where?: LabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labs to fetch.
     * 
    **/
    orderBy?: Enumerable<LabOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Labs.
     * 
    **/
    cursor?: LabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LabScalarFieldEnum>
  }


  /**
   * Lab create
   */
  export type LabCreateArgs = {
    /**
     * Select specific fields to fetch from the Lab
     * 
    **/
    select?: LabSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LabInclude | null
    /**
     * The data needed to create a Lab.
     * 
    **/
    data: XOR<LabCreateInput, LabUncheckedCreateInput>
  }


  /**
   * Lab createMany
   */
  export type LabCreateManyArgs = {
    /**
     * The data used to create many Labs.
     * 
    **/
    data: Enumerable<LabCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Lab update
   */
  export type LabUpdateArgs = {
    /**
     * Select specific fields to fetch from the Lab
     * 
    **/
    select?: LabSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LabInclude | null
    /**
     * The data needed to update a Lab.
     * 
    **/
    data: XOR<LabUpdateInput, LabUncheckedUpdateInput>
    /**
     * Choose, which Lab to update.
     * 
    **/
    where: LabWhereUniqueInput
  }


  /**
   * Lab updateMany
   */
  export type LabUpdateManyArgs = {
    /**
     * The data used to update Labs.
     * 
    **/
    data: XOR<LabUpdateManyMutationInput, LabUncheckedUpdateManyInput>
    /**
     * Filter which Labs to update
     * 
    **/
    where?: LabWhereInput
  }


  /**
   * Lab upsert
   */
  export type LabUpsertArgs = {
    /**
     * Select specific fields to fetch from the Lab
     * 
    **/
    select?: LabSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LabInclude | null
    /**
     * The filter to search for the Lab to update in case it exists.
     * 
    **/
    where: LabWhereUniqueInput
    /**
     * In case the Lab found by the `where` argument doesn't exist, create a new Lab with this data.
     * 
    **/
    create: XOR<LabCreateInput, LabUncheckedCreateInput>
    /**
     * In case the Lab was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LabUpdateInput, LabUncheckedUpdateInput>
  }


  /**
   * Lab delete
   */
  export type LabDeleteArgs = {
    /**
     * Select specific fields to fetch from the Lab
     * 
    **/
    select?: LabSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LabInclude | null
    /**
     * Filter which Lab to delete.
     * 
    **/
    where: LabWhereUniqueInput
  }


  /**
   * Lab deleteMany
   */
  export type LabDeleteManyArgs = {
    /**
     * Filter which Labs to delete
     * 
    **/
    where?: LabWhereInput
  }


  /**
   * Lab without action
   */
  export type LabArgs = {
    /**
     * Select specific fields to fetch from the Lab
     * 
    **/
    select?: LabSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LabInclude | null
  }



  /**
   * Model Arqueo
   */


  export type AggregateArqueo = {
    _count: ArqueoCountAggregateOutputType | null
    _avg: ArqueoAvgAggregateOutputType | null
    _sum: ArqueoSumAggregateOutputType | null
    _min: ArqueoMinAggregateOutputType | null
    _max: ArqueoMaxAggregateOutputType | null
  }

  export type ArqueoAvgAggregateOutputType = {
    total: number | null
    caja: number | null
  }

  export type ArqueoSumAggregateOutputType = {
    total: number | null
    caja: number | null
  }

  export type ArqueoMinAggregateOutputType = {
    cuiid: string | null
    createdAt: Date | null
    username: string | null
    total: number | null
    caja: number | null
    lab_id: string | null
  }

  export type ArqueoMaxAggregateOutputType = {
    cuiid: string | null
    createdAt: Date | null
    username: string | null
    total: number | null
    caja: number | null
    lab_id: string | null
  }

  export type ArqueoCountAggregateOutputType = {
    cuiid: number
    createdAt: number
    username: number
    total: number
    caja: number
    lab_id: number
    _all: number
  }


  export type ArqueoAvgAggregateInputType = {
    total?: true
    caja?: true
  }

  export type ArqueoSumAggregateInputType = {
    total?: true
    caja?: true
  }

  export type ArqueoMinAggregateInputType = {
    cuiid?: true
    createdAt?: true
    username?: true
    total?: true
    caja?: true
    lab_id?: true
  }

  export type ArqueoMaxAggregateInputType = {
    cuiid?: true
    createdAt?: true
    username?: true
    total?: true
    caja?: true
    lab_id?: true
  }

  export type ArqueoCountAggregateInputType = {
    cuiid?: true
    createdAt?: true
    username?: true
    total?: true
    caja?: true
    lab_id?: true
    _all?: true
  }

  export type ArqueoAggregateArgs = {
    /**
     * Filter which Arqueo to aggregate.
     * 
    **/
    where?: ArqueoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arqueos to fetch.
     * 
    **/
    orderBy?: Enumerable<ArqueoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ArqueoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arqueos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arqueos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arqueos
    **/
    _count?: true | ArqueoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArqueoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArqueoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArqueoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArqueoMaxAggregateInputType
  }

  export type GetArqueoAggregateType<T extends ArqueoAggregateArgs> = {
        [P in keyof T & keyof AggregateArqueo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArqueo[P]>
      : GetScalarType<T[P], AggregateArqueo[P]>
  }




  export type ArqueoGroupByArgs = {
    where?: ArqueoWhereInput
    orderBy?: Enumerable<ArqueoOrderByWithAggregationInput>
    by: Array<ArqueoScalarFieldEnum>
    having?: ArqueoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArqueoCountAggregateInputType | true
    _avg?: ArqueoAvgAggregateInputType
    _sum?: ArqueoSumAggregateInputType
    _min?: ArqueoMinAggregateInputType
    _max?: ArqueoMaxAggregateInputType
  }


  export type ArqueoGroupByOutputType = {
    cuiid: string
    createdAt: Date
    username: string
    total: number
    caja: number
    lab_id: string
    _count: ArqueoCountAggregateOutputType | null
    _avg: ArqueoAvgAggregateOutputType | null
    _sum: ArqueoSumAggregateOutputType | null
    _min: ArqueoMinAggregateOutputType | null
    _max: ArqueoMaxAggregateOutputType | null
  }

  type GetArqueoGroupByPayload<T extends ArqueoGroupByArgs> = Promise<
    Array<
      PickArray<ArqueoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArqueoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArqueoGroupByOutputType[P]>
            : GetScalarType<T[P], ArqueoGroupByOutputType[P]>
        }
      >
    >


  export type ArqueoSelect = {
    cuiid?: boolean
    createdAt?: boolean
    username?: boolean
    total?: boolean
    caja?: boolean
    lab?: boolean | LabArgs
    lab_id?: boolean
  }

  export type ArqueoInclude = {
    lab?: boolean | LabArgs
  }

  export type ArqueoGetPayload<
    S extends boolean | null | undefined | ArqueoArgs,
    U = keyof S
      > = S extends true
        ? Arqueo
    : S extends undefined
    ? never
    : S extends ArqueoArgs | ArqueoFindManyArgs
    ?'include' extends U
    ? Arqueo  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'lab'
        ? LabGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Arqueo ?Arqueo [P]
  : 
          P extends 'lab'
        ? LabGetPayload<S['select'][P]> : never
  } 
    : Arqueo
  : Arqueo


  type ArqueoCountArgs = Merge<
    Omit<ArqueoFindManyArgs, 'select' | 'include'> & {
      select?: ArqueoCountAggregateInputType | true
    }
  >

  export interface ArqueoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Arqueo that matches the filter.
     * @param {ArqueoFindUniqueArgs} args - Arguments to find a Arqueo
     * @example
     * // Get one Arqueo
     * const arqueo = await prisma.arqueo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArqueoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ArqueoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Arqueo'> extends True ? CheckSelect<T, Prisma__ArqueoClient<Arqueo>, Prisma__ArqueoClient<ArqueoGetPayload<T>>> : CheckSelect<T, Prisma__ArqueoClient<Arqueo | null >, Prisma__ArqueoClient<ArqueoGetPayload<T> | null >>

    /**
     * Find the first Arqueo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArqueoFindFirstArgs} args - Arguments to find a Arqueo
     * @example
     * // Get one Arqueo
     * const arqueo = await prisma.arqueo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArqueoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ArqueoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Arqueo'> extends True ? CheckSelect<T, Prisma__ArqueoClient<Arqueo>, Prisma__ArqueoClient<ArqueoGetPayload<T>>> : CheckSelect<T, Prisma__ArqueoClient<Arqueo | null >, Prisma__ArqueoClient<ArqueoGetPayload<T> | null >>

    /**
     * Find zero or more Arqueos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArqueoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arqueos
     * const arqueos = await prisma.arqueo.findMany()
     * 
     * // Get first 10 Arqueos
     * const arqueos = await prisma.arqueo.findMany({ take: 10 })
     * 
     * // Only select the `cuiid`
     * const arqueoWithCuiidOnly = await prisma.arqueo.findMany({ select: { cuiid: true } })
     * 
    **/
    findMany<T extends ArqueoFindManyArgs>(
      args?: SelectSubset<T, ArqueoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Arqueo>>, PrismaPromise<Array<ArqueoGetPayload<T>>>>

    /**
     * Create a Arqueo.
     * @param {ArqueoCreateArgs} args - Arguments to create a Arqueo.
     * @example
     * // Create one Arqueo
     * const Arqueo = await prisma.arqueo.create({
     *   data: {
     *     // ... data to create a Arqueo
     *   }
     * })
     * 
    **/
    create<T extends ArqueoCreateArgs>(
      args: SelectSubset<T, ArqueoCreateArgs>
    ): CheckSelect<T, Prisma__ArqueoClient<Arqueo>, Prisma__ArqueoClient<ArqueoGetPayload<T>>>

    /**
     * Create many Arqueos.
     *     @param {ArqueoCreateManyArgs} args - Arguments to create many Arqueos.
     *     @example
     *     // Create many Arqueos
     *     const arqueo = await prisma.arqueo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArqueoCreateManyArgs>(
      args?: SelectSubset<T, ArqueoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Arqueo.
     * @param {ArqueoDeleteArgs} args - Arguments to delete one Arqueo.
     * @example
     * // Delete one Arqueo
     * const Arqueo = await prisma.arqueo.delete({
     *   where: {
     *     // ... filter to delete one Arqueo
     *   }
     * })
     * 
    **/
    delete<T extends ArqueoDeleteArgs>(
      args: SelectSubset<T, ArqueoDeleteArgs>
    ): CheckSelect<T, Prisma__ArqueoClient<Arqueo>, Prisma__ArqueoClient<ArqueoGetPayload<T>>>

    /**
     * Update one Arqueo.
     * @param {ArqueoUpdateArgs} args - Arguments to update one Arqueo.
     * @example
     * // Update one Arqueo
     * const arqueo = await prisma.arqueo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArqueoUpdateArgs>(
      args: SelectSubset<T, ArqueoUpdateArgs>
    ): CheckSelect<T, Prisma__ArqueoClient<Arqueo>, Prisma__ArqueoClient<ArqueoGetPayload<T>>>

    /**
     * Delete zero or more Arqueos.
     * @param {ArqueoDeleteManyArgs} args - Arguments to filter Arqueos to delete.
     * @example
     * // Delete a few Arqueos
     * const { count } = await prisma.arqueo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArqueoDeleteManyArgs>(
      args?: SelectSubset<T, ArqueoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arqueos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArqueoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arqueos
     * const arqueo = await prisma.arqueo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArqueoUpdateManyArgs>(
      args: SelectSubset<T, ArqueoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Arqueo.
     * @param {ArqueoUpsertArgs} args - Arguments to update or create a Arqueo.
     * @example
     * // Update or create a Arqueo
     * const arqueo = await prisma.arqueo.upsert({
     *   create: {
     *     // ... data to create a Arqueo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arqueo we want to update
     *   }
     * })
    **/
    upsert<T extends ArqueoUpsertArgs>(
      args: SelectSubset<T, ArqueoUpsertArgs>
    ): CheckSelect<T, Prisma__ArqueoClient<Arqueo>, Prisma__ArqueoClient<ArqueoGetPayload<T>>>

    /**
     * Count the number of Arqueos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArqueoCountArgs} args - Arguments to filter Arqueos to count.
     * @example
     * // Count the number of Arqueos
     * const count = await prisma.arqueo.count({
     *   where: {
     *     // ... the filter for the Arqueos we want to count
     *   }
     * })
    **/
    count<T extends ArqueoCountArgs>(
      args?: Subset<T, ArqueoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArqueoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arqueo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArqueoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArqueoAggregateArgs>(args: Subset<T, ArqueoAggregateArgs>): PrismaPromise<GetArqueoAggregateType<T>>

    /**
     * Group by Arqueo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArqueoGroupByArgs} args - Group by arguments.
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
      T extends ArqueoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArqueoGroupByArgs['orderBy'] }
        : { orderBy?: ArqueoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArqueoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArqueoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arqueo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ArqueoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
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
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    lab<T extends LabArgs = {}>(args?: Subset<T, LabArgs>): CheckSelect<T, Prisma__LabClient<Lab | null >, Prisma__LabClient<LabGetPayload<T> | null >>;

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
   * Arqueo findUnique
   */
  export type ArqueoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Arqueo
     * 
    **/
    select?: ArqueoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArqueoInclude | null
    /**
     * Throw an Error if a Arqueo can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Arqueo to fetch.
     * 
    **/
    where: ArqueoWhereUniqueInput
  }


  /**
   * Arqueo findFirst
   */
  export type ArqueoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Arqueo
     * 
    **/
    select?: ArqueoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArqueoInclude | null
    /**
     * Throw an Error if a Arqueo can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Arqueo to fetch.
     * 
    **/
    where?: ArqueoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arqueos to fetch.
     * 
    **/
    orderBy?: Enumerable<ArqueoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arqueos.
     * 
    **/
    cursor?: ArqueoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arqueos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arqueos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arqueos.
     * 
    **/
    distinct?: Enumerable<ArqueoScalarFieldEnum>
  }


  /**
   * Arqueo findMany
   */
  export type ArqueoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Arqueo
     * 
    **/
    select?: ArqueoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArqueoInclude | null
    /**
     * Filter, which Arqueos to fetch.
     * 
    **/
    where?: ArqueoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arqueos to fetch.
     * 
    **/
    orderBy?: Enumerable<ArqueoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arqueos.
     * 
    **/
    cursor?: ArqueoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arqueos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arqueos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ArqueoScalarFieldEnum>
  }


  /**
   * Arqueo create
   */
  export type ArqueoCreateArgs = {
    /**
     * Select specific fields to fetch from the Arqueo
     * 
    **/
    select?: ArqueoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArqueoInclude | null
    /**
     * The data needed to create a Arqueo.
     * 
    **/
    data: XOR<ArqueoCreateInput, ArqueoUncheckedCreateInput>
  }


  /**
   * Arqueo createMany
   */
  export type ArqueoCreateManyArgs = {
    /**
     * The data used to create many Arqueos.
     * 
    **/
    data: Enumerable<ArqueoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Arqueo update
   */
  export type ArqueoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Arqueo
     * 
    **/
    select?: ArqueoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArqueoInclude | null
    /**
     * The data needed to update a Arqueo.
     * 
    **/
    data: XOR<ArqueoUpdateInput, ArqueoUncheckedUpdateInput>
    /**
     * Choose, which Arqueo to update.
     * 
    **/
    where: ArqueoWhereUniqueInput
  }


  /**
   * Arqueo updateMany
   */
  export type ArqueoUpdateManyArgs = {
    /**
     * The data used to update Arqueos.
     * 
    **/
    data: XOR<ArqueoUpdateManyMutationInput, ArqueoUncheckedUpdateManyInput>
    /**
     * Filter which Arqueos to update
     * 
    **/
    where?: ArqueoWhereInput
  }


  /**
   * Arqueo upsert
   */
  export type ArqueoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Arqueo
     * 
    **/
    select?: ArqueoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArqueoInclude | null
    /**
     * The filter to search for the Arqueo to update in case it exists.
     * 
    **/
    where: ArqueoWhereUniqueInput
    /**
     * In case the Arqueo found by the `where` argument doesn't exist, create a new Arqueo with this data.
     * 
    **/
    create: XOR<ArqueoCreateInput, ArqueoUncheckedCreateInput>
    /**
     * In case the Arqueo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ArqueoUpdateInput, ArqueoUncheckedUpdateInput>
  }


  /**
   * Arqueo delete
   */
  export type ArqueoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Arqueo
     * 
    **/
    select?: ArqueoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArqueoInclude | null
    /**
     * Filter which Arqueo to delete.
     * 
    **/
    where: ArqueoWhereUniqueInput
  }


  /**
   * Arqueo deleteMany
   */
  export type ArqueoDeleteManyArgs = {
    /**
     * Filter which Arqueos to delete
     * 
    **/
    where?: ArqueoWhereInput
  }


  /**
   * Arqueo without action
   */
  export type ArqueoArgs = {
    /**
     * Select specific fields to fetch from the Arqueo
     * 
    **/
    select?: ArqueoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ArqueoInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const LabScalarFieldEnum: {
    createdAt: 'createdAt',
    lab_name: 'lab_name',
    image: 'image'
  };

  export type LabScalarFieldEnum = (typeof LabScalarFieldEnum)[keyof typeof LabScalarFieldEnum]


  export const ArqueoScalarFieldEnum: {
    cuiid: 'cuiid',
    createdAt: 'createdAt',
    username: 'username',
    total: 'total',
    caja: 'caja',
    lab_id: 'lab_id'
  };

  export type ArqueoScalarFieldEnum = (typeof ArqueoScalarFieldEnum)[keyof typeof ArqueoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type LabWhereInput = {
    AND?: Enumerable<LabWhereInput>
    OR?: Enumerable<LabWhereInput>
    NOT?: Enumerable<LabWhereInput>
    createdAt?: DateTimeFilter | Date | string
    lab_name?: StringFilter | string
    image?: StringNullableFilter | string | null
    arqueo?: ArqueoListRelationFilter
  }

  export type LabOrderByWithRelationInput = {
    createdAt?: SortOrder
    lab_name?: SortOrder
    image?: SortOrder
    arqueo?: ArqueoOrderByRelationAggregateInput
  }

  export type LabWhereUniqueInput = {
    lab_name?: string
  }

  export type LabOrderByWithAggregationInput = {
    createdAt?: SortOrder
    lab_name?: SortOrder
    image?: SortOrder
    _count?: LabCountOrderByAggregateInput
    _max?: LabMaxOrderByAggregateInput
    _min?: LabMinOrderByAggregateInput
  }

  export type LabScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LabScalarWhereWithAggregatesInput>
    OR?: Enumerable<LabScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LabScalarWhereWithAggregatesInput>
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    lab_name?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
  }

  export type ArqueoWhereInput = {
    AND?: Enumerable<ArqueoWhereInput>
    OR?: Enumerable<ArqueoWhereInput>
    NOT?: Enumerable<ArqueoWhereInput>
    cuiid?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    username?: StringFilter | string
    total?: IntFilter | number
    caja?: IntFilter | number
    lab?: XOR<LabRelationFilter, LabWhereInput>
    lab_id?: StringFilter | string
  }

  export type ArqueoOrderByWithRelationInput = {
    cuiid?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    total?: SortOrder
    caja?: SortOrder
    lab?: LabOrderByWithRelationInput
    lab_id?: SortOrder
  }

  export type ArqueoWhereUniqueInput = {
    cuiid?: string
  }

  export type ArqueoOrderByWithAggregationInput = {
    cuiid?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    total?: SortOrder
    caja?: SortOrder
    lab_id?: SortOrder
    _count?: ArqueoCountOrderByAggregateInput
    _avg?: ArqueoAvgOrderByAggregateInput
    _max?: ArqueoMaxOrderByAggregateInput
    _min?: ArqueoMinOrderByAggregateInput
    _sum?: ArqueoSumOrderByAggregateInput
  }

  export type ArqueoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ArqueoScalarWhereWithAggregatesInput>
    OR?: Enumerable<ArqueoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ArqueoScalarWhereWithAggregatesInput>
    cuiid?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    username?: StringWithAggregatesFilter | string
    total?: IntWithAggregatesFilter | number
    caja?: IntWithAggregatesFilter | number
    lab_id?: StringWithAggregatesFilter | string
  }

  export type LabCreateInput = {
    createdAt?: Date | string
    lab_name: string
    image?: string | null
    arqueo?: ArqueoCreateNestedManyWithoutLabInput
  }

  export type LabUncheckedCreateInput = {
    createdAt?: Date | string
    lab_name: string
    image?: string | null
    arqueo?: ArqueoUncheckedCreateNestedManyWithoutLabInput
  }

  export type LabUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lab_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    arqueo?: ArqueoUpdateManyWithoutLabInput
  }

  export type LabUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lab_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    arqueo?: ArqueoUncheckedUpdateManyWithoutLabInput
  }

  export type LabCreateManyInput = {
    createdAt?: Date | string
    lab_name: string
    image?: string | null
  }

  export type LabUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lab_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lab_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArqueoCreateInput = {
    cuiid?: string
    createdAt?: Date | string
    username: string
    total: number
    caja: number
    lab: LabCreateNestedOneWithoutArqueoInput
  }

  export type ArqueoUncheckedCreateInput = {
    cuiid?: string
    createdAt?: Date | string
    username: string
    total: number
    caja: number
    lab_id: string
  }

  export type ArqueoUpdateInput = {
    cuiid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    caja?: IntFieldUpdateOperationsInput | number
    lab?: LabUpdateOneRequiredWithoutArqueoInput
  }

  export type ArqueoUncheckedUpdateInput = {
    cuiid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    caja?: IntFieldUpdateOperationsInput | number
    lab_id?: StringFieldUpdateOperationsInput | string
  }

  export type ArqueoCreateManyInput = {
    cuiid?: string
    createdAt?: Date | string
    username: string
    total: number
    caja: number
    lab_id: string
  }

  export type ArqueoUpdateManyMutationInput = {
    cuiid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    caja?: IntFieldUpdateOperationsInput | number
  }

  export type ArqueoUncheckedUpdateManyInput = {
    cuiid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    caja?: IntFieldUpdateOperationsInput | number
    lab_id?: StringFieldUpdateOperationsInput | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type ArqueoListRelationFilter = {
    every?: ArqueoWhereInput
    some?: ArqueoWhereInput
    none?: ArqueoWhereInput
  }

  export type ArqueoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LabCountOrderByAggregateInput = {
    createdAt?: SortOrder
    lab_name?: SortOrder
    image?: SortOrder
  }

  export type LabMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    lab_name?: SortOrder
    image?: SortOrder
  }

  export type LabMinOrderByAggregateInput = {
    createdAt?: SortOrder
    lab_name?: SortOrder
    image?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type LabRelationFilter = {
    is?: LabWhereInput
    isNot?: LabWhereInput
  }

  export type ArqueoCountOrderByAggregateInput = {
    cuiid?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    total?: SortOrder
    caja?: SortOrder
    lab_id?: SortOrder
  }

  export type ArqueoAvgOrderByAggregateInput = {
    total?: SortOrder
    caja?: SortOrder
  }

  export type ArqueoMaxOrderByAggregateInput = {
    cuiid?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    total?: SortOrder
    caja?: SortOrder
    lab_id?: SortOrder
  }

  export type ArqueoMinOrderByAggregateInput = {
    cuiid?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    total?: SortOrder
    caja?: SortOrder
    lab_id?: SortOrder
  }

  export type ArqueoSumOrderByAggregateInput = {
    total?: SortOrder
    caja?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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

  export type ArqueoCreateNestedManyWithoutLabInput = {
    create?: XOR<Enumerable<ArqueoCreateWithoutLabInput>, Enumerable<ArqueoUncheckedCreateWithoutLabInput>>
    connectOrCreate?: Enumerable<ArqueoCreateOrConnectWithoutLabInput>
    createMany?: ArqueoCreateManyLabInputEnvelope
    connect?: Enumerable<ArqueoWhereUniqueInput>
  }

  export type ArqueoUncheckedCreateNestedManyWithoutLabInput = {
    create?: XOR<Enumerable<ArqueoCreateWithoutLabInput>, Enumerable<ArqueoUncheckedCreateWithoutLabInput>>
    connectOrCreate?: Enumerable<ArqueoCreateOrConnectWithoutLabInput>
    createMany?: ArqueoCreateManyLabInputEnvelope
    connect?: Enumerable<ArqueoWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ArqueoUpdateManyWithoutLabInput = {
    create?: XOR<Enumerable<ArqueoCreateWithoutLabInput>, Enumerable<ArqueoUncheckedCreateWithoutLabInput>>
    connectOrCreate?: Enumerable<ArqueoCreateOrConnectWithoutLabInput>
    upsert?: Enumerable<ArqueoUpsertWithWhereUniqueWithoutLabInput>
    createMany?: ArqueoCreateManyLabInputEnvelope
    set?: Enumerable<ArqueoWhereUniqueInput>
    disconnect?: Enumerable<ArqueoWhereUniqueInput>
    delete?: Enumerable<ArqueoWhereUniqueInput>
    connect?: Enumerable<ArqueoWhereUniqueInput>
    update?: Enumerable<ArqueoUpdateWithWhereUniqueWithoutLabInput>
    updateMany?: Enumerable<ArqueoUpdateManyWithWhereWithoutLabInput>
    deleteMany?: Enumerable<ArqueoScalarWhereInput>
  }

  export type ArqueoUncheckedUpdateManyWithoutLabInput = {
    create?: XOR<Enumerable<ArqueoCreateWithoutLabInput>, Enumerable<ArqueoUncheckedCreateWithoutLabInput>>
    connectOrCreate?: Enumerable<ArqueoCreateOrConnectWithoutLabInput>
    upsert?: Enumerable<ArqueoUpsertWithWhereUniqueWithoutLabInput>
    createMany?: ArqueoCreateManyLabInputEnvelope
    set?: Enumerable<ArqueoWhereUniqueInput>
    disconnect?: Enumerable<ArqueoWhereUniqueInput>
    delete?: Enumerable<ArqueoWhereUniqueInput>
    connect?: Enumerable<ArqueoWhereUniqueInput>
    update?: Enumerable<ArqueoUpdateWithWhereUniqueWithoutLabInput>
    updateMany?: Enumerable<ArqueoUpdateManyWithWhereWithoutLabInput>
    deleteMany?: Enumerable<ArqueoScalarWhereInput>
  }

  export type LabCreateNestedOneWithoutArqueoInput = {
    create?: XOR<LabCreateWithoutArqueoInput, LabUncheckedCreateWithoutArqueoInput>
    connectOrCreate?: LabCreateOrConnectWithoutArqueoInput
    connect?: LabWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LabUpdateOneRequiredWithoutArqueoInput = {
    create?: XOR<LabCreateWithoutArqueoInput, LabUncheckedCreateWithoutArqueoInput>
    connectOrCreate?: LabCreateOrConnectWithoutArqueoInput
    upsert?: LabUpsertWithoutArqueoInput
    connect?: LabWhereUniqueInput
    update?: XOR<LabUpdateWithoutArqueoInput, LabUncheckedUpdateWithoutArqueoInput>
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
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
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ArqueoCreateWithoutLabInput = {
    cuiid?: string
    createdAt?: Date | string
    username: string
    total: number
    caja: number
  }

  export type ArqueoUncheckedCreateWithoutLabInput = {
    cuiid?: string
    createdAt?: Date | string
    username: string
    total: number
    caja: number
  }

  export type ArqueoCreateOrConnectWithoutLabInput = {
    where: ArqueoWhereUniqueInput
    create: XOR<ArqueoCreateWithoutLabInput, ArqueoUncheckedCreateWithoutLabInput>
  }

  export type ArqueoCreateManyLabInputEnvelope = {
    data: Enumerable<ArqueoCreateManyLabInput>
    skipDuplicates?: boolean
  }

  export type ArqueoUpsertWithWhereUniqueWithoutLabInput = {
    where: ArqueoWhereUniqueInput
    update: XOR<ArqueoUpdateWithoutLabInput, ArqueoUncheckedUpdateWithoutLabInput>
    create: XOR<ArqueoCreateWithoutLabInput, ArqueoUncheckedCreateWithoutLabInput>
  }

  export type ArqueoUpdateWithWhereUniqueWithoutLabInput = {
    where: ArqueoWhereUniqueInput
    data: XOR<ArqueoUpdateWithoutLabInput, ArqueoUncheckedUpdateWithoutLabInput>
  }

  export type ArqueoUpdateManyWithWhereWithoutLabInput = {
    where: ArqueoScalarWhereInput
    data: XOR<ArqueoUpdateManyMutationInput, ArqueoUncheckedUpdateManyWithoutArqueoInput>
  }

  export type ArqueoScalarWhereInput = {
    AND?: Enumerable<ArqueoScalarWhereInput>
    OR?: Enumerable<ArqueoScalarWhereInput>
    NOT?: Enumerable<ArqueoScalarWhereInput>
    cuiid?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    username?: StringFilter | string
    total?: IntFilter | number
    caja?: IntFilter | number
    lab_id?: StringFilter | string
  }

  export type LabCreateWithoutArqueoInput = {
    createdAt?: Date | string
    lab_name: string
    image?: string | null
  }

  export type LabUncheckedCreateWithoutArqueoInput = {
    createdAt?: Date | string
    lab_name: string
    image?: string | null
  }

  export type LabCreateOrConnectWithoutArqueoInput = {
    where: LabWhereUniqueInput
    create: XOR<LabCreateWithoutArqueoInput, LabUncheckedCreateWithoutArqueoInput>
  }

  export type LabUpsertWithoutArqueoInput = {
    update: XOR<LabUpdateWithoutArqueoInput, LabUncheckedUpdateWithoutArqueoInput>
    create: XOR<LabCreateWithoutArqueoInput, LabUncheckedCreateWithoutArqueoInput>
  }

  export type LabUpdateWithoutArqueoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lab_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LabUncheckedUpdateWithoutArqueoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lab_name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArqueoCreateManyLabInput = {
    cuiid?: string
    createdAt?: Date | string
    username: string
    total: number
    caja: number
  }

  export type ArqueoUpdateWithoutLabInput = {
    cuiid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    caja?: IntFieldUpdateOperationsInput | number
  }

  export type ArqueoUncheckedUpdateWithoutLabInput = {
    cuiid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    caja?: IntFieldUpdateOperationsInput | number
  }

  export type ArqueoUncheckedUpdateManyWithoutArqueoInput = {
    cuiid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    total?: IntFieldUpdateOperationsInput | number
    caja?: IntFieldUpdateOperationsInput | number
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
  export const dmmf: runtime.DMMF.Document;
}