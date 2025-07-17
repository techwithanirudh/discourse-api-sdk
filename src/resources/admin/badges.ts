// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Badges extends APIResource {
  /**
   * Create badge
   *
   * @example
   * ```ts
   * const badge = await client.admin.badges.create({
   *   badge_type_id: 0,
   *   name: 'name',
   * });
   * ```
   */
  create(body: BadgeCreateParams, options?: RequestOptions): APIPromise<BadgeCreateResponse> {
    return this._client.post('/admin/badges.json', { body, ...options });
  }

  /**
   * Update badge
   *
   * @example
   * ```ts
   * const badge = await client.admin.badges.update(0, {
   *   badge_type_id: 0,
   *   name: 'name',
   * });
   * ```
   */
  update(id: number, body: BadgeUpdateParams, options?: RequestOptions): APIPromise<BadgeUpdateResponse> {
    return this._client.put(path`/admin/badges/${id}.json`, { body, ...options });
  }

  /**
   * List badges
   *
   * @example
   * ```ts
   * const badges = await client.admin.badges.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<BadgeListResponse> {
    return this._client.get('/admin/badges.json', options);
  }

  /**
   * Delete badge
   *
   * @example
   * ```ts
   * await client.admin.badges.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/admin/badges/${id}.json`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BadgeCreateResponse {
  badge: BadgeCreateResponse.Badge;

  badge_types: Array<BadgeCreateResponse.BadgeType>;
}

export namespace BadgeCreateResponse {
  export interface Badge {
    id: number;

    allow_title: boolean;

    auto_revoke: boolean;

    badge_grouping_id: number;

    badge_type_id: number;

    description: string;

    enabled: boolean;

    grant_count: number;

    icon: string;

    image_upload_id: number | null;

    image_url: string | null;

    listable: boolean;

    long_description: string;

    manually_grantable: boolean;

    multiple_grant: boolean;

    name: string;

    query: string | null;

    show_in_post_header: boolean;

    show_posts: boolean;

    slug: string;

    system: boolean;

    target_posts: boolean;

    trigger: string | null;
  }

  export interface BadgeType {
    id: number;

    name: string;

    sort_order: number;
  }
}

export interface BadgeUpdateResponse {
  badge: BadgeUpdateResponse.Badge;

  badge_types: Array<BadgeUpdateResponse.BadgeType>;
}

export namespace BadgeUpdateResponse {
  export interface Badge {
    id: number;

    allow_title: boolean;

    auto_revoke: boolean;

    badge_grouping_id: number;

    badge_type_id: number;

    description: string;

    enabled: boolean;

    grant_count: number;

    icon: string;

    image_upload_id: number | null;

    image_url: string | null;

    listable: boolean;

    long_description: string;

    manually_grantable: boolean;

    multiple_grant: boolean;

    name: string;

    query: string | null;

    show_in_post_header: boolean;

    show_posts: boolean;

    slug: string;

    system: boolean;

    target_posts: boolean;

    trigger: string | null;
  }

  export interface BadgeType {
    id: number;

    name: string;

    sort_order: number;
  }
}

export interface BadgeListResponse {
  admin_badges: BadgeListResponse.AdminBadges;

  badge_groupings: Array<BadgeListResponse.BadgeGrouping>;

  badge_types: Array<BadgeListResponse.BadgeType>;

  badges: Array<BadgeListResponse.Badge>;
}

export namespace BadgeListResponse {
  export interface AdminBadges {
    badge_grouping_ids: Array<unknown>;

    badge_ids: Array<unknown>;

    badge_type_ids: Array<unknown>;

    protected_system_fields: Array<unknown>;

    triggers: AdminBadges.Triggers;
  }

  export namespace AdminBadges {
    export interface Triggers {
      none: number;

      post_action: number;

      post_revision: number;

      trust_level_change: number;

      user_change: number;
    }
  }

  export interface BadgeGrouping {
    id: number;

    description: string | null;

    name: string;

    position: number;

    system: boolean;
  }

  export interface BadgeType {
    id: number;

    name: string;

    sort_order: number;
  }

  export interface Badge {
    id: number;

    allow_title: boolean;

    auto_revoke: boolean;

    badge_grouping_id: number;

    badge_type_id: number;

    description: string;

    enabled: boolean;

    grant_count: number;

    icon: string;

    image_upload_id: number | null;

    image_url: string | null;

    listable: boolean;

    long_description: string;

    manually_grantable: boolean;

    multiple_grant: boolean;

    name: string;

    query: string | null;

    show_in_post_header: boolean;

    show_posts: boolean;

    slug: string;

    system: boolean;

    target_posts: boolean;

    trigger: number | null;

    i18n_name?: string | null;
  }
}

export interface BadgeCreateParams {
  /**
   * The ID for the badge type. 1 for Gold, 2 for Silver, 3 for Bronze.
   */
  badge_type_id: number;

  /**
   * The name for the new badge.
   */
  name: string;
}

export interface BadgeUpdateParams {
  /**
   * The ID for the badge type. 1 for Gold, 2 for Silver, 3 for Bronze.
   */
  badge_type_id: number;

  /**
   * The name for the new badge.
   */
  name: string;
}

export declare namespace Badges {
  export {
    type BadgeCreateResponse as BadgeCreateResponse,
    type BadgeUpdateResponse as BadgeUpdateResponse,
    type BadgeListResponse as BadgeListResponse,
    type BadgeCreateParams as BadgeCreateParams,
    type BadgeUpdateParams as BadgeUpdateParams,
  };
}
