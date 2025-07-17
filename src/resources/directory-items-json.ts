// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DirectoryItemsJson extends APIResource {
  /**
   * Get a public list of users
   */
  list(
    query: DirectoryItemsJsonListParams,
    options?: RequestOptions,
  ): APIPromise<DirectoryItemsJsonListResponse> {
    return this._client.get('/directory_items.json', { query, ...options });
  }
}

export interface DirectoryItemsJsonListResponse {
  directory_items: Array<DirectoryItemsJsonListResponse.DirectoryItem>;

  meta: DirectoryItemsJsonListResponse.Meta;
}

export namespace DirectoryItemsJsonListResponse {
  export interface DirectoryItem {
    id: number;

    days_visited: number;

    likes_given: number;

    likes_received: number;

    post_count: number;

    posts_read: number;

    topic_count: number;

    topics_entered: number;

    user: DirectoryItem.User;
  }

  export namespace DirectoryItem {
    export interface User {
      id: number;

      avatar_template: string;

      name: string | null;

      title: string | null;

      username: string;
    }
  }

  export interface Meta {
    last_updated_at: string | null;

    load_more_directory_items: string;

    total_rows_directory_items: number;
  }
}

export interface DirectoryItemsJsonListParams {
  order:
    | 'likes_received'
    | 'likes_given'
    | 'topic_count'
    | 'post_count'
    | 'topics_entered'
    | 'posts_read'
    | 'days_visited';

  period: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly' | 'all';

  asc?: 'true';

  page?: number;
}

export declare namespace DirectoryItemsJson {
  export {
    type DirectoryItemsJsonListResponse as DirectoryItemsJsonListResponse,
    type DirectoryItemsJsonListParams as DirectoryItemsJsonListParams,
  };
}
