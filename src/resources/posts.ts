// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Posts extends APIResource {
  /**
   * Creates a new topic, a new post, or a private message
   *
   * @example
   * ```ts
   * const post = await client.posts.create({ raw: 'raw' });
   * ```
   */
  create(body: PostCreateParams, options?: RequestOptions): APIPromise<PostCreateResponse> {
    return this._client.post('/posts.json', { body, ...options });
  }

  /**
   * This endpoint can be used to get the number of likes on a post using the
   * `actions_summary` property in the response. `actions_summary` responses with the
   * id of `2` signify a `like`. If there are no `actions_summary` items with the id
   * of `2`, that means there are 0 likes. Other ids likely refer to various
   * different flag types.
   *
   * @example
   * ```ts
   * const post = await client.posts.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PostRetrieveResponse> {
    return this._client.get(path`/posts/${id}.json`, options);
  }

  /**
   * Update a single post
   *
   * @example
   * ```ts
   * const post = await client.posts.update('id');
   * ```
   */
  update(
    id: string,
    body: PostUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PostUpdateResponse> {
    return this._client.put(path`/posts/${id}.json`, { body, ...options });
  }

  /**
   * List latest posts across topics
   *
   * @example
   * ```ts
   * const posts = await client.posts.list({
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  list(params: PostListParams, options?: RequestOptions): APIPromise<PostListResponse> {
    const { 'Api-Username': apiUsername, ...query } = params;
    return this._client.get('/posts.json', {
      query,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }

  /**
   * delete a single post
   *
   * @example
   * ```ts
   * await client.posts.delete(0);
   * ```
   */
  delete(
    id: number,
    body: PostDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.delete(path`/posts/${id}.json`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PostCreateResponse {
  id: number;

  actions_summary: Array<PostCreateResponse.ActionsSummary>;

  admin: boolean;

  avatar_template: string;

  bookmarked: boolean;

  can_delete: boolean;

  can_edit: boolean;

  can_recover: boolean;

  can_view_edit_history: boolean;

  can_wiki: boolean;

  cooked: string;

  created_at: string;

  deleted_at: string | null;

  display_username: string | null;

  draft_sequence: number;

  edit_reason: string | null;

  flair_bg_color: string | null;

  flair_color: string | null;

  flair_name: string | null;

  flair_url: string | null;

  hidden: boolean;

  incoming_link_count: number;

  moderator: boolean;

  name: string | null;

  post_number: number;

  post_type: number;

  post_url: string;

  posts_count: number;

  primary_group_name: string | null;

  quote_count: number;

  readers_count: number;

  reads: number;

  reply_count: number;

  reply_to_post_number: string | null;

  reviewable_id: number | null;

  reviewable_score_count: number;

  reviewable_score_pending_count: number;

  score: number;

  staff: boolean;

  topic_id: number;

  topic_slug: string;

  trust_level: number;

  updated_at: string;

  user_deleted: boolean;

  user_id: number;

  user_title: string | null;

  username: string;

  version: number;

  wiki: boolean;

  yours: boolean;

  badges_granted?: Array<unknown>;

  can_see_hidden_post?: boolean;

  flair_group_id?: number | null;

  mentioned_users?: Array<unknown>;

  raw?: string;
}

export namespace PostCreateResponse {
  export interface ActionsSummary {
    id: number;

    can_act: boolean;
  }
}

export interface PostRetrieveResponse {
  id: number;

  actions_summary: Array<PostRetrieveResponse.ActionsSummary>;

  admin: boolean;

  avatar_template: string;

  bookmarked: boolean;

  can_delete: boolean;

  can_edit: boolean;

  can_recover: boolean;

  can_view_edit_history: boolean;

  can_wiki: boolean;

  cooked: string;

  created_at: string;

  deleted_at: string | null;

  edit_reason: string | null;

  flair_bg_color: string | null;

  flair_color: string | null;

  flair_name: string | null;

  flair_url: string | null;

  hidden: boolean;

  incoming_link_count: number;

  moderator: boolean;

  post_number: number;

  post_type: number;

  post_url: string;

  posts_count: number;

  primary_group_name: string | null;

  quote_count: number;

  raw: string;

  readers_count: number;

  reads: number;

  reply_count: number;

  reply_to_post_number: string | null;

  reviewable_id: number | null;

  reviewable_score_count: number;

  reviewable_score_pending_count: number;

  score: number;

  staff: boolean;

  topic_id: number;

  topic_slug: string;

  trust_level: number;

  updated_at: string;

  user_deleted: boolean;

  user_id: number;

  user_title: string | null;

  username: string;

  version: number;

  wiki: boolean;

  yours: boolean;

  can_see_hidden_post?: boolean;

  display_username?: string | null;

  flair_group_id?: number | null;

  mentioned_users?: Array<unknown>;

  name?: string | null;

  [k: string]: unknown;
}

export namespace PostRetrieveResponse {
  export interface ActionsSummary {
    /**
     * `2`: like, `3`, `4`, `6`, `7`, `8`: flag
     */
    id: number;

    acted?: boolean;

    can_act?: boolean;

    can_undo?: boolean;

    count?: number;
  }
}

export interface PostUpdateResponse {
  post: PostUpdateResponse.Post;
}

export namespace PostUpdateResponse {
  export interface Post {
    id: number;

    actions_summary: Array<Post.ActionsSummary>;

    admin: boolean;

    avatar_template: string;

    bookmarked: boolean;

    can_delete: boolean;

    can_edit: boolean;

    can_recover: boolean;

    can_view_edit_history: boolean;

    can_wiki: boolean;

    cooked: string;

    created_at: string;

    deleted_at: string | null;

    draft_sequence: number;

    edit_reason: string | null;

    flair_bg_color: string | null;

    flair_color: string | null;

    flair_name: string | null;

    flair_url: string | null;

    hidden: boolean;

    incoming_link_count: number;

    moderator: boolean;

    post_number: number;

    post_type: number;

    post_url: string;

    posts_count: number;

    primary_group_name: string | null;

    quote_count: number;

    raw: string;

    readers_count: number;

    reads: number;

    reply_count: number;

    reply_to_post_number: string | null;

    reviewable_id: number | null;

    reviewable_score_count: number;

    reviewable_score_pending_count: number;

    score: number;

    staff: boolean;

    topic_id: number;

    topic_slug: string;

    trust_level: number;

    updated_at: string;

    user_deleted: boolean;

    user_id: number;

    user_title: string | null;

    username: string;

    version: number;

    wiki: boolean;

    yours: boolean;

    badges_granted?: Array<unknown>;

    can_see_hidden_post?: boolean;

    display_username?: string | null;

    flair_group_id?: number | null;

    mentioned_users?: Array<unknown>;

    name?: string | null;
  }

  export namespace Post {
    export interface ActionsSummary {
      id: number;

      can_act: boolean;
    }
  }
}

export interface PostListResponse {
  latest_posts?: Array<PostListResponse.LatestPost>;
}

export namespace PostListResponse {
  export interface LatestPost {
    id?: number;

    actions_summary?: Array<LatestPost.ActionsSummary>;

    admin?: boolean;

    avatar_template?: string;

    can_delete?: boolean;

    can_edit?: boolean;

    can_recover?: boolean;

    can_see_hidden_post?: boolean;

    can_view_edit_history?: boolean;

    can_wiki?: boolean;

    category_id?: number;

    cooked?: string;

    created_at?: string;

    deleted_at?: string | null;

    display_username?: string;

    edit_reason?: string | null;

    flair_bg_color?: string | null;

    flair_color?: string | null;

    flair_group_id?: number | null;

    flair_name?: string | null;

    flair_url?: string | null;

    hidden?: boolean;

    incoming_link_count?: number;

    moderator?: boolean;

    name?: string;

    post_number?: number;

    post_type?: number;

    primary_group_name?: string | null;

    quote_count?: number;

    raw?: string;

    readers_count?: number;

    reads?: number;

    reply_count?: number;

    reply_to_post_number?: string | null;

    reviewable_id?: number | null;

    reviewable_score_count?: number;

    reviewable_score_pending_count?: number;

    score?: number;

    staff?: boolean;

    topic_html_title?: string;

    topic_id?: number;

    topic_slug?: string;

    topic_title?: string;

    trust_level?: number;

    updated_at?: string;

    user_deleted?: boolean;

    user_id?: number;

    user_title?: string | null;

    username?: string;

    version?: number;

    wiki?: boolean;

    yours?: boolean;
  }

  export namespace LatestPost {
    export interface ActionsSummary {
      id?: number;

      can_act?: boolean;
    }
  }
}

export interface PostCreateParams {
  raw: string;

  /**
   * Required for new private message.
   */
  archetype?: string;

  /**
   * Optional if creating a new topic, and ignored if creating a new post.
   */
  category?: number;

  created_at?: string;

  /**
   * Provide a URL from a remote system to associate a forum topic with that URL,
   * typically for using Discourse as a comments system for an external blog.
   */
  embed_url?: string;

  /**
   * Provide an external_id from a remote system to associate a forum topic with that
   * id.
   */
  external_id?: string;

  /**
   * Optional, the post number to reply to inside a topic.
   */
  reply_to_post_number?: number;

  /**
   * Required for private message, comma separated.
   */
  target_recipients?: string;

  /**
   * @deprecated Deprecated. Use target_recipients instead.
   */
  target_usernames?: string;

  /**
   * Required if creating a new topic or new private message.
   */
  title?: string;

  /**
   * Required if creating a new post.
   */
  topic_id?: number;
}

export interface PostUpdateParams {
  post?: PostUpdateParams.Post;
}

export namespace PostUpdateParams {
  export interface Post {
    raw: string;

    edit_reason?: string;
  }
}

export interface PostListParams {
  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Query param: Load posts with an id lower than this value. Useful for pagination.
   */
  before?: string;
}

export interface PostDeleteParams {
  /**
   * The `SiteSetting.can_permanently_delete` needs to be enabled first before this
   * param can be used. Also this endpoint needs to be called first without
   * `force_destroy` and then followed up with a second call 5 minutes later with
   * `force_destroy` to permanently delete.
   */
  force_destroy?: boolean;
}

export declare namespace Posts {
  export {
    type PostCreateResponse as PostCreateResponse,
    type PostRetrieveResponse as PostRetrieveResponse,
    type PostUpdateResponse as PostUpdateResponse,
    type PostListResponse as PostListResponse,
    type PostCreateParams as PostCreateParams,
    type PostUpdateParams as PostUpdateParams,
    type PostListParams as PostListParams,
    type PostDeleteParams as PostDeleteParams,
  };
}
