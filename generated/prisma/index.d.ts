
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
 * Model UserDetails
 * 
 */
export type UserDetails = $Result.DefaultSelection<Prisma.$UserDetailsPayload>

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDetails`: Exposes CRUD operations for the **UserDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDetails
    * const userDetails = await prisma.userDetails.findMany()
    * ```
    */
  get userDetails(): Prisma.UserDetailsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    UserDetails: 'UserDetails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userDetails"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserDetails: {
        payload: Prisma.$UserDetailsPayload<ExtArgs>
        fields: Prisma.UserDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          findFirst: {
            args: Prisma.UserDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          findMany: {
            args: Prisma.UserDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          create: {
            args: Prisma.UserDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          createMany: {
            args: Prisma.UserDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          delete: {
            args: Prisma.UserDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          update: {
            args: Prisma.UserDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          deleteMany: {
            args: Prisma.UserDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          upsert: {
            args: Prisma.UserDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          aggregate: {
            args: Prisma.UserDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDetails>
          }
          groupBy: {
            args: Prisma.UserDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userDetails?: UserDetailsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userDetails: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserCountOutputTypeCountUserDetailsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsWhereInput
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
    userID: number | null
    postalCode: number | null
    experience: number | null
  }

  export type UserSumAggregateOutputType = {
    userID: number | null
    postalCode: number | null
    experience: number | null
  }

  export type UserMinAggregateOutputType = {
    userID: number | null
    firstName: string | null
    lastName: string | null
    emailID: string | null
    phone: string | null
    dateOfBirth: string | null
    gender: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: number | null
    userHeadline: string | null
    userSummary: string | null
    skills: string | null
    experience: number | null
    passwordHash: string | null
    profilePic: string | null
  }

  export type UserMaxAggregateOutputType = {
    userID: number | null
    firstName: string | null
    lastName: string | null
    emailID: string | null
    phone: string | null
    dateOfBirth: string | null
    gender: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: number | null
    userHeadline: string | null
    userSummary: string | null
    skills: string | null
    experience: number | null
    passwordHash: string | null
    profilePic: string | null
  }

  export type UserCountAggregateOutputType = {
    userID: number
    firstName: number
    lastName: number
    emailID: number
    phone: number
    dateOfBirth: number
    gender: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    userHeadline: number
    userSummary: number
    skills: number
    experience: number
    passwordHash: number
    profilePic: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userID?: true
    postalCode?: true
    experience?: true
  }

  export type UserSumAggregateInputType = {
    userID?: true
    postalCode?: true
    experience?: true
  }

  export type UserMinAggregateInputType = {
    userID?: true
    firstName?: true
    lastName?: true
    emailID?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    userHeadline?: true
    userSummary?: true
    skills?: true
    experience?: true
    passwordHash?: true
    profilePic?: true
  }

  export type UserMaxAggregateInputType = {
    userID?: true
    firstName?: true
    lastName?: true
    emailID?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    userHeadline?: true
    userSummary?: true
    skills?: true
    experience?: true
    passwordHash?: true
    profilePic?: true
  }

  export type UserCountAggregateInputType = {
    userID?: true
    firstName?: true
    lastName?: true
    emailID?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    userHeadline?: true
    userSummary?: true
    skills?: true
    experience?: true
    passwordHash?: true
    profilePic?: true
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
    userID: number
    firstName: string
    lastName: string
    emailID: string
    phone: string
    dateOfBirth: string
    gender: string
    address: string
    city: string
    state: string
    country: string
    postalCode: number
    userHeadline: string
    userSummary: string
    skills: string
    experience: number
    passwordHash: string
    profilePic: string
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
    userID?: boolean
    firstName?: boolean
    lastName?: boolean
    emailID?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    userHeadline?: boolean
    userSummary?: boolean
    skills?: boolean
    experience?: boolean
    passwordHash?: boolean
    profilePic?: boolean
    userDetails?: boolean | User$userDetailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    firstName?: boolean
    lastName?: boolean
    emailID?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    userHeadline?: boolean
    userSummary?: boolean
    skills?: boolean
    experience?: boolean
    passwordHash?: boolean
    profilePic?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userID?: boolean
    firstName?: boolean
    lastName?: boolean
    emailID?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    userHeadline?: boolean
    userSummary?: boolean
    skills?: boolean
    experience?: boolean
    passwordHash?: boolean
    profilePic?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userID?: boolean
    firstName?: boolean
    lastName?: boolean
    emailID?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    userHeadline?: boolean
    userSummary?: boolean
    skills?: boolean
    experience?: boolean
    passwordHash?: boolean
    profilePic?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userID" | "firstName" | "lastName" | "emailID" | "phone" | "dateOfBirth" | "gender" | "address" | "city" | "state" | "country" | "postalCode" | "userHeadline" | "userSummary" | "skills" | "experience" | "passwordHash" | "profilePic", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | User$userDetailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userDetails: Prisma.$UserDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userID: number
      firstName: string
      lastName: string
      emailID: string
      phone: string
      dateOfBirth: string
      gender: string
      address: string
      city: string
      state: string
      country: string
      postalCode: number
      userHeadline: string
      userSummary: string
      skills: string
      experience: number
      passwordHash: string
      profilePic: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userID`
     * const userWithUserIDOnly = await prisma.user.findMany({ select: { userID: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userID`
     * const userWithUserIDOnly = await prisma.user.createManyAndReturn({
     *   select: { userID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userID`
     * const userWithUserIDOnly = await prisma.user.updateManyAndReturn({
     *   select: { userID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userDetails<T extends User$userDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$userDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userID: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly emailID: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly postalCode: FieldRef<"User", 'Int'>
    readonly userHeadline: FieldRef<"User", 'String'>
    readonly userSummary: FieldRef<"User", 'String'>
    readonly skills: FieldRef<"User", 'String'>
    readonly experience: FieldRef<"User", 'Int'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly profilePic: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userDetails
   */
  export type User$userDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    where?: UserDetailsWhereInput
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    cursor?: UserDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserDetails
   */

  export type AggregateUserDetails = {
    _count: UserDetailsCountAggregateOutputType | null
    _avg: UserDetailsAvgAggregateOutputType | null
    _sum: UserDetailsSumAggregateOutputType | null
    _min: UserDetailsMinAggregateOutputType | null
    _max: UserDetailsMaxAggregateOutputType | null
  }

  export type UserDetailsAvgAggregateOutputType = {
    userDetailsID: number | null
    userID: number | null
  }

  export type UserDetailsSumAggregateOutputType = {
    userDetailsID: number | null
    userID: number | null
  }

  export type UserDetailsMinAggregateOutputType = {
    userDetailsID: number | null
    currentOrRecentjobRole: string | null
    currentOrRecentjobCompany: string | null
    currentOrRecentstartDate: string | null
    currentOrRecentendDate: string | null
    currentOrRecentIsCurrent: boolean | null
    currentOrRecentdescription: string | null
    collegeName: string | null
    degree: string | null
    fieldOfStudy: string | null
    endYear: string | null
    gradeOrPercentage: string | null
    projectTitle: string | null
    projectDescription: string | null
    technologiesUsed: string | null
    projectURL: string | null
    website: string | null
    github: string | null
    linkedIn: string | null
    resume: string | null
    userID: number | null
  }

  export type UserDetailsMaxAggregateOutputType = {
    userDetailsID: number | null
    currentOrRecentjobRole: string | null
    currentOrRecentjobCompany: string | null
    currentOrRecentstartDate: string | null
    currentOrRecentendDate: string | null
    currentOrRecentIsCurrent: boolean | null
    currentOrRecentdescription: string | null
    collegeName: string | null
    degree: string | null
    fieldOfStudy: string | null
    endYear: string | null
    gradeOrPercentage: string | null
    projectTitle: string | null
    projectDescription: string | null
    technologiesUsed: string | null
    projectURL: string | null
    website: string | null
    github: string | null
    linkedIn: string | null
    resume: string | null
    userID: number | null
  }

  export type UserDetailsCountAggregateOutputType = {
    userDetailsID: number
    currentOrRecentjobRole: number
    currentOrRecentjobCompany: number
    currentOrRecentstartDate: number
    currentOrRecentendDate: number
    currentOrRecentIsCurrent: number
    currentOrRecentdescription: number
    collegeName: number
    degree: number
    fieldOfStudy: number
    endYear: number
    gradeOrPercentage: number
    projectTitle: number
    projectDescription: number
    technologiesUsed: number
    projectURL: number
    website: number
    github: number
    linkedIn: number
    resume: number
    userID: number
    _all: number
  }


  export type UserDetailsAvgAggregateInputType = {
    userDetailsID?: true
    userID?: true
  }

  export type UserDetailsSumAggregateInputType = {
    userDetailsID?: true
    userID?: true
  }

  export type UserDetailsMinAggregateInputType = {
    userDetailsID?: true
    currentOrRecentjobRole?: true
    currentOrRecentjobCompany?: true
    currentOrRecentstartDate?: true
    currentOrRecentendDate?: true
    currentOrRecentIsCurrent?: true
    currentOrRecentdescription?: true
    collegeName?: true
    degree?: true
    fieldOfStudy?: true
    endYear?: true
    gradeOrPercentage?: true
    projectTitle?: true
    projectDescription?: true
    technologiesUsed?: true
    projectURL?: true
    website?: true
    github?: true
    linkedIn?: true
    resume?: true
    userID?: true
  }

  export type UserDetailsMaxAggregateInputType = {
    userDetailsID?: true
    currentOrRecentjobRole?: true
    currentOrRecentjobCompany?: true
    currentOrRecentstartDate?: true
    currentOrRecentendDate?: true
    currentOrRecentIsCurrent?: true
    currentOrRecentdescription?: true
    collegeName?: true
    degree?: true
    fieldOfStudy?: true
    endYear?: true
    gradeOrPercentage?: true
    projectTitle?: true
    projectDescription?: true
    technologiesUsed?: true
    projectURL?: true
    website?: true
    github?: true
    linkedIn?: true
    resume?: true
    userID?: true
  }

  export type UserDetailsCountAggregateInputType = {
    userDetailsID?: true
    currentOrRecentjobRole?: true
    currentOrRecentjobCompany?: true
    currentOrRecentstartDate?: true
    currentOrRecentendDate?: true
    currentOrRecentIsCurrent?: true
    currentOrRecentdescription?: true
    collegeName?: true
    degree?: true
    fieldOfStudy?: true
    endYear?: true
    gradeOrPercentage?: true
    projectTitle?: true
    projectDescription?: true
    technologiesUsed?: true
    projectURL?: true
    website?: true
    github?: true
    linkedIn?: true
    resume?: true
    userID?: true
    _all?: true
  }

  export type UserDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to aggregate.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDetails
    **/
    _count?: true | UserDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDetailsMaxAggregateInputType
  }

  export type GetUserDetailsAggregateType<T extends UserDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDetails[P]>
      : GetScalarType<T[P], AggregateUserDetails[P]>
  }




  export type UserDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsWhereInput
    orderBy?: UserDetailsOrderByWithAggregationInput | UserDetailsOrderByWithAggregationInput[]
    by: UserDetailsScalarFieldEnum[] | UserDetailsScalarFieldEnum
    having?: UserDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDetailsCountAggregateInputType | true
    _avg?: UserDetailsAvgAggregateInputType
    _sum?: UserDetailsSumAggregateInputType
    _min?: UserDetailsMinAggregateInputType
    _max?: UserDetailsMaxAggregateInputType
  }

  export type UserDetailsGroupByOutputType = {
    userDetailsID: number
    currentOrRecentjobRole: string | null
    currentOrRecentjobCompany: string | null
    currentOrRecentstartDate: string | null
    currentOrRecentendDate: string | null
    currentOrRecentIsCurrent: boolean
    currentOrRecentdescription: string | null
    collegeName: string | null
    degree: string | null
    fieldOfStudy: string | null
    endYear: string | null
    gradeOrPercentage: string | null
    projectTitle: string | null
    projectDescription: string | null
    technologiesUsed: string | null
    projectURL: string | null
    website: string | null
    github: string | null
    linkedIn: string | null
    resume: string | null
    userID: number
    _count: UserDetailsCountAggregateOutputType | null
    _avg: UserDetailsAvgAggregateOutputType | null
    _sum: UserDetailsSumAggregateOutputType | null
    _min: UserDetailsMinAggregateOutputType | null
    _max: UserDetailsMaxAggregateOutputType | null
  }

  type GetUserDetailsGroupByPayload<T extends UserDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], UserDetailsGroupByOutputType[P]>
        }
      >
    >


  export type UserDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userDetailsID?: boolean
    currentOrRecentjobRole?: boolean
    currentOrRecentjobCompany?: boolean
    currentOrRecentstartDate?: boolean
    currentOrRecentendDate?: boolean
    currentOrRecentIsCurrent?: boolean
    currentOrRecentdescription?: boolean
    collegeName?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    endYear?: boolean
    gradeOrPercentage?: boolean
    projectTitle?: boolean
    projectDescription?: boolean
    technologiesUsed?: boolean
    projectURL?: boolean
    website?: boolean
    github?: boolean
    linkedIn?: boolean
    resume?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userDetailsID?: boolean
    currentOrRecentjobRole?: boolean
    currentOrRecentjobCompany?: boolean
    currentOrRecentstartDate?: boolean
    currentOrRecentendDate?: boolean
    currentOrRecentIsCurrent?: boolean
    currentOrRecentdescription?: boolean
    collegeName?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    endYear?: boolean
    gradeOrPercentage?: boolean
    projectTitle?: boolean
    projectDescription?: boolean
    technologiesUsed?: boolean
    projectURL?: boolean
    website?: boolean
    github?: boolean
    linkedIn?: boolean
    resume?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userDetailsID?: boolean
    currentOrRecentjobRole?: boolean
    currentOrRecentjobCompany?: boolean
    currentOrRecentstartDate?: boolean
    currentOrRecentendDate?: boolean
    currentOrRecentIsCurrent?: boolean
    currentOrRecentdescription?: boolean
    collegeName?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    endYear?: boolean
    gradeOrPercentage?: boolean
    projectTitle?: boolean
    projectDescription?: boolean
    technologiesUsed?: boolean
    projectURL?: boolean
    website?: boolean
    github?: boolean
    linkedIn?: boolean
    resume?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectScalar = {
    userDetailsID?: boolean
    currentOrRecentjobRole?: boolean
    currentOrRecentjobCompany?: boolean
    currentOrRecentstartDate?: boolean
    currentOrRecentendDate?: boolean
    currentOrRecentIsCurrent?: boolean
    currentOrRecentdescription?: boolean
    collegeName?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    endYear?: boolean
    gradeOrPercentage?: boolean
    projectTitle?: boolean
    projectDescription?: boolean
    technologiesUsed?: boolean
    projectURL?: boolean
    website?: boolean
    github?: boolean
    linkedIn?: boolean
    resume?: boolean
    userID?: boolean
  }

  export type UserDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userDetailsID" | "currentOrRecentjobRole" | "currentOrRecentjobCompany" | "currentOrRecentstartDate" | "currentOrRecentendDate" | "currentOrRecentIsCurrent" | "currentOrRecentdescription" | "collegeName" | "degree" | "fieldOfStudy" | "endYear" | "gradeOrPercentage" | "projectTitle" | "projectDescription" | "technologiesUsed" | "projectURL" | "website" | "github" | "linkedIn" | "resume" | "userID", ExtArgs["result"]["userDetails"]>
  export type UserDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userDetailsID: number
      currentOrRecentjobRole: string | null
      currentOrRecentjobCompany: string | null
      currentOrRecentstartDate: string | null
      currentOrRecentendDate: string | null
      currentOrRecentIsCurrent: boolean
      currentOrRecentdescription: string | null
      collegeName: string | null
      degree: string | null
      fieldOfStudy: string | null
      endYear: string | null
      gradeOrPercentage: string | null
      projectTitle: string | null
      projectDescription: string | null
      technologiesUsed: string | null
      projectURL: string | null
      website: string | null
      github: string | null
      linkedIn: string | null
      resume: string | null
      userID: number
    }, ExtArgs["result"]["userDetails"]>
    composites: {}
  }

  type UserDetailsGetPayload<S extends boolean | null | undefined | UserDetailsDefaultArgs> = $Result.GetResult<Prisma.$UserDetailsPayload, S>

  type UserDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDetailsCountAggregateInputType | true
    }

  export interface UserDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDetails'], meta: { name: 'UserDetails' } }
    /**
     * Find zero or one UserDetails that matches the filter.
     * @param {UserDetailsFindUniqueArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDetailsFindUniqueArgs>(args: SelectSubset<T, UserDetailsFindUniqueArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDetailsFindUniqueOrThrowArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindFirstArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDetailsFindFirstArgs>(args?: SelectSubset<T, UserDetailsFindFirstArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindFirstOrThrowArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDetails
     * const userDetails = await prisma.userDetails.findMany()
     * 
     * // Get first 10 UserDetails
     * const userDetails = await prisma.userDetails.findMany({ take: 10 })
     * 
     * // Only select the `userDetailsID`
     * const userDetailsWithUserDetailsIDOnly = await prisma.userDetails.findMany({ select: { userDetailsID: true } })
     * 
     */
    findMany<T extends UserDetailsFindManyArgs>(args?: SelectSubset<T, UserDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDetails.
     * @param {UserDetailsCreateArgs} args - Arguments to create a UserDetails.
     * @example
     * // Create one UserDetails
     * const UserDetails = await prisma.userDetails.create({
     *   data: {
     *     // ... data to create a UserDetails
     *   }
     * })
     * 
     */
    create<T extends UserDetailsCreateArgs>(args: SelectSubset<T, UserDetailsCreateArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDetails.
     * @param {UserDetailsCreateManyArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetails = await prisma.userDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDetailsCreateManyArgs>(args?: SelectSubset<T, UserDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDetails and returns the data saved in the database.
     * @param {UserDetailsCreateManyAndReturnArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetails = await prisma.userDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDetails and only return the `userDetailsID`
     * const userDetailsWithUserDetailsIDOnly = await prisma.userDetails.createManyAndReturn({
     *   select: { userDetailsID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDetails.
     * @param {UserDetailsDeleteArgs} args - Arguments to delete one UserDetails.
     * @example
     * // Delete one UserDetails
     * const UserDetails = await prisma.userDetails.delete({
     *   where: {
     *     // ... filter to delete one UserDetails
     *   }
     * })
     * 
     */
    delete<T extends UserDetailsDeleteArgs>(args: SelectSubset<T, UserDetailsDeleteArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDetails.
     * @param {UserDetailsUpdateArgs} args - Arguments to update one UserDetails.
     * @example
     * // Update one UserDetails
     * const userDetails = await prisma.userDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDetailsUpdateArgs>(args: SelectSubset<T, UserDetailsUpdateArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDetails.
     * @param {UserDetailsDeleteManyArgs} args - Arguments to filter UserDetails to delete.
     * @example
     * // Delete a few UserDetails
     * const { count } = await prisma.userDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDetailsDeleteManyArgs>(args?: SelectSubset<T, UserDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDetails
     * const userDetails = await prisma.userDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDetailsUpdateManyArgs>(args: SelectSubset<T, UserDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails and returns the data updated in the database.
     * @param {UserDetailsUpdateManyAndReturnArgs} args - Arguments to update many UserDetails.
     * @example
     * // Update many UserDetails
     * const userDetails = await prisma.userDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDetails and only return the `userDetailsID`
     * const userDetailsWithUserDetailsIDOnly = await prisma.userDetails.updateManyAndReturn({
     *   select: { userDetailsID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDetails.
     * @param {UserDetailsUpsertArgs} args - Arguments to update or create a UserDetails.
     * @example
     * // Update or create a UserDetails
     * const userDetails = await prisma.userDetails.upsert({
     *   create: {
     *     // ... data to create a UserDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDetails we want to update
     *   }
     * })
     */
    upsert<T extends UserDetailsUpsertArgs>(args: SelectSubset<T, UserDetailsUpsertArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsCountArgs} args - Arguments to filter UserDetails to count.
     * @example
     * // Count the number of UserDetails
     * const count = await prisma.userDetails.count({
     *   where: {
     *     // ... the filter for the UserDetails we want to count
     *   }
     * })
    **/
    count<T extends UserDetailsCountArgs>(
      args?: Subset<T, UserDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDetailsAggregateArgs>(args: Subset<T, UserDetailsAggregateArgs>): Prisma.PrismaPromise<GetUserDetailsAggregateType<T>>

    /**
     * Group by UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsGroupByArgs} args - Group by arguments.
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
      T extends UserDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDetailsGroupByArgs['orderBy'] }
        : { orderBy?: UserDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDetails model
   */
  readonly fields: UserDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDetails model
   */
  interface UserDetailsFieldRefs {
    readonly userDetailsID: FieldRef<"UserDetails", 'Int'>
    readonly currentOrRecentjobRole: FieldRef<"UserDetails", 'String'>
    readonly currentOrRecentjobCompany: FieldRef<"UserDetails", 'String'>
    readonly currentOrRecentstartDate: FieldRef<"UserDetails", 'String'>
    readonly currentOrRecentendDate: FieldRef<"UserDetails", 'String'>
    readonly currentOrRecentIsCurrent: FieldRef<"UserDetails", 'Boolean'>
    readonly currentOrRecentdescription: FieldRef<"UserDetails", 'String'>
    readonly collegeName: FieldRef<"UserDetails", 'String'>
    readonly degree: FieldRef<"UserDetails", 'String'>
    readonly fieldOfStudy: FieldRef<"UserDetails", 'String'>
    readonly endYear: FieldRef<"UserDetails", 'String'>
    readonly gradeOrPercentage: FieldRef<"UserDetails", 'String'>
    readonly projectTitle: FieldRef<"UserDetails", 'String'>
    readonly projectDescription: FieldRef<"UserDetails", 'String'>
    readonly technologiesUsed: FieldRef<"UserDetails", 'String'>
    readonly projectURL: FieldRef<"UserDetails", 'String'>
    readonly website: FieldRef<"UserDetails", 'String'>
    readonly github: FieldRef<"UserDetails", 'String'>
    readonly linkedIn: FieldRef<"UserDetails", 'String'>
    readonly resume: FieldRef<"UserDetails", 'String'>
    readonly userID: FieldRef<"UserDetails", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserDetails findUnique
   */
  export type UserDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails findUniqueOrThrow
   */
  export type UserDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails findFirst
   */
  export type UserDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails findFirstOrThrow
   */
  export type UserDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails findMany
   */
  export type UserDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails create
   */
  export type UserDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDetails.
     */
    data: XOR<UserDetailsCreateInput, UserDetailsUncheckedCreateInput>
  }

  /**
   * UserDetails createMany
   */
  export type UserDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailsCreateManyInput | UserDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDetails createManyAndReturn
   */
  export type UserDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailsCreateManyInput | UserDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetails update
   */
  export type UserDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDetails.
     */
    data: XOR<UserDetailsUpdateInput, UserDetailsUncheckedUpdateInput>
    /**
     * Choose, which UserDetails to update.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails updateMany
   */
  export type UserDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
  }

  /**
   * UserDetails updateManyAndReturn
   */
  export type UserDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetails upsert
   */
  export type UserDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDetails to update in case it exists.
     */
    where: UserDetailsWhereUniqueInput
    /**
     * In case the UserDetails found by the `where` argument doesn't exist, create a new UserDetails with this data.
     */
    create: XOR<UserDetailsCreateInput, UserDetailsUncheckedCreateInput>
    /**
     * In case the UserDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDetailsUpdateInput, UserDetailsUncheckedUpdateInput>
  }

  /**
   * UserDetails delete
   */
  export type UserDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter which UserDetails to delete.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails deleteMany
   */
  export type UserDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to delete
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to delete.
     */
    limit?: number
  }

  /**
   * UserDetails without action
   */
  export type UserDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
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
    userID: 'userID',
    firstName: 'firstName',
    lastName: 'lastName',
    emailID: 'emailID',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    userHeadline: 'userHeadline',
    userSummary: 'userSummary',
    skills: 'skills',
    experience: 'experience',
    passwordHash: 'passwordHash',
    profilePic: 'profilePic'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserDetailsScalarFieldEnum: {
    userDetailsID: 'userDetailsID',
    currentOrRecentjobRole: 'currentOrRecentjobRole',
    currentOrRecentjobCompany: 'currentOrRecentjobCompany',
    currentOrRecentstartDate: 'currentOrRecentstartDate',
    currentOrRecentendDate: 'currentOrRecentendDate',
    currentOrRecentIsCurrent: 'currentOrRecentIsCurrent',
    currentOrRecentdescription: 'currentOrRecentdescription',
    collegeName: 'collegeName',
    degree: 'degree',
    fieldOfStudy: 'fieldOfStudy',
    endYear: 'endYear',
    gradeOrPercentage: 'gradeOrPercentage',
    projectTitle: 'projectTitle',
    projectDescription: 'projectDescription',
    technologiesUsed: 'technologiesUsed',
    projectURL: 'projectURL',
    website: 'website',
    github: 'github',
    linkedIn: 'linkedIn',
    resume: 'resume',
    userID: 'userID'
  };

  export type UserDetailsScalarFieldEnum = (typeof UserDetailsScalarFieldEnum)[keyof typeof UserDetailsScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userID?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    emailID?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    dateOfBirth?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    state?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    postalCode?: IntFilter<"User"> | number
    userHeadline?: StringFilter<"User"> | string
    userSummary?: StringFilter<"User"> | string
    skills?: StringFilter<"User"> | string
    experience?: IntFilter<"User"> | number
    passwordHash?: StringFilter<"User"> | string
    profilePic?: StringFilter<"User"> | string
    userDetails?: UserDetailsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userID?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailID?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    userHeadline?: SortOrder
    userSummary?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    passwordHash?: SortOrder
    profilePic?: SortOrder
    userDetails?: UserDetailsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userID?: number
    emailID?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    dateOfBirth?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    state?: StringFilter<"User"> | string
    country?: StringFilter<"User"> | string
    postalCode?: IntFilter<"User"> | number
    userHeadline?: StringFilter<"User"> | string
    userSummary?: StringFilter<"User"> | string
    skills?: StringFilter<"User"> | string
    experience?: IntFilter<"User"> | number
    passwordHash?: StringFilter<"User"> | string
    profilePic?: StringFilter<"User"> | string
    userDetails?: UserDetailsListRelationFilter
  }, "userID" | "userID" | "emailID" | "phone">

  export type UserOrderByWithAggregationInput = {
    userID?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailID?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    userHeadline?: SortOrder
    userSummary?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    passwordHash?: SortOrder
    profilePic?: SortOrder
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
    userID?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    emailID?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    dateOfBirth?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    city?: StringWithAggregatesFilter<"User"> | string
    state?: StringWithAggregatesFilter<"User"> | string
    country?: StringWithAggregatesFilter<"User"> | string
    postalCode?: IntWithAggregatesFilter<"User"> | number
    userHeadline?: StringWithAggregatesFilter<"User"> | string
    userSummary?: StringWithAggregatesFilter<"User"> | string
    skills?: StringWithAggregatesFilter<"User"> | string
    experience?: IntWithAggregatesFilter<"User"> | number
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    profilePic?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserDetailsWhereInput = {
    AND?: UserDetailsWhereInput | UserDetailsWhereInput[]
    OR?: UserDetailsWhereInput[]
    NOT?: UserDetailsWhereInput | UserDetailsWhereInput[]
    userDetailsID?: IntFilter<"UserDetails"> | number
    currentOrRecentjobRole?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentjobCompany?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentstartDate?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentendDate?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentIsCurrent?: BoolFilter<"UserDetails"> | boolean
    currentOrRecentdescription?: StringNullableFilter<"UserDetails"> | string | null
    collegeName?: StringNullableFilter<"UserDetails"> | string | null
    degree?: StringNullableFilter<"UserDetails"> | string | null
    fieldOfStudy?: StringNullableFilter<"UserDetails"> | string | null
    endYear?: StringNullableFilter<"UserDetails"> | string | null
    gradeOrPercentage?: StringNullableFilter<"UserDetails"> | string | null
    projectTitle?: StringNullableFilter<"UserDetails"> | string | null
    projectDescription?: StringNullableFilter<"UserDetails"> | string | null
    technologiesUsed?: StringNullableFilter<"UserDetails"> | string | null
    projectURL?: StringNullableFilter<"UserDetails"> | string | null
    website?: StringNullableFilter<"UserDetails"> | string | null
    github?: StringNullableFilter<"UserDetails"> | string | null
    linkedIn?: StringNullableFilter<"UserDetails"> | string | null
    resume?: StringNullableFilter<"UserDetails"> | string | null
    userID?: IntFilter<"UserDetails"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDetailsOrderByWithRelationInput = {
    userDetailsID?: SortOrder
    currentOrRecentjobRole?: SortOrderInput | SortOrder
    currentOrRecentjobCompany?: SortOrderInput | SortOrder
    currentOrRecentstartDate?: SortOrderInput | SortOrder
    currentOrRecentendDate?: SortOrderInput | SortOrder
    currentOrRecentIsCurrent?: SortOrder
    currentOrRecentdescription?: SortOrderInput | SortOrder
    collegeName?: SortOrderInput | SortOrder
    degree?: SortOrderInput | SortOrder
    fieldOfStudy?: SortOrderInput | SortOrder
    endYear?: SortOrderInput | SortOrder
    gradeOrPercentage?: SortOrderInput | SortOrder
    projectTitle?: SortOrderInput | SortOrder
    projectDescription?: SortOrderInput | SortOrder
    technologiesUsed?: SortOrderInput | SortOrder
    projectURL?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    resume?: SortOrderInput | SortOrder
    userID?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserDetailsWhereUniqueInput = Prisma.AtLeast<{
    userDetailsID?: number
    userID?: number
    AND?: UserDetailsWhereInput | UserDetailsWhereInput[]
    OR?: UserDetailsWhereInput[]
    NOT?: UserDetailsWhereInput | UserDetailsWhereInput[]
    currentOrRecentjobRole?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentjobCompany?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentstartDate?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentendDate?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentIsCurrent?: BoolFilter<"UserDetails"> | boolean
    currentOrRecentdescription?: StringNullableFilter<"UserDetails"> | string | null
    collegeName?: StringNullableFilter<"UserDetails"> | string | null
    degree?: StringNullableFilter<"UserDetails"> | string | null
    fieldOfStudy?: StringNullableFilter<"UserDetails"> | string | null
    endYear?: StringNullableFilter<"UserDetails"> | string | null
    gradeOrPercentage?: StringNullableFilter<"UserDetails"> | string | null
    projectTitle?: StringNullableFilter<"UserDetails"> | string | null
    projectDescription?: StringNullableFilter<"UserDetails"> | string | null
    technologiesUsed?: StringNullableFilter<"UserDetails"> | string | null
    projectURL?: StringNullableFilter<"UserDetails"> | string | null
    website?: StringNullableFilter<"UserDetails"> | string | null
    github?: StringNullableFilter<"UserDetails"> | string | null
    linkedIn?: StringNullableFilter<"UserDetails"> | string | null
    resume?: StringNullableFilter<"UserDetails"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userDetailsID" | "userID">

  export type UserDetailsOrderByWithAggregationInput = {
    userDetailsID?: SortOrder
    currentOrRecentjobRole?: SortOrderInput | SortOrder
    currentOrRecentjobCompany?: SortOrderInput | SortOrder
    currentOrRecentstartDate?: SortOrderInput | SortOrder
    currentOrRecentendDate?: SortOrderInput | SortOrder
    currentOrRecentIsCurrent?: SortOrder
    currentOrRecentdescription?: SortOrderInput | SortOrder
    collegeName?: SortOrderInput | SortOrder
    degree?: SortOrderInput | SortOrder
    fieldOfStudy?: SortOrderInput | SortOrder
    endYear?: SortOrderInput | SortOrder
    gradeOrPercentage?: SortOrderInput | SortOrder
    projectTitle?: SortOrderInput | SortOrder
    projectDescription?: SortOrderInput | SortOrder
    technologiesUsed?: SortOrderInput | SortOrder
    projectURL?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    resume?: SortOrderInput | SortOrder
    userID?: SortOrder
    _count?: UserDetailsCountOrderByAggregateInput
    _avg?: UserDetailsAvgOrderByAggregateInput
    _max?: UserDetailsMaxOrderByAggregateInput
    _min?: UserDetailsMinOrderByAggregateInput
    _sum?: UserDetailsSumOrderByAggregateInput
  }

  export type UserDetailsScalarWhereWithAggregatesInput = {
    AND?: UserDetailsScalarWhereWithAggregatesInput | UserDetailsScalarWhereWithAggregatesInput[]
    OR?: UserDetailsScalarWhereWithAggregatesInput[]
    NOT?: UserDetailsScalarWhereWithAggregatesInput | UserDetailsScalarWhereWithAggregatesInput[]
    userDetailsID?: IntWithAggregatesFilter<"UserDetails"> | number
    currentOrRecentjobRole?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    currentOrRecentjobCompany?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    currentOrRecentstartDate?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    currentOrRecentendDate?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    currentOrRecentIsCurrent?: BoolWithAggregatesFilter<"UserDetails"> | boolean
    currentOrRecentdescription?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    collegeName?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    degree?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    fieldOfStudy?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    endYear?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    gradeOrPercentage?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    projectTitle?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    projectDescription?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    technologiesUsed?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    projectURL?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    website?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    github?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    linkedIn?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    resume?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    userID?: IntWithAggregatesFilter<"UserDetails"> | number
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    emailID: string
    phone: string
    dateOfBirth: string
    gender: string
    address: string
    city: string
    state: string
    country: string
    postalCode: number
    userHeadline: string
    userSummary: string
    skills: string
    experience: number
    passwordHash: string
    profilePic?: string
    userDetails?: UserDetailsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userID?: number
    firstName: string
    lastName: string
    emailID: string
    phone: string
    dateOfBirth: string
    gender: string
    address: string
    city: string
    state: string
    country: string
    postalCode: number
    userHeadline: string
    userSummary: string
    skills: string
    experience: number
    passwordHash: string
    profilePic?: string
    userDetails?: UserDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailID?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    userHeadline?: StringFieldUpdateOperationsInput | string
    userSummary?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    userDetails?: UserDetailsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userID?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailID?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    userHeadline?: StringFieldUpdateOperationsInput | string
    userSummary?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    userDetails?: UserDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userID?: number
    firstName: string
    lastName: string
    emailID: string
    phone: string
    dateOfBirth: string
    gender: string
    address: string
    city: string
    state: string
    country: string
    postalCode: number
    userHeadline: string
    userSummary: string
    skills: string
    experience: number
    passwordHash: string
    profilePic?: string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailID?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    userHeadline?: StringFieldUpdateOperationsInput | string
    userSummary?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userID?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailID?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    userHeadline?: StringFieldUpdateOperationsInput | string
    userSummary?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
  }

  export type UserDetailsCreateInput = {
    currentOrRecentjobRole?: string | null
    currentOrRecentjobCompany?: string | null
    currentOrRecentstartDate?: string | null
    currentOrRecentendDate?: string | null
    currentOrRecentIsCurrent?: boolean
    currentOrRecentdescription?: string | null
    collegeName?: string | null
    degree?: string | null
    fieldOfStudy?: string | null
    endYear?: string | null
    gradeOrPercentage?: string | null
    projectTitle?: string | null
    projectDescription?: string | null
    technologiesUsed?: string | null
    projectURL?: string | null
    website?: string | null
    github?: string | null
    linkedIn?: string | null
    resume?: string | null
    user: UserCreateNestedOneWithoutUserDetailsInput
  }

  export type UserDetailsUncheckedCreateInput = {
    userDetailsID?: number
    currentOrRecentjobRole?: string | null
    currentOrRecentjobCompany?: string | null
    currentOrRecentstartDate?: string | null
    currentOrRecentendDate?: string | null
    currentOrRecentIsCurrent?: boolean
    currentOrRecentdescription?: string | null
    collegeName?: string | null
    degree?: string | null
    fieldOfStudy?: string | null
    endYear?: string | null
    gradeOrPercentage?: string | null
    projectTitle?: string | null
    projectDescription?: string | null
    technologiesUsed?: string | null
    projectURL?: string | null
    website?: string | null
    github?: string | null
    linkedIn?: string | null
    resume?: string | null
    userID: number
  }

  export type UserDetailsUpdateInput = {
    currentOrRecentjobRole?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentjobCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentstartDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentendDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentIsCurrent?: BoolFieldUpdateOperationsInput | boolean
    currentOrRecentdescription?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    gradeOrPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    projectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologiesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    projectURL?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutUserDetailsNestedInput
  }

  export type UserDetailsUncheckedUpdateInput = {
    userDetailsID?: IntFieldUpdateOperationsInput | number
    currentOrRecentjobRole?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentjobCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentstartDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentendDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentIsCurrent?: BoolFieldUpdateOperationsInput | boolean
    currentOrRecentdescription?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    gradeOrPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    projectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologiesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    projectURL?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    userID?: IntFieldUpdateOperationsInput | number
  }

  export type UserDetailsCreateManyInput = {
    userDetailsID?: number
    currentOrRecentjobRole?: string | null
    currentOrRecentjobCompany?: string | null
    currentOrRecentstartDate?: string | null
    currentOrRecentendDate?: string | null
    currentOrRecentIsCurrent?: boolean
    currentOrRecentdescription?: string | null
    collegeName?: string | null
    degree?: string | null
    fieldOfStudy?: string | null
    endYear?: string | null
    gradeOrPercentage?: string | null
    projectTitle?: string | null
    projectDescription?: string | null
    technologiesUsed?: string | null
    projectURL?: string | null
    website?: string | null
    github?: string | null
    linkedIn?: string | null
    resume?: string | null
    userID: number
  }

  export type UserDetailsUpdateManyMutationInput = {
    currentOrRecentjobRole?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentjobCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentstartDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentendDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentIsCurrent?: BoolFieldUpdateOperationsInput | boolean
    currentOrRecentdescription?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    gradeOrPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    projectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologiesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    projectURL?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDetailsUncheckedUpdateManyInput = {
    userDetailsID?: IntFieldUpdateOperationsInput | number
    currentOrRecentjobRole?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentjobCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentstartDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentendDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentIsCurrent?: BoolFieldUpdateOperationsInput | boolean
    currentOrRecentdescription?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    gradeOrPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    projectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologiesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    projectURL?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
    userID?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserDetailsListRelationFilter = {
    every?: UserDetailsWhereInput
    some?: UserDetailsWhereInput
    none?: UserDetailsWhereInput
  }

  export type UserDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userID?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailID?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    userHeadline?: SortOrder
    userSummary?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    passwordHash?: SortOrder
    profilePic?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userID?: SortOrder
    postalCode?: SortOrder
    experience?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userID?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailID?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    userHeadline?: SortOrder
    userSummary?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    passwordHash?: SortOrder
    profilePic?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userID?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    emailID?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    userHeadline?: SortOrder
    userSummary?: SortOrder
    skills?: SortOrder
    experience?: SortOrder
    passwordHash?: SortOrder
    profilePic?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userID?: SortOrder
    postalCode?: SortOrder
    experience?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserDetailsCountOrderByAggregateInput = {
    userDetailsID?: SortOrder
    currentOrRecentjobRole?: SortOrder
    currentOrRecentjobCompany?: SortOrder
    currentOrRecentstartDate?: SortOrder
    currentOrRecentendDate?: SortOrder
    currentOrRecentIsCurrent?: SortOrder
    currentOrRecentdescription?: SortOrder
    collegeName?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    endYear?: SortOrder
    gradeOrPercentage?: SortOrder
    projectTitle?: SortOrder
    projectDescription?: SortOrder
    technologiesUsed?: SortOrder
    projectURL?: SortOrder
    website?: SortOrder
    github?: SortOrder
    linkedIn?: SortOrder
    resume?: SortOrder
    userID?: SortOrder
  }

  export type UserDetailsAvgOrderByAggregateInput = {
    userDetailsID?: SortOrder
    userID?: SortOrder
  }

  export type UserDetailsMaxOrderByAggregateInput = {
    userDetailsID?: SortOrder
    currentOrRecentjobRole?: SortOrder
    currentOrRecentjobCompany?: SortOrder
    currentOrRecentstartDate?: SortOrder
    currentOrRecentendDate?: SortOrder
    currentOrRecentIsCurrent?: SortOrder
    currentOrRecentdescription?: SortOrder
    collegeName?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    endYear?: SortOrder
    gradeOrPercentage?: SortOrder
    projectTitle?: SortOrder
    projectDescription?: SortOrder
    technologiesUsed?: SortOrder
    projectURL?: SortOrder
    website?: SortOrder
    github?: SortOrder
    linkedIn?: SortOrder
    resume?: SortOrder
    userID?: SortOrder
  }

  export type UserDetailsMinOrderByAggregateInput = {
    userDetailsID?: SortOrder
    currentOrRecentjobRole?: SortOrder
    currentOrRecentjobCompany?: SortOrder
    currentOrRecentstartDate?: SortOrder
    currentOrRecentendDate?: SortOrder
    currentOrRecentIsCurrent?: SortOrder
    currentOrRecentdescription?: SortOrder
    collegeName?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    endYear?: SortOrder
    gradeOrPercentage?: SortOrder
    projectTitle?: SortOrder
    projectDescription?: SortOrder
    technologiesUsed?: SortOrder
    projectURL?: SortOrder
    website?: SortOrder
    github?: SortOrder
    linkedIn?: SortOrder
    resume?: SortOrder
    userID?: SortOrder
  }

  export type UserDetailsSumOrderByAggregateInput = {
    userDetailsID?: SortOrder
    userID?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserDetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput> | UserDetailsCreateWithoutUserInput[] | UserDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput | UserDetailsCreateOrConnectWithoutUserInput[]
    createMany?: UserDetailsCreateManyUserInputEnvelope
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
  }

  export type UserDetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput> | UserDetailsCreateWithoutUserInput[] | UserDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput | UserDetailsCreateOrConnectWithoutUserInput[]
    createMany?: UserDetailsCreateManyUserInputEnvelope
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserDetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput> | UserDetailsCreateWithoutUserInput[] | UserDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput | UserDetailsCreateOrConnectWithoutUserInput[]
    upsert?: UserDetailsUpsertWithWhereUniqueWithoutUserInput | UserDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDetailsCreateManyUserInputEnvelope
    set?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    disconnect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    delete?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    update?: UserDetailsUpdateWithWhereUniqueWithoutUserInput | UserDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDetailsUpdateManyWithWhereWithoutUserInput | UserDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
  }

  export type UserDetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput> | UserDetailsCreateWithoutUserInput[] | UserDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput | UserDetailsCreateOrConnectWithoutUserInput[]
    upsert?: UserDetailsUpsertWithWhereUniqueWithoutUserInput | UserDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDetailsCreateManyUserInputEnvelope
    set?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    disconnect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    delete?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    update?: UserDetailsUpdateWithWhereUniqueWithoutUserInput | UserDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDetailsUpdateManyWithWhereWithoutUserInput | UserDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserDetailsInput = {
    create?: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserDetailsNestedInput = {
    create?: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDetailsInput
    upsert?: UserUpsertWithoutUserDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserDetailsInput, UserUpdateWithoutUserDetailsInput>, UserUncheckedUpdateWithoutUserDetailsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserDetailsCreateWithoutUserInput = {
    currentOrRecentjobRole?: string | null
    currentOrRecentjobCompany?: string | null
    currentOrRecentstartDate?: string | null
    currentOrRecentendDate?: string | null
    currentOrRecentIsCurrent?: boolean
    currentOrRecentdescription?: string | null
    collegeName?: string | null
    degree?: string | null
    fieldOfStudy?: string | null
    endYear?: string | null
    gradeOrPercentage?: string | null
    projectTitle?: string | null
    projectDescription?: string | null
    technologiesUsed?: string | null
    projectURL?: string | null
    website?: string | null
    github?: string | null
    linkedIn?: string | null
    resume?: string | null
  }

  export type UserDetailsUncheckedCreateWithoutUserInput = {
    userDetailsID?: number
    currentOrRecentjobRole?: string | null
    currentOrRecentjobCompany?: string | null
    currentOrRecentstartDate?: string | null
    currentOrRecentendDate?: string | null
    currentOrRecentIsCurrent?: boolean
    currentOrRecentdescription?: string | null
    collegeName?: string | null
    degree?: string | null
    fieldOfStudy?: string | null
    endYear?: string | null
    gradeOrPercentage?: string | null
    projectTitle?: string | null
    projectDescription?: string | null
    technologiesUsed?: string | null
    projectURL?: string | null
    website?: string | null
    github?: string | null
    linkedIn?: string | null
    resume?: string | null
  }

  export type UserDetailsCreateOrConnectWithoutUserInput = {
    where: UserDetailsWhereUniqueInput
    create: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
  }

  export type UserDetailsCreateManyUserInputEnvelope = {
    data: UserDetailsCreateManyUserInput | UserDetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDetailsWhereUniqueInput
    update: XOR<UserDetailsUpdateWithoutUserInput, UserDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
  }

  export type UserDetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDetailsWhereUniqueInput
    data: XOR<UserDetailsUpdateWithoutUserInput, UserDetailsUncheckedUpdateWithoutUserInput>
  }

  export type UserDetailsUpdateManyWithWhereWithoutUserInput = {
    where: UserDetailsScalarWhereInput
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDetailsScalarWhereInput = {
    AND?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
    OR?: UserDetailsScalarWhereInput[]
    NOT?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
    userDetailsID?: IntFilter<"UserDetails"> | number
    currentOrRecentjobRole?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentjobCompany?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentstartDate?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentendDate?: StringNullableFilter<"UserDetails"> | string | null
    currentOrRecentIsCurrent?: BoolFilter<"UserDetails"> | boolean
    currentOrRecentdescription?: StringNullableFilter<"UserDetails"> | string | null
    collegeName?: StringNullableFilter<"UserDetails"> | string | null
    degree?: StringNullableFilter<"UserDetails"> | string | null
    fieldOfStudy?: StringNullableFilter<"UserDetails"> | string | null
    endYear?: StringNullableFilter<"UserDetails"> | string | null
    gradeOrPercentage?: StringNullableFilter<"UserDetails"> | string | null
    projectTitle?: StringNullableFilter<"UserDetails"> | string | null
    projectDescription?: StringNullableFilter<"UserDetails"> | string | null
    technologiesUsed?: StringNullableFilter<"UserDetails"> | string | null
    projectURL?: StringNullableFilter<"UserDetails"> | string | null
    website?: StringNullableFilter<"UserDetails"> | string | null
    github?: StringNullableFilter<"UserDetails"> | string | null
    linkedIn?: StringNullableFilter<"UserDetails"> | string | null
    resume?: StringNullableFilter<"UserDetails"> | string | null
    userID?: IntFilter<"UserDetails"> | number
  }

  export type UserCreateWithoutUserDetailsInput = {
    firstName: string
    lastName: string
    emailID: string
    phone: string
    dateOfBirth: string
    gender: string
    address: string
    city: string
    state: string
    country: string
    postalCode: number
    userHeadline: string
    userSummary: string
    skills: string
    experience: number
    passwordHash: string
    profilePic?: string
  }

  export type UserUncheckedCreateWithoutUserDetailsInput = {
    userID?: number
    firstName: string
    lastName: string
    emailID: string
    phone: string
    dateOfBirth: string
    gender: string
    address: string
    city: string
    state: string
    country: string
    postalCode: number
    userHeadline: string
    userSummary: string
    skills: string
    experience: number
    passwordHash: string
    profilePic?: string
  }

  export type UserCreateOrConnectWithoutUserDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
  }

  export type UserUpsertWithoutUserDetailsInput = {
    update: XOR<UserUpdateWithoutUserDetailsInput, UserUncheckedUpdateWithoutUserDetailsInput>
    create: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserDetailsInput, UserUncheckedUpdateWithoutUserDetailsInput>
  }

  export type UserUpdateWithoutUserDetailsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailID?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    userHeadline?: StringFieldUpdateOperationsInput | string
    userSummary?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutUserDetailsInput = {
    userID?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    emailID?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: IntFieldUpdateOperationsInput | number
    userHeadline?: StringFieldUpdateOperationsInput | string
    userSummary?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    passwordHash?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
  }

  export type UserDetailsCreateManyUserInput = {
    userDetailsID?: number
    currentOrRecentjobRole?: string | null
    currentOrRecentjobCompany?: string | null
    currentOrRecentstartDate?: string | null
    currentOrRecentendDate?: string | null
    currentOrRecentIsCurrent?: boolean
    currentOrRecentdescription?: string | null
    collegeName?: string | null
    degree?: string | null
    fieldOfStudy?: string | null
    endYear?: string | null
    gradeOrPercentage?: string | null
    projectTitle?: string | null
    projectDescription?: string | null
    technologiesUsed?: string | null
    projectURL?: string | null
    website?: string | null
    github?: string | null
    linkedIn?: string | null
    resume?: string | null
  }

  export type UserDetailsUpdateWithoutUserInput = {
    currentOrRecentjobRole?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentjobCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentstartDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentendDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentIsCurrent?: BoolFieldUpdateOperationsInput | boolean
    currentOrRecentdescription?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    gradeOrPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    projectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologiesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    projectURL?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDetailsUncheckedUpdateWithoutUserInput = {
    userDetailsID?: IntFieldUpdateOperationsInput | number
    currentOrRecentjobRole?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentjobCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentstartDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentendDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentIsCurrent?: BoolFieldUpdateOperationsInput | boolean
    currentOrRecentdescription?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    gradeOrPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    projectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologiesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    projectURL?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDetailsUncheckedUpdateManyWithoutUserInput = {
    userDetailsID?: IntFieldUpdateOperationsInput | number
    currentOrRecentjobRole?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentjobCompany?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentstartDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentendDate?: NullableStringFieldUpdateOperationsInput | string | null
    currentOrRecentIsCurrent?: BoolFieldUpdateOperationsInput | boolean
    currentOrRecentdescription?: NullableStringFieldUpdateOperationsInput | string | null
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    fieldOfStudy?: NullableStringFieldUpdateOperationsInput | string | null
    endYear?: NullableStringFieldUpdateOperationsInput | string | null
    gradeOrPercentage?: NullableStringFieldUpdateOperationsInput | string | null
    projectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    projectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    technologiesUsed?: NullableStringFieldUpdateOperationsInput | string | null
    projectURL?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    resume?: NullableStringFieldUpdateOperationsInput | string | null
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