import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { Context } from "./context.model";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** `ISO 8601` date format. E.g: 2021-08-09T09:45:16.696Z */
  Date: any;
  /** Email scalar custom type */
  Email: any;
  /** Password scalar custom type */
  Password: any;
  /** Required string scalar custom type */
  RString: any;
};

/** Authentication data model */
export type Auth = {
  __typename?: "Auth";
  accessToken: Scalars["String"];
  refreshToken: Scalars["String"];
  userRole?: Maybe<Scalars["String"]>;
  accessTokenExpire?: Maybe<Scalars["Int"]>;
  refreshTokenExpire?: Maybe<Scalars["Int"]>;
};

/** Authentication input model */
export type AuthInput = {
  email: Scalars["Email"];
  password: Scalars["Password"];
  appName: Scalars["RString"];
};

export type Message = {
  __typename?: "Message";
  message?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  /** Generate tokens. */
  generateTokens?: Maybe<Auth>;
  refreshTokens?: Maybe<Auth>;
  verifyMe?: Maybe<VerifyToken>;
  clearTokens?: Maybe<Message>;
  /** Get all users */
  getAllUsers?: Maybe<Array<Maybe<User>>>;
};

export type QueryGenerateTokensArgs = {
  userData: AuthInput;
};

/** User data model */
export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Username>;
  email?: Maybe<Scalars["String"]>;
  passwordSalt?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
  status?: Maybe<UserStatus>;
  gender?: Maybe<Scalars["String"]>;
  roles?: Maybe<Array<Maybe<Scalars["String"]>>>;
  verificationId?: Maybe<Scalars["String"]>;
  attemptOfResetPassword?: Maybe<Scalars["String"]>;
  address?: Maybe<UserAddress>;
};

/** User address data model */
export type UserAddress = {
  __typename?: "UserAddress";
  state?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  street?: Maybe<Scalars["String"]>;
  subdivision?: Maybe<Scalars["String"]>;
  lane?: Maybe<Scalars["String"]>;
  house?: Maybe<Scalars["String"]>;
  zip?: Maybe<Scalars["String"]>;
};

/** User status data model */
export enum UserStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

/** Username data model */
export type Username = {
  __typename?: "Username";
  first?: Maybe<Scalars["String"]>;
  last?: Maybe<Scalars["String"]>;
};

export type VerifyToken = {
  __typename?: "VerifyToken";
  id?: Maybe<Scalars["ID"]>;
  role?: Maybe<Scalars["String"]>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Auth: ResolverTypeWrapper<Auth>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  AuthInput: AuthInput;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  Email: ResolverTypeWrapper<Scalars["Email"]>;
  Message: ResolverTypeWrapper<Message>;
  Password: ResolverTypeWrapper<Scalars["Password"]>;
  Query: ResolverTypeWrapper<{}>;
  RString: ResolverTypeWrapper<Scalars["RString"]>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  UserAddress: ResolverTypeWrapper<UserAddress>;
  UserStatus: UserStatus;
  Username: ResolverTypeWrapper<Username>;
  VerifyToken: ResolverTypeWrapper<VerifyToken>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Auth: Auth;
  String: Scalars["String"];
  Int: Scalars["Int"];
  AuthInput: AuthInput;
  Date: Scalars["Date"];
  Email: Scalars["Email"];
  Message: Message;
  Password: Scalars["Password"];
  Query: {};
  RString: Scalars["RString"];
  User: User;
  ID: Scalars["ID"];
  UserAddress: UserAddress;
  Username: Username;
  VerifyToken: VerifyToken;
  Boolean: Scalars["Boolean"];
}>;

export type AuthResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Auth"] = ResolversParentTypes["Auth"]
> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  userRole?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  accessTokenExpire?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  refreshTokenExpire?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface EmailScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Email"], any> {
  name: "Email";
}

export type MessageResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Message"] = ResolversParentTypes["Message"]
> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface PasswordScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Password"], any> {
  name: "Password";
}

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  generateTokens?: Resolver<
    Maybe<ResolversTypes["Auth"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGenerateTokensArgs, "userData">
  >;
  refreshTokens?: Resolver<
    Maybe<ResolversTypes["Auth"]>,
    ParentType,
    ContextType
  >;
  verifyMe?: Resolver<
    Maybe<ResolversTypes["VerifyToken"]>,
    ParentType,
    ContextType
  >;
  clearTokens?: Resolver<
    Maybe<ResolversTypes["Message"]>,
    ParentType,
    ContextType
  >;
  getAllUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["User"]>>>,
    ParentType,
    ContextType
  >;
}>;

export interface RStringScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["RString"], any> {
  name: "RString";
}

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["Username"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  passwordSalt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  password?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  status?: Resolver<
    Maybe<ResolversTypes["UserStatus"]>,
    ParentType,
    ContextType
  >;
  gender?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  roles?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  verificationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  attemptOfResetPassword?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  address?: Resolver<
    Maybe<ResolversTypes["UserAddress"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserAddressResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["UserAddress"] = ResolversParentTypes["UserAddress"]
> = ResolversObject<{
  state?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  subdivision?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lane?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  house?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  zip?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsernameResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Username"] = ResolversParentTypes["Username"]
> = ResolversObject<{
  first?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  last?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VerifyTokenResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["VerifyToken"] = ResolversParentTypes["VerifyToken"]
> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Auth?: AuthResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Email?: GraphQLScalarType;
  Message?: MessageResolvers<ContextType>;
  Password?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  RString?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserAddress?: UserAddressResolvers<ContextType>;
  Username?: UsernameResolvers<ContextType>;
  VerifyToken?: VerifyTokenResolvers<ContextType>;
}>;
