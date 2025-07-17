// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AvatarAPI from './avatar';
import { Avatar, AvatarUpdateParams, AvatarUpdateResponse } from './avatar';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Preferences extends APIResource {
  avatar: AvatarAPI.Avatar = new AvatarAPI.Avatar(this._client);

  /**
   * Update email
   */
  updateEmail(
    username: string,
    body: PreferenceUpdateEmailParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/u/${username}/preferences/email.json`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update username
   */
  updateUsername(
    username: string,
    body: PreferenceUpdateUsernameParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/u/${username}/preferences/username.json`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PreferenceUpdateEmailParams {
  email: string;
}

export interface PreferenceUpdateUsernameParams {
  new_username: string;
}

Preferences.Avatar = Avatar;

export declare namespace Preferences {
  export {
    type PreferenceUpdateEmailParams as PreferenceUpdateEmailParams,
    type PreferenceUpdateUsernameParams as PreferenceUpdateUsernameParams,
  };

  export {
    Avatar as Avatar,
    type AvatarUpdateResponse as AvatarUpdateResponse,
    type AvatarUpdateParams as AvatarUpdateParams,
  };
}
