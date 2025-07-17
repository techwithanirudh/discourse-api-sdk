// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIAPI from './api/api';
import { API } from './api/api';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Chat extends APIResource {
  api: APIAPI.API = new APIAPI.API(this._client);

  /**
   * React to a message
   *
   * @example
   * ```ts
   * const response = await client.chat.reactToMessage(4051, {
   *   channel_id: 23,
   * });
   * ```
   */
  reactToMessage(
    messageID: number,
    params: ChatReactToMessageParams,
    options?: RequestOptions,
  ): APIPromise<ChatReactToMessageResponse> {
    const { channel_id, ...body } = params;
    return this._client.put(path`/chat/${channel_id}/react/${messageID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Send a message to a chat channel
   *
   * @example
   * ```ts
   * const response = await client.chat.sendMessage(23);
   * ```
   */
  sendMessage(
    channelID: number,
    body: ChatSendMessageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChatSendMessageResponse> {
    return this._client.post(path`/chat/${channelID}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface ChatReactToMessageResponse {
  success?: string;
}

export interface ChatSendMessageResponse {
  message_id?: number;

  success?: string;
}

export interface ChatReactToMessageParams {
  /**
   * Path param:
   */
  channel_id: number;

  /**
   * Body param:
   */
  emoji?: string;

  /**
   * Body param:
   */
  react_action?: string;
}

export interface ChatSendMessageParams {
  in_reply_to_id?: number | null;

  message?: string;

  staged_id?: string | null;

  thread_id?: number | null;
}

Chat.API = API;

export declare namespace Chat {
  export {
    type ChatReactToMessageResponse as ChatReactToMessageResponse,
    type ChatSendMessageResponse as ChatSendMessageResponse,
    type ChatReactToMessageParams as ChatReactToMessageParams,
    type ChatSendMessageParams as ChatSendMessageParams,
  };

  export { API as API };
}
