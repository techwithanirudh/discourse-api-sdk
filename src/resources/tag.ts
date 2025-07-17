// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tag extends APIResource {
  /**
   * Get a specific tag
   */
  retrieve(name: string, options?: RequestOptions): APIPromise<TagRetrieveResponse> {
    return this._client.get(path`/tag/${name}.json`, options);
  }
}

export interface TagRetrieveResponse {
  primary_groups?: Array<unknown>;

  topic_list?: TagRetrieveResponse.TopicList;

  users?: Array<TagRetrieveResponse.User>;
}

export namespace TagRetrieveResponse {
  export interface TopicList {
    can_create_topic?: boolean;

    draft?: string | null;

    draft_key?: string;

    draft_sequence?: number;

    per_page?: number;

    tags?: Array<TopicList.Tag>;

    topics?: Array<TopicList.Topic>;
  }

  export namespace TopicList {
    export interface Tag {
      id?: number;

      name?: string;

      staff?: boolean;

      topic_count?: number;
    }

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

      pinned?: boolean;

      pinned_globally?: boolean;

      posters?: Array<Topic.Poster>;

      posts_count?: number;

      reply_count?: number;

      slug?: string;

      tags?: Array<unknown>;

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

export declare namespace Tag {
  export { type TagRetrieveResponse as TagRetrieveResponse };
}
