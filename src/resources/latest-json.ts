// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class LatestJson extends APIResource {
  /**
   * Get the latest topics
   */
  getLatest(
    params: LatestJsonGetLatestParams,
    options?: RequestOptions,
  ): APIPromise<LatestJsonGetLatestResponse> {
    const { 'Api-Username': apiUsername, ...query } = params;
    return this._client.get('/latest.json', {
      query,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }
}

export interface LatestJsonGetLatestResponse {
  primary_groups?: Array<unknown>;

  topic_list?: LatestJsonGetLatestResponse.TopicList;

  users?: Array<LatestJsonGetLatestResponse.User>;
}

export namespace LatestJsonGetLatestResponse {
  export interface TopicList {
    can_create_topic?: boolean;

    draft?: string | null;

    draft_key?: string;

    draft_sequence?: number;

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

      image_url?: string;

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

      unpinned?: string | null;

      unread_posts?: number;

      unseen?: boolean;

      views?: number;

      visible?: boolean;
    }

    export namespace Topic {
      export interface Poster {
        description?: string;

        extras?: string;

        primary_group_id?: number | null;

        user_id?: number;
      }
    }
  }

  export interface User {
    id?: number;

    avatar_template?: string;

    name?: string | null;

    username?: string;
  }
}

export interface LatestJsonGetLatestParams {
  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Query param: Defaults to `desc`, add `ascending=true` to sort asc
   */
  ascending?: string;

  /**
   * Query param: Enum: `default`, `created`, `activity`, `views`, `posts`,
   * `category`, `likes`, `op_likes`, `posters`
   */
  order?: string;

  /**
   * Query param: Maximum number of topics returned, between 1-100
   */
  per_page?: number;
}

export declare namespace LatestJson {
  export {
    type LatestJsonGetLatestResponse as LatestJsonGetLatestResponse,
    type LatestJsonGetLatestParams as LatestJsonGetLatestParams,
  };
}
