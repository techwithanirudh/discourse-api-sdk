// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PrivateMessagesAPI from './private-messages';
import { PrivateMessageListResponse, PrivateMessages } from './private-messages';
import * as PrivateMessagesSentAPI from './private-messages-sent';
import { PrivateMessagesSent, PrivateMessagesSentListResponse } from './private-messages-sent';

export class Topics extends APIResource {
  privateMessages: PrivateMessagesAPI.PrivateMessages = new PrivateMessagesAPI.PrivateMessages(this._client);
  privateMessagesSent: PrivateMessagesSentAPI.PrivateMessagesSent =
    new PrivateMessagesSentAPI.PrivateMessagesSent(this._client);
}

Topics.PrivateMessages = PrivateMessages;
Topics.PrivateMessagesSent = PrivateMessagesSent;

export declare namespace Topics {
  export {
    PrivateMessages as PrivateMessages,
    type PrivateMessageListResponse as PrivateMessageListResponse,
  };

  export {
    PrivateMessagesSent as PrivateMessagesSent,
    type PrivateMessagesSentListResponse as PrivateMessagesSentListResponse,
  };
}
