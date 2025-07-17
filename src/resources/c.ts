// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class C extends APIResource {
  /**
   * List topics
   */
  listTopics(
    id: number,
    params: CListTopicsParams,
    options?: RequestOptions,
  ): APIPromise<CListTopicsResponse> {
    const { slug } = params;
    return this._client.get(path`/c/${slug}/${id}.json`, options);
  }

  /**
   * Show category
   */
  showCategory(id: number, options?: RequestOptions): APIPromise<CShowCategoryResponse> {
    return this._client.get(path`/c/${id}/show.json`, options);
  }
}

export interface CListTopicsResponse {
  topic_list: CListTopicsResponse.TopicList;

  primary_groups?: Array<unknown>;

  users?: Array<CListTopicsResponse.User>;
}

export namespace CListTopicsResponse {
  export interface TopicList {
    can_create_topic: boolean;

    per_page: number;

    topics: Array<TopicList.Topic>;

    top_tags?: Array<unknown>;
  }

  export namespace TopicList {
    export interface Topic {
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

      has_summary: boolean;

      highest_post_number: number;

      image_url: string | null;

      last_posted_at: string;

      last_poster_username: string;

      like_count: number;

      liked: string | null;

      pinned: boolean;

      pinned_globally: boolean;

      posters: Array<Topic.Poster>;

      posts_count: number;

      reply_count: number;

      slug: string;

      title: string;

      unpinned: string | null;

      unseen: boolean;

      views: number;

      visible: boolean;
    }

    export namespace Topic {
      export interface Poster {
        description: string;

        extras: string;

        primary_group_id: number | null;

        user_id: number;
      }
    }
  }

  export interface User {
    id: number;

    avatar_template: string;

    name: string;

    username: string;
  }
}

export interface CShowCategoryResponse {
  category: CShowCategoryResponse.Category;
}

export namespace CShowCategoryResponse {
  export interface Category {
    id: number;

    all_topics_wiki: boolean;

    allow_badges: boolean;

    allow_unlimited_owner_edits_on_first_post: boolean;

    auto_close_based_on_last_post: boolean;

    auto_close_hours: string | null;

    available_groups: Array<unknown>;

    can_delete: boolean;

    can_edit: boolean;

    color: string;

    custom_fields: unknown;

    default_list_filter: string;

    default_slow_mode_seconds: string | null;

    default_top_period: string;

    default_view: string | null;

    description: string | null;

    description_excerpt: string | null;

    description_text: string | null;

    email_in: string | null;

    email_in_allow_strangers: boolean;

    group_permissions: Array<Category.GroupPermission>;

    has_children: boolean | null;

    mailinglist_mirror: boolean;

    minimum_required_tags: number;

    name: string;

    navigate_to_first_post_after_read: boolean;

    notification_level: number;

    num_featured_topics: number;

    permission: number | null;

    position: number;

    post_count: number;

    read_only_banner: string | null;

    read_restricted: boolean;

    required_tag_groups: Array<Category.RequiredTagGroup>;

    search_priority: number;

    show_subcategory_list: boolean;

    slug: string;

    sort_ascending: string | null;

    sort_order: string | null;

    subcategory_count: number | null;

    subcategory_list_style: string;

    text_color: string;

    topic_count: number;

    topic_featured_link_allowed: boolean;

    topic_template: string | null;

    topic_url: string | null;

    uploaded_background: string | null;

    uploaded_background_dark: string | null;

    uploaded_logo: string | null;

    uploaded_logo_dark: string | null;

    allow_global_tags?: boolean;

    allowed_tag_groups?: Array<unknown>;

    allowed_tags?: Array<unknown>;

    category_setting?: unknown;

    form_template_ids?: Array<unknown>;
  }

  export namespace Category {
    export interface GroupPermission {
      group_name: string;

      permission_type: number;
    }

    export interface RequiredTagGroup {
      min_count: number;

      name: string;
    }
  }
}

export interface CListTopicsParams {
  slug: string;
}

export declare namespace C {
  export {
    type CListTopicsResponse as CListTopicsResponse,
    type CShowCategoryResponse as CShowCategoryResponse,
    type CListTopicsParams as CListTopicsParams,
  };
}
