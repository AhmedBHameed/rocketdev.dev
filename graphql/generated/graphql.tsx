import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** `ISO 8601` date format. E.g: 2021-08-09T09:45:16.696Z */
  Date: Date;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** Password scalar custom type */
  Password: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** Required string scalar custom type */
  RequiredString: any;
};

export type ActionInput = {
  name: Scalars['RequiredString'];
  permissions: Array<Scalars['RequiredString']>;
};

/** Authentication data model */
export type Auth = {
  __typename?: 'Auth';
  accessToken: Scalars['String'];
  accessTokenExpire?: Maybe<Scalars['Int']>;
  refreshToken: Scalars['String'];
  refreshTokenExpire?: Maybe<Scalars['Int']>;
};

export type AuthInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['Password'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
};

export type Authorization = {
  __typename?: 'Authorization';
  actions?: Maybe<Array<Maybe<UserAction>>>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userId?: Maybe<Scalars['ID']>;
};

export type AuthorizationInput = {
  actions: Array<ActionInput>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type Course = {
  __typename?: 'Course';
  accessedByUserIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  isPremium?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<LanguageEnum>;
  postIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  publishedAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  visibility?: Maybe<Scalars['Boolean']>;
};

/** Filtering configuration by fields. */
export type CourseFilterInput = {
  _and?: InputMaybe<Array<InputMaybe<CourseFilterInput>>>;
  _eq?: InputMaybe<CourseFilterInput>;
  _gt?: InputMaybe<CourseFilterInput>;
  _gte?: InputMaybe<CourseFilterInput>;
  _in?: InputMaybe<Array<InputMaybe<CourseFilterInput>>>;
  _lt?: InputMaybe<CourseFilterInput>;
  _lte?: InputMaybe<CourseFilterInput>;
  _neq?: InputMaybe<CourseFilterInput>;
  _nin?: InputMaybe<Array<InputMaybe<CourseFilterInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CourseFilterInput>>>;
  authorId?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lang?: InputMaybe<LanguageEnum>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['Boolean']>;
};

/** Single sorting configuration by field name and direction. An object of `key` `direction` properties is required when applying for sorting. */
export type CourseSortingByFieldInput = {
  createdAt?: InputMaybe<SortingEnum>;
  id?: InputMaybe<SortingEnum>;
  isPremium?: InputMaybe<SortingEnum>;
  lang?: InputMaybe<SortingEnum>;
  publishedAt?: InputMaybe<SortingEnum>;
  slug?: InputMaybe<SortingEnum>;
  updatedAt?: InputMaybe<SortingEnum>;
  visibility?: InputMaybe<SortingEnum>;
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email: Scalars['EmailAddress'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['Password'];
};

/** Filtering configuration by fields. */
export type FilterTagInput = {
  _and?: InputMaybe<Array<InputMaybe<FilterTagInput>>>;
  _eq?: InputMaybe<FilterTagInput>;
  _gt?: InputMaybe<FilterTagInput>;
  _gte?: InputMaybe<FilterTagInput>;
  _in?: InputMaybe<Array<InputMaybe<FilterTagInput>>>;
  _lt?: InputMaybe<FilterTagInput>;
  _lte?: InputMaybe<FilterTagInput>;
  _neq?: InputMaybe<FilterTagInput>;
  _nin?: InputMaybe<Array<InputMaybe<FilterTagInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FilterTagInput>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['Boolean']>;
};

export enum LanguageEnum {
  Ar = 'AR',
  En = 'EN',
}

/**
 * Input configuration to gather or arrange a list in their proper sequence. You can set filtering,sorting,paginating arguments for more specification.
 * This configuration applied on queries with a prefixed name of `list*`
 */
export type ListCourseCollateInput = {
  filter?: InputMaybe<CourseFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<CourseSortingByFieldInput>;
};

/**
 * Input configuration to gather or arrange a list in their proper sequence. You can set filtering,sorting,paginating arguments for more specification.
 * This configuration applied on queries with a prefixed name of `list*`
 */
export type ListPostCollateInput = {
  filter?: InputMaybe<PostFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<PostSortingByFieldInput>;
};

/**
 * Input configuration to gather or arrange a list in their proper sequence. You can set filtering,sorting,paginating arguments for more specification.
 * This configuration applied on queries with a prefixed name of `list*`
 */
export type ListTagCollateInput = {
  filter?: InputMaybe<FilterTagInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortTagByFieldInput>;
};

/**
 * Input configuration to gather or arrange a list in their proper sequence. You can set filtering,sorting,paginating arguments for more specification.
 * This configuration applied on queries with a prefixed name of `list*`
 */
export type ListUsersCollateInput = {
  filter?: InputMaybe<UsersFilterInput>;
  page?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortingByFieldInput>;
};

export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  forgotPassword?: Maybe<Message>;
  githubLogin?: Maybe<Auth>;
  /** Set user access to forbidden. User in this case should reset their password to reactivate and change password. */
  invalidateUserToken?: Maybe<Message>;
  mutator?: Maybe<Mutator>;
  resetPassword?: Maybe<Message>;
  signup?: Maybe<Message>;
  updateAuthorization?: Maybe<Authorization>;
  updateUser?: Maybe<User>;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['EmailAddress'];
};

export type MutationGithubLoginArgs = {
  code: Scalars['ID'];
};

export type MutationInvalidateUserTokenArgs = {
  userId: Scalars['ID'];
};

export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type MutationSignupArgs = {
  input: SignupInput;
};

export type MutationUpdateAuthorizationArgs = {
  input: AuthorizationInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Mutator = {
  __typename?: 'Mutator';
  about?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isSuper?: Maybe<Scalars['Boolean']>;
  occupation?: Maybe<Scalars['String']>;
  upsertCourse?: Maybe<Course>;
  upsertPost?: Maybe<Post>;
  upsertTag?: Maybe<Tag>;
  userActionsAsJson: Scalars['String'];
};

export type MutatorUpsertCourseArgs = {
  input: UpsertCourseInput;
};

export type MutatorUpsertPostArgs = {
  input: UpsertPostInput;
};

export type MutatorUpsertTagArgs = {
  input: UpsertTagInput;
};

/**
 * Pagination input config. An object of `page`, `size` properties is required to apply pagination.
 *
 * Minimum number for `page` is 1.
 *
 * Min number for `size` is 10.
 *
 * Max number for `size` is 50.
 */
export type PaginationInput = {
  number: Scalars['PositiveInt'];
  size: Scalars['PositiveInt'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  isPremium?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<LanguageEnum>;
  metaTags?: Maybe<PostMetaTags>;
  nanoId?: Maybe<Scalars['String']>;
  nextPostId?: Maybe<Scalars['ID']>;
  postImage?: Maybe<Scalars['String']>;
  prevPostId?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['Date']>;
  readingTime?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  type?: Maybe<PostTypeEnum>;
  updatedAt?: Maybe<Scalars['Date']>;
  visibility?: Maybe<Scalars['Boolean']>;
};

/** Filtering configuration by fields. */
export type PostFilterInput = {
  _and?: InputMaybe<Array<InputMaybe<PostFilterInput>>>;
  _eq?: InputMaybe<PostFilterInput>;
  _gt?: InputMaybe<PostFilterInput>;
  _gte?: InputMaybe<PostFilterInput>;
  _in?: InputMaybe<Array<InputMaybe<PostFilterInput>>>;
  _lt?: InputMaybe<PostFilterInput>;
  _lte?: InputMaybe<PostFilterInput>;
  _neq?: InputMaybe<PostFilterInput>;
  _nin?: InputMaybe<Array<InputMaybe<PostFilterInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PostFilterInput>>>;
  authorId?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lang?: InputMaybe<LanguageEnum>;
  nanoId?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostTypeEnum>;
  updatedAt?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['Boolean']>;
};

export type PostMetaTags = {
  __typename?: 'PostMetaTags';
  description?: Maybe<Scalars['String']>;
  injectCssStyle?: Maybe<Scalars['String']>;
  injectHeader?: Maybe<Scalars['String']>;
};

export type PostMetaTagsInput = {
  description?: InputMaybe<Scalars['String']>;
  injectCssStyle?: InputMaybe<Scalars['String']>;
  injectHeader?: InputMaybe<Scalars['String']>;
};

/** Single sorting configuration by field name and direction. An object of `key` `direction` properties is required when applying for sorting. */
export type PostSortingByFieldInput = {
  createdAt?: InputMaybe<SortingEnum>;
  id?: InputMaybe<SortingEnum>;
  isPremium?: InputMaybe<SortingEnum>;
  lang?: InputMaybe<SortingEnum>;
  publishedAt?: InputMaybe<SortingEnum>;
  slug?: InputMaybe<SortingEnum>;
  updatedAt?: InputMaybe<SortingEnum>;
  visibility?: InputMaybe<SortingEnum>;
};

export enum PostTypeEnum {
  Course = 'COURSE',
  Post = 'Post',
}

export type Querier = {
  __typename?: 'Querier';
  about?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isSuper?: Maybe<Scalars['Boolean']>;
  listCoursePosts?: Maybe<Array<Maybe<Post>>>;
  listPosts?: Maybe<Array<Maybe<Post>>>;
  listPremiumCourses?: Maybe<Array<Maybe<Course>>>;
  listTags?: Maybe<Array<Maybe<Tag>>>;
  occupation?: Maybe<Scalars['String']>;
  userActionsAsJson: Scalars['String'];
};

export type QuerierListCoursePostsArgs = {
  input?: InputMaybe<ListCourseCollateInput>;
};

export type QuerierListPostsArgs = {
  input?: InputMaybe<ListPostCollateInput>;
};

export type QuerierListPremiumCoursesArgs = {
  input?: InputMaybe<ListCourseCollateInput>;
};

export type QuerierListTagsArgs = {
  input?: InputMaybe<ListTagCollateInput>;
};

export type Query = {
  __typename?: 'Query';
  clearTokens?: Maybe<Message>;
  createTokens?: Maybe<Auth>;
  getUser?: Maybe<User>;
  getUserAuthorization?: Maybe<Authorization>;
  listCourses?: Maybe<Array<Maybe<Course>>>;
  listPosts?: Maybe<Array<Maybe<Post>>>;
  listUsers?: Maybe<Array<Maybe<User>>>;
  querier?: Maybe<Querier>;
  refreshTokens?: Maybe<Auth>;
  verifyMe?: Maybe<User>;
};

export type QueryCreateTokensArgs = {
  input: AuthInput;
};

export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type QueryGetUserAuthorizationArgs = {
  id: Scalars['ID'];
};

export type QueryListCoursesArgs = {
  input?: InputMaybe<ListCourseCollateInput>;
};

export type QueryListPostsArgs = {
  input?: InputMaybe<ListPostCollateInput>;
};

export type QueryListUsersArgs = {
  input?: InputMaybe<ListUsersCollateInput>;
};

export type ResetPasswordInput = {
  newPassword: Scalars['Password'];
  userId: Scalars['ID'];
  verificationId: Scalars['ID'];
};

export type SignupInput = {
  email: Scalars['EmailAddress'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['Password'];
};

export type SortTagByFieldInput = {
  createdAt?: InputMaybe<SortingEnum>;
  description?: InputMaybe<SortingEnum>;
  id?: InputMaybe<SortingEnum>;
  name?: InputMaybe<SortingEnum>;
  updatedAt?: InputMaybe<SortingEnum>;
  visibility?: InputMaybe<SortingEnum>;
};

/** Single sorting configuration by field name and direction. An object of `key` `direction` properties is required when applying for sorting. */
export type SortingByFieldInput = {
  createdAt?: InputMaybe<SortingEnum>;
  email?: InputMaybe<SortingEnum>;
  firstName?: InputMaybe<SortingEnum>;
  gender?: InputMaybe<SortingEnum>;
  id?: InputMaybe<SortingEnum>;
  lastName?: InputMaybe<SortingEnum>;
  updatedAt?: InputMaybe<SortingEnum>;
};

export enum SortingEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  imgSrc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  visibility?: Maybe<Scalars['Boolean']>;
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpsertCourseInput = {
  accessedByUserIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  authorId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lang?: InputMaybe<LanguageEnum>;
  postIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['Date']>;
  slug?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  visibility?: InputMaybe<Scalars['Boolean']>;
};

export type UpsertPostInput = {
  authorId?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lang?: InputMaybe<LanguageEnum>;
  metaTags?: InputMaybe<PostMetaTagsInput>;
  postImage?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<PostTypeEnum>;
  visibility?: InputMaybe<Scalars['Boolean']>;
};

export type UpsertTagInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  imgSrc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['Boolean']>;
};

/** User data model */
export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']>;
  address?: Maybe<UserAddress>;
  authorization?: Maybe<Authorization>;
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['EmailAddress']>;
  gender?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  isSuper?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Username>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type UserAction = {
  __typename?: 'UserAction';
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** User address data model */
export type UserAddress = {
  __typename?: 'UserAddress';
  city?: Maybe<Scalars['String']>;
  house?: Maybe<Scalars['String']>;
  lane?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  subdivision?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** Username data model */
export type Username = {
  __typename?: 'Username';
  first?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['String']>;
};

export type UsernameInput = {
  first?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['String']>;
};

/** Filtering configuration by fields. */
export type UsersFilterInput = {
  _and?: InputMaybe<Array<InputMaybe<UsersFilterInput>>>;
  _eq?: InputMaybe<UsersFilterInput>;
  _gt?: InputMaybe<UsersFilterInput>;
  _gte?: InputMaybe<UsersFilterInput>;
  _in?: InputMaybe<Array<InputMaybe<UsersFilterInput>>>;
  _lt?: InputMaybe<UsersFilterInput>;
  _lte?: InputMaybe<UsersFilterInput>;
  _neq?: InputMaybe<UsersFilterInput>;
  _nin?: InputMaybe<Array<InputMaybe<UsersFilterInput>>>;
  _or?: InputMaybe<Array<InputMaybe<UsersFilterInput>>>;
  createAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<UsernameInput>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type ClearTokensQueryVariables = Exact<{[key: string]: never}>;

export type ClearTokensQuery = {
  __typename?: 'Query';
  clearTokens?: {__typename?: 'Message'; message?: string | null} | null;
};

export type CreateTokensQueryVariables = Exact<{
  email: Scalars['EmailAddress'];
  password: Scalars['Password'];
  rememberMe?: InputMaybe<Scalars['Boolean']>;
}>;

export type CreateTokensQuery = {
  __typename?: 'Query';
  createTokens?: {
    __typename?: 'Auth';
    accessToken: string;
    refreshToken: string;
    accessTokenExpire?: number | null;
    refreshTokenExpire?: number | null;
  } | null;
};

export type GithubLoginMutationVariables = Exact<{
  code: Scalars['ID'];
}>;

export type GithubLoginMutation = {
  __typename?: 'Mutation';
  githubLogin?: {
    __typename?: 'Auth';
    accessToken: string;
    refreshToken: string;
    accessTokenExpire?: number | null;
    refreshTokenExpire?: number | null;
  } | null;
};

export type ListPostsQueryVariables = Exact<{
  input?: InputMaybe<ListPostCollateInput>;
}>;

export type ListPostsQuery = {
  __typename?: 'Query';
  listPosts?: Array<{
    __typename?: 'Post';
    id?: string | null;
    slug?: string | null;
    nanoId?: string | null;
    postImage?: string | null;
    authorId?: string | null;
    body?: string | null;
    readingTime?: string | null;
    isPremium?: boolean | null;
    lang?: LanguageEnum | null;
    visibility?: boolean | null;
    publishedAt?: Date | null;
    tagIds?: Array<string | null> | null;
    prevPostId?: string | null;
    nextPostId?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    author?: {
      __typename?: 'User';
      email?: any | null;
      avatar?: string | null;
      name?: {
        __typename?: 'Username';
        first?: string | null;
        last?: string | null;
      } | null;
    } | null;
    metaTags?: {
      __typename?: 'PostMetaTags';
      description?: string | null;
      injectCssStyle?: string | null;
      injectHeader?: string | null;
    } | null;
    tags?: Array<{
      __typename?: 'Tag';
      id?: string | null;
      imgSrc?: string | null;
      name?: string | null;
      description?: string | null;
    } | null> | null;
  } | null> | null;
};

export type RefreshTokensQueryVariables = Exact<{[key: string]: never}>;

export type RefreshTokensQuery = {
  __typename?: 'Query';
  refreshTokens?: {
    __typename?: 'Auth';
    accessToken: string;
    refreshToken: string;
    accessTokenExpire?: number | null;
    refreshTokenExpire?: number | null;
  } | null;
};

export type VerifyMeQueryVariables = Exact<{[key: string]: never}>;

export type VerifyMeQuery = {
  __typename?: 'Query';
  verifyMe?: {
    __typename?: 'User';
    id: string;
    avatar?: string | null;
    name?: {
      __typename?: 'Username';
      first?: string | null;
      last?: string | null;
    } | null;
    authorization?: {
      __typename?: 'Authorization';
      id?: string | null;
      actions?: Array<{
        __typename?: 'UserAction';
        name?: string | null;
        permissions?: Array<string | null> | null;
      } | null> | null;
    } | null;
  } | null;
};

export const ClearTokensDocument = gql`
  query ClearTokens {
    clearTokens {
      message
    }
  }
`;

/**
 * __useClearTokensQuery__
 *
 * To run a query within a React component, call `useClearTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useClearTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClearTokensQuery({
 *   variables: {
 *   },
 * });
 */
export function useClearTokensQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ClearTokensQuery,
    ClearTokensQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ClearTokensQuery, ClearTokensQueryVariables>(
    ClearTokensDocument,
    options
  );
}
export function useClearTokensLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ClearTokensQuery,
    ClearTokensQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<ClearTokensQuery, ClearTokensQueryVariables>(
    ClearTokensDocument,
    options
  );
}
export type ClearTokensQueryHookResult = ReturnType<typeof useClearTokensQuery>;
export type ClearTokensLazyQueryHookResult = ReturnType<
  typeof useClearTokensLazyQuery
>;
export type ClearTokensQueryResult = Apollo.QueryResult<
  ClearTokensQuery,
  ClearTokensQueryVariables
>;
export const CreateTokensDocument = gql`
  query CreateTokens(
    $email: EmailAddress!
    $password: Password!
    $rememberMe: Boolean
  ) {
    createTokens(
      input: {email: $email, password: $password, rememberMe: $rememberMe}
    ) {
      accessToken
      refreshToken
      accessTokenExpire
      refreshTokenExpire
    }
  }
`;

/**
 * __useCreateTokensQuery__
 *
 * To run a query within a React component, call `useCreateTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreateTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreateTokensQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      rememberMe: // value for 'rememberMe'
 *   },
 * });
 */
export function useCreateTokensQuery(
  baseOptions: Apollo.QueryHookOptions<
    CreateTokensQuery,
    CreateTokensQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<CreateTokensQuery, CreateTokensQueryVariables>(
    CreateTokensDocument,
    options
  );
}
export function useCreateTokensLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CreateTokensQuery,
    CreateTokensQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<CreateTokensQuery, CreateTokensQueryVariables>(
    CreateTokensDocument,
    options
  );
}
export type CreateTokensQueryHookResult = ReturnType<
  typeof useCreateTokensQuery
>;
export type CreateTokensLazyQueryHookResult = ReturnType<
  typeof useCreateTokensLazyQuery
>;
export type CreateTokensQueryResult = Apollo.QueryResult<
  CreateTokensQuery,
  CreateTokensQueryVariables
>;
export const GithubLoginDocument = gql`
  mutation GithubLogin($code: ID!) {
    githubLogin(code: $code) {
      accessToken
      refreshToken
      accessTokenExpire
      refreshTokenExpire
    }
  }
`;
export type GithubLoginMutationFn = Apollo.MutationFunction<
  GithubLoginMutation,
  GithubLoginMutationVariables
>;

/**
 * __useGithubLoginMutation__
 *
 * To run a mutation, you first call `useGithubLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGithubLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [githubLoginMutation, { data, loading, error }] = useGithubLoginMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGithubLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GithubLoginMutation,
    GithubLoginMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<GithubLoginMutation, GithubLoginMutationVariables>(
    GithubLoginDocument,
    options
  );
}
export type GithubLoginMutationHookResult = ReturnType<
  typeof useGithubLoginMutation
>;
export type GithubLoginMutationResult =
  Apollo.MutationResult<GithubLoginMutation>;
export type GithubLoginMutationOptions = Apollo.BaseMutationOptions<
  GithubLoginMutation,
  GithubLoginMutationVariables
>;
export const ListPostsDocument = gql`
  query ListPosts($input: ListPostCollateInput) {
    listPosts(input: $input) {
      id
      slug
      nanoId
      postImage
      authorId
      author {
        email
        avatar
        name {
          first
          last
        }
      }
      body
      readingTime
      isPremium
      lang
      visibility
      publishedAt
      metaTags {
        description
        injectCssStyle
        injectHeader
      }
      tagIds
      tags {
        id
        imgSrc
        name
        description
      }
      prevPostId
      nextPostId
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useListPostsQuery__
 *
 * To run a query within a React component, call `useListPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPostsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<ListPostsQuery, ListPostsQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ListPostsQuery, ListPostsQueryVariables>(
    ListPostsDocument,
    options
  );
}
export function useListPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListPostsQuery,
    ListPostsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<ListPostsQuery, ListPostsQueryVariables>(
    ListPostsDocument,
    options
  );
}
export type ListPostsQueryHookResult = ReturnType<typeof useListPostsQuery>;
export type ListPostsLazyQueryHookResult = ReturnType<
  typeof useListPostsLazyQuery
>;
export type ListPostsQueryResult = Apollo.QueryResult<
  ListPostsQuery,
  ListPostsQueryVariables
>;
export const RefreshTokensDocument = gql`
  query RefreshTokens {
    refreshTokens {
      accessToken
      refreshToken
      accessTokenExpire
      refreshTokenExpire
    }
  }
`;

/**
 * __useRefreshTokensQuery__
 *
 * To run a query within a React component, call `useRefreshTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRefreshTokensQuery({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokensQuery(
  baseOptions?: Apollo.QueryHookOptions<
    RefreshTokensQuery,
    RefreshTokensQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<RefreshTokensQuery, RefreshTokensQueryVariables>(
    RefreshTokensDocument,
    options
  );
}
export function useRefreshTokensLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RefreshTokensQuery,
    RefreshTokensQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<RefreshTokensQuery, RefreshTokensQueryVariables>(
    RefreshTokensDocument,
    options
  );
}
export type RefreshTokensQueryHookResult = ReturnType<
  typeof useRefreshTokensQuery
>;
export type RefreshTokensLazyQueryHookResult = ReturnType<
  typeof useRefreshTokensLazyQuery
>;
export type RefreshTokensQueryResult = Apollo.QueryResult<
  RefreshTokensQuery,
  RefreshTokensQueryVariables
>;
export const VerifyMeDocument = gql`
  query VerifyMe {
    verifyMe {
      id
      avatar
      name {
        first
        last
      }
      authorization {
        id
        actions {
          name
          permissions
        }
      }
    }
  }
`;

/**
 * __useVerifyMeQuery__
 *
 * To run a query within a React component, call `useVerifyMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useVerifyMeQuery(
  baseOptions?: Apollo.QueryHookOptions<VerifyMeQuery, VerifyMeQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<VerifyMeQuery, VerifyMeQueryVariables>(
    VerifyMeDocument,
    options
  );
}
export function useVerifyMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    VerifyMeQuery,
    VerifyMeQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<VerifyMeQuery, VerifyMeQueryVariables>(
    VerifyMeDocument,
    options
  );
}
export type VerifyMeQueryHookResult = ReturnType<typeof useVerifyMeQuery>;
export type VerifyMeLazyQueryHookResult = ReturnType<
  typeof useVerifyMeLazyQuery
>;
export type VerifyMeQueryResult = Apollo.QueryResult<
  VerifyMeQuery,
  VerifyMeQueryVariables
>;
