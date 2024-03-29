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
  Date: Date;
  EmailAddress: any;
  Password: any;
  PositiveInt: any;
  RequiredString: any;
};

export type ActionInput = {
  name?: InputMaybe<Scalars['RequiredString']>;
  permissions?: InputMaybe<Array<Scalars['RequiredString']>>;
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
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  courseId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  isPremium?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<LanguageEnum>;
  nanoId?: Maybe<Scalars['String']>;
  postIds: Array<Maybe<Scalars['ID']>>;
  publishedAt?: Maybe<Scalars['Date']>;
  slug?: Maybe<Scalars['String']>;
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  visibility?: Maybe<Scalars['Boolean']>;
};

export type CourseContentsInput = {
  courseId: Scalars['String'];
  slug: Scalars['String'];
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

export type Feedback = {
  __typename?: 'Feedback';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  resolved?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

/** Filtering configuration by fields. */
export type FeedbackFilterInput = {
  _and?: InputMaybe<Array<InputMaybe<FeedbackFilterInput>>>;
  _eq?: InputMaybe<FeedbackFilterInput>;
  _gt?: InputMaybe<FeedbackFilterInput>;
  _gte?: InputMaybe<FeedbackFilterInput>;
  _in?: InputMaybe<Array<InputMaybe<FeedbackFilterInput>>>;
  _lt?: InputMaybe<FeedbackFilterInput>;
  _lte?: InputMaybe<FeedbackFilterInput>;
  _neq?: InputMaybe<FeedbackFilterInput>;
  _nin?: InputMaybe<Array<InputMaybe<FeedbackFilterInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FeedbackFilterInput>>>;
  authorId?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  message?: InputMaybe<Scalars['String']>;
  resolved?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Date']>;
};

export type FeedbackInput = {
  id: Scalars['ID'];
  message: Scalars['String'];
  resolved?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
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

export type GetPremiumPostInput = {
  nanoId: Scalars['ID'];
  postId?: InputMaybe<Scalars['ID']>;
  slug: Scalars['String'];
};

export enum LanguageEnum {
  Ar = 'ar',
  En = 'en',
}

export type Message = {
  __typename?: 'Message';
  message?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateUserAccount?: Maybe<Message>;
  createUser?: Maybe<User>;
  deleteUser?: Maybe<Message>;
  forgotPassword?: Maybe<Message>;
  invalidateUserToken?: Maybe<Message>;
  mutator?: Maybe<Mutator>;
  resetPassword?: Maybe<Message>;
  signup?: Maybe<Message>;
  updateUser?: Maybe<User>;
  upsertAuthorization?: Maybe<Authorization>;
};

export type MutationActivateUserAccountArgs = {
  hash: Scalars['String'];
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
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
  createFeedback?: Maybe<Feedback>;
  deleteCourse?: Maybe<Course>;
  deletePost?: Maybe<Post>;
  id: Scalars['ID'];
  isSuper?: Maybe<Scalars['Boolean']>;
  occupation?: Maybe<Scalars['String']>;
  updateFeedback?: Maybe<Feedback>;
  upsertCourse?: Maybe<Course>;
  upsertPost?: Maybe<Post>;
  upsertPostContent?: Maybe<PostContent>;
  upsertTag?: Maybe<Tag>;
  userActionsAsJson: Scalars['String'];
};

export type MutatorCreateFeedbackArgs = {
  input: FeedbackInput;
};

export type MutatorDeleteCourseArgs = {
  id: Scalars['ID'];
};

export type MutatorDeletePostArgs = {
  id: Scalars['ID'];
};

export type MutatorUpdateFeedbackArgs = {
  input: FeedbackInput;
};

export type MutatorUpsertCourseArgs = {
  input: UpsertCourseInput;
};

export type MutatorUpsertPostArgs = {
  input: UpsertPostInput;
};

export type MutatorUpsertPostContentArgs = {
  input: UpsertPostContentInput;
  postId: Scalars['ID'];
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
  accessedByUserIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  courseId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  groupName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isPremium?: Maybe<Scalars['Boolean']>;
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
  headLines?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  message?: InputMaybe<SortingEnum>;
  resolved?: InputMaybe<SortingEnum>;
  title?: InputMaybe<SortingEnum>;
  updatedAt?: InputMaybe<SortingEnum>;
};

export enum PostTypeEnum {
  Article = 'ARTICLE',
  Course = 'COURSE',
}

export type Querier = {
  __typename?: 'Querier';
  about?: Maybe<Scalars['String']>;
  getPostById?: Maybe<Post>;
  getPremiumPost?: Maybe<Post>;
  id: Scalars['ID'];
  isSuper?: Maybe<Scalars['Boolean']>;
  listCoursePosts?: Maybe<Array<Maybe<Post>>>;
  listFeedback?: Maybe<Array<Maybe<Feedback>>>;
  listPosts?: Maybe<Array<Maybe<Post>>>;
  listTags?: Maybe<Array<Maybe<Tag>>>;
  occupation?: Maybe<Scalars['String']>;
  totalFeedback?: Maybe<Scalars['Int']>;
  totalFreeArticles?: Maybe<Scalars['Int']>;
  totalPosts?: Maybe<Scalars['Int']>;
  totalTags?: Maybe<Scalars['Int']>;
  userActionsAsJson: Scalars['String'];
};

export type QuerierGetPostByIdArgs = {
  id: Scalars['ID'];
};

export type QuerierGetPremiumPostArgs = {
  input: GetPremiumPostInput;
};

export type QuerierListCoursePostsArgs = {
  courseId: Scalars['ID'];
};

export type QuerierListFeedbackArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QuerierListPostsArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QuerierListTagsArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  clearTokens?: Maybe<Message>;
  createTokens?: Maybe<Auth>;
  getCourse?: Maybe<Course>;
  getCourseContents?: Maybe<Array<Maybe<Post>>>;
  getPublicPost?: Maybe<Post>;
  getUser?: Maybe<User>;
  getUserAuthorization?: Maybe<Authorization>;
  githubLogin?: Maybe<Auth>;
  listCourses?: Maybe<Array<Maybe<Course>>>;
  listPublicPosts?: Maybe<Array<Maybe<Post>>>;
  listUsers?: Maybe<Array<Maybe<User>>>;
  querier?: Maybe<Querier>;
  refreshTokens?: Maybe<Auth>;
  totalCourses?: Maybe<Scalars['Int']>;
  totalFreeArticles?: Maybe<Scalars['Int']>;
  totalPosts?: Maybe<Scalars['Int']>;
  verifyMe?: Maybe<User>;
};

export type QueryCreateTokensArgs = {
  input: AuthInput;
};

export type QueryGetCourseArgs = {
  courseId: Scalars['String'];
};

export type QueryGetCourseContentsArgs = {
  courseId: Scalars['ID'];
};

export type QueryGetPublicPostArgs = {
  nanoId: Scalars['ID'];
  slug: Scalars['String'];
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
  query?: InputMaybe<Scalars['String']>;
};

export type QueryListPublicPostsArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type QueryListUsersArgs = {
  query?: InputMaybe<Scalars['String']>;
};

export type ResetPasswordInput = {
  hash: Scalars['String'];
  newPassword: Scalars['Password'];
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
  color?: Maybe<Scalars['String']>;
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
  email?: InputMaybe<Scalars['EmailAddress']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpsertCourseInput = {
  authorId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  isPremium?: InputMaybe<Scalars['Boolean']>;
  lang?: InputMaybe<LanguageEnum>;
  nanoId?: InputMaybe<Scalars['String']>;
  postIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['Date']>;
  slug?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  visibility?: InputMaybe<Scalars['Boolean']>;
};

export type UpsertPostContentInput = {
  body?: InputMaybe<Scalars['String']>;
  contentPreview?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lang?: InputMaybe<LanguageEnum>;
  metaTags?: InputMaybe<PostMetaTagsInput>;
  postImage?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['Date']>;
  readingTime?: InputMaybe<Scalars['String']>;
};

export type UpsertPostInput = {
  accessedByUserIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  authorId?: InputMaybe<Scalars['String']>;
  courseId?: InputMaybe<Scalars['ID']>;
  groupName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isPremium?: InputMaybe<Scalars['Boolean']>;
  nanoId?: InputMaybe<Scalars['String']>;
  nextPostId?: InputMaybe<Scalars['ID']>;
  postContentIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  prevPostId?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<PostTypeEnum>;
  visibility?: InputMaybe<Scalars['Boolean']>;
};

export type UpsertTagInput = {
  color?: InputMaybe<Scalars['String']>;
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
  lastSeenAt?: Maybe<Scalars['Date']>;
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

export type GetCourseContentsQueryVariables = Exact<{
  courseId: Scalars['ID'];
  lang?: InputMaybe<LanguageEnum>;
}>;

export type GetCourseContentsQuery = {
  __typename?: 'Query';
  getCourseContents?: Array<{
    __typename?: 'Post';
    id?: string | null;
    slug?: string | null;
    groupName?: string | null;
    nanoId?: string | null;
    isPremium?: boolean | null;
    postContents?: Array<{
      __typename?: 'PostContent';
      id?: string | null;
      headLines?: Array<string | null> | null;
      postImage?: string | null;
      lang?: LanguageEnum | null;
      contentPreview?: string | null;
      readingTime?: string | null;
    } | null> | null;
  } | null> | null;
};

export type GetPublicPostQueryVariables = Exact<{
  nanoId: Scalars['ID'];
  slug: Scalars['String'];
  lang?: InputMaybe<LanguageEnum>;
}>;

export type GetPublicPostQuery = {
  __typename?: 'Query';
  getPublicPost?: {
    __typename?: 'Post';
    id?: string | null;
    slug?: string | null;
    nanoId?: string | null;
    groupName?: string | null;
    authorId?: string | null;
    isPremium?: boolean | null;
    visibility?: boolean | null;
    tagIds?: Array<string | null> | null;
    courseId?: string | null;
    type?: PostTypeEnum | null;
    prevPostId?: string | null;
    nextPostId?: string | null;
    accessedByUserIds?: Array<string | null> | null;
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
      color?: string | null;
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

export type ListCoursesQueryVariables = Exact<{
  query: Scalars['String'];
}>;

export type ListCoursesQuery = {
  __typename?: 'Query';
  totalCourses?: number | null;
  listCourses?: Array<{
    __typename?: 'Course';
    id?: string | null;
    slug?: string | null;
    description?: string | null;
    nanoId?: string | null;
    visibility?: boolean | null;
    image?: string | null;
    isPremium?: boolean | null;
    lang?: LanguageEnum | null;
    postIds: Array<string | null>;
    publishedAt?: Date | null;
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
      imgSrc?: string | null;
      name?: string | null;
      description?: string | null;
      color?: string | null;
    } | null> | null;
  } | null> | null;
};

export type ListPublicPostsQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
  lang?: InputMaybe<LanguageEnum>;
}>;

export type ListPublicPostsQuery = {
  __typename?: 'Query';
  totalFreeArticles?: number | null;
  listPublicPosts?: Array<{
    __typename?: 'Post';
    id?: string | null;
    slug?: string | null;
    nanoId?: string | null;
    groupName?: string | null;
    authorId?: string | null;
    isPremium?: boolean | null;
    visibility?: boolean | null;
    tagIds?: Array<string | null> | null;
    courseId?: string | null;
    type?: PostTypeEnum | null;
    prevPostId?: string | null;
    nextPostId?: string | null;
    accessedByUserIds?: Array<string | null> | null;
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
      color?: string | null;
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
};

export type ListUsersQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
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
    lastSeenAt?: Date | null;
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

export type ResetPasswordMutationVariables = Exact<{
  input: ResetPasswordInput;
}>;

export type ResetPasswordMutation = {
  __typename?: 'Mutation';
  resetPassword?: {__typename?: 'Message'; message?: string | null} | null;
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
    isSuper?: boolean | null;
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

export type CreateFeedbackMutationVariables = Exact<{
  input: FeedbackInput;
}>;

export type CreateFeedbackMutation = {
  __typename?: 'Mutation';
  mutator?: {
    __typename?: 'Mutator';
    createFeedback?: {
      __typename?: 'Feedback';
      id?: string | null;
      title?: string | null;
      message?: string | null;
      resolved?: boolean | null;
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
    } | null;
  } | null;
};

export type FeedbackFragmentFragment = {
  __typename?: 'Feedback';
  id?: string | null;
  title?: string | null;
  message?: string | null;
  resolved?: boolean | null;
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
};

export type UpdateFeedbackMutationVariables = Exact<{
  input: FeedbackInput;
}>;

export type UpdateFeedbackMutation = {
  __typename?: 'Mutation';
  mutator?: {
    __typename?: 'Mutator';
    updateFeedback?: {
      __typename?: 'Feedback';
      id?: string | null;
      title?: string | null;
      message?: string | null;
      resolved?: boolean | null;
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
    } | null;
  } | null;
};

export type AuthorFragmentFragment = {
  __typename?: 'User';
  email?: any | null;
  avatar?: string | null;
  name?: {
    __typename?: 'Username';
    first?: string | null;
    last?: string | null;
  } | null;
};

export type CourseFragmentFragment = {
  __typename?: 'Course';
  id?: string | null;
  slug?: string | null;
  description?: string | null;
  nanoId?: string | null;
  visibility?: boolean | null;
  image?: string | null;
  isPremium?: boolean | null;
  lang?: LanguageEnum | null;
  postIds: Array<string | null>;
  publishedAt?: Date | null;
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
    imgSrc?: string | null;
    name?: string | null;
    description?: string | null;
    color?: string | null;
  } | null> | null;
};

export type QuerierPostFragmentFragment = {
  __typename?: 'Post';
  id?: string | null;
  slug?: string | null;
  isPremium?: boolean | null;
  groupName?: string | null;
  prevPostId?: string | null;
  nextPostId?: string | null;
  accessedByUserIds?: Array<string | null> | null;
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
    color?: string | null;
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
};

export type PostFragmentFragment = {
  __typename?: 'Post';
  id?: string | null;
  slug?: string | null;
  nanoId?: string | null;
  groupName?: string | null;
  authorId?: string | null;
  isPremium?: boolean | null;
  visibility?: boolean | null;
  tagIds?: Array<string | null> | null;
  courseId?: string | null;
  type?: PostTypeEnum | null;
  prevPostId?: string | null;
  nextPostId?: string | null;
  accessedByUserIds?: Array<string | null> | null;
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
    color?: string | null;
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
};

export type TagFragmentFragment = {
  __typename?: 'Tag';
  id?: string | null;
  imgSrc?: string | null;
  name?: string | null;
  description?: string | null;
  color?: string | null;
};

export type ActivateUserAccountMutationVariables = Exact<{
  hash: Scalars['String'];
}>;

export type ActivateUserAccountMutation = {
  __typename?: 'Mutation';
  activateUserAccount?: {
    __typename?: 'Message';
    message?: string | null;
  } | null;
};

export type DeleteCourseMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteCourseMutation = {
  __typename?: 'Mutation';
  mutator?: {
    __typename?: 'Mutator';
    deleteCourse?: {__typename?: 'Course'; id?: string | null} | null;
  } | null;
};

export type DeletePostMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeletePostMutation = {
  __typename?: 'Mutation';
  mutator?: {
    __typename?: 'Mutator';
    deletePost?: {__typename?: 'Post'; id?: string | null} | null;
  } | null;
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type DeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUser?: {__typename?: 'Message'; message?: string | null} | null;
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser?: {
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
  } | null;
};

export type UpsertAuthorizationMutationVariables = Exact<{
  input: AuthorizationInput;
}>;

export type UpsertAuthorizationMutation = {
  __typename?: 'Mutation';
  upsertAuthorization?: {
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
};

export type UpsertCourseMutationVariables = Exact<{
  input: UpsertCourseInput;
}>;

export type UpsertCourseMutation = {
  __typename?: 'Mutation';
  mutator?: {
    __typename?: 'Mutator';
    upsertCourse?: {
      __typename?: 'Course';
      id?: string | null;
      slug?: string | null;
      description?: string | null;
      nanoId?: string | null;
      visibility?: boolean | null;
      image?: string | null;
      isPremium?: boolean | null;
      lang?: LanguageEnum | null;
      postIds: Array<string | null>;
      publishedAt?: Date | null;
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
        imgSrc?: string | null;
        name?: string | null;
        description?: string | null;
        color?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UpsertPostMutationVariables = Exact<{
  input: UpsertPostInput;
  lang?: InputMaybe<LanguageEnum>;
}>;

export type UpsertPostMutation = {
  __typename?: 'Mutation';
  mutator?: {
    __typename?: 'Mutator';
    upsertPost?: {
      __typename?: 'Post';
      id?: string | null;
      slug?: string | null;
      nanoId?: string | null;
      groupName?: string | null;
      authorId?: string | null;
      isPremium?: boolean | null;
      visibility?: boolean | null;
      tagIds?: Array<string | null> | null;
      courseId?: string | null;
      type?: PostTypeEnum | null;
      prevPostId?: string | null;
      nextPostId?: string | null;
      accessedByUserIds?: Array<string | null> | null;
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
        color?: string | null;
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
  } | null;
};

export type UpsertPostContentMutationVariables = Exact<{
  postId: Scalars['ID'];
  input: UpsertPostContentInput;
}>;

export type UpsertPostContentMutation = {
  __typename?: 'Mutation';
  mutator?: {
    __typename?: 'Mutator';
    upsertPostContent?: {
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
    } | null;
  } | null;
};

export type UpsertTagMutationVariables = Exact<{
  input: UpsertTagInput;
}>;

export type UpsertTagMutation = {
  __typename?: 'Mutation';
  mutator?: {
    __typename?: 'Mutator';
    upsertTag?: {
      __typename?: 'Tag';
      id?: string | null;
      name?: string | null;
      imgSrc?: string | null;
      description?: string | null;
      visibility?: boolean | null;
      color?: string | null;
      createdAt?: Date | null;
      updatedAt?: Date | null;
    } | null;
  } | null;
};

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['ID'];
  lang?: InputMaybe<LanguageEnum>;
}>;

export type GetPostByIdQuery = {
  __typename?: 'Query';
  querier?: {
    __typename?: 'Querier';
    getPostById?: {
      __typename?: 'Post';
      id?: string | null;
      slug?: string | null;
      nanoId?: string | null;
      groupName?: string | null;
      authorId?: string | null;
      isPremium?: boolean | null;
      visibility?: boolean | null;
      tagIds?: Array<string | null> | null;
      courseId?: string | null;
      type?: PostTypeEnum | null;
      prevPostId?: string | null;
      nextPostId?: string | null;
      accessedByUserIds?: Array<string | null> | null;
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
        color?: string | null;
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
  } | null;
};

export type GetPremiumPostQueryVariables = Exact<{
  input: GetPremiumPostInput;
  lang?: InputMaybe<LanguageEnum>;
}>;

export type GetPremiumPostQuery = {
  __typename?: 'Query';
  querier?: {
    __typename?: 'Querier';
    getPremiumPost?: {
      __typename?: 'Post';
      id?: string | null;
      slug?: string | null;
      nanoId?: string | null;
      groupName?: string | null;
      authorId?: string | null;
      isPremium?: boolean | null;
      visibility?: boolean | null;
      tagIds?: Array<string | null> | null;
      courseId?: string | null;
      type?: PostTypeEnum | null;
      prevPostId?: string | null;
      nextPostId?: string | null;
      accessedByUserIds?: Array<string | null> | null;
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
        color?: string | null;
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
  } | null;
};

export type ListQuerierCoursePostsQueryVariables = Exact<{
  courseId: Scalars['ID'];
  lang?: InputMaybe<LanguageEnum>;
}>;

export type ListQuerierCoursePostsQuery = {
  __typename?: 'Query';
  querier?: {
    __typename?: 'Querier';
    listCoursePosts?: Array<{
      __typename?: 'Post';
      id?: string | null;
      slug?: string | null;
      isPremium?: boolean | null;
      groupName?: string | null;
      prevPostId?: string | null;
      nextPostId?: string | null;
      accessedByUserIds?: Array<string | null> | null;
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
        color?: string | null;
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
  } | null;
};

export type ListQuerierFeedbackQueryVariables = Exact<{
  query: Scalars['String'];
}>;

export type ListQuerierFeedbackQuery = {
  __typename?: 'Query';
  querier?: {
    __typename?: 'Querier';
    totalFeedback?: number | null;
    listFeedback?: Array<{
      __typename?: 'Feedback';
      id?: string | null;
      title?: string | null;
      message?: string | null;
      resolved?: boolean | null;
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
    } | null> | null;
  } | null;
};

export type ListQuerierPostsQueryVariables = Exact<{
  query: Scalars['String'];
  lang?: InputMaybe<LanguageEnum>;
}>;

export type ListQuerierPostsQuery = {
  __typename?: 'Query';
  querier?: {
    __typename?: 'Querier';
    totalPosts?: number | null;
    listPosts?: Array<{
      __typename?: 'Post';
      id?: string | null;
      slug?: string | null;
      nanoId?: string | null;
      groupName?: string | null;
      authorId?: string | null;
      isPremium?: boolean | null;
      visibility?: boolean | null;
      tagIds?: Array<string | null> | null;
      courseId?: string | null;
      type?: PostTypeEnum | null;
      prevPostId?: string | null;
      nextPostId?: string | null;
      accessedByUserIds?: Array<string | null> | null;
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
        color?: string | null;
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
  } | null;
};

export type ListQuerierTagsQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
}>;

export type ListQuerierTagsQuery = {
  __typename?: 'Query';
  querier?: {
    __typename?: 'Querier';
    totalTags?: number | null;
    listTags?: Array<{
      __typename?: 'Tag';
      id?: string | null;
      name?: string | null;
      imgSrc?: string | null;
      description?: string | null;
      visibility?: boolean | null;
      color?: string | null;
      createdAt?: Date | null;
      updatedAt?: Date | null;
    } | null> | null;
  } | null;
};

export const AuthorFragmentFragmentDoc = gql`
  fragment authorFragment on User {
    email
    avatar
    name {
      first
      last
    }
  }
`;
export const FeedbackFragmentFragmentDoc = gql`
  fragment feedbackFragment on Feedback {
    id
    title
    message
    author {
      ...authorFragment
    }
    resolved
    createdAt
    updatedAt
  }
  ${AuthorFragmentFragmentDoc}
`;
export const TagFragmentFragmentDoc = gql`
  fragment tagFragment on Tag {
    id
    imgSrc
    name
    description
    color
  }
`;
export const CourseFragmentFragmentDoc = gql`
  fragment courseFragment on Course {
    id
    slug
    description
    nanoId
    author {
      ...authorFragment
    }
    tags {
      ...tagFragment
    }
    visibility
    image
    isPremium
    lang
    postIds
    publishedAt
  }
  ${AuthorFragmentFragmentDoc}
  ${TagFragmentFragmentDoc}
`;
export const QuerierPostFragmentFragmentDoc = gql`
  fragment querierPostFragment on Post {
    id
    slug
    isPremium
    groupName
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
      ...tagFragment
    }
    author {
      ...authorFragment
    }
    prevPostId
    nextPostId
    accessedByUserIds
    createdAt
    updatedAt
  }
  ${TagFragmentFragmentDoc}
  ${AuthorFragmentFragmentDoc}
`;
export const PostFragmentFragmentDoc = gql`
  fragment postFragment on Post {
    id
    slug
    nanoId
    groupName
    authorId
    isPremium
    visibility
    tagIds
    courseId
    type
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
    courseId
    tags {
      ...tagFragment
    }
    author {
      ...authorFragment
    }
    prevPostId
    nextPostId
    accessedByUserIds
    createdAt
    updatedAt
  }
  ${TagFragmentFragmentDoc}
  ${AuthorFragmentFragmentDoc}
`;
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
export const GetCourseContentsDocument = gql`
  query GetCourseContents($courseId: ID!, $lang: LanguageEnum) {
    getCourseContents(courseId: $courseId) {
      id
      slug
      groupName
      nanoId
      isPremium
      postContents(lang: $lang) {
        id
        headLines
        postImage
        lang
        contentPreview
        readingTime
      }
    }
  }
`;

/**
 * __useGetCourseContentsQuery__
 *
 * To run a query within a React component, call `useGetCourseContentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseContentsQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useGetCourseContentsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCourseContentsQuery,
    GetCourseContentsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    GetCourseContentsQuery,
    GetCourseContentsQueryVariables
  >(GetCourseContentsDocument, options);
}
export function useGetCourseContentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCourseContentsQuery,
    GetCourseContentsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    GetCourseContentsQuery,
    GetCourseContentsQueryVariables
  >(GetCourseContentsDocument, options);
}
export type GetCourseContentsQueryHookResult = ReturnType<
  typeof useGetCourseContentsQuery
>;
export type GetCourseContentsLazyQueryHookResult = ReturnType<
  typeof useGetCourseContentsLazyQuery
>;
export type GetCourseContentsQueryResult = Apollo.QueryResult<
  GetCourseContentsQuery,
  GetCourseContentsQueryVariables
>;
export const GetPublicPostDocument = gql`
  query GetPublicPost($nanoId: ID!, $slug: String!, $lang: LanguageEnum) {
    getPublicPost(nanoId: $nanoId, slug: $slug) {
      ...postFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useGetPublicPostQuery__
 *
 * To run a query within a React component, call `useGetPublicPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicPostQuery({
 *   variables: {
 *      nanoId: // value for 'nanoId'
 *      slug: // value for 'slug'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useGetPublicPostQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPublicPostQuery,
    GetPublicPostQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetPublicPostQuery, GetPublicPostQueryVariables>(
    GetPublicPostDocument,
    options
  );
}
export function useGetPublicPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPublicPostQuery,
    GetPublicPostQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetPublicPostQuery, GetPublicPostQueryVariables>(
    GetPublicPostDocument,
    options
  );
}
export type GetPublicPostQueryHookResult = ReturnType<
  typeof useGetPublicPostQuery
>;
export type GetPublicPostLazyQueryHookResult = ReturnType<
  typeof useGetPublicPostLazyQuery
>;
export type GetPublicPostQueryResult = Apollo.QueryResult<
  GetPublicPostQuery,
  GetPublicPostQueryVariables
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
export const ListCoursesDocument = gql`
  query ListCourses($query: String!) {
    totalCourses
    listCourses(query: $query) {
      ...courseFragment
    }
  }
  ${CourseFragmentFragmentDoc}
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
 *      query: // value for 'query'
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
export const ListPublicPostsDocument = gql`
  query ListPublicPosts($query: String, $lang: LanguageEnum) {
    totalFreeArticles
    listPublicPosts(query: $query) {
      ...postFragment
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useListPublicPostsQuery__
 *
 * To run a query within a React component, call `useListPublicPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPublicPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPublicPostsQuery({
 *   variables: {
 *      query: // value for 'query'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useListPublicPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListPublicPostsQuery,
    ListPublicPostsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ListPublicPostsQuery, ListPublicPostsQueryVariables>(
    ListPublicPostsDocument,
    options
  );
}
export function useListPublicPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListPublicPostsQuery,
    ListPublicPostsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    ListPublicPostsQuery,
    ListPublicPostsQueryVariables
  >(ListPublicPostsDocument, options);
}
export type ListPublicPostsQueryHookResult = ReturnType<
  typeof useListPublicPostsQuery
>;
export type ListPublicPostsLazyQueryHookResult = ReturnType<
  typeof useListPublicPostsLazyQuery
>;
export type ListPublicPostsQueryResult = Apollo.QueryResult<
  ListPublicPostsQuery,
  ListPublicPostsQueryVariables
>;
export const ListUsersDocument = gql`
  query ListUsers($query: String) {
    listUsers(query: $query) {
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
      lastSeenAt
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
 *      query: // value for 'query'
 *   },
 * });
 */
export function useListUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>
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
export const ResetPasswordDocument = gql`
  mutation ResetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      message
    }
  }
`;
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, options);
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>;
export type ResetPasswordMutationResult =
  Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
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
      isSuper
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
export const CreateFeedbackDocument = gql`
  mutation CreateFeedback($input: FeedbackInput!) {
    mutator {
      createFeedback(input: $input) {
        ...feedbackFragment
      }
    }
  }
  ${FeedbackFragmentFragmentDoc}
`;
export type CreateFeedbackMutationFn = Apollo.MutationFunction<
  CreateFeedbackMutation,
  CreateFeedbackMutationVariables
>;

/**
 * __useCreateFeedbackMutation__
 *
 * To run a mutation, you first call `useCreateFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFeedbackMutation, { data, loading, error }] = useCreateFeedbackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFeedbackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateFeedbackMutation,
    CreateFeedbackMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    CreateFeedbackMutation,
    CreateFeedbackMutationVariables
  >(CreateFeedbackDocument, options);
}
export type CreateFeedbackMutationHookResult = ReturnType<
  typeof useCreateFeedbackMutation
>;
export type CreateFeedbackMutationResult =
  Apollo.MutationResult<CreateFeedbackMutation>;
export type CreateFeedbackMutationOptions = Apollo.BaseMutationOptions<
  CreateFeedbackMutation,
  CreateFeedbackMutationVariables
>;
export const UpdateFeedbackDocument = gql`
  mutation updateFeedback($input: FeedbackInput!) {
    mutator {
      updateFeedback(input: $input) {
        ...feedbackFragment
      }
    }
  }
  ${FeedbackFragmentFragmentDoc}
`;
export type UpdateFeedbackMutationFn = Apollo.MutationFunction<
  UpdateFeedbackMutation,
  UpdateFeedbackMutationVariables
>;

/**
 * __useUpdateFeedbackMutation__
 *
 * To run a mutation, you first call `useUpdateFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFeedbackMutation, { data, loading, error }] = useUpdateFeedbackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFeedbackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateFeedbackMutation,
    UpdateFeedbackMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    UpdateFeedbackMutation,
    UpdateFeedbackMutationVariables
  >(UpdateFeedbackDocument, options);
}
export type UpdateFeedbackMutationHookResult = ReturnType<
  typeof useUpdateFeedbackMutation
>;
export type UpdateFeedbackMutationResult =
  Apollo.MutationResult<UpdateFeedbackMutation>;
export type UpdateFeedbackMutationOptions = Apollo.BaseMutationOptions<
  UpdateFeedbackMutation,
  UpdateFeedbackMutationVariables
>;
export const ActivateUserAccountDocument = gql`
  mutation ActivateUserAccount($hash: String!) {
    activateUserAccount(hash: $hash) {
      message
    }
  }
`;
export type ActivateUserAccountMutationFn = Apollo.MutationFunction<
  ActivateUserAccountMutation,
  ActivateUserAccountMutationVariables
>;

/**
 * __useActivateUserAccountMutation__
 *
 * To run a mutation, you first call `useActivateUserAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateUserAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateUserAccountMutation, { data, loading, error }] = useActivateUserAccountMutation({
 *   variables: {
 *      hash: // value for 'hash'
 *   },
 * });
 */
export function useActivateUserAccountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ActivateUserAccountMutation,
    ActivateUserAccountMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    ActivateUserAccountMutation,
    ActivateUserAccountMutationVariables
  >(ActivateUserAccountDocument, options);
}
export type ActivateUserAccountMutationHookResult = ReturnType<
  typeof useActivateUserAccountMutation
>;
export type ActivateUserAccountMutationResult =
  Apollo.MutationResult<ActivateUserAccountMutation>;
export type ActivateUserAccountMutationOptions = Apollo.BaseMutationOptions<
  ActivateUserAccountMutation,
  ActivateUserAccountMutationVariables
>;
export const DeleteCourseDocument = gql`
  mutation DeleteCourse($id: ID!) {
    mutator {
      deleteCourse(id: $id) {
        id
      }
    }
  }
`;
export type DeleteCourseMutationFn = Apollo.MutationFunction<
  DeleteCourseMutation,
  DeleteCourseMutationVariables
>;

/**
 * __useDeleteCourseMutation__
 *
 * To run a mutation, you first call `useDeleteCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCourseMutation, { data, loading, error }] = useDeleteCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCourseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCourseMutation,
    DeleteCourseMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    DeleteCourseMutation,
    DeleteCourseMutationVariables
  >(DeleteCourseDocument, options);
}
export type DeleteCourseMutationHookResult = ReturnType<
  typeof useDeleteCourseMutation
>;
export type DeleteCourseMutationResult =
  Apollo.MutationResult<DeleteCourseMutation>;
export type DeleteCourseMutationOptions = Apollo.BaseMutationOptions<
  DeleteCourseMutation,
  DeleteCourseMutationVariables
>;
export const DeletePostDocument = gql`
  mutation DeletePost($id: ID!) {
    mutator {
      deletePost(id: $id) {
        id
      }
    }
  }
`;
export type DeletePostMutationFn = Apollo.MutationFunction<
  DeletePostMutation,
  DeletePostMutationVariables
>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePostMutation,
    DeletePostMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(
    DeletePostDocument,
    options
  );
}
export type DeletePostMutationHookResult = ReturnType<
  typeof useDeletePostMutation
>;
export type DeletePostMutationResult =
  Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<
  DeletePostMutation,
  DeletePostMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult =
  Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
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
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const UpsertAuthorizationDocument = gql`
  mutation UpsertAuthorization($input: AuthorizationInput!) {
    upsertAuthorization(input: $input) {
      id
      userId
      actions {
        name
        permissions
      }
      createdAt
      updatedAt
    }
  }
`;
export type UpsertAuthorizationMutationFn = Apollo.MutationFunction<
  UpsertAuthorizationMutation,
  UpsertAuthorizationMutationVariables
>;

/**
 * __useUpsertAuthorizationMutation__
 *
 * To run a mutation, you first call `useUpsertAuthorizationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertAuthorizationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertAuthorizationMutation, { data, loading, error }] = useUpsertAuthorizationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertAuthorizationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertAuthorizationMutation,
    UpsertAuthorizationMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    UpsertAuthorizationMutation,
    UpsertAuthorizationMutationVariables
  >(UpsertAuthorizationDocument, options);
}
export type UpsertAuthorizationMutationHookResult = ReturnType<
  typeof useUpsertAuthorizationMutation
>;
export type UpsertAuthorizationMutationResult =
  Apollo.MutationResult<UpsertAuthorizationMutation>;
export type UpsertAuthorizationMutationOptions = Apollo.BaseMutationOptions<
  UpsertAuthorizationMutation,
  UpsertAuthorizationMutationVariables
>;
export const UpsertCourseDocument = gql`
  mutation UpsertCourse($input: UpsertCourseInput!) {
    mutator {
      upsertCourse(input: $input) {
        ...courseFragment
      }
    }
  }
  ${CourseFragmentFragmentDoc}
`;
export type UpsertCourseMutationFn = Apollo.MutationFunction<
  UpsertCourseMutation,
  UpsertCourseMutationVariables
>;

/**
 * __useUpsertCourseMutation__
 *
 * To run a mutation, you first call `useUpsertCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertCourseMutation, { data, loading, error }] = useUpsertCourseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertCourseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertCourseMutation,
    UpsertCourseMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    UpsertCourseMutation,
    UpsertCourseMutationVariables
  >(UpsertCourseDocument, options);
}
export type UpsertCourseMutationHookResult = ReturnType<
  typeof useUpsertCourseMutation
>;
export type UpsertCourseMutationResult =
  Apollo.MutationResult<UpsertCourseMutation>;
export type UpsertCourseMutationOptions = Apollo.BaseMutationOptions<
  UpsertCourseMutation,
  UpsertCourseMutationVariables
>;
export const UpsertPostDocument = gql`
  mutation UpsertPost($input: UpsertPostInput!, $lang: LanguageEnum) {
    mutator {
      upsertPost(input: $input) {
        ...postFragment
      }
    }
  }
  ${PostFragmentFragmentDoc}
`;
export type UpsertPostMutationFn = Apollo.MutationFunction<
  UpsertPostMutation,
  UpsertPostMutationVariables
>;

/**
 * __useUpsertPostMutation__
 *
 * To run a mutation, you first call `useUpsertPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertPostMutation, { data, loading, error }] = useUpsertPostMutation({
 *   variables: {
 *      input: // value for 'input'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useUpsertPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertPostMutation,
    UpsertPostMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<UpsertPostMutation, UpsertPostMutationVariables>(
    UpsertPostDocument,
    options
  );
}
export type UpsertPostMutationHookResult = ReturnType<
  typeof useUpsertPostMutation
>;
export type UpsertPostMutationResult =
  Apollo.MutationResult<UpsertPostMutation>;
export type UpsertPostMutationOptions = Apollo.BaseMutationOptions<
  UpsertPostMutation,
  UpsertPostMutationVariables
>;
export const UpsertPostContentDocument = gql`
  mutation UpsertPostContent($postId: ID!, $input: UpsertPostContentInput!) {
    mutator {
      upsertPostContent(postId: $postId, input: $input) {
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
    }
  }
`;
export type UpsertPostContentMutationFn = Apollo.MutationFunction<
  UpsertPostContentMutation,
  UpsertPostContentMutationVariables
>;

/**
 * __useUpsertPostContentMutation__
 *
 * To run a mutation, you first call `useUpsertPostContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertPostContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertPostContentMutation, { data, loading, error }] = useUpsertPostContentMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertPostContentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertPostContentMutation,
    UpsertPostContentMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    UpsertPostContentMutation,
    UpsertPostContentMutationVariables
  >(UpsertPostContentDocument, options);
}
export type UpsertPostContentMutationHookResult = ReturnType<
  typeof useUpsertPostContentMutation
>;
export type UpsertPostContentMutationResult =
  Apollo.MutationResult<UpsertPostContentMutation>;
export type UpsertPostContentMutationOptions = Apollo.BaseMutationOptions<
  UpsertPostContentMutation,
  UpsertPostContentMutationVariables
>;
export const UpsertTagDocument = gql`
  mutation UpsertTag($input: UpsertTagInput!) {
    mutator {
      upsertTag(input: $input) {
        id
        name
        imgSrc
        description
        visibility
        color
        createdAt
        updatedAt
      }
    }
  }
`;
export type UpsertTagMutationFn = Apollo.MutationFunction<
  UpsertTagMutation,
  UpsertTagMutationVariables
>;

/**
 * __useUpsertTagMutation__
 *
 * To run a mutation, you first call `useUpsertTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertTagMutation, { data, loading, error }] = useUpsertTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpsertTagMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpsertTagMutation,
    UpsertTagMutationVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<UpsertTagMutation, UpsertTagMutationVariables>(
    UpsertTagDocument,
    options
  );
}
export type UpsertTagMutationHookResult = ReturnType<
  typeof useUpsertTagMutation
>;
export type UpsertTagMutationResult = Apollo.MutationResult<UpsertTagMutation>;
export type UpsertTagMutationOptions = Apollo.BaseMutationOptions<
  UpsertTagMutation,
  UpsertTagMutationVariables
>;
export const GetPostByIdDocument = gql`
  query GetPostById($id: ID!, $lang: LanguageEnum) {
    querier {
      getPostById(id: $id) {
        ...postFragment
      }
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useGetPostByIdQuery__
 *
 * To run a query within a React component, call `useGetPostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useGetPostByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPostByIdQuery,
    GetPostByIdQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(
    GetPostByIdDocument,
    options
  );
}
export function useGetPostByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPostByIdQuery,
    GetPostByIdQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetPostByIdQuery, GetPostByIdQueryVariables>(
    GetPostByIdDocument,
    options
  );
}
export type GetPostByIdQueryHookResult = ReturnType<typeof useGetPostByIdQuery>;
export type GetPostByIdLazyQueryHookResult = ReturnType<
  typeof useGetPostByIdLazyQuery
>;
export type GetPostByIdQueryResult = Apollo.QueryResult<
  GetPostByIdQuery,
  GetPostByIdQueryVariables
>;
export const GetPremiumPostDocument = gql`
  query GetPremiumPost($input: GetPremiumPostInput!, $lang: LanguageEnum) {
    querier {
      getPremiumPost(input: $input) {
        ...postFragment
      }
    }
  }
  ${PostFragmentFragmentDoc}
`;

/**
 * __useGetPremiumPostQuery__
 *
 * To run a query within a React component, call `useGetPremiumPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPremiumPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPremiumPostQuery({
 *   variables: {
 *      input: // value for 'input'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useGetPremiumPostQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPremiumPostQuery,
    GetPremiumPostQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<GetPremiumPostQuery, GetPremiumPostQueryVariables>(
    GetPremiumPostDocument,
    options
  );
}
export function useGetPremiumPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPremiumPostQuery,
    GetPremiumPostQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<GetPremiumPostQuery, GetPremiumPostQueryVariables>(
    GetPremiumPostDocument,
    options
  );
}
export type GetPremiumPostQueryHookResult = ReturnType<
  typeof useGetPremiumPostQuery
>;
export type GetPremiumPostLazyQueryHookResult = ReturnType<
  typeof useGetPremiumPostLazyQuery
>;
export type GetPremiumPostQueryResult = Apollo.QueryResult<
  GetPremiumPostQuery,
  GetPremiumPostQueryVariables
>;
export const ListQuerierCoursePostsDocument = gql`
  query ListQuerierCoursePosts($courseId: ID!, $lang: LanguageEnum) {
    querier {
      listCoursePosts(courseId: $courseId) {
        ...querierPostFragment
      }
    }
  }
  ${QuerierPostFragmentFragmentDoc}
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
 *      courseId: // value for 'courseId'
 *      lang: // value for 'lang'
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
export const ListQuerierFeedbackDocument = gql`
  query ListQuerierFeedback($query: String!) {
    querier {
      totalFeedback
      listFeedback(query: $query) {
        id
        title
        message
        author {
          ...authorFragment
        }
        resolved
        createdAt
        updatedAt
      }
    }
  }
  ${AuthorFragmentFragmentDoc}
`;

/**
 * __useListQuerierFeedbackQuery__
 *
 * To run a query within a React component, call `useListQuerierFeedbackQuery` and pass it any options that fit your needs.
 * When your component renders, `useListQuerierFeedbackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListQuerierFeedbackQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useListQuerierFeedbackQuery(
  baseOptions: Apollo.QueryHookOptions<
    ListQuerierFeedbackQuery,
    ListQuerierFeedbackQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<
    ListQuerierFeedbackQuery,
    ListQuerierFeedbackQueryVariables
  >(ListQuerierFeedbackDocument, options);
}
export function useListQuerierFeedbackLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListQuerierFeedbackQuery,
    ListQuerierFeedbackQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    ListQuerierFeedbackQuery,
    ListQuerierFeedbackQueryVariables
  >(ListQuerierFeedbackDocument, options);
}
export type ListQuerierFeedbackQueryHookResult = ReturnType<
  typeof useListQuerierFeedbackQuery
>;
export type ListQuerierFeedbackLazyQueryHookResult = ReturnType<
  typeof useListQuerierFeedbackLazyQuery
>;
export type ListQuerierFeedbackQueryResult = Apollo.QueryResult<
  ListQuerierFeedbackQuery,
  ListQuerierFeedbackQueryVariables
>;
export const ListQuerierPostsDocument = gql`
  query ListQuerierPosts($query: String!, $lang: LanguageEnum) {
    querier {
      totalPosts
      listPosts(query: $query) {
        ...postFragment
      }
    }
  }
  ${PostFragmentFragmentDoc}
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
 *      query: // value for 'query'
 *      lang: // value for 'lang'
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
export const ListQuerierTagsDocument = gql`
  query ListQuerierTags($query: String) {
    querier {
      totalTags
      listTags(query: $query) {
        id
        name
        imgSrc
        description
        visibility
        color
        createdAt
        updatedAt
      }
    }
  }
`;

/**
 * __useListQuerierTagsQuery__
 *
 * To run a query within a React component, call `useListQuerierTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListQuerierTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListQuerierTagsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useListQuerierTagsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ListQuerierTagsQuery,
    ListQuerierTagsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<ListQuerierTagsQuery, ListQuerierTagsQueryVariables>(
    ListQuerierTagsDocument,
    options
  );
}
export function useListQuerierTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListQuerierTagsQuery,
    ListQuerierTagsQueryVariables
  >
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    ListQuerierTagsQuery,
    ListQuerierTagsQueryVariables
  >(ListQuerierTagsDocument, options);
}
export type ListQuerierTagsQueryHookResult = ReturnType<
  typeof useListQuerierTagsQuery
>;
export type ListQuerierTagsLazyQueryHookResult = ReturnType<
  typeof useListQuerierTagsLazyQuery
>;
export type ListQuerierTagsQueryResult = Apollo.QueryResult<
  ListQuerierTagsQuery,
  ListQuerierTagsQueryVariables
>;
