// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Threads extends APIResource {
  /**
   * Fetch thread messages
   *
   * @example
   * ```ts
   * const response =
   *   await client.chat.api.channels.threads.listThreadMessages(
   *     99,
   *     { channel_id: 42 },
   *   );
   * ```
   */
  listThreadMessages(
    threadID: number,
    params: ThreadListThreadMessagesParams,
    options?: RequestOptions,
  ): APIPromise<ThreadListThreadMessagesResponse> {
    const { channel_id, ...query } = params;
    return this._client.get(path`/chat/api/channels/${channel_id}/threads/${threadID}/messages`, {
      query,
      ...options,
    });
  }

  /**
   * Get thread details
   *
   * @example
   * ```ts
   * const response =
   *   await client.chat.api.channels.threads.retrieveThread(
   *     89,
   *     { channel_id: 2 },
   *   );
   * ```
   */
  retrieveThread(
    threadID: number,
    params: ThreadRetrieveThreadParams,
    options?: RequestOptions,
  ): APIPromise<ThreadRetrieveThreadResponse> {
    const { channel_id } = params;
    return this._client.get(path`/chat/api/channels/${channel_id}/threads/${threadID}`, options);
  }
}

export interface ThreadListThreadMessagesResponse {
  messages?: Array<ThreadListThreadMessagesResponse.Message>;

  meta?: ThreadListThreadMessagesResponse.Meta;

  tracking?: { [key: string]: unknown } | null;

  [k: string]: unknown;
}

export namespace ThreadListThreadMessagesResponse {
  export interface Message {
    id?: number | null;

    available_flags?: Array<string | null>;

    chat_channel_id?: number | null;

    cooked?: string | null;

    created_at?: string | null;

    message?: string | null;

    thread_id?: number | null;

    user?: { [key: string]: unknown };

    [k: string]: unknown;
  }

  export interface Meta {
    can_load_more_future?: boolean | null;

    can_load_more_past?: boolean | null;

    target_message_id?: number | null;

    [k: string]: unknown;
  }
}

export interface ThreadRetrieveThreadResponse {
  thread?: ThreadRetrieveThreadResponse.Thread;

  [k: string]: unknown;
}

export namespace ThreadRetrieveThreadResponse {
  export interface Thread {
    id?: number | null;

    channel_id?: number | null;

    current_user_membership?: { [key: string]: unknown };

    force?: boolean | null;

    last_message_id?: number | null;

    meta?: { [key: string]: unknown };

    original_message?: { [key: string]: unknown };

    preview?: { [key: string]: unknown };

    reply_count?: number | null;

    status?: string | null;

    title?: string | null;

    [k: string]: unknown;
  }
}

export interface ThreadListThreadMessagesParams {
  /**
   * Path param:
   */
  channel_id: number;

  /**
   * Query param:
   */
  page_size?: number;

  /**
   * Query param: Start fetching from this message ID
   */
  target_message_id?: number;
}

export interface ThreadRetrieveThreadParams {
  channel_id: number;
}

export declare namespace Threads {
  export {
    type ThreadListThreadMessagesResponse as ThreadListThreadMessagesResponse,
    type ThreadRetrieveThreadResponse as ThreadRetrieveThreadResponse,
    type ThreadListThreadMessagesParams as ThreadListThreadMessagesParams,
    type ThreadRetrieveThreadParams as ThreadRetrieveThreadParams,
  };
}
