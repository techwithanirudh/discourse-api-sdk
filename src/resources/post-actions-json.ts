// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class PostActionsJson extends APIResource {
  /**
   * Like a post and other actions
   */
  create(
    params: PostActionsJsonCreateParams,
    options?: RequestOptions,
  ): APIPromise<PostActionsJsonCreateResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.post('/post_actions.json', {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }
}

export interface PostActionsJsonCreateResponse {
  id?: number;

  actions_summary?: Array<PostActionsJsonCreateResponse.ActionsSummary>;

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

  display_username?: string;

  edit_reason?: string | null;

  flair_bg_color?: string | null;

  flair_color?: string | null;

  flair_name?: string | null;

  flair_url?: string | null;

  hidden?: boolean;

  incoming_link_count?: number;

  moderator?: boolean;

  name?: string;

  notice?: unknown;

  notice_created_by_user?: unknown | null;

  post_number?: number;

  post_type?: number;

  primary_group_name?: string | null;

  quote_count?: number;

  readers_count?: number;

  reads?: number;

  reply_count?: number;

  reply_to_post_number?: string | null;

  reviewable_id?: number | null;

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

export namespace PostActionsJsonCreateResponse {
  export interface ActionsSummary {
    id?: number;

    acted?: boolean;

    can_undo?: boolean;

    count?: number;
  }
}

export interface PostActionsJsonCreateParams {
  /**
   * Body param:
   */
  id: number;

  /**
   * Body param:
   */
  post_action_type_id: number;

  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Body param:
   */
  flag_topic?: boolean;
}

export declare namespace PostActionsJson {
  export {
    type PostActionsJsonCreateResponse as PostActionsJsonCreateResponse,
    type PostActionsJsonCreateParams as PostActionsJsonCreateParams,
  };
}
