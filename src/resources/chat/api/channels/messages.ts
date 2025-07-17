// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Fetch chat messages
   *
   * @example
   * ```ts
   * const response =
   *   await client.chat.api.channels.messages.listMessages(23);
   * ```
   */
  listMessages(
    channelID: number,
    query: MessageListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListMessagesResponse> {
    return this._client.get(path`/chat/api/channels/${channelID}/messages`, { query, ...options });
  }

  /**
   * Edit an existing message
   *
   * @example
   * ```ts
   * const response =
   *   await client.chat.api.channels.messages.updateMessage(
   *     4050,
   *     { channel_id: 23 },
   *   );
   * ```
   */
  updateMessage(
    messageID: number,
    params: MessageUpdateMessageParams,
    options?: RequestOptions,
  ): APIPromise<MessageUpdateMessageResponse> {
    const { channel_id, ...body } = params;
    return this._client.put(path`/chat/api/channels/${channel_id}/messages/${messageID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface MessageListMessagesResponse {
  messages?: Array<MessageListMessagesResponse.Message>;

  meta?: unknown | null;

  tracking?: unknown | null;
}

export namespace MessageListMessagesResponse {
  export interface Message {
    id?: number;

    available_flags?: Array<string | null>;

    blocks?: Array<unknown>;

    chat_channel_id?: number;

    chat_webhook_event?: unknown | null;

    cooked?: string;

    created_at?: string;

    edited?: boolean;

    mentioned_users?: Array<Message.MentionedUser>;

    message?: string;

    streaming?: boolean;

    uploads?: Array<unknown>;

    user?: Message.User;
  }

  export namespace Message {
    export interface MentionedUser {
      id?: number;

      name?: string;

      username?: string;
    }

    export interface User {
      id?: number;

      admin?: boolean;

      avatar_template?: string;

      moderator?: boolean;

      name?: string;

      staff?: boolean;

      username?: string;
    }
  }
}

export interface MessageUpdateMessageResponse {
  message_id?: number;

  success?: string;
}

export interface MessageListMessagesParams {
  fetch_from_last_read?: boolean;

  page_size?: number;

  target_message_id?: number;
}

export interface MessageUpdateMessageParams {
  /**
   * Path param:
   */
  channel_id: number;

  /**
   * Body param:
   */
  message?: string;
}

export declare namespace Messages {
  export {
    type MessageListMessagesResponse as MessageListMessagesResponse,
    type MessageUpdateMessageResponse as MessageUpdateMessageResponse,
    type MessageListMessagesParams as MessageListMessagesParams,
    type MessageUpdateMessageParams as MessageUpdateMessageParams,
  };
}
