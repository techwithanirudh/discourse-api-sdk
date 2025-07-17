// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Updates a category
   *
   * @example
   * ```ts
   * const category = await client.categories.update(0, {
   *   name: 'name',
   * });
   * ```
   */
  update(
    id: number,
    body: CategoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CategoryUpdateResponse> {
    return this._client.put(path`/categories/${id}.json`, { body, ...options });
  }
}

export interface CategoryUpdateResponse {
  category: CategoryUpdateResponse.Category;

  success: string;
}

export namespace CategoryUpdateResponse {
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

    form_template_ids: Array<unknown>;

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

export interface CategoryUpdateParams {
  name: string;

  allow_badges?: boolean;

  color?: string;

  form_template_ids?: Array<unknown>;

  parent_category_id?: number;

  permissions?: CategoryUpdateParams.Permissions;

  search_priority?: number;

  slug?: string;

  text_color?: string;

  topic_featured_links_allowed?: boolean;
}

export namespace CategoryUpdateParams {
  export interface Permissions {
    everyone?: number;

    staff?: number;

    [k: string]: unknown;
  }
}

export declare namespace Categories {
  export {
    type CategoryUpdateResponse as CategoryUpdateResponse,
    type CategoryUpdateParams as CategoryUpdateParams,
  };
}
