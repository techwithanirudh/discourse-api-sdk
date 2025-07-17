// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Json extends APIResource {
  /**
   * Get a single topic
   *
   * @example
   * ```ts
   * const json = await client.t.json.retrieve('id', {
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  retrieve(
    id: string,
    params: JsonRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<JsonRetrieveResponse> {
    const { 'Api-Username': apiUsername } = params;
    return this._client.get(path`/t/${id}.json`, {
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }

  /**
   * Update a topic
   *
   * @example
   * ```ts
   * const json = await client.t.json.update('id', {
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  update(id: string, params: JsonUpdateParams, options?: RequestOptions): APIPromise<JsonUpdateResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.put(path`/t/-/${id}.json`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }

  /**
   * Remove a topic
   *
   * @example
   * ```ts
   * await client.t.json.delete('id', {
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  delete(id: string, params: JsonDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { 'Api-Username': apiUsername } = params;
    return this._client.delete(path`/t/${id}.json`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'Api-Username': apiUsername }, options?.headers]),
    });
  }
}

export interface JsonRetrieveResponse {
  id: number;

  actions_summary: Array<JsonRetrieveResponse.ActionsSummary>;

  archetype: string;

  archived: boolean;

  bookmarked: boolean;

  bookmarks: Array<unknown>;

  category_id: number;

  chunk_size: number;

  closed: boolean;

  created_at: string;

  deleted_at: string | null;

  deleted_by: string | null;

  details: JsonRetrieveResponse.Details;

  draft: string | null;

  draft_key: string;

  draft_sequence: number;

  fancy_title: string;

  featured_link: string | null;

  has_deleted: boolean;

  has_summary: boolean;

  highest_post_number: number | null;

  image_url: string | null;

  last_posted_at: string | null;

  like_count: number;

  message_bus_last_id: number;

  participant_count: number;

  pinned: boolean;

  pinned_at: string | null;

  pinned_globally: boolean;

  pinned_until: string | null;

  post_stream: JsonRetrieveResponse.PostStream;

  posts_count: number;

  reply_count: number;

  show_read_indicator: boolean;

  slow_mode_enabled_until: string | null;

  slow_mode_seconds: number;

  slug: string;

  suggested_topics: Array<JsonRetrieveResponse.SuggestedTopic>;

  tags: Array<unknown>;

  tags_descriptions: unknown;

  thumbnails: string | null;

  timeline_lookup: Array<unknown>;

  title: string;

  topic_timer: string | null;

  unpinned: string | null;

  user_id: number;

  views: number;

  visible: boolean;

  word_count: number | null;

  current_post_number?: number;
}

export namespace JsonRetrieveResponse {
  export interface ActionsSummary {
    id: number;

    can_act: boolean;

    count: number;

    hidden: boolean;
  }

  export interface Details {
    can_archive_topic: boolean;

    can_close_topic: boolean;

    can_convert_topic: boolean;

    can_create_post: boolean;

    can_delete: boolean;

    can_edit: boolean;

    can_edit_staff_notes: boolean;

    can_moderate_category: boolean;

    can_move_posts: boolean;

    can_pin_unpin_topic: boolean;

    can_remove_allowed_users: boolean;

    can_remove_self_id: number;

    can_reply_as_new_topic: boolean;

    can_review_topic: boolean;

    can_split_merge_topic: boolean;

    can_toggle_topic_visibility: boolean;

    created_by: Details.CreatedBy;

    last_poster: Details.LastPoster;

    notification_level: number;

    can_flag_topic?: boolean;

    can_invite_to?: boolean;

    can_invite_via_email?: boolean;

    participants?: Array<Details.Participant>;
  }

  export namespace Details {
    export interface CreatedBy {
      id: number;

      avatar_template: string;

      name: string;

      username: string;
    }

    export interface LastPoster {
      id: number;

      avatar_template: string;

      name: string;

      username: string;
    }

    export interface Participant {
      id: number;

      admin: boolean;

      avatar_template: string;

      flair_bg_color: string | null;

      flair_color: string | null;

      flair_name: string | null;

      flair_url: string | null;

      moderator: boolean;

      name: string;

      post_count: number;

      primary_group_name: string | null;

      trust_level: number;

      username: string;

      flair_group_id?: number | null;
    }
  }

  export interface PostStream {
    posts: Array<PostStream.Post>;

    stream: Array<unknown>;
  }

  export namespace PostStream {
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

      display_username: string;

      edit_reason: string | null;

      flair_bg_color: string | null;

      flair_color: string | null;

      flair_name: string | null;

      flair_url: string | null;

      hidden: boolean;

      incoming_link_count: number;

      link_counts: Array<Post.LinkCount>;

      moderator: boolean;

      name: string;

      post_number: number;

      post_type: number;

      primary_group_name: string | null;

      quote_count: number;

      read: boolean;

      readers_count: number;

      reads: number;

      reply_count: number;

      reply_to_post_number: string | null;

      reviewable_id: number;

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
    }

    export namespace Post {
      export interface ActionsSummary {
        id: number;

        can_act: boolean;
      }

      export interface LinkCount {
        clicks: number;

        internal: boolean;

        reflection: boolean;

        title: string;

        url: string;
      }
    }
  }

  export interface SuggestedTopic {
    id: number;

    archetype: string;

    archived: boolean;

    bookmarked: string | null;

    bumped: boolean;

    bumped_at: string;

    category_id: number;

    closed: boolean;

    created_at: string;

    excerpt: string;

    fancy_title: string;

    featured_link: string | null;

    highest_post_number: number;

    image_url: string | null;

    last_posted_at: string | null;

    like_count: number;

    liked: string | null;

    pinned: boolean;

    posters: Array<SuggestedTopic.Poster>;

    posts_count: number;

    reply_count: number;

    slug: string;

    tags: Array<unknown>;

    tags_descriptions: unknown;

    title: string;

    unpinned: string | null;

    unseen: boolean;

    views: number;

    visible: boolean;
  }

  export namespace SuggestedTopic {
    export interface Poster {
      description: string;

      extras: string;

      user: Poster.User;
    }

    export namespace Poster {
      export interface User {
        id: number;

        avatar_template: string;

        name: string;

        username: string;
      }
    }
  }
}

export interface JsonUpdateResponse {
  basic_topic?: JsonUpdateResponse.BasicTopic;
}

export namespace JsonUpdateResponse {
  export interface BasicTopic {
    id?: number;

    fancy_title?: string;

    posts_count?: number;

    slug?: string;

    title?: string;
  }
}

export interface JsonRetrieveParams {
  'Api-Username': string;
}

export interface JsonUpdateParams {
  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Body param:
   */
  topic?: JsonUpdateParams.Topic;
}

export namespace JsonUpdateParams {
  export interface Topic {
    category_id?: number;

    title?: string;
  }
}

export interface JsonDeleteParams {
  'Api-Username': string;
}

export declare namespace Json {
  export {
    type JsonRetrieveResponse as JsonRetrieveResponse,
    type JsonUpdateResponse as JsonUpdateResponse,
    type JsonRetrieveParams as JsonRetrieveParams,
    type JsonUpdateParams as JsonUpdateParams,
    type JsonDeleteParams as JsonDeleteParams,
  };
}
