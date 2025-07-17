// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CategoriesJson extends APIResource {
  /**
   * Creates a category
   *
   * @example
   * ```ts
   * const categoriesJson = await client.categoriesJson.create({
   *   name: 'name',
   * });
   * ```
   */
  create(
    body: CategoriesJsonCreateParams,
    options?: RequestOptions,
  ): APIPromise<CategoriesJsonCreateResponse> {
    return this._client.post('/categories.json', { body, ...options });
  }

  /**
   * Retrieves a list of categories
   *
   * @example
   * ```ts
   * const categoriesJsons = await client.categoriesJson.list();
   * ```
   */
  list(
    query: CategoriesJsonListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoriesJsonListResponse> {
    return this._client.get('/categories.json', { query, ...options });
  }
}

export interface CategoriesJsonCreateResponse {
  category: CategoriesJsonCreateResponse.Category;
}

export namespace CategoriesJsonCreateResponse {
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

export interface CategoriesJsonListResponse {
  category_list: CategoriesJsonListResponse.CategoryList;
}

export namespace CategoriesJsonListResponse {
  export interface CategoryList {
    can_create_category: boolean;

    can_create_topic: boolean;

    categories: Array<CategoryList.Category>;
  }

  export namespace CategoryList {
    export interface Category {
      id: number;

      can_edit: boolean;

      color: string;

      default_list_filter: string;

      default_top_period: string;

      default_view: string | null;

      description: string | null;

      description_excerpt: string | null;

      description_text: string | null;

      has_children: boolean;

      minimum_required_tags: number;

      name: string;

      navigate_to_first_post_after_read: boolean;

      notification_level: number;

      num_featured_topics: number;

      permission: number;

      position: number;

      post_count: number;

      read_restricted: boolean;

      show_subcategory_list: boolean;

      slug: string;

      sort_ascending: string | null;

      sort_order: string | null;

      subcategory_count: number | null;

      subcategory_ids: Array<unknown>;

      subcategory_list_style: string;

      text_color: string;

      topic_count: number;

      topic_template: string | null;

      topic_url: string | null;

      topics_all_time: number;

      topics_day: number;

      topics_month: number;

      topics_week: number;

      topics_year: number;

      uploaded_background: string | null;

      uploaded_background_dark: string | null;

      uploaded_logo: string | null;

      uploaded_logo_dark: string | null;

      is_uncategorized?: boolean;

      subcategory_list?: Array<unknown> | null;
    }
  }
}

export interface CategoriesJsonCreateParams {
  name: string;

  allow_badges?: boolean;

  color?: string;

  form_template_ids?: Array<unknown>;

  parent_category_id?: number;

  permissions?: CategoriesJsonCreateParams.Permissions;

  search_priority?: number;

  slug?: string;

  text_color?: string;

  topic_featured_links_allowed?: boolean;
}

export namespace CategoriesJsonCreateParams {
  export interface Permissions {
    everyone?: number;

    staff?: number;

    [k: string]: unknown;
  }
}

export interface CategoriesJsonListParams {
  include_subcategories?: true;
}

export declare namespace CategoriesJson {
  export {
    type CategoriesJsonCreateResponse as CategoriesJsonCreateResponse,
    type CategoriesJsonListResponse as CategoriesJsonListResponse,
    type CategoriesJsonCreateParams as CategoriesJsonCreateParams,
    type CategoriesJsonListParams as CategoriesJsonListParams,
  };
}
