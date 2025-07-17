// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class NotificationsJson extends APIResource {
  /**
   * Get the notifications that belong to the current user
   */
  list(options?: RequestOptions): APIPromise<NotificationsJsonListResponse> {
    return this._client.get('/notifications.json', options);
  }
}

export interface NotificationsJsonListResponse {
  load_more_notifications?: string;

  notifications?: Array<NotificationsJsonListResponse.Notification>;

  seen_notification_id?: number;

  total_rows_notifications?: number;
}

export namespace NotificationsJsonListResponse {
  export interface Notification {
    id?: number;

    created_at?: string;

    data?: Notification.Data;

    notification_type?: number;

    post_number?: number | null;

    read?: boolean;

    slug?: string | null;

    topic_id?: number | null;

    user_id?: number;
  }

  export namespace Notification {
    export interface Data {
      badge_id?: number;

      badge_name?: string;

      badge_slug?: string;

      badge_title?: boolean;

      username?: string;
    }
  }
}

export declare namespace NotificationsJson {
  export { type NotificationsJsonListResponse as NotificationsJsonListResponse };
}
