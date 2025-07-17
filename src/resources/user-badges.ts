// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class UserBadges extends APIResource {
  /**
   * List badges for a user
   */
  list(username: string, options?: RequestOptions): APIPromise<UserBadgeListResponse> {
    return this._client.get(path`/user-badges/${username}.json`, options);
  }
}

export interface UserBadgeListResponse {
  user_badges: Array<UserBadgeListResponse.UserBadge>;

  badge_types?: Array<UserBadgeListResponse.BadgeType>;

  badges?: Array<UserBadgeListResponse.Badge>;

  granted_bies?: Array<UserBadgeListResponse.GrantedBy>;
}

export namespace UserBadgeListResponse {
  export interface UserBadge {
    id: number;

    badge_id: number;

    can_favorite: boolean;

    granted_at: string;

    granted_by_id: number;

    grouping_position: number;

    is_favorite: string | null;
  }

  export interface BadgeType {
    id: number;

    name: string;

    sort_order: number;
  }

  export interface Badge {
    id: number;

    allow_title: boolean;

    badge_grouping_id: number;

    badge_type_id: number;

    description: string;

    enabled: boolean;

    grant_count: number;

    icon: string;

    image_url: string | null;

    listable: boolean;

    manually_grantable: boolean;

    multiple_grant: boolean;

    name: string;

    slug: string;

    system: boolean;
  }

  export interface GrantedBy {
    id: number;

    admin: boolean;

    avatar_template: string;

    flair_name: string | null;

    moderator: boolean;

    name: string;

    trust_level: number;

    username: string;
  }
}

export declare namespace UserBadges {
  export { type UserBadgeListResponse as UserBadgeListResponse };
}
