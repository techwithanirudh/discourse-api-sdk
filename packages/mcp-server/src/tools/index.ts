// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_group_admin from './admin/create-group-admin';
import create_admin_backups_json from './admin/backups-json/create-admin-backups-json';
import list_admin_backups_json from './admin/backups-json/list-admin-backups-json';
import download_admin_backups from './admin/backups/download-admin-backups';
import send_download_email_admin_backups from './admin/backups/send-download-email-admin-backups';
import delete_admin_groups from './admin/groups/delete-admin-groups';
import activate_admin_users from './admin/users/activate-admin-users';
import anonymize_admin_users from './admin/users/anonymize-admin-users';
import deactivate_admin_users from './admin/users/deactivate-admin-users';
import log_out_admin_users from './admin/users/log-out-admin-users';
import silence_admin_users from './admin/users/silence-admin-users';
import suspend_admin_users from './admin/users/suspend-admin-users';
import retrieve_users_admin_json from './admin/users/json/retrieve-users-admin-json';
import delete_users_admin_json from './admin/users/json/delete-users-admin-json';
import get_users_admin_list from './admin/users/list/get-users-admin-list';
import create_admin_badges from './admin/badges/create-admin-badges';
import update_admin_badges from './admin/badges/update-admin-badges';
import list_admin_badges from './admin/badges/list-admin-badges';
import delete_admin_badges from './admin/badges/delete-admin-badges';
import create_categories_json from './categories-json/create-categories-json';
import list_categories_json from './categories-json/list-categories-json';
import update_categories from './categories/update-categories';
import list_topics_c from './c/list-topics-c';
import show_category_c from './c/show-category-c';
import retrieve_groups from './groups/retrieve-groups';
import update_groups from './groups/update-groups';
import list_groups from './groups/list-groups';
import list_groups_members_json from './groups/members-json/list-groups-members-json';
import add_groups_members_json from './groups/members-json/add-groups-members-json';
import remove_groups_members_json from './groups/members-json/remove-groups-members-json';
import create_invites_json from './invites-json/create-invites-json';
import create_multiple_invites from './invites/create-multiple-invites';
import list_notifications_json from './notifications-json/list-notifications-json';
import mark_read_notifications from './notifications/mark-read-notifications';
import create_posts from './posts/create-posts';
import retrieve_posts from './posts/retrieve-posts';
import update_posts from './posts/update-posts';
import list_posts from './posts/list-posts';
import delete_posts from './posts/delete-posts';
import create_post_actions_json from './post-actions-json/create-post-actions-json';
import list_topics_private_messages from './topics/private-messages/list-topics-private-messages';
import list_topics_private_messages_sent from './topics/private-messages-sent/list-topics-private-messages-sent';
import perform_search_search_json from './search-json/perform-search-search-json';
import retrieve_site_json from './site-json/retrieve-site-json';
import retrieve_basic_info_site from './site/retrieve-basic-info-site';
import list_tags_json from './tags-json/list-tags-json';
import retrieve_tag from './tag/retrieve-tag';
import bookmark_t from './t/bookmark-t';
import create_timer_t from './t/create-timer-t';
import invite_t from './t/invite-t';
import invite_group_t from './t/invite-group-t';
import retrieve_posts_t from './t/retrieve-posts-t';
import set_notifications_t from './t/set-notifications-t';
import update_status_t from './t/update-status-t';
import update_timestamp_t from './t/update-timestamp-t';
import retrieve_t_json from './t/json/retrieve-t-json';
import update_t_json from './t/json/update-t-json';
import delete_t_json from './t/json/delete-t-json';
import retrieve_t_external_id from './t/external-id/retrieve-t-external-id';
import get_latest_latest_json from './latest-json/get-latest-latest-json';
import retrieve_top_json from './top-json/retrieve-top-json';
import create_uploads_json from './uploads-json/create-uploads-json';
import abort_multipart_uploads from './uploads/abort-multipart-uploads';
import batch_presign_multipart_parts_uploads from './uploads/batch-presign-multipart-parts-uploads';
import complete_external_upload_uploads from './uploads/complete-external-upload-uploads';
import complete_multipart_uploads from './uploads/complete-multipart-uploads';
import create_multipart_uploads from './uploads/create-multipart-uploads';
import generate_presigned_put_uploads from './uploads/generate-presigned-put-uploads';
import list_user_badges from './user-badges/list-user-badges';
import create_users_json from './users-json/create-users-json';
import fetch_card_u from './u/fetch-card-u';
import list_emails_u from './u/list-emails-u';
import retrieve_u_json from './u/json/retrieve-u-json';
import update_u_json from './u/json/update-u-json';
import retrieve_by_external_u_json from './u/by-external/json/retrieve-by-external-u-json';
import retrieve_by_provider_by_external_u_json from './u/by-external/json/retrieve-by-provider-by-external-u-json';
import update_email_u_preferences from './u/preferences/update-email-u-preferences';
import update_username_u_preferences from './u/preferences/update-username-u-preferences';
import update_preferences_u_avatar from './u/preferences/avatar/update-preferences-u-avatar';
import list_directory_items_json from './directory-items-json/list-directory-items-json';
import refresh_gravatar_user_avatar from './user-avatar/refresh-gravatar-user-avatar';
import list_user_actions_json from './user-actions-json/list-user-actions-json';
import retrieve_current_session from './session/retrieve-current-session';
import send_forgot_password_email_session from './session/send-forgot-password-email-session';
import change_password_users_password_reset from './users/password-reset/change-password-users-password-reset';
import react_to_message_chat from './chat/react-to-message-chat';
import send_message_chat from './chat/send-message-chat';
import list_thread_messages_channels_api_chat_threads from './chat/api/channels/threads/list-thread-messages-channels-api-chat-threads';
import retrieve_thread_channels_api_chat_threads from './chat/api/channels/threads/retrieve-thread-channels-api-chat-threads';
import list_messages_channels_api_chat_messages from './chat/api/channels/messages/list-messages-channels-api-chat-messages';
import update_message_channels_api_chat_messages from './chat/api/channels/messages/update-message-channels-api-chat-messages';
import create_tag_groups from './tag-groups/create-tag-groups';
import retrieve_tag_groups from './tag-groups/retrieve-tag-groups';
import update_tag_groups from './tag-groups/update-tag-groups';
import list_tag_groups from './tag-groups/list-tag-groups';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_group_admin);
addEndpoint(create_admin_backups_json);
addEndpoint(list_admin_backups_json);
addEndpoint(download_admin_backups);
addEndpoint(send_download_email_admin_backups);
addEndpoint(delete_admin_groups);
addEndpoint(activate_admin_users);
addEndpoint(anonymize_admin_users);
addEndpoint(deactivate_admin_users);
addEndpoint(log_out_admin_users);
addEndpoint(silence_admin_users);
addEndpoint(suspend_admin_users);
addEndpoint(retrieve_users_admin_json);
addEndpoint(delete_users_admin_json);
addEndpoint(get_users_admin_list);
addEndpoint(create_admin_badges);
addEndpoint(update_admin_badges);
addEndpoint(list_admin_badges);
addEndpoint(delete_admin_badges);
addEndpoint(create_categories_json);
addEndpoint(list_categories_json);
addEndpoint(update_categories);
addEndpoint(list_topics_c);
addEndpoint(show_category_c);
addEndpoint(retrieve_groups);
addEndpoint(update_groups);
addEndpoint(list_groups);
addEndpoint(list_groups_members_json);
addEndpoint(add_groups_members_json);
addEndpoint(remove_groups_members_json);
addEndpoint(create_invites_json);
addEndpoint(create_multiple_invites);
addEndpoint(list_notifications_json);
addEndpoint(mark_read_notifications);
addEndpoint(create_posts);
addEndpoint(retrieve_posts);
addEndpoint(update_posts);
addEndpoint(list_posts);
addEndpoint(delete_posts);
addEndpoint(create_post_actions_json);
addEndpoint(list_topics_private_messages);
addEndpoint(list_topics_private_messages_sent);
addEndpoint(perform_search_search_json);
addEndpoint(retrieve_site_json);
addEndpoint(retrieve_basic_info_site);
addEndpoint(list_tags_json);
addEndpoint(retrieve_tag);
addEndpoint(bookmark_t);
addEndpoint(create_timer_t);
addEndpoint(invite_t);
addEndpoint(invite_group_t);
addEndpoint(retrieve_posts_t);
addEndpoint(set_notifications_t);
addEndpoint(update_status_t);
addEndpoint(update_timestamp_t);
addEndpoint(retrieve_t_json);
addEndpoint(update_t_json);
addEndpoint(delete_t_json);
addEndpoint(retrieve_t_external_id);
addEndpoint(get_latest_latest_json);
addEndpoint(retrieve_top_json);
addEndpoint(create_uploads_json);
addEndpoint(abort_multipart_uploads);
addEndpoint(batch_presign_multipart_parts_uploads);
addEndpoint(complete_external_upload_uploads);
addEndpoint(complete_multipart_uploads);
addEndpoint(create_multipart_uploads);
addEndpoint(generate_presigned_put_uploads);
addEndpoint(list_user_badges);
addEndpoint(create_users_json);
addEndpoint(fetch_card_u);
addEndpoint(list_emails_u);
addEndpoint(retrieve_u_json);
addEndpoint(update_u_json);
addEndpoint(retrieve_by_external_u_json);
addEndpoint(retrieve_by_provider_by_external_u_json);
addEndpoint(update_email_u_preferences);
addEndpoint(update_username_u_preferences);
addEndpoint(update_preferences_u_avatar);
addEndpoint(list_directory_items_json);
addEndpoint(refresh_gravatar_user_avatar);
addEndpoint(list_user_actions_json);
addEndpoint(retrieve_current_session);
addEndpoint(send_forgot_password_email_session);
addEndpoint(change_password_users_password_reset);
addEndpoint(react_to_message_chat);
addEndpoint(send_message_chat);
addEndpoint(list_thread_messages_channels_api_chat_threads);
addEndpoint(retrieve_thread_channels_api_chat_threads);
addEndpoint(list_messages_channels_api_chat_messages);
addEndpoint(update_message_channels_api_chat_messages);
addEndpoint(create_tag_groups);
addEndpoint(retrieve_tag_groups);
addEndpoint(update_tag_groups);
addEndpoint(list_tag_groups);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
