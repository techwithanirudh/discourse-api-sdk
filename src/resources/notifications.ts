// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Notifications extends APIResource {
  /**
   * Mark notifications as read
   */
  markRead(
    body: NotificationMarkReadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationMarkReadResponse> {
    return this._client.put('/notifications/mark-read.json', { body, ...options });
  }
}

export interface NotificationMarkReadResponse {
  success?: string;
}

export interface NotificationMarkReadParams {
  /**
   * (optional) Leave off to mark all notifications as read
   */
  id?: number;
}

export declare namespace Notifications {
  export {
    type NotificationMarkReadResponse as NotificationMarkReadResponse,
    type NotificationMarkReadParams as NotificationMarkReadParams,
  };
}
