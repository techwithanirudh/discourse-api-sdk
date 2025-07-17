// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Session extends APIResource {
  /**
   * Get current session info
   */
  retrieveCurrent(options?: RequestOptions): APIPromise<SessionRetrieveCurrentResponse> {
    return this._client.get('/session/current.json', options);
  }

  /**
   * Send password reset email
   */
  sendForgotPasswordEmail(
    body: SessionSendForgotPasswordEmailParams,
    options?: RequestOptions,
  ): APIPromise<SessionSendForgotPasswordEmailResponse> {
    return this._client.post('/session/forgot_password.json', { body, ...options });
  }
}

export interface SessionRetrieveCurrentResponse {
  current_user?: SessionRetrieveCurrentResponse.CurrentUser;
}

export namespace SessionRetrieveCurrentResponse {
  export interface CurrentUser {
    id: number;

    admin: boolean;

    allowed_pm_usernames: Array<unknown>;

    avatar_template: string;

    badge_count: number;

    can_be_deleted: boolean;

    can_change_bio: boolean;

    can_change_location: boolean;

    can_change_tracking_preferences: boolean;

    can_change_website: boolean;

    can_delete_all_posts: boolean;

    can_edit: boolean;

    can_edit_email: boolean;

    can_edit_name: boolean;

    can_edit_username: boolean;

    can_ignore_user: boolean;

    can_mute_user: boolean;

    can_send_private_message_to_user: boolean;

    can_send_private_messages: boolean;

    can_upload_profile_header: boolean;

    can_upload_user_card_background: boolean;

    created_at: string;

    custom_fields: CurrentUser.CustomFields;

    featured_topic: string | null;

    featured_user_badge_ids: Array<unknown>;

    flair_bg_color: string | null;

    flair_color: string | null;

    flair_group_id: number | null;

    flair_name: string | null;

    flair_url: string | null;

    group_users: Array<CurrentUser.GroupUser>;

    groups: Array<CurrentUser.Group>;

    has_title_badges: boolean;

    ignored: boolean;

    ignored_usernames: Array<unknown>;

    invited_by: string | null;

    last_posted_at: string | null;

    last_seen_at: string | null;

    locale: string | null;

    mailing_list_posts_per_day: number;

    moderator: boolean;

    muted: boolean;

    muted_category_ids: Array<unknown>;

    muted_tags: Array<unknown>;

    muted_usernames: Array<unknown>;

    name: string;

    pending_count: number;

    post_count: number;

    primary_group_id: number | null;

    primary_group_name: string | null;

    profile_view_count: number;

    recent_time_read: number;

    regular_category_ids: Array<unknown>;

    second_factor_enabled: boolean;

    staged: boolean;

    system_avatar_template: string;

    system_avatar_upload_id: string | null;

    time_read: number;

    title: string | null;

    tracked_category_ids: Array<unknown>;

    tracked_tags: Array<unknown>;

    trust_level: number;

    uploaded_avatar_id: number | null;

    use_logo_small_as_avatar: boolean;

    user_api_keys: string | null;

    user_auth_tokens: Array<CurrentUser.UserAuthToken>;

    user_notification_schedule: CurrentUser.UserNotificationSchedule;

    user_option: CurrentUser.UserOption;

    username: string;

    watched_category_ids: Array<unknown>;

    watched_first_post_category_ids: Array<unknown>;

    watched_tags: Array<unknown>;

    watching_first_post_tags: Array<unknown>;

    can_ignore_users?: boolean;

    can_mute_users?: boolean;

    can_pick_theme_with_custom_homepage?: boolean;

    display_sidebar_tags?: boolean;

    pending_posts_count?: number;

    second_factor_backup_enabled?: boolean;

    sidebar_category_ids?: Array<unknown>;

    sidebar_tags?: Array<unknown>;

    user_fields?: CurrentUser.UserFields;

    user_passkeys?: Array<unknown>;
  }

  export namespace CurrentUser {
    export interface CustomFields {
      first_name?: string | null;
    }

    export interface GroupUser {
      group_id: number;

      notification_level: number;

      user_id: number;

      owner?: boolean;
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
    }

    export interface UserAuthToken {
      id: number;

      browser: string;

      client_ip: string;

      created_at: string;

      device: string;

      icon: string;

      is_active: boolean;

      location: string;

      os: string;

      seen_at: string;
    }

    export interface UserNotificationSchedule {
      day_0_end_time: number;

      day_0_start_time: number;

      day_1_end_time: number;

      day_1_start_time: number;

      day_2_end_time: number;

      day_2_start_time: number;

      day_3_end_time: number;

      day_3_start_time: number;

      day_4_end_time: number;

      day_4_start_time: number;

      day_5_end_time: number;

      day_5_start_time: number;

      day_6_end_time: number;

      day_6_start_time: number;

      enabled: boolean;
    }

    export interface UserOption {
      allow_private_messages: boolean;

      auto_track_topics_after_msecs: number;

      automatically_unpin_topics: boolean;

      color_scheme_id: string | null;

      dark_scheme_id: string | null;

      digest_after_minutes: number;

      dynamic_favicon: boolean;

      email_digests: boolean;

      email_in_reply_to: boolean;

      email_level: number;

      email_messages_level: number;

      email_previous_replies: number;

      enable_allowed_pm_users: boolean;

      enable_defer: boolean;

      enable_quoting: boolean;

      enable_smart_lists: boolean;

      external_links_in_new_tab: boolean;

      hide_presence: boolean;

      hide_profile: boolean;

      hide_profile_and_presence: boolean;

      homepage_id: string | null;

      include_tl0_in_digests: boolean;

      like_notification_frequency: number;

      mailing_list_mode: boolean;

      mailing_list_mode_frequency: number;

      new_topic_duration_minutes: number;

      notification_level_when_replying: number;

      skip_new_user_tips: boolean;

      text_size: string;

      text_size_seq: number;

      theme_ids: Array<unknown>;

      theme_key_seq: number;

      timezone: string | null;

      title_count_mode: string;

      topics_unread_when_closed: boolean;

      user_id: number;

      bookmark_auto_delete_preference?: number;

      default_calendar?: string;

      oldest_search_log_date?: string | null;

      seen_popups?: Array<unknown> | null;

      sidebar_link_to_filtered_list?: boolean;

      sidebar_show_count_of_new_items?: boolean;

      watched_precedence_over_muted?: boolean | null;
    }

    export interface UserFields {
      '1': string | null;

      '2': string | null;
    }
  }
}

export interface SessionSendForgotPasswordEmailResponse {
  success: string;

  user_found: boolean;
}

export interface SessionSendForgotPasswordEmailParams {
  login: string;
}

export declare namespace Session {
  export {
    type SessionRetrieveCurrentResponse as SessionRetrieveCurrentResponse,
    type SessionSendForgotPasswordEmailResponse as SessionSendForgotPasswordEmailResponse,
    type SessionSendForgotPasswordEmailParams as SessionSendForgotPasswordEmailParams,
  };
}
