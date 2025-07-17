// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ChannelsAPI from './channels/channels';
import { Channels } from './channels/channels';

export class API extends APIResource {
  channels: ChannelsAPI.Channels = new ChannelsAPI.Channels(this._client);
}

API.Channels = Channels;

export declare namespace API {
  export { Channels as Channels };
}
