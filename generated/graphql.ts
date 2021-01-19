export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type ArticleType = {
  __typename?: 'ArticleType';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  articles?: Maybe<Array<Maybe<Article>>>;
};


export type ArticleTypeArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ArticleTypeConnection = {
  __typename?: 'ArticleTypeConnection';
  values?: Maybe<Array<Maybe<ArticleType>>>;
  groupBy?: Maybe<ArticleTypeGroupBy>;
  aggregate?: Maybe<ArticleTypeAggregator>;
};

export type ArticleTypeAggregator = {
  __typename?: 'ArticleTypeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleTypeGroupBy = {
  __typename?: 'ArticleTypeGroupBy';
  id?: Maybe<Array<Maybe<ArticleTypeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ArticleTypeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ArticleTypeConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ArticleTypeConnectionName>>>;
};

export type ArticleTypeConnectionId = {
  __typename?: 'ArticleTypeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleTypeConnection>;
};

export type ArticleTypeConnectionCreated_At = {
  __typename?: 'ArticleTypeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleTypeConnection>;
};

export type ArticleTypeConnectionUpdated_At = {
  __typename?: 'ArticleTypeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleTypeConnection>;
};

export type ArticleTypeConnectionName = {
  __typename?: 'ArticleTypeConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleTypeConnection>;
};

export type ArticleTypeInput = {
  name: Scalars['String'];
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditArticleTypeInput = {
  name?: Maybe<Scalars['String']>;
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateArticleTypeInput = {
  data?: Maybe<ArticleTypeInput>;
};

export type CreateArticleTypePayload = {
  __typename?: 'createArticleTypePayload';
  articleType?: Maybe<ArticleType>;
};

export type UpdateArticleTypeInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditArticleTypeInput>;
};

export type UpdateArticleTypePayload = {
  __typename?: 'updateArticleTypePayload';
  articleType?: Maybe<ArticleType>;
};

export type DeleteArticleTypeInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticleTypePayload = {
  __typename?: 'deleteArticleTypePayload';
  articleType?: Maybe<ArticleType>;
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  content: Scalars['String'];
  image?: Maybe<UploadFile>;
  category?: Maybe<Category>;
  excerpt?: Maybe<Scalars['String']>;
  article_type?: Maybe<ArticleType>;
  author: Scalars['String'];
  posted_at: Scalars['DateTime'];
  comments?: Maybe<Array<Maybe<Comment>>>;
};


export type ArticleCommentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  values?: Maybe<Array<Maybe<Article>>>;
  groupBy?: Maybe<ArticleGroupBy>;
  aggregate?: Maybe<ArticleAggregator>;
};

export type ArticleAggregator = {
  __typename?: 'ArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ArticleGroupBy = {
  __typename?: 'ArticleGroupBy';
  id?: Maybe<Array<Maybe<ArticleConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ArticleConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ArticleConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<ArticleConnectionTitle>>>;
  content?: Maybe<Array<Maybe<ArticleConnectionContent>>>;
  image?: Maybe<Array<Maybe<ArticleConnectionImage>>>;
  category?: Maybe<Array<Maybe<ArticleConnectionCategory>>>;
  excerpt?: Maybe<Array<Maybe<ArticleConnectionExcerpt>>>;
  article_type?: Maybe<Array<Maybe<ArticleConnectionArticle_Type>>>;
  author?: Maybe<Array<Maybe<ArticleConnectionAuthor>>>;
  posted_at?: Maybe<Array<Maybe<ArticleConnectionPosted_At>>>;
};

export type ArticleConnectionId = {
  __typename?: 'ArticleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionCreated_At = {
  __typename?: 'ArticleConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionUpdated_At = {
  __typename?: 'ArticleConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionTitle = {
  __typename?: 'ArticleConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionContent = {
  __typename?: 'ArticleConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionImage = {
  __typename?: 'ArticleConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionCategory = {
  __typename?: 'ArticleConnectionCategory';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionExcerpt = {
  __typename?: 'ArticleConnectionExcerpt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionArticle_Type = {
  __typename?: 'ArticleConnectionArticle_type';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionAuthor = {
  __typename?: 'ArticleConnectionAuthor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleConnectionPosted_At = {
  __typename?: 'ArticleConnectionPosted_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ArticleConnection>;
};

export type ArticleInput = {
  title: Scalars['String'];
  content: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  category?: Maybe<Scalars['ID']>;
  excerpt?: Maybe<Scalars['String']>;
  article_type?: Maybe<Scalars['ID']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  author: Scalars['String'];
  posted_at: Scalars['DateTime'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditArticleInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  category?: Maybe<Scalars['ID']>;
  excerpt?: Maybe<Scalars['String']>;
  article_type?: Maybe<Scalars['ID']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  author?: Maybe<Scalars['String']>;
  posted_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateArticleInput = {
  data?: Maybe<ArticleInput>;
};

export type CreateArticlePayload = {
  __typename?: 'createArticlePayload';
  article?: Maybe<Article>;
};

export type UpdateArticleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditArticleInput>;
};

export type UpdateArticlePayload = {
  __typename?: 'updateArticlePayload';
  article?: Maybe<Article>;
};

export type DeleteArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteArticlePayload = {
  __typename?: 'deleteArticlePayload';
  article?: Maybe<Article>;
};

export type BreakingNews = {
  __typename?: 'BreakingNews';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  text?: Maybe<Array<Maybe<ComponentNewsText>>>;
};

export type BreakingNewInput = {
  text?: Maybe<Array<Maybe<ComponentNewsTextInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBreakingNewInput = {
  text?: Maybe<Array<Maybe<EditComponentNewsTextInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateBreakingNewInput = {
  data?: Maybe<EditBreakingNewInput>;
};

export type UpdateBreakingNewPayload = {
  __typename?: 'updateBreakingNewPayload';
  breakingNew?: Maybe<BreakingNews>;
};

export type DeleteBreakingNewPayload = {
  __typename?: 'deleteBreakingNewPayload';
  breakingNew?: Maybe<BreakingNews>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  featuredArticle?: Maybe<Article>;
  image?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']>;
  articles?: Maybe<Array<Maybe<Article>>>;
};


export type CategoryArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  values?: Maybe<Array<Maybe<Category>>>;
  groupBy?: Maybe<CategoryGroupBy>;
  aggregate?: Maybe<CategoryAggregator>;
};

export type CategoryAggregator = {
  __typename?: 'CategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  id?: Maybe<Array<Maybe<CategoryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CategoryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CategoryConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<CategoryConnectionName>>>;
  featuredArticle?: Maybe<Array<Maybe<CategoryConnectionFeaturedArticle>>>;
  image?: Maybe<Array<Maybe<CategoryConnectionImage>>>;
  description?: Maybe<Array<Maybe<CategoryConnectionDescription>>>;
};

export type CategoryConnectionId = {
  __typename?: 'CategoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionCreated_At = {
  __typename?: 'CategoryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionUpdated_At = {
  __typename?: 'CategoryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionName = {
  __typename?: 'CategoryConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionFeaturedArticle = {
  __typename?: 'CategoryConnectionFeaturedArticle';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionImage = {
  __typename?: 'CategoryConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryConnectionDescription = {
  __typename?: 'CategoryConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CategoryConnection>;
};

export type CategoryInput = {
  name: Scalars['String'];
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  featuredArticle?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCategoryInput = {
  name?: Maybe<Scalars['String']>;
  articles?: Maybe<Array<Maybe<Scalars['ID']>>>;
  featuredArticle?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCategoryInput = {
  data?: Maybe<CategoryInput>;
};

export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
};

export type UpdateCategoryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCategoryInput>;
};

export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
};

export type DeleteCategoryInput = {
  where?: Maybe<InputId>;
};

export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  user?: Maybe<UsersPermissionsUser>;
  article?: Maybe<Article>;
  text: Scalars['String'];
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  values?: Maybe<Array<Maybe<Comment>>>;
  groupBy?: Maybe<CommentGroupBy>;
  aggregate?: Maybe<CommentAggregator>;
};

export type CommentAggregator = {
  __typename?: 'CommentAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  id?: Maybe<Array<Maybe<CommentConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CommentConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CommentConnectionUpdated_At>>>;
  user?: Maybe<Array<Maybe<CommentConnectionUser>>>;
  article?: Maybe<Array<Maybe<CommentConnectionArticle>>>;
  text?: Maybe<Array<Maybe<CommentConnectionText>>>;
};

export type CommentConnectionId = {
  __typename?: 'CommentConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionCreated_At = {
  __typename?: 'CommentConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionUpdated_At = {
  __typename?: 'CommentConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionUser = {
  __typename?: 'CommentConnectionUser';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionArticle = {
  __typename?: 'CommentConnectionArticle';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionText = {
  __typename?: 'CommentConnectionText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentInput = {
  user?: Maybe<Scalars['ID']>;
  article?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCommentInput = {
  user?: Maybe<Scalars['ID']>;
  article?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCommentInput = {
  data?: Maybe<CommentInput>;
};

export type CreateCommentPayload = {
  __typename?: 'createCommentPayload';
  comment?: Maybe<Comment>;
};

export type UpdateCommentInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCommentInput>;
};

export type UpdateCommentPayload = {
  __typename?: 'updateCommentPayload';
  comment?: Maybe<Comment>;
};

export type DeleteCommentInput = {
  where?: Maybe<InputId>;
};

export type DeleteCommentPayload = {
  __typename?: 'deleteCommentPayload';
  comment?: Maybe<Comment>;
};

export type FeaturedArticle = {
  __typename?: 'FeaturedArticle';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  article?: Maybe<Article>;
};

export type FeaturedArticleConnection = {
  __typename?: 'FeaturedArticleConnection';
  values?: Maybe<Array<Maybe<FeaturedArticle>>>;
  groupBy?: Maybe<FeaturedArticleGroupBy>;
  aggregate?: Maybe<FeaturedArticleAggregator>;
};

export type FeaturedArticleAggregator = {
  __typename?: 'FeaturedArticleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FeaturedArticleGroupBy = {
  __typename?: 'FeaturedArticleGroupBy';
  id?: Maybe<Array<Maybe<FeaturedArticleConnectionId>>>;
  created_at?: Maybe<Array<Maybe<FeaturedArticleConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<FeaturedArticleConnectionUpdated_At>>>;
  article?: Maybe<Array<Maybe<FeaturedArticleConnectionArticle>>>;
};

export type FeaturedArticleConnectionId = {
  __typename?: 'FeaturedArticleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FeaturedArticleConnection>;
};

export type FeaturedArticleConnectionCreated_At = {
  __typename?: 'FeaturedArticleConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FeaturedArticleConnection>;
};

export type FeaturedArticleConnectionUpdated_At = {
  __typename?: 'FeaturedArticleConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<FeaturedArticleConnection>;
};

export type FeaturedArticleConnectionArticle = {
  __typename?: 'FeaturedArticleConnectionArticle';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<FeaturedArticleConnection>;
};

export type FeaturedArticleInput = {
  article?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFeaturedArticleInput = {
  article?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateFeaturedArticleInput = {
  data?: Maybe<FeaturedArticleInput>;
};

export type CreateFeaturedArticlePayload = {
  __typename?: 'createFeaturedArticlePayload';
  featuredArticle?: Maybe<FeaturedArticle>;
};

export type UpdateFeaturedArticleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditFeaturedArticleInput>;
};

export type UpdateFeaturedArticlePayload = {
  __typename?: 'updateFeaturedArticlePayload';
  featuredArticle?: Maybe<FeaturedArticle>;
};

export type DeleteFeaturedArticleInput = {
  where?: Maybe<InputId>;
};

export type DeleteFeaturedArticlePayload = {
  __typename?: 'deleteFeaturedArticlePayload';
  featuredArticle?: Maybe<FeaturedArticle>;
};

export type LiveTv = {
  __typename?: 'LiveTv';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  liveNow?: Maybe<ComponentLiveTvLiveNow>;
  upNext?: Maybe<Array<Maybe<ComponentLiveTvUpNext>>>;
  breakingNews?: Maybe<Array<Maybe<ComponentNewsText>>>;
};

export type LiveTvInput = {
  liveNow?: Maybe<ComponentLiveTvLiveNowInput>;
  upNext?: Maybe<Array<Maybe<ComponentLiveTvUpNextInput>>>;
  breakingNews?: Maybe<Array<Maybe<ComponentNewsTextInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLiveTvInput = {
  liveNow?: Maybe<EditComponentLiveTvLiveNowInput>;
  upNext?: Maybe<Array<Maybe<EditComponentLiveTvUpNextInput>>>;
  breakingNews?: Maybe<Array<Maybe<EditComponentNewsTextInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateLiveTvInput = {
  data?: Maybe<EditLiveTvInput>;
};

export type UpdateLiveTvPayload = {
  __typename?: 'updateLiveTvPayload';
  liveTv?: Maybe<LiveTv>;
};

export type DeleteLiveTvPayload = {
  __typename?: 'deleteLiveTvPayload';
  liveTv?: Maybe<LiveTv>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  path: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  content: Scalars['String'];
};

export type PageConnection = {
  __typename?: 'PageConnection';
  values?: Maybe<Array<Maybe<Page>>>;
  groupBy?: Maybe<PageGroupBy>;
  aggregate?: Maybe<PageAggregator>;
};

export type PageAggregator = {
  __typename?: 'PageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PageGroupBy = {
  __typename?: 'PageGroupBy';
  id?: Maybe<Array<Maybe<PageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<PageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<PageConnectionUpdated_At>>>;
  path?: Maybe<Array<Maybe<PageConnectionPath>>>;
  title?: Maybe<Array<Maybe<PageConnectionTitle>>>;
  description?: Maybe<Array<Maybe<PageConnectionDescription>>>;
  content?: Maybe<Array<Maybe<PageConnectionContent>>>;
};

export type PageConnectionId = {
  __typename?: 'PageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionCreated_At = {
  __typename?: 'PageConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionUpdated_At = {
  __typename?: 'PageConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionPath = {
  __typename?: 'PageConnectionPath';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionTitle = {
  __typename?: 'PageConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionDescription = {
  __typename?: 'PageConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageConnectionContent = {
  __typename?: 'PageConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PageConnection>;
};

export type PageInput = {
  path: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  content: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPageInput = {
  path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePageInput = {
  data?: Maybe<PageInput>;
};

export type CreatePagePayload = {
  __typename?: 'createPagePayload';
  page?: Maybe<Page>;
};

export type UpdatePageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPageInput>;
};

export type UpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<Page>;
};

export type DeletePageInput = {
  where?: Maybe<InputId>;
};

export type DeletePagePayload = {
  __typename?: 'deletePagePayload';
  page?: Maybe<Page>;
};

export type Site = {
  __typename?: 'Site';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  logo?: Maybe<UploadFile>;
  siteNavigation?: Maybe<Array<Maybe<ComponentNavigationNavigationItem>>>;
  quickLinks?: Maybe<Array<Maybe<ComponentNavigationNavigationItem>>>;
  footerLinks?: Maybe<Array<Maybe<ComponentNavigationNavigationItem>>>;
  socialMedia?: Maybe<ComponentSocialMediaSocialMedia>;
  mobileAppLinks?: Maybe<ComponentMobileAppLinksMobileAppLinks>;
};

export type SiteInput = {
  logo?: Maybe<Scalars['ID']>;
  siteNavigation?: Maybe<Array<Maybe<ComponentNavigationNavigationItemInput>>>;
  quickLinks?: Maybe<Array<Maybe<ComponentNavigationNavigationItemInput>>>;
  footerLinks?: Maybe<Array<Maybe<ComponentNavigationNavigationItemInput>>>;
  socialMedia?: Maybe<ComponentSocialMediaSocialMediaInput>;
  mobileAppLinks?: Maybe<ComponentMobileAppLinksMobileAppLinkInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSiteInput = {
  logo?: Maybe<Scalars['ID']>;
  siteNavigation?: Maybe<Array<Maybe<EditComponentNavigationNavigationItemInput>>>;
  quickLinks?: Maybe<Array<Maybe<EditComponentNavigationNavigationItemInput>>>;
  footerLinks?: Maybe<Array<Maybe<EditComponentNavigationNavigationItemInput>>>;
  socialMedia?: Maybe<EditComponentSocialMediaSocialMediaInput>;
  mobileAppLinks?: Maybe<EditComponentMobileAppLinksMobileAppLinkInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateSiteInput = {
  data?: Maybe<EditSiteInput>;
};

export type UpdateSitePayload = {
  __typename?: 'updateSitePayload';
  site?: Maybe<Site>;
};

export type DeleteSitePayload = {
  __typename?: 'deleteSitePayload';
  site?: Maybe<Site>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};


export type UsersPermissionsUserCommentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentLiveTvDaySchedule = {
  __typename?: 'ComponentLiveTvDaySchedule';
  id: Scalars['ID'];
  video?: Maybe<Array<Maybe<ComponentMediaVideo>>>;
  date: Scalars['Date'];
};

export type ComponentLiveTvDayScheduleInput = {
  video?: Maybe<Array<Maybe<ComponentMediaVideoInput>>>;
  date: Scalars['Date'];
};

export type EditComponentLiveTvDayScheduleInput = {
  id?: Maybe<Scalars['ID']>;
  video?: Maybe<Array<Maybe<EditComponentMediaVideoInput>>>;
  date?: Maybe<Scalars['Date']>;
};

export type ComponentLiveTvLiveNow = {
  __typename?: 'ComponentLiveTvLiveNow';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  videoId: Scalars['String'];
  youtubeVideoId?: Maybe<Scalars['String']>;
};

export type ComponentLiveTvLiveNowInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  videoId?: Maybe<Scalars['String']>;
  youtubeVideoId?: Maybe<Scalars['String']>;
};

export type EditComponentLiveTvLiveNowInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  videoId?: Maybe<Scalars['String']>;
  youtubeVideoId?: Maybe<Scalars['String']>;
};

export type ComponentLiveTvUpNext = {
  __typename?: 'ComponentLiveTvUpNext';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  datetime: Scalars['DateTime'];
  duration: Scalars['String'];
};

export type ComponentLiveTvUpNextInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  datetime: Scalars['DateTime'];
  duration: Scalars['String'];
};

export type EditComponentLiveTvUpNextInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  datetime?: Maybe<Scalars['DateTime']>;
  duration?: Maybe<Scalars['String']>;
};

export type ComponentMediaVideo = {
  __typename?: 'ComponentMediaVideo';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  videoUrl?: Maybe<Scalars['String']>;
  videoFile?: Maybe<UploadFile>;
  time: Scalars['Time'];
  duration?: Maybe<Scalars['String']>;
};

export type ComponentMediaVideoInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  videoUrl?: Maybe<Scalars['String']>;
  videoFile?: Maybe<Scalars['ID']>;
  time: Scalars['Time'];
  duration?: Maybe<Scalars['String']>;
};

export type EditComponentMediaVideoInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
  videoFile?: Maybe<Scalars['ID']>;
  time?: Maybe<Scalars['Time']>;
  duration?: Maybe<Scalars['String']>;
};

export type ComponentMobileAppLinksMobileAppLinks = {
  __typename?: 'ComponentMobileAppLinksMobileAppLinks';
  id: Scalars['ID'];
  appStore?: Maybe<Scalars['String']>;
  googlePlay?: Maybe<Scalars['String']>;
};

export type ComponentMobileAppLinksMobileAppLinkInput = {
  appStore?: Maybe<Scalars['String']>;
  googlePlay?: Maybe<Scalars['String']>;
};

export type EditComponentMobileAppLinksMobileAppLinkInput = {
  id?: Maybe<Scalars['ID']>;
  appStore?: Maybe<Scalars['String']>;
  googlePlay?: Maybe<Scalars['String']>;
};

export type ComponentNavigationNavigationItem = {
  __typename?: 'ComponentNavigationNavigationItem';
  id: Scalars['ID'];
  text: Scalars['String'];
  link?: Maybe<Scalars['String']>;
};

export type ComponentNavigationNavigationItemInput = {
  text: Scalars['String'];
  link?: Maybe<Scalars['String']>;
};

export type EditComponentNavigationNavigationItemInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type ComponentNewsText = {
  __typename?: 'ComponentNewsText';
  id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
};

export type ComponentNewsTextInput = {
  content?: Maybe<Scalars['String']>;
};

export type EditComponentNewsTextInput = {
  id?: Maybe<Scalars['ID']>;
  content?: Maybe<Scalars['String']>;
};

export type ComponentSocialMediaSocialMedia = {
  __typename?: 'ComponentSocialMediaSocialMedia';
  id: Scalars['ID'];
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
  kingschat?: Maybe<Scalars['String']>;
};

export type ComponentSocialMediaSocialMediaInput = {
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
  kingschat?: Maybe<Scalars['String']>;
};

export type EditComponentSocialMediaSocialMediaInput = {
  id?: Maybe<Scalars['ID']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
  kingschat?: Maybe<Scalars['String']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | ArticleType | ArticleTypeConnection | ArticleTypeAggregator | ArticleTypeGroupBy | ArticleTypeConnectionId | ArticleTypeConnectionCreated_At | ArticleTypeConnectionUpdated_At | ArticleTypeConnectionName | CreateArticleTypePayload | UpdateArticleTypePayload | DeleteArticleTypePayload | Article | ArticleConnection | ArticleAggregator | ArticleGroupBy | ArticleConnectionId | ArticleConnectionCreated_At | ArticleConnectionUpdated_At | ArticleConnectionTitle | ArticleConnectionContent | ArticleConnectionImage | ArticleConnectionCategory | ArticleConnectionExcerpt | ArticleConnectionArticle_Type | ArticleConnectionAuthor | ArticleConnectionPosted_At | CreateArticlePayload | UpdateArticlePayload | DeleteArticlePayload | BreakingNews | UpdateBreakingNewPayload | DeleteBreakingNewPayload | Category | CategoryConnection | CategoryAggregator | CategoryGroupBy | CategoryConnectionId | CategoryConnectionCreated_At | CategoryConnectionUpdated_At | CategoryConnectionName | CategoryConnectionFeaturedArticle | CategoryConnectionImage | CategoryConnectionDescription | CreateCategoryPayload | UpdateCategoryPayload | DeleteCategoryPayload | Comment | CommentConnection | CommentAggregator | CommentGroupBy | CommentConnectionId | CommentConnectionCreated_At | CommentConnectionUpdated_At | CommentConnectionUser | CommentConnectionArticle | CommentConnectionText | CreateCommentPayload | UpdateCommentPayload | DeleteCommentPayload | FeaturedArticle | FeaturedArticleConnection | FeaturedArticleAggregator | FeaturedArticleGroupBy | FeaturedArticleConnectionId | FeaturedArticleConnectionCreated_At | FeaturedArticleConnectionUpdated_At | FeaturedArticleConnectionArticle | CreateFeaturedArticlePayload | UpdateFeaturedArticlePayload | DeleteFeaturedArticlePayload | LiveTv | UpdateLiveTvPayload | DeleteLiveTvPayload | Page | PageConnection | PageAggregator | PageGroupBy | PageConnectionId | PageConnectionCreated_At | PageConnectionUpdated_At | PageConnectionPath | PageConnectionTitle | PageConnectionDescription | PageConnectionContent | CreatePagePayload | UpdatePagePayload | DeletePagePayload | Site | UpdateSitePayload | DeleteSitePayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentLiveTvDaySchedule | ComponentLiveTvLiveNow | ComponentLiveTvUpNext | ComponentMediaVideo | ComponentMobileAppLinksMobileAppLinks | ComponentNavigationNavigationItem | ComponentNewsText | ComponentSocialMediaSocialMedia;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  articleType?: Maybe<ArticleType>;
  articleTypes?: Maybe<Array<Maybe<ArticleType>>>;
  articleTypesConnection?: Maybe<ArticleTypeConnection>;
  article?: Maybe<Article>;
  articles?: Maybe<Array<Maybe<Article>>>;
  articlesConnection?: Maybe<ArticleConnection>;
  breakingNew?: Maybe<BreakingNews>;
  category?: Maybe<Category>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesConnection?: Maybe<CategoryConnection>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  commentsConnection?: Maybe<CommentConnection>;
  featuredArticle?: Maybe<FeaturedArticle>;
  featuredArticles?: Maybe<Array<Maybe<FeaturedArticle>>>;
  featuredArticlesConnection?: Maybe<FeaturedArticleConnection>;
  liveTv?: Maybe<LiveTv>;
  page?: Maybe<Page>;
  pages?: Maybe<Array<Maybe<Page>>>;
  pagesConnection?: Maybe<PageConnection>;
  site?: Maybe<Site>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryArticleTypeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticleTypesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticleTypesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryArticlesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryBreakingNewArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCommentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCommentsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFeaturedArticleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryFeaturedArticlesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFeaturedArticlesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLiveTvArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySiteArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArticleType?: Maybe<CreateArticleTypePayload>;
  updateArticleType?: Maybe<UpdateArticleTypePayload>;
  deleteArticleType?: Maybe<DeleteArticleTypePayload>;
  createArticle?: Maybe<CreateArticlePayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  updateBreakingNew?: Maybe<UpdateBreakingNewPayload>;
  deleteBreakingNew?: Maybe<DeleteBreakingNewPayload>;
  createCategory?: Maybe<CreateCategoryPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  createComment?: Maybe<CreateCommentPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  createFeaturedArticle?: Maybe<CreateFeaturedArticlePayload>;
  updateFeaturedArticle?: Maybe<UpdateFeaturedArticlePayload>;
  deleteFeaturedArticle?: Maybe<DeleteFeaturedArticlePayload>;
  updateLiveTv?: Maybe<UpdateLiveTvPayload>;
  deleteLiveTv?: Maybe<DeleteLiveTvPayload>;
  createPage?: Maybe<CreatePagePayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  deletePage?: Maybe<DeletePagePayload>;
  updateSite?: Maybe<UpdateSitePayload>;
  deleteSite?: Maybe<DeleteSitePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateArticleTypeArgs = {
  input?: Maybe<CreateArticleTypeInput>;
};


export type MutationUpdateArticleTypeArgs = {
  input?: Maybe<UpdateArticleTypeInput>;
};


export type MutationDeleteArticleTypeArgs = {
  input?: Maybe<DeleteArticleTypeInput>;
};


export type MutationCreateArticleArgs = {
  input?: Maybe<CreateArticleInput>;
};


export type MutationUpdateArticleArgs = {
  input?: Maybe<UpdateArticleInput>;
};


export type MutationDeleteArticleArgs = {
  input?: Maybe<DeleteArticleInput>;
};


export type MutationUpdateBreakingNewArgs = {
  input?: Maybe<UpdateBreakingNewInput>;
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};


export type MutationUpdateCategoryArgs = {
  input?: Maybe<UpdateCategoryInput>;
};


export type MutationDeleteCategoryArgs = {
  input?: Maybe<DeleteCategoryInput>;
};


export type MutationCreateCommentArgs = {
  input?: Maybe<CreateCommentInput>;
};


export type MutationUpdateCommentArgs = {
  input?: Maybe<UpdateCommentInput>;
};


export type MutationDeleteCommentArgs = {
  input?: Maybe<DeleteCommentInput>;
};


export type MutationCreateFeaturedArticleArgs = {
  input?: Maybe<CreateFeaturedArticleInput>;
};


export type MutationUpdateFeaturedArticleArgs = {
  input?: Maybe<UpdateFeaturedArticleInput>;
};


export type MutationDeleteFeaturedArticleArgs = {
  input?: Maybe<DeleteFeaturedArticleInput>;
};


export type MutationUpdateLiveTvArgs = {
  input?: Maybe<UpdateLiveTvInput>;
};


export type MutationCreatePageArgs = {
  input?: Maybe<CreatePageInput>;
};


export type MutationUpdatePageArgs = {
  input?: Maybe<UpdatePageInput>;
};


export type MutationDeletePageArgs = {
  input?: Maybe<DeletePageInput>;
};


export type MutationUpdateSiteArgs = {
  input?: Maybe<UpdateSiteInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & { token: UsersPermissionsLoginPayload['jwt'] }
    & { user: (
      { __typename?: 'UsersPermissionsMe' }
      & Pick<UsersPermissionsMe, 'id'>
    ) }
  ) }
);

export type LoginMutationVariables = Exact<{
  identifier: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & { token: UsersPermissionsLoginPayload['jwt'] }
    & { user: (
      { __typename?: 'UsersPermissionsMe' }
      & Pick<UsersPermissionsMe, 'id'>
    ) }
  ) }
);

export type FullArticleFieldsFragment = (
  { __typename?: 'Article' }
  & Pick<Article, 'id' | 'title' | 'content' | 'excerpt' | 'author' | 'posted_at'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url' | 'width' | 'height' | 'alternativeText'>
  )>, category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  )> }
);

export type ArticleCardFieldsFragment = (
  { __typename?: 'Article' }
  & Pick<Article, 'id' | 'title' | 'excerpt' | 'author' | 'posted_at'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url' | 'width' | 'height' | 'alternativeText'>
  )>, category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  )> }
);

export type FeaturedArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedArticlesQuery = (
  { __typename?: 'Query' }
  & { featuredArticles?: Maybe<Array<Maybe<(
    { __typename?: 'FeaturedArticle' }
    & { article?: Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'id' | 'title' | 'excerpt' | 'author'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'width' | 'height' | 'alternativeText'>
      )>, category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'name'>
      )> }
    )> }
  )>>> }
);

export type ArticlesQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
}>;


export type ArticlesQuery = (
  { __typename?: 'Query' }
  & { articles?: Maybe<Array<Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'title' | 'excerpt' | 'author' | 'updated_at' | 'created_at'>
    & { category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )>, image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'width' | 'height' | 'alternativeText'>
    )> }
  )>>> }
);

export type ArticleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ArticleQuery = (
  { __typename?: 'Query' }
  & { article?: Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'title' | 'content' | 'excerpt' | 'author' | 'posted_at'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'width' | 'height' | 'alternativeText'>
    )>, category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'width' | 'height' | 'alternativeText'>
      )> }
    )> }
  )> }
);

export type LatestArticlesByCategoryQueryVariables = Exact<{
  categoryID: Scalars['ID'];
}>;


export type LatestArticlesByCategoryQuery = (
  { __typename?: 'Query' }
  & { articles?: Maybe<Array<Maybe<(
    { __typename?: 'Article' }
    & ArticleCardFieldsFragment
  )>>> }
);

export type BreakingNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type BreakingNewsQuery = (
  { __typename?: 'Query' }
  & { breakingNew?: Maybe<(
    { __typename?: 'BreakingNews' }
    & { text?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentNewsText' }
      & Pick<ComponentNewsText, 'content'>
    )>>> }
  )> }
);

export type CategoryIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryIdsQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
  )>>> }
);

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'description'>
    & { featuredArticle?: Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'id' | 'title' | 'excerpt'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'width' | 'height' | 'alternativeText'>
      )> }
    )> }
  )>>> }
);

export type CategoryQueryVariables = Exact<{
  id: Scalars['ID'];
  limit: Scalars['Int'];
}>;


export type CategoryQuery = (
  { __typename?: 'Query' }
  & { category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'description'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'width' | 'height' | 'alternativeText'>
    )>, featuredArticle?: Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'id' | 'title' | 'excerpt' | 'content'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'width' | 'height' | 'alternativeText'>
      )> }
    )>, articles?: Maybe<Array<Maybe<(
      { __typename?: 'Article' }
      & Pick<Article, 'id' | 'title' | 'content' | 'excerpt' | 'posted_at'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'width' | 'height' | 'alternativeText'>
      )>, category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'name'>
      )> }
    )>>> }
  )> }
);

export type CommentsByArticleIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CommentsByArticleIdQuery = (
  { __typename?: 'Query' }
  & { comments?: Maybe<Array<Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id' | 'text'>
    & { user?: Maybe<(
      { __typename?: 'UsersPermissionsUser' }
      & Pick<UsersPermissionsUser, 'id' | 'username'>
    )> }
  )>>> }
);

export type LiveTvQueryVariables = Exact<{ [key: string]: never; }>;


export type LiveTvQuery = (
  { __typename?: 'Query' }
  & { liveTv?: Maybe<(
    { __typename?: 'LiveTv' }
    & { liveNow?: Maybe<(
      { __typename?: 'ComponentLiveTvLiveNow' }
      & Pick<ComponentLiveTvLiveNow, 'id' | 'title' | 'description' | 'videoId'>
    )>, upNext?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentLiveTvUpNext' }
      & Pick<ComponentLiveTvUpNext, 'id' | 'title' | 'description' | 'datetime' | 'duration'>
    )>>>, breakingNews?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentNewsText' }
      & Pick<ComponentNewsText, 'content'>
    )>>> }
  )> }
);

export type PagesQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesQuery = (
  { __typename?: 'Query' }
  & { pages?: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'path' | 'title' | 'description' | 'content'>
  )>>> }
);

export type PageByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type PageByPathQuery = (
  { __typename?: 'Query' }
  & { pages?: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & Pick<Page, 'id' | 'path' | 'title' | 'description' | 'content'>
  )>>> }
);

export type ArticleSearchQueryVariables = Exact<{
  searchQuery?: Maybe<Scalars['String']>;
}>;


export type ArticleSearchQuery = (
  { __typename?: 'Query' }
  & { articles?: Maybe<Array<Maybe<(
    { __typename?: 'Article' }
    & Pick<Article, 'id' | 'title' | 'content' | 'posted_at'>
  )>>> }
);

export type SiteQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { logo?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )>, siteNavigation?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentNavigationNavigationItem' }
      & Pick<ComponentNavigationNavigationItem, 'id' | 'text' | 'link'>
    )>>>, quickLinks?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentNavigationNavigationItem' }
      & Pick<ComponentNavigationNavigationItem, 'id' | 'text' | 'link'>
    )>>>, footerLinks?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentNavigationNavigationItem' }
      & Pick<ComponentNavigationNavigationItem, 'id' | 'text' | 'link'>
    )>>>, socialMedia?: Maybe<(
      { __typename?: 'ComponentSocialMediaSocialMedia' }
      & Pick<ComponentSocialMediaSocialMedia, 'facebook' | 'twitter' | 'instagram' | 'whatsapp' | 'kingschat'>
    )>, mobileAppLinks?: Maybe<(
      { __typename?: 'ComponentMobileAppLinksMobileAppLinks' }
      & Pick<ComponentMobileAppLinksMobileAppLinks, 'appStore' | 'googlePlay'>
    )> }
  )> }
);
