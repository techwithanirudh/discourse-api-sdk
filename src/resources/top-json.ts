// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class TopJson extends APIResource {
  /**
   * Get the top topics filtered by period
   */
  retrieve(params: TopJsonRetrieveParams, options?: RequestOptions): APIPromise<TopJsonRetrieveResponse> {
    const { 'Api-Username': apiUsername, ...query } = params;
    return this._client.get('/top.json', {
      query,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }
}

export interface TopJsonRetrieveResponse {
  primary_groups?: Array<unknown>;

  topic_list?: TopJsonRetrieveResponse.TopicList;

  users?: Array<TopJsonRetrieveResponse.User>;
}

export namespace TopJsonRetrieveResponse {
  export interface TopicList {
    can_create_topic?: boolean;

    draft?: string | null;

    draft_key?: string;

    draft_sequence?: number;

    for_period?: string;

    per_page?: number;

    topics?: Array<TopicList.Topic>;
  }

  export namespace TopicList {
    export interface Topic {
      id?: number;

      archetype?: string;

      archived?: boolean;

      bookmarked?: boolean;

      bumped?: boolean;

      bumped_at?: string;

      category_id?: number;

      closed?: boolean;

      created_at?: string;

      fancy_title?: string;

      featured_link?: string | null;

      has_summary?: boolean;

      highest_post_number?: number;

      image_url?: string | null;

      last_posted_at?: string;

      last_poster_username?: string;

      last_read_post_number?: number;

      like_count?: number;

      liked?: boolean;

      notification_level?: number;

      op_like_count?: number;

      pinned?: boolean;

      pinned_globally?: boolean;

      posters?: Array<Topic.Poster>;

      posts_count?: number;

      reply_count?: number;

      slug?: string;

      title?: string;

      unpinned?: boolean;

      unread_posts?: number;

      unseen?: boolean;

      views?: number;

      visible?: boolean;
    }

    export namespace Topic {
      export interface Poster {
        description?: string;

        extras?: string | null;

        primary_group_id?: number | null;

        user_id?: number;
      }
    }
  }

  export interface User {
    id?: number;

    avatar_template?: string;

    name?: string;

    username?: string;
  }
}

export interface TopJsonRetrieveParams {
  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Query param: Maximum number of topics returned, between 1-100
   */
  per_page?: number;

  /**
   * Query param: Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily`
   */
  period?: string;
}

export declare namespace TopJson {
  export {
    type TopJsonRetrieveResponse as TopJsonRetrieveResponse,
    type TopJsonRetrieveParams as TopJsonRetrieveParams,
  };
}
