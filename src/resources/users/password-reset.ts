// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PasswordReset extends APIResource {
  /**
   * Change password
   */
  changePassword(
    token: string,
    body: PasswordResetChangePasswordParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/users/password-reset/${token}.json`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PasswordResetChangePasswordParams {
  password: string;

  username: string;
}

export declare namespace PasswordReset {
  export { type PasswordResetChangePasswordParams as PasswordResetChangePasswordParams };
}
