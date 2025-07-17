// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Avatar extends APIResource {
  /**
   * Update avatar
   */
  update(
    username: string,
    body: AvatarUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AvatarUpdateResponse> {
    return this._client.put(path`/u/${username}/preferences/avatar/pick.json`, { body, ...options });
  }
}

export interface AvatarUpdateResponse {
  success: string;
}

export interface AvatarUpdateParams {
  type: 'uploaded' | 'custom' | 'gravatar' | 'system';

  upload_id: number;
}

export declare namespace Avatar {
  export { type AvatarUpdateResponse as AvatarUpdateResponse, type AvatarUpdateParams as AvatarUpdateParams };
}
