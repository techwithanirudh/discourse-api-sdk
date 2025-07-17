// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExternalIDAPI from './external-id';
import { ExternalID } from './external-id';
import * as JsonAPI from './json';
import {
  Json,
  JsonDeleteParams,
  JsonRetrieveParams,
  JsonRetrieveResponse,
  JsonUpdateParams,
  JsonUpdateResponse,
} from './json';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class T extends APIResource {
  json: JsonAPI.Json = new JsonAPI.Json(this._client);
  externalID: ExternalIDAPI.ExternalID = new ExternalIDAPI.ExternalID(this._client);

  /**
   * Bookmark topic
   *
   * @example
   * ```ts
   * await client.t.bookmark('id', {
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  bookmark(id: string, params: TBookmarkParams, options?: RequestOptions): APIPromise<void> {
    const { 'Api-Username': apiUsername } = params;
    return this._client.put(path`/t/${id}/bookmark.json`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'Api-Username': apiUsername }, options?.headers]),
    });
  }

  /**
   * Create topic timer
   *
   * @example
   * ```ts
   * const response = await client.t.createTimer('id', {
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  createTimer(
    id: string,
    params: TCreateTimerParams,
    options?: RequestOptions,
  ): APIPromise<TCreateTimerResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.post(path`/t/${id}/timer.json`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }

  /**
   * Invite to topic
   *
   * @example
   * ```ts
   * const response = await client.t.invite('id', {
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  invite(id: string, params: TInviteParams, options?: RequestOptions): APIPromise<TInviteResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.post(path`/t/${id}/invite.json`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }

  /**
   * Invite group to topic
   *
   * @example
   * ```ts
   * const response = await client.t.inviteGroup('id', {
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  inviteGroup(
    id: string,
    params: TInviteGroupParams,
    options?: RequestOptions,
  ): APIPromise<TInviteGroupResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.post(path`/t/${id}/invite-group.json`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }

  /**
   * Get specific posts from a topic
   *
   * @example
   * ```ts
   * const response = await client.t.retrievePosts('id', {
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  retrievePosts(
    id: string,
    params: TRetrievePostsParams,
    options?: RequestOptions,
  ): APIPromise<TRetrievePostsResponse> {
    const { 'Api-Username': apiUsername } = params;
    return this._client.get(path`/t/${id}/posts.json`, {
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }

  /**
   * Set notification level
   *
   * @example
   * ```ts
   * const response = await client.t.setNotifications('id', {
   *   notification_level: '0',
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  setNotifications(
    id: string,
    params: TSetNotificationsParams,
    options?: RequestOptions,
  ): APIPromise<TSetNotificationsResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.post(path`/t/${id}/notifications.json`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }

  /**
   * Update the status of a topic
   *
   * @example
   * ```ts
   * const response = await client.t.updateStatus('id', {
   *   enabled: 'true',
   *   status: 'closed',
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  updateStatus(
    id: string,
    params: TUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<TUpdateStatusResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.put(path`/t/${id}/status.json`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }

  /**
   * Update topic timestamp
   *
   * @example
   * ```ts
   * const response = await client.t.updateTimestamp('id', {
   *   timestamp: '1594291380',
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  updateTimestamp(
    id: string,
    params: TUpdateTimestampParams,
    options?: RequestOptions,
  ): APIPromise<TUpdateTimestampResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.put(path`/t/${id}/change-timestamp.json`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }
}

export interface TCreateTimerResponse {
  based_on_last_post?: boolean;

  category_id?: number | null;

  closed?: boolean;

  duration?: string | null;

  execute_at?: string;

  success?: string;
}

export interface TInviteResponse {
  user?: TInviteResponse.User;
}

export namespace TInviteResponse {
  export interface User {
    id?: number;

    avatar_template?: string;

    name?: string;

    username?: string;
  }
}

export interface TInviteGroupResponse {
  group?: TInviteGroupResponse.Group;
}

export namespace TInviteGroupResponse {
  export interface Group {
    id?: number;

    name?: string;
  }
}

export interface TRetrievePostsResponse {
  id?: number;

  post_stream?: TRetrievePostsResponse.PostStream;
}

export namespace TRetrievePostsResponse {
  export interface PostStream {
    posts?: Array<PostStream.Post>;
  }

  export namespace PostStream {
    export interface Post {
      id?: number;

      actions_summary?: Array<Post.ActionsSummary>;

      admin?: boolean;

      avatar_template?: string;

      can_delete?: boolean;

      can_edit?: boolean;

      can_recover?: boolean;

      can_view_edit_history?: boolean;

      can_wiki?: boolean;

      cooked?: string;

      created_at?: string;

      deleted_at?: string | null;

      display_username?: string | null;

      edit_reason?: string | null;

      flair_bg_color?: string | null;

      flair_color?: string | null;

      flair_name?: string | null;

      flair_url?: string | null;

      hidden?: boolean;

      incoming_link_count?: number;

      moderator?: boolean;

      name?: string | null;

      post_number?: number;

      post_type?: number;

      primary_group_name?: string | null;

      quote_count?: number;

      read?: boolean;

      readers_count?: number;

      reads?: number;

      reply_count?: number;

      reply_to_post_number?: string | null;

      reviewable_id?: number;

      reviewable_score_count?: number;

      reviewable_score_pending_count?: number;

      score?: number;

      staff?: boolean;

      topic_id?: number;

      topic_slug?: string;

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

    export namespace Post {
      export interface ActionsSummary {
        id?: number;

        can_act?: boolean;
      }
    }
  }
}

export interface TSetNotificationsResponse {
  success?: string;
}

export interface TUpdateStatusResponse {
  success?: string;

  topic_status_update?: string | null;
}

export interface TUpdateTimestampResponse {
  success?: string;
}

export interface TBookmarkParams {
  'Api-Username': string;
}

export interface TCreateTimerParams {
  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Body param:
   */
  based_on_last_post?: boolean;

  /**
   * Body param:
   */
  category_id?: number;

  /**
   * Body param:
   */
  status_type?: string;

  /**
   * Body param:
   */
  time?: string;
}

export interface TInviteParams {
  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Body param:
   */
  email?: string;

  /**
   * Body param:
   */
  user?: string;
}

export interface TInviteGroupParams {
  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Body param: The name of the group to invite
   */
  group?: string;

  /**
   * Body param: Whether to notify the group, it defaults to true
   */
  should_notify?: boolean;
}

export interface TRetrievePostsParams {
  'Api-Username': string;
}

export interface TSetNotificationsParams {
  /**
   * Body param:
   */
  notification_level: '0' | '1' | '2' | '3';

  /**
   * Header param:
   */
  'Api-Username': string;
}

export interface TUpdateStatusParams {
  /**
   * Body param:
   */
  enabled: 'true' | 'false';

  /**
   * Body param:
   */
  status: 'closed' | 'pinned' | 'pinned_globally' | 'archived' | 'visible';

  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Body param: Only required for `pinned` and `pinned_globally`
   */
  until?: string;
}

export interface TUpdateTimestampParams {
  /**
   * Body param:
   */
  timestamp: string;

  /**
   * Header param:
   */
  'Api-Username': string;
}

T.Json = Json;
T.ExternalID = ExternalID;

export declare namespace T {
  export {
    type TCreateTimerResponse as TCreateTimerResponse,
    type TInviteResponse as TInviteResponse,
    type TInviteGroupResponse as TInviteGroupResponse,
    type TRetrievePostsResponse as TRetrievePostsResponse,
    type TSetNotificationsResponse as TSetNotificationsResponse,
    type TUpdateStatusResponse as TUpdateStatusResponse,
    type TUpdateTimestampResponse as TUpdateTimestampResponse,
    type TBookmarkParams as TBookmarkParams,
    type TCreateTimerParams as TCreateTimerParams,
    type TInviteParams as TInviteParams,
    type TInviteGroupParams as TInviteGroupParams,
    type TRetrievePostsParams as TRetrievePostsParams,
    type TSetNotificationsParams as TSetNotificationsParams,
    type TUpdateStatusParams as TUpdateStatusParams,
    type TUpdateTimestampParams as TUpdateTimestampParams,
  };

  export {
    Json as Json,
    type JsonRetrieveResponse as JsonRetrieveResponse,
    type JsonUpdateResponse as JsonUpdateResponse,
    type JsonRetrieveParams as JsonRetrieveParams,
    type JsonUpdateParams as JsonUpdateParams,
    type JsonDeleteParams as JsonDeleteParams,
  };

  export { ExternalID as ExternalID };
}
