// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Json extends APIResource {
  /**
   * Get a user by id
   *
   * @example
   * ```ts
   * const json = await client.admin.users.json.retrieve(0);
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<JsonRetrieveResponse> {
    return this._client.get(path`/admin/users/${id}.json`, options);
  }

  /**
   * Delete a user
   *
   * @example
   * ```ts
   * const json = await client.admin.users.json.delete(0);
   * ```
   */
  delete(
    id: number,
    body: JsonDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JsonDeleteResponse> {
    return this._client.delete(path`/admin/users/${id}.json`, { body, ...options });
  }
}

export interface JsonRetrieveResponse {
  id: number;

  active: boolean;

  admin: boolean;

  api_key_count: number;

  approved_by: JsonRetrieveResponse.ApprovedBy | null;

  avatar_template: string;

  badge_count: number;

  bounce_score: number | null;

  can_activate: boolean;

  can_be_anonymized: boolean;

  can_be_merged: boolean;

  can_deactivate: boolean;

  can_delete_all_posts: boolean;

  can_delete_sso_record: boolean;

  can_disable_second_factor: boolean;

  can_grant_admin: boolean;

  can_grant_moderation: boolean;

  can_impersonate: boolean;

  can_revoke_admin: boolean;

  can_revoke_moderation: boolean;

  can_send_activation_email: boolean;

  can_view_action_logs: boolean;

  created_at: string;

  created_at_age: number | null;

  days_visited: number;

  external_ids: unknown;

  flags_given_count: number;

  flags_received_count: number;

  full_suspend_reason: string | null;

  groups: Array<JsonRetrieveResponse.Group>;

  ip_address: string;

  last_emailed_age: number | null;

  last_emailed_at: string | null;

  last_seen_age: number | null;

  last_seen_at: string | null;

  like_count: number;

  like_given_count: number;

  manual_locked_trust_level: string | null;

  moderator: boolean;

  name: string | null;

  post_count: number;

  posts_read_count: number;

  primary_group_id: number | null;

  private_topics_count: number;

  registration_ip_address: string | null;

  reset_bounce_score_after: string | null;

  silenced_by: string | null;

  single_sign_on_record: string | null;

  staged: boolean;

  suspended_by: string | null;

  time_read: number;

  title: string | null;

  topic_count: number;

  topics_entered: number;

  trust_level: number;

  username: string;

  warnings_received_count: number;

  associated_accounts?: Array<unknown>;

  can_be_deleted?: boolean;

  latest_export?: unknown | null;

  next_penalty?: string;

  penalty_counts?: JsonRetrieveResponse.PenaltyCounts;

  post_edits_count?: number | null;

  silence_reason?: string | null;

  similar_users_count?: number;

  tl3_requirements?: JsonRetrieveResponse.Tl3Requirements;
}

export namespace JsonRetrieveResponse {
  export interface ApprovedBy {
    id: number;

    avatar_template: string;

    name: string;

    username: string;
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

    flair_group_id?: number | null;
  }

  export interface PenaltyCounts {
    silenced: number;

    suspended: number;
  }

  export interface Tl3Requirements {
    days_visited: number;

    max_flagged_by_users: number;

    max_flagged_posts: number;

    min_days_visited: number;

    min_likes_given: number;

    min_likes_received: number;

    min_likes_received_days: number;

    min_likes_received_users: number;

    min_posts_read: number;

    min_posts_read_all_time: number;

    min_topics_replied_to: number;

    min_topics_viewed: number;

    min_topics_viewed_all_time: number;

    num_flagged_by_users: number;

    num_flagged_posts: number;

    num_likes_given: number;

    num_likes_received: number;

    num_likes_received_days: number;

    num_likes_received_users: number;

    num_topics_replied_to: number;

    on_grace_period: boolean;

    penalty_counts: Tl3Requirements.PenaltyCounts;

    posts_read: number;

    posts_read_all_time: number;

    requirements_lost: boolean;

    requirements_met: boolean;

    time_period: number;

    topics_viewed: number;

    topics_viewed_all_time: number;

    trust_level_locked: boolean;
  }

  export namespace Tl3Requirements {
    export interface PenaltyCounts {
      silenced: number;

      suspended: number;

      total: number;
    }
  }
}

export interface JsonDeleteResponse {
  deleted: boolean;
}

export interface JsonDeleteParams {
  block_email?: boolean;

  block_ip?: boolean;

  block_urls?: boolean;

  delete_posts?: boolean;
}

export declare namespace Json {
  export {
    type JsonRetrieveResponse as JsonRetrieveResponse,
    type JsonDeleteResponse as JsonDeleteResponse,
    type JsonDeleteParams as JsonDeleteParams,
  };
}
