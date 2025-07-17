// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class List extends APIResource {
  /**
   * Get a list of users
   *
   * @example
   * ```ts
   * const lists = await client.admin.users.list.get('active');
   * ```
   */
  get(
    flag: 'active' | 'new' | 'staff' | 'suspended' | 'blocked' | 'suspect',
    query: ListGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListGetResponse> {
    return this._client.get(path`/admin/users/list/${flag}.json`, { query, ...options });
  }
}

export type ListGetResponse = Array<ListGetResponse.ListGetResponseItem>;

export namespace ListGetResponse {
  export interface ListGetResponseItem {
    id: number;

    active: boolean;

    admin: boolean;

    avatar_template: string;

    created_at: string;

    created_at_age: number | null;

    days_visited: number;

    last_emailed_age: number | null;

    last_emailed_at: string | null;

    last_seen_age: number | null;

    last_seen_at: string | null;

    manual_locked_trust_level: string | null;

    moderator: boolean;

    name: string | null;

    post_count: number;

    posts_read_count: number;

    staged: boolean;

    time_read: number;

    title: string | null;

    topics_entered: number;

    trust_level: number;

    username: string;

    email?: string;

    secondary_emails?: Array<unknown>;
  }
}

export interface ListGetParams {
  asc?: 'true';

  /**
   * Filter to the user with this email address
   */
  email?: string;

  /**
   * Filter to users with this IP address
   */
  ip?: string;

  order?:
    | 'created'
    | 'last_emailed'
    | 'seen'
    | 'username'
    | 'email'
    | 'trust_level'
    | 'days_visited'
    | 'posts_read'
    | 'topics_viewed'
    | 'posts'
    | 'read_time';

  page?: number;

  /**
   * Include user email addresses in response. These requests will be logged in the
   * staff action logs.
   */
  show_emails?: boolean;

  /**
   * Include user stats information
   */
  stats?: boolean;
}

export declare namespace List {
  export { type ListGetResponse as ListGetResponse, type ListGetParams as ListGetParams };
}
