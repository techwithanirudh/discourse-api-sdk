// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class UserAvatar extends APIResource {
  /**
   * Refresh gravatar
   */
  refreshGravatar(username: string, options?: RequestOptions): APIPromise<UserAvatarRefreshGravatarResponse> {
    return this._client.post(path`/user_avatar/${username}/refresh_gravatar.json`, options);
  }
}

export interface UserAvatarRefreshGravatarResponse {
  gravatar_avatar_template: string | null;

  gravatar_upload_id: number | null;
}

export declare namespace UserAvatar {
  export { type UserAvatarRefreshGravatarResponse as UserAvatarRefreshGravatarResponse };
}
