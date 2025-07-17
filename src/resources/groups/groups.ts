// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MembersJsonAPI from './members-json';
import {
  MembersJson,
  MembersJsonAddParams,
  MembersJsonAddResponse,
  MembersJsonListResponse,
  MembersJsonRemoveParams,
  MembersJsonRemoveResponse,
} from './members-json';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Groups extends APIResource {
  membersJson: MembersJsonAPI.MembersJson = new MembersJsonAPI.MembersJson(this._client);

  /**
   * Get a group
   *
   * @example
   * ```ts
   * const group = await client.groups.retrieve('name');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<GroupRetrieveResponse> {
    return this._client.get(path`/groups/${id}.json`, options);
  }

  /**
   * Update a group
   *
   * @example
   * ```ts
   * const group = await client.groups.update(0, {
   *   group: { name: 'name' },
   * });
   * ```
   */
  update(id: number, body: GroupUpdateParams, options?: RequestOptions): APIPromise<GroupUpdateResponse> {
    return this._client.put(path`/groups/${id}.json`, { body, ...options });
  }

  /**
   * List groups
   *
   * @example
   * ```ts
   * const groups = await client.groups.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<GroupListResponse> {
    return this._client.get('/groups.json', options);
  }
}

export interface GroupRetrieveResponse {
  extras: GroupRetrieveResponse.Extras;

  group: GroupRetrieveResponse.Group;
}

export namespace GroupRetrieveResponse {
  export interface Extras {
    visible_group_names: Array<unknown>;
  }

  export interface Group {
    id: number;

    allow_membership_requests: boolean;

    allow_unknown_sender_topic_replies: boolean;

    automatic: boolean;

    automatic_membership_email_domains: string | null;

    bio_cooked: string | null;

    bio_excerpt: string | null;

    bio_raw: string | null;

    can_admin_group: boolean;

    can_see_members: boolean;

    default_notification_level: number;

    email_password: string | null;

    email_username: string | null;

    flair_bg_color: string | null;

    flair_color: string | null;

    flair_url: string | null;

    full_name: string | null;

    grant_trust_level: string | null;

    has_messages: boolean;

    imap_last_error: string | null;

    imap_mailbox_name: string;

    imap_mailboxes: Array<unknown>;

    imap_new_emails: string | null;

    imap_old_emails: string | null;

    imap_port: string | null;

    imap_server: string | null;

    imap_ssl: string | null;

    incoming_email: string | null;

    is_group_owner_display: boolean;

    is_group_user: boolean;

    members_visibility_level: number;

    membership_request_template: string | null;

    mentionable: boolean;

    mentionable_level: number;

    message_count: number;

    messageable: boolean;

    messageable_level: number;

    muted_category_ids: Array<unknown>;

    name: string;

    primary_group: boolean;

    public_admission: boolean;

    public_exit: boolean;

    publish_read_state: boolean;

    regular_category_ids: Array<unknown>;

    smtp_port: string | null;

    smtp_server: string | null;

    smtp_ssl_mode: number | null;

    title: string | null;

    tracking_category_ids: Array<unknown>;

    user_count: number;

    visibility_level: number;

    watching_category_ids: Array<unknown>;

    watching_first_post_category_ids: Array<unknown>;

    associated_group_ids?: Array<unknown>;

    can_edit_group?: boolean;

    email_from_alias?: string | null;

    imap_enabled?: boolean;

    imap_updated_at?: string | null;

    imap_updated_by?: unknown | null;

    muted_tags?: Array<unknown>;

    regular_tags?: Array<unknown>;

    smtp_enabled?: boolean;

    smtp_updated_at?: string | null;

    smtp_updated_by?: unknown | null;

    tracking_tags?: Array<unknown>;

    watching_first_post_tags?: Array<unknown>;

    watching_tags?: Array<unknown>;
  }
}

export interface GroupUpdateResponse {
  success?: string;
}

export interface GroupListResponse {
  extras: GroupListResponse.Extras;

  groups: Array<GroupListResponse.Group>;

  load_more_groups: string;

  total_rows_groups: number;
}

export namespace GroupListResponse {
  export interface Extras {
    type_filters: Array<unknown>;
  }

  export interface Group {
    id: number;

    allow_membership_requests: boolean;

    automatic: boolean;

    bio_cooked: string | null;

    bio_excerpt: string | null;

    bio_raw: string | null;

    can_admin_group: boolean;

    can_see_members: boolean;

    default_notification_level: number;

    display_name: string;

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

    is_group_owner?: boolean;

    is_group_user?: boolean;
  }
}

export interface GroupUpdateParams {
  group: GroupUpdateParams.Group;
}

export namespace GroupUpdateParams {
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

Groups.MembersJson = MembersJson;

export declare namespace Groups {
  export {
    type GroupRetrieveResponse as GroupRetrieveResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupUpdateParams as GroupUpdateParams,
  };

  export {
    MembersJson as MembersJson,
    type MembersJsonListResponse as MembersJsonListResponse,
    type MembersJsonAddResponse as MembersJsonAddResponse,
    type MembersJsonRemoveResponse as MembersJsonRemoveResponse,
    type MembersJsonAddParams as MembersJsonAddParams,
    type MembersJsonRemoveParams as MembersJsonRemoveParams,
  };
}
