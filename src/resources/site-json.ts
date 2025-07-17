// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SiteJson extends APIResource {
  /**
   * Can be used to fetch all categories and subcategories
   */
  retrieve(options?: RequestOptions): APIPromise<SiteJsonRetrieveResponse> {
    return this._client.get('/site.json', options);
  }
}

export interface SiteJsonRetrieveResponse {
  anonymous_top_menu_items: Array<unknown>;

  archetypes: Array<SiteJsonRetrieveResponse.Archetype>;

  auth_providers: Array<unknown>;

  can_create_tag: boolean;

  can_tag_pms: boolean;

  can_tag_topics: boolean;

  categories: Array<SiteJsonRetrieveResponse.Category>;

  censored_regexp: Array<unknown>;

  custom_emoji_translation: unknown;

  default_archetype: string;

  default_dark_color_scheme: unknown | null;

  filters: Array<unknown>;

  full_name_required_for_signup: boolean;

  full_name_visible_in_signup: boolean;

  groups: Array<SiteJsonRetrieveResponse.Group>;

  notification_types: SiteJsonRetrieveResponse.NotificationTypes;

  periods: Array<unknown>;

  post_action_types: Array<SiteJsonRetrieveResponse.PostActionType>;

  post_types: SiteJsonRetrieveResponse.PostTypes;

  tags_filter_regexp: string;

  top_menu_items: Array<unknown>;

  top_tags: Array<unknown>;

  topic_featured_link_allowed_category_ids: Array<unknown>;

  topic_flag_types: Array<SiteJsonRetrieveResponse.TopicFlagType>;

  trust_levels: SiteJsonRetrieveResponse.TrustLevels;

  uncategorized_category_id: number;

  user_color_schemes: Array<SiteJsonRetrieveResponse.UserColorScheme>;

  user_field_max_length: number;

  user_fields: Array<unknown>;

  user_themes: Array<SiteJsonRetrieveResponse.UserTheme>;

  watched_words_link: string | null;

  watched_words_replace: string | null;

  can_associate_groups?: boolean;

  denied_emojis?: Array<unknown>;

  displayed_about_plugin_stat_groups?: Array<unknown>;

  hashtag_configurations?: unknown;

  hashtag_icons?: unknown;

  markdown_additional_options?: unknown;

  navigation_menu_site_top_tags?: Array<unknown>;

  user_tips?: SiteJsonRetrieveResponse.UserTips;

  valid_flag_applies_to_types?: Array<unknown>;

  whispers_allowed_groups_names?: Array<unknown>;

  wizard_required?: boolean;
}

export namespace SiteJsonRetrieveResponse {
  export interface Archetype {
    id: string;

    name: string;

    options: Array<unknown>;
  }

  export interface Category {
    id: number;

    allow_global_tags: boolean;

    allowed_tag_groups: Array<unknown>;

    allowed_tags: Array<unknown>;

    can_edit: boolean;

    color: string;

    default_list_filter: string;

    default_top_period: string;

    default_view: string | null;

    has_children: boolean;

    minimum_required_tags: number;

    name: string;

    navigate_to_first_post_after_read: boolean;

    notification_level: number;

    num_featured_topics: number;

    permission: number;

    position: number;

    post_count: number;

    read_only_banner: string | null;

    read_restricted: boolean;

    required_tag_groups: Array<Category.RequiredTagGroup>;

    show_subcategory_list: boolean;

    slug: string;

    sort_ascending: string | null;

    sort_order: string | null;

    subcategory_count: number | null;

    subcategory_list_style: string;

    text_color: string;

    topic_count: number;

    topic_template: string | null;

    topic_url: string;

    uploaded_background: string | null;

    uploaded_background_dark: string | null;

    uploaded_logo: string | null;

    uploaded_logo_dark: string | null;

    custom_fields?: { [key: string]: unknown } | null;

    description?: string | null;

    description_excerpt?: string | null;

    description_text?: string | null;

    form_template_ids?: Array<unknown>;

    parent_category_id?: number;
  }

  export namespace Category {
    export interface RequiredTagGroup {
      min_count: number;

      name: string;
    }
  }

  export interface Group {
    id: number;

    flair_bg_color: string | null;

    flair_color: string | null;

    flair_url: string | null;

    name: string;
  }

  export interface NotificationTypes {
    bookmark_reminder: number;

    chat_group_mention: number;

    chat_invitation: number;

    chat_mention: number;

    chat_message: number;

    code_review_commit_approved: number;

    custom: number;

    edited: number;

    event_invitation: number;

    event_reminder: number;

    granted_badge: number;

    group_mentioned: number;

    group_message_summary: number;

    invited_to_private_message: number;

    invited_to_topic: number;

    invitee_accepted: number;

    liked: number;

    liked_consolidated: number;

    linked: number;

    linked_consolidated: number;

    membership_request_accepted: number;

    membership_request_consolidated: number;

    mentioned: number;

    moved_post: number;

    post_approved: number;

    posted: number;

    private_message: number;

    quoted: number;

    reaction: number;

    replied: number;

    topic_reminder: number;

    votes_released: number;

    watching_category_or_tag: number;

    watching_first_post: number;

    admin_problems?: number;

    assigned?: number;

    chat_quoted?: number;

    chat_watched_thread?: number;

    circles_activity?: number;

    following?: number;

    following_created_topic?: number;

    following_replied?: number;

    new_features?: number;

    question_answer_user_commented?: number;
  }

  export interface PostActionType {
    id: number | null;

    applies_to: Array<unknown>;

    auto_action_type: boolean;

    description: string;

    enabled: boolean;

    is_flag: boolean;

    is_used: boolean;

    name: string;

    name_key: string | null;

    require_message: boolean;

    short_description: string;

    position?: number;
  }

  export interface PostTypes {
    moderator_action: number;

    regular: number;

    small_action: number;

    whisper: number;
  }

  export interface TopicFlagType {
    id: number | null;

    applies_to: Array<unknown>;

    auto_action_type: boolean;

    description: string;

    enabled: boolean;

    is_flag: boolean;

    is_used: boolean;

    name: string;

    name_key: string | null;

    require_message: boolean;

    short_description: string;

    position?: number;
  }

  export interface TrustLevels {
    basic: number;

    leader: number;

    member: number;

    newuser: number;

    regular: number;
  }

  export interface UserColorScheme {
    id: number;

    is_dark: boolean;

    name: string;
  }

  export interface UserTheme {
    color_scheme_id: number | null;

    default: boolean;

    name: string;

    theme_id: number;
  }

  export interface UserTips {
    first_notification: number;

    post_menu: number;

    suggested_topics: number;

    topic_notification_levels: number;

    topic_timeline: number;
  }
}

export declare namespace SiteJson {
  export { type SiteJsonRetrieveResponse as SiteJsonRetrieveResponse };
}
