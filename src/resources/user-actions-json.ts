// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UserActionsJson extends APIResource {
  /**
   * Get a list of user actions
   */
  list(query: UserActionsJsonListParams, options?: RequestOptions): APIPromise<UserActionsJsonListResponse> {
    return this._client.get('/user_actions.json', { query, ...options });
  }
}

export interface UserActionsJsonListResponse {
  user_actions: Array<UserActionsJsonListResponse.UserAction>;
}

export namespace UserActionsJsonListResponse {
  export interface UserAction {
    acting_avatar_template: string;

    acting_name: string | null;

    acting_user_id: number;

    acting_username: string;

    action_code: string | null;

    action_type: number;

    archived: boolean;

    avatar_template: string;

    category_id: number;

    closed: boolean;

    created_at: string;

    deleted: boolean;

    excerpt: string;

    hidden: string | null;

    name: string | null;

    post_id: string | null;

    post_number: number;

    post_type: string | null;

    slug: string;

    target_name: string | null;

    target_user_id: number;

    target_username: string;

    title: string;

    topic_id: number;

    user_id: number;

    username: string;
  }
}

export interface UserActionsJsonListParams {
  filter: string;

  offset: number;

  username: string;
}

export declare namespace UserActionsJson {
  export {
    type UserActionsJsonListResponse as UserActionsJsonListResponse,
    type UserActionsJsonListParams as UserActionsJsonListParams,
  };
}
