// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MessagesAPI from './messages';
import {
  MessageListMessagesParams,
  MessageListMessagesResponse,
  MessageUpdateMessageParams,
  MessageUpdateMessageResponse,
  Messages,
} from './messages';
import * as ThreadsAPI from './threads';
import {
  ThreadListThreadMessagesParams,
  ThreadListThreadMessagesResponse,
  ThreadRetrieveThreadParams,
  ThreadRetrieveThreadResponse,
  Threads,
} from './threads';

export class Channels extends APIResource {
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
}

Channels.Threads = Threads;
Channels.Messages = Messages;

export declare namespace Channels {
  export {
    Threads as Threads,
    type ThreadListThreadMessagesResponse as ThreadListThreadMessagesResponse,
    type ThreadRetrieveThreadResponse as ThreadRetrieveThreadResponse,
    type ThreadListThreadMessagesParams as ThreadListThreadMessagesParams,
    type ThreadRetrieveThreadParams as ThreadRetrieveThreadParams,
  };

  export {
    Messages as Messages,
    type MessageListMessagesResponse as MessageListMessagesResponse,
    type MessageUpdateMessageResponse as MessageUpdateMessageResponse,
    type MessageListMessagesParams as MessageListMessagesParams,
    type MessageUpdateMessageParams as MessageUpdateMessageParams,
  };
}
