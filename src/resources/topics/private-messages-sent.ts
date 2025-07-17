// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PrivateMessagesSent extends APIResource {
  /**
   * Get a list of private messages sent for a user
   */
  list(username: string, options?: RequestOptions): APIPromise<PrivateMessagesSentListResponse> {
    return this._client.get(path`/topics/private-messages-sent/${username}.json`, options);
  }
}

export interface PrivateMessagesSentListResponse {
  primary_groups?: Array<unknown>;

  topic_list?: PrivateMessagesSentListResponse.TopicList;

  users?: Array<PrivateMessagesSentListResponse.User>;
}

export namespace PrivateMessagesSentListResponse {
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

      allowed_user_count?: number;

      archetype?: string;

      archived?: boolean;

      bookmarked?: boolean;

      bumped?: boolean;

      bumped_at?: string;

      category_id?: string | null;

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

      participants?: Array<unknown>;

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

export declare namespace PrivateMessagesSent {
  export { type PrivateMessagesSentListResponse as PrivateMessagesSentListResponse };
}
