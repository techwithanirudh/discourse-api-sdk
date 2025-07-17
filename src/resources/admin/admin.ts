// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BackupsAPI from './backups';
import { BackupDownloadParams, Backups } from './backups';
import * as BackupsJsonAPI from './backups-json';
import {
  BackupsJson,
  BackupsJsonCreateParams,
  BackupsJsonCreateResponse,
  BackupsJsonListResponse,
} from './backups-json';
import * as BadgesAPI from './badges';
import {
  BadgeCreateParams,
  BadgeCreateResponse,
  BadgeListResponse,
  BadgeUpdateParams,
  BadgeUpdateResponse,
  Badges,
} from './badges';
import * as GroupsAPI from './groups';
import { GroupDeleteResponse, Groups } from './groups';
import * as UsersAPI from './users/users';
import {
  UserActivateResponse,
  UserAnonymizeResponse,
  UserDeactivateResponse,
  UserLogOutResponse,
  UserSilenceParams,
  UserSilenceResponse,
  UserSuspendParams,
  UserSuspendResponse,
  Users,
} from './users/users';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Admin extends APIResource {
  backupsJson: BackupsJsonAPI.BackupsJson = new BackupsJsonAPI.BackupsJson(this._client);
  backups: BackupsAPI.Backups = new BackupsAPI.Backups(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  badges: BadgesAPI.Badges = new BadgesAPI.Badges(this._client);

  /**
   * Create a group
   *
   * @example
   * ```ts
   * const response = await client.admin.createGroup({
   *   group: { name: 'name' },
   * });
   * ```
   */
  createGroup(body: AdminCreateGroupParams, options?: RequestOptions): APIPromise<AdminCreateGroupResponse> {
    return this._client.post('/admin/groups.json', { body, ...options });
  }
}

export interface AdminCreateGroupResponse {
  basic_group: AdminCreateGroupResponse.BasicGroup;
}

export namespace AdminCreateGroupResponse {
  export interface BasicGroup {
    id: number;

    allow_membership_requests: boolean;

    automatic: boolean;

    bio_cooked: string | null;

    bio_excerpt: string | null;

    bio_raw: string | null;

    can_admin_group: boolean;

    can_see_members: boolean;

    default_notification_level: number;

    flair_bg_color: string | null;

    flair_color: string | null;

    flair_url: string | null;

    full_name: string | null;

    grant_trust_level: string | null;

    has_messages: boolean;

    incoming_email: string | null;

    members_visibility_level: number;

    membership_request_template: string | null;

    mentionable_level: number;

    messageable_level: number;

    name: string;

    primary_group: boolean;

    public_admission: boolean;

    public_exit: boolean;

    publish_read_state: boolean;

    title: string | null;

    user_count: number;

    visibility_level: number;

    can_edit_group?: boolean;
  }
}

export interface AdminCreateGroupParams {
  group: AdminCreateGroupParams.Group;
}

export namespace AdminCreateGroupParams {
  export interface Group {
    name: string;

    /**
     * pipe|separated
     */
    automatic_membership_email_domains?: string;

    /**
     * About Group
     */
    bio_raw?: string;

    default_notification_level?: number;

    flair_bg_color?: string;

    flair_icon?: string;

    flair_upload_id?: number;

    full_name?: string;

    muted_category_ids?: Array<number>;

    /**
     * comma,separated
     */
    owner_usernames?: string;

    primary_group?: boolean;

    public_admission?: boolean;

    public_exit?: boolean;

    regular_category_ids?: Array<number>;

    tracking_category_ids?: Array<number>;

    /**
     * comma,separated
     */
    usernames?: string;

    visibility_level?: number;

    watching_category_ids?: Array<number>;

    watching_first_post_category_ids?: Array<number>;
  }
}

Admin.BackupsJson = BackupsJson;
Admin.Backups = Backups;
Admin.Groups = Groups;
Admin.Users = Users;
Admin.Badges = Badges;

export declare namespace Admin {
  export {
    type AdminCreateGroupResponse as AdminCreateGroupResponse,
    type AdminCreateGroupParams as AdminCreateGroupParams,
  };

  export {
    BackupsJson as BackupsJson,
    type BackupsJsonCreateResponse as BackupsJsonCreateResponse,
    type BackupsJsonListResponse as BackupsJsonListResponse,
    type BackupsJsonCreateParams as BackupsJsonCreateParams,
  };

  export { Backups as Backups, type BackupDownloadParams as BackupDownloadParams };

  export { Groups as Groups, type GroupDeleteResponse as GroupDeleteResponse };

  export {
    Users as Users,
    type UserActivateResponse as UserActivateResponse,
    type UserAnonymizeResponse as UserAnonymizeResponse,
    type UserDeactivateResponse as UserDeactivateResponse,
    type UserLogOutResponse as UserLogOutResponse,
    type UserSilenceResponse as UserSilenceResponse,
    type UserSuspendResponse as UserSuspendResponse,
    type UserSilenceParams as UserSilenceParams,
    type UserSuspendParams as UserSuspendParams,
  };

  export {
    Badges as Badges,
    type BadgeCreateResponse as BadgeCreateResponse,
    type BadgeUpdateResponse as BadgeUpdateResponse,
    type BadgeListResponse as BadgeListResponse,
    type BadgeCreateParams as BadgeCreateParams,
    type BadgeUpdateParams as BadgeUpdateParams,
  };
}
