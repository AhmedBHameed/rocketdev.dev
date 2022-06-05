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
  id?: InputMaybe<Scalars['ID']>;
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
  Ar = 'ar',
  En = 'en',
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
  /** Set user access to forbidden. User in this case should reset their password to reactivate and change password. */
  invalidateUserToken?: Maybe<Message>;
  mutator?: Maybe<Mutator>;
  resetPassword?: Maybe<Message>;
  signup?: Maybe<Message>;
  updateUser?: Maybe<User>;
  upsertAuthorization?: Maybe<Authorization>;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['EmailAddress'];
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

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationUpsertAuthorizationArgs = {
  input: AuthorizationInput;
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

/** Pagination data model */
export type Pagination = {
  __typename?: 'Pagination';
  number?: Maybe<Scalars['PositiveInt']>;
  size?: Maybe<Scalars['PositiveInt']>;
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
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  isPremium?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<LanguageEnum>;
  nanoId?: Maybe<Scalars['String']>;
  nextPostId?: Maybe<Scalars['ID']>;
  postContentIds: Array<Maybe<Scalars['ID']>>;
  postContents?: Maybe<Array<Maybe<PostContent>>>;
  prevPostId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  type?: Maybe<PostTypeEnum>;
  updatedAt?: Maybe<Scalars['Date']>;
  visibility?: Maybe<Scalars['Boolean']>;
};

export type PostPostContentsArgs = {
  lang?: InputMaybe<LanguageEnum>;
};

export type PostContent = {
  __typename?: 'PostContent';
  body?: Maybe<Scalars['String']>;
  contentPreview?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  lang?: Maybe<LanguageEnum>;
  metaTags?: Maybe<PostMetaTags>;
  postImage?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  readingTime?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type PostContentInput = {
  body?: InputMaybe<Scalars['String']>;
  contentPreview?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lang?: InputMaybe<LanguageEnum>;
  metaTags?: InputMaybe<PostMetaTagsInput>;
  postImage?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['Date']>;
  readingTime?: InputMaybe<Scalars['String']>;
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
  nanoId?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<PostTypeEnum>;
  updatedAt?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Scalars['Boolean']>;
};

/** Get single post */
export type PostInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
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

export type PostResponse = {
  __typename?: 'PostResponse';
  data?: Maybe<Array<Maybe<Post>>>;
  page?: Maybe<Pagination>;
  totalCount?: Maybe<Scalars['Int']>;
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
  Article = 'ARTICLE',
  Course = 'COURSE',
}

export type Querier = {
  __typename?: 'Querier';
  about?: Maybe<Scalars['String']>;
  getCourse?: Maybe<Course>;
  id: Scalars['ID'];
  isSuper?: Maybe<Scalars['Boolean']>;
  listCoursePosts?: Maybe<Array<Maybe<Post>>>;
  /** List all posts. */
  listPosts?: Maybe<PostResponse>;
  listTags?: Maybe<Array<Maybe<Tag>>>;
  occupation?: Maybe<Scalars['String']>;
  userActionsAsJson: Scalars['String'];
};

export type QuerierGetCourseArgs = {
  id: Scalars['String'];
};

export type QuerierListCoursePostsArgs = {
  ids: Array<Scalars['String']>;
};

export type QuerierListPostsArgs = {
  input?: InputMaybe<ListPostCollateInput>;
};

export type QuerierListTagsArgs = {
  input?: InputMaybe<ListTagCollateInput>;
};

export type Query = {
  __typename?: 'Query';
  clearTokens?: Maybe<Message>;
  createTokens?: Maybe<Auth>;
  getPost?: Maybe<Post>;
  getUser?: Maybe<User>;
  getUserAuthorization?: Maybe<Authorization>;
  githubLogin?: Maybe<Auth>;
  listCourses?: Maybe<Array<Maybe<Course>>>;
  /** List public posts with type of ARTICLE. Post with type of 'COURSE' will be excluded. */
  listPosts?: Maybe<PostResponse>;
  listUsers?: Maybe<Array<Maybe<User>>>;
  querier?: Maybe<Querier>;
  refreshTokens?: Maybe<Auth>;
  verifyMe?: Maybe<User>;
};

export type QueryCreateTokensArgs = {
  input: AuthInput;
};

export type QueryGetPostArgs = {
  input: PostInput;
};

export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type QueryGetUserAuthorizationArgs = {
  id: Scalars['ID'];
};

export type QueryGithubLoginArgs = {
  code: Scalars['ID'];
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
  contentPreview?: InputMaybe<Scalars['String']>;
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

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
}>;

export type ForgotPasswordMutation = {
  __typename?: 'Mutation';
  forgotPassword?: {__typename?: 'Message'; message?: string | null} | null;
};

export type GetPostQueryVariables = Exact<{
  input: PostInput;
  lang?: InputMaybe<LanguageEnum>;
}>;

export type GetPostQuery = {
  __typename?: 'Query';
  getPost?: {
    __typename?: 'Post';
    id?: string | null;
    slug?: string | null;
    nanoId?: string | null;
    authorId?: string | null;
    isPremium?: boolean | null;
    visibility?: boolean | null;
    tagIds?: Array<string | null> | null;
    prevPostId?: string | null;
    nextPostId?: string | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    postContents?: Array<{
      __typename?: 'PostContent';
      id?: string | null;
      postImage?: string | null;
      lang?: LanguageEnum | null;
      body?: string | null;
      contentPreview?: string | null;
      readingTime?: string | null;
      publishedAt?: Date | null;
      createdAt?: Date | null;
      updatedAt?: Date | null;
      metaTags?: {
        __typename?: 'PostMetaTags';
        injectHeader?: string | null;
        injectCssStyle?: string | null;
        description?: string | null;
      } | null;
    } | null> | null;
    tags?: Array<{
      __typename?: 'Tag';
      id?: string | null;
      imgSrc?: string | null;
      name?: string | null;
      description?: string | null;
    } | null> | null;
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
  } | null;
};

export type GithubLoginQueryVariables = Exact<{
  code: Scalars['ID'];
}>;

export type GithubLoginQuery = {
  __typename?: 'Query';
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
  lang?: InputMaybe<LanguageEnum>;
}>;

export type ListPostsQuery = {
  __typename?: 'Query';
  listPosts?: {
    __typename?: 'PostResponse';
    totalCount?: number | null;
    data?: Array<{
      __typename?: 'Post';
      id?: string | null;
      slug?: string | null;
      nanoId?: string | null;
      authorId?: string | null;
      isPremium?: boolean | null;
      visibility?: boolean | null;
      tagIds?: Array<string | null> | null;
      prevPostId?: string | null;
      nextPostId?: string | null;
      createdAt?: Date | null;
      updatedAt?: Date | null;
      postContents?: Array<{
        __typename?: 'PostContent';
        postImage?: string | null;
        lang?: LanguageEnum | null;
        contentPreview?: string | null;
        readingTime?: string | null;
        publishedAt?: Date | null;
        createdAt?: Date | null;
        updatedAt?: Date | null;
        metaTags?: {
          __typename?: 'PostMetaTags';
          injectHeader?: string | null;
          injectCssStyle?: string | null;
          description?: string | null;
        } | null;
      } | null> | null;
      tags?: Array<{
        __typename?: 'Tag';
        id?: string | null;
        imgSrc?: string | null;
        name?: string | null;
        description?: string | null;
      } | null> | null;
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
    } | null> | null;
    page?: {
      __typename?: 'Pagination';
      number?: any | null;
      size?: any | null;
    } | null;
  } | null;
};

export type ListCoursesQueryVariables = Exact<{
  input: ListCourseCollateInput;
}>;

export type ListCoursesQuery = {
  __typename?: 'Query';
  listCourses?: Array<{
    __typename?: 'Course';
    id?: string | null;
    slug?: string | null;
    tagIds?: Array<string | null> | null;
    visibility?: boolean | null;
    image?: string | null;
    isPremium?: boolean | null;
    lang?: LanguageEnum | null;
    postIds?: Array<string | null> | null;
    publishedAt?: Date | null;
    accessedByUserIds?: Array<string | null> | null;
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
  } | null> | null;
};

export type ListUsersQueryVariables = Exact<{
  input: ListUsersCollateInput;
}>;

export type ListUsersQuery = {
  __typename?: 'Query';
  listUsers?: Array<{
    __typename?: 'User';
    id: string;
    email?: any | null;
    avatar?: string | null;
    gender?: string | null;
    about?: string | null;
    githubUrl?: string | null;
    isActive?: boolean | null;
    isSuper?: boolean | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    name?: {
      __typename?: 'Username';
      first?: string | null;
      last?: string | null;
    } | null;
    authorization?: {
      __typename?: 'Authorization';
      id?: string | null;
      userId?: string | null;
      createdAt?: Date | null;
      updatedAt?: Date | null;
      actions?: Array<{
        __typename?: 'UserAction';
        name?: string | null;
        permissions?: Array<string | null> | null;
      } | null> | null;
    } | null;
    address?: {
      __typename?: 'UserAddress';
      state?: string | null;
      city?: string | null;
      street?: string | null;
      subdivision?: string | null;
      lane?: string | null;
      house?: string | null;
      zip?: string | null;
    } | null;
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

export type SignupMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['EmailAddress'];
  password: Scalars['Password'];
}>;

export type SignupMutation = {
  __typename?: 'Mutation';
  signup?: {__typename?: 'Message'; message?: string | null} | null;
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

export type ListQuerierCoursePostsQueryVariables = Exact<{
  ids: Array<Scalars['String']> | Scalars['String'];
}>;

export type ListQuerierCoursePostsQuery = {
  __typename?: 'Query';
  querier?: {
    __typename?: 'Querier';
    listCoursePosts?: Array<{
      __typename?: 'Post';
      id?: string | null;
      slug?: string | null;
      nanoId?: string | null;
      lang?: LanguageEnum | null;
      isPremium?: boolean | null;
      type?: PostTypeEnum | null;
      visibility?: boolean | null;
      nextPostId?: string | null;
      prevPostId?: string | null;
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
      tags?: Array<{
        __typename?: 'Tag';
        id?: string | null;
        name?: string | null;
        imgSrc?: string | null;
        description?: string | null;
      } | null> | null;
      postContents?: Array<{
        __typename?: 'PostContent';
        id?: string | null;
        postImage?: string | null;
        lang?: LanguageEnum | null;
        body?: string | null;
        contentPreview?: string | null;
        readingTime?: string | null;
        publishedAt?: Date | null;
        createdAt?: Date | null;
        updatedAt?: Date | null;
        metaTags?: {
          __typename?: 'PostMetaTags';
          injectHeader?: string | null;
          injectCssStyle?: string | null;
          description?: string | null;
        } | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type ListQuerierPostsQueryVariables = Exact<{
  input: ListPostCollateInput;
}>;

export type ListQuerierPostsQuery = {
  __typename?: 'Query';
  querier?: {
    __typename?: 'Querier';
    listPosts?: {
      __typename?: 'PostResponse';
      totalCount?: number | null;
      data?: Array<{
        __typename?: 'Post';
        id?: string | null;
        slug?: string | null;
        nanoId?: string | null;
        lang?: LanguageEnum | null;
        isPremium?: boolean | null;
        type?: PostTypeEnum | null;
        visibility?: boolean | null;
        nextPostId?: string | null;
        prevPostId?: string | null;
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
        tags?: Array<{
          __typename?: 'Tag';
          id?: string | null;
          name?: string | null;
          imgSrc?: string | null;
          description?: string | null;
        } | null> | null;
        postContents?: Array<{
          __typename?: 'PostContent';
          id?: string | null;
          postImage?: string | null;
          lang?: LanguageEnum | null;
          body?: string | null;
          contentPreview?: string | null;
          readingTime?: string | null;
          publishedAt?: Date | null;
          createdAt?: Date | null;
          updatedAt?: Date | null;
          metaTags?: {
            __typename?: 'PostMetaTags';
            injectHeader?: string | null;
            injectCssStyle?: string | null;
            description?: string | null;
          } | null;
        } | null> | null;
      } | null> | null;
      page?: {
        __typename?: 'Pagination';
        number?: any | null;
        size?: any | null;
      } | null;
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
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: EmailAddress!) {
    forgotPassword(email: $email) {
      message
    }
  }
`;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, options);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
export type ForgotPasswordMutationResult =
  Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export const GetPostDocument = gql`
  query GetPost($input: PostInput!, $lang: LanguageEnum) {
    getPost(input: $input) {
      id
      slug
      nanoId
      authorId
      isPremium
      visibility
      tagIds
      postContents(lang: $lang) {
        id
        postImage
        lang
        body
        contentPreview
        readingTime
        metaTags {
          injectHeader
          injectCssStyle
          description
        }
        publishedAt
        createdAt
        updatedAt
      }
      tags {
        id
        imgSrc
        name
        description
      }
      author {
        email
        avatar
        name {
          first
          last
        }
      }
      prevPostId
      nextPostId
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      input: // value for 'input'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useGetPostQuery(
  baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    options
  );
}
export function useGetPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(
    GetPostDocument,
    options
  );
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<
  GetPostQuery,
  GetPostQueryVariables
>;
export const GithubLoginDocument = gql`
  query GithubLogin($code: ID!) {
    githubLogin(code: $code) {
      accessToken
      refreshToken
      accessTokenExpire
      refreshTokenExpire
    }
  }
`;

/**
 * __useGithubLoginQuery__
 *
 * To run a query within a React component, call `useGithubLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useGithubLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGithubLoginQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGithubLoginQuery(
  baseOptions: Apollo.QueryHookOptions<
    GithubLoginQuery,
    GithubLoginQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GithubLoginQuery, GithubLoginQueryVariables>(
    GithubLoginDocument,
    options
  );
}
export function useGithubLoginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GithubLoginQuery,
    GithubLoginQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GithubLoginQuery, GithubLoginQueryVariables>(
    GithubLoginDocument,
    options
  );
}
export type GithubLoginQueryHookResult = ReturnType<typeof useGithubLoginQuery>;
export type GithubLoginLazyQueryHookResult = ReturnType<
  typeof useGithubLoginLazyQuery
>;
export type GithubLoginQueryResult = Apollo.QueryResult<
  GithubLoginQuery,
  GithubLoginQueryVariables
>;
export const ListPostsDocument = gql`
  query ListPosts($input: ListPostCollateInput, $lang: LanguageEnum) {
    listPosts(input: $input) {
      data {
        id
        slug
        nanoId
        authorId
        isPremium
        visibility
        tagIds
        postContents(lang: $lang) {
          postImage
          lang
          contentPreview
          readingTime
          metaTags {
            injectHeader
            injectCssStyle
            description
          }
          publishedAt
          createdAt
          updatedAt
        }
        tags {
          id
          imgSrc
          name
          description
        }
        author {
          email
          avatar
          name {
            first
            last
          }
        }
        prevPostId
        nextPostId
        createdAt
        updatedAt
      }
      totalCount
      page {
        number
        size
      }
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
 *      lang: // value for 'lang'
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
export const ListCoursesDocument = gql`
  query ListCourses($input: ListCourseCollateInput!) {
    listCourses(input: $input) {
      id
      slug
      author {
        email
        avatar
        name {
          first
          last
        }
      }
      tagIds
      visibility
      image
      isPremium
      lang
      postIds
      publishedAt
      accessedByUserIds
    }
  }
`;

/**
 * __useListCoursesQuery__
 *
 * To run a query within a React component, call `useListCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCoursesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListCoursesQuery(
  baseOptions: Apollo.QueryHookOptions<
    ListCoursesQuery,
    ListCoursesQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ListCoursesQuery, ListCoursesQueryVariables>(
    ListCoursesDocument,
    options
  );
}
export function useListCoursesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListCoursesQuery,
    ListCoursesQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<ListCoursesQuery, ListCoursesQueryVariables>(
    ListCoursesDocument,
    options
  );
}
export type ListCoursesQueryHookResult = ReturnType<typeof useListCoursesQuery>;
export type ListCoursesLazyQueryHookResult = ReturnType<
  typeof useListCoursesLazyQuery
>;
export type ListCoursesQueryResult = Apollo.QueryResult<
  ListCoursesQuery,
  ListCoursesQueryVariables
>;
export const ListUsersDocument = gql`
  query ListUsers($input: ListUsersCollateInput!) {
    listUsers(input: $input) {
      id
      name {
        first
        last
      }
      email
      avatar
      gender
      authorization {
        id
        userId
        actions {
          name
          permissions
        }
        createdAt
        updatedAt
      }
      about
      githubUrl
      isActive
      isSuper
      address {
        state
        city
        street
        subdivision
        lane
        house
        zip
      }
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListUsersQuery(
  baseOptions: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ListUsersQuery, ListUsersQueryVariables>(
    ListUsersDocument,
    options
  );
}
export function useListUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListUsersQuery,
    ListUsersQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(
    ListUsersDocument,
    options
  );
}
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<
  typeof useListUsersLazyQuery
>;
export type ListUsersQueryResult = Apollo.QueryResult<
  ListUsersQuery,
  ListUsersQueryVariables
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
export const SignupDocument = gql`
  mutation Signup(
    $firstName: String!
    $lastName: String!
    $email: EmailAddress!
    $password: Password!
  ) {
    signup(
      input: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        password: $password
      }
    ) {
      message
    }
  }
`;
export type SignupMutationFn = Apollo.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    options
  );
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
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
export const ListQuerierCoursePostsDocument = gql`
  query ListQuerierCoursePosts($ids: [String!]!) {
    querier {
      listCoursePosts(ids: $ids) {
        id
        slug
        nanoId
        lang
        isPremium
        type
        visibility
        author {
          email
          avatar
          name {
            first
            last
          }
        }
        tags {
          id
          name
          imgSrc
          description
        }
        postContents {
          id
          postImage
          lang
          body
          contentPreview
          readingTime
          metaTags {
            injectHeader
            injectCssStyle
            description
          }
          publishedAt
          createdAt
          updatedAt
        }
        nextPostId
        prevPostId
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useListQuerierCoursePostsQuery__
 *
 * To run a query within a React component, call `useListQuerierCoursePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListQuerierCoursePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListQuerierCoursePostsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useListQuerierCoursePostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ListQuerierCoursePostsQuery,
    ListQuerierCoursePostsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    ListQuerierCoursePostsQuery,
    ListQuerierCoursePostsQueryVariables
  >(ListQuerierCoursePostsDocument, options);
}
export function useListQuerierCoursePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListQuerierCoursePostsQuery,
    ListQuerierCoursePostsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    ListQuerierCoursePostsQuery,
    ListQuerierCoursePostsQueryVariables
  >(ListQuerierCoursePostsDocument, options);
}
export type ListQuerierCoursePostsQueryHookResult = ReturnType<
  typeof useListQuerierCoursePostsQuery
>;
export type ListQuerierCoursePostsLazyQueryHookResult = ReturnType<
  typeof useListQuerierCoursePostsLazyQuery
>;
export type ListQuerierCoursePostsQueryResult = Apollo.QueryResult<
  ListQuerierCoursePostsQuery,
  ListQuerierCoursePostsQueryVariables
>;
export const ListQuerierPostsDocument = gql`
  query ListQuerierPosts($input: ListPostCollateInput!) {
    querier {
      listPosts(input: $input) {
        data {
          id
          slug
          nanoId
          lang
          isPremium
          type
          visibility
          author {
            email
            avatar
            name {
              first
              last
            }
          }
          tags {
            id
            name
            imgSrc
            description
          }
          postContents {
            id
            postImage
            lang
            body
            contentPreview
            readingTime
            metaTags {
              injectHeader
              injectCssStyle
              description
            }
            publishedAt
            createdAt
            updatedAt
          }
          nextPostId
          prevPostId
          createdAt
          updatedAt
        }
        totalCount
        page {
          number
          size
        }
      }
    }
  }
`;

/**
 * __useListQuerierPostsQuery__
 *
 * To run a query within a React component, call `useListQuerierPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListQuerierPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListQuerierPostsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListQuerierPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ListQuerierPostsQuery,
    ListQuerierPostsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ListQuerierPostsQuery, ListQuerierPostsQueryVariables>(
    ListQuerierPostsDocument,
    options
  );
}
export function useListQuerierPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListQuerierPostsQuery,
    ListQuerierPostsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    ListQuerierPostsQuery,
    ListQuerierPostsQueryVariables
  >(ListQuerierPostsDocument, options);
}
export type ListQuerierPostsQueryHookResult = ReturnType<
  typeof useListQuerierPostsQuery
>;
export type ListQuerierPostsLazyQueryHookResult = ReturnType<
  typeof useListQuerierPostsLazyQuery
>;
export type ListQuerierPostsQueryResult = Apollo.QueryResult<
  ListQuerierPostsQuery,
  ListQuerierPostsQueryVariables
>;
