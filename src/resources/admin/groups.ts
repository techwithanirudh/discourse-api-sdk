// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Delete a group
   *
   * @example
   * ```ts
   * const group = await client.admin.groups.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<GroupDeleteResponse> {
    return this._client.delete(path`/admin/groups/${id}.json`, options);
  }
}

export interface GroupDeleteResponse {
  success: string;
}

export declare namespace Groups {
  export { type GroupDeleteResponse as GroupDeleteResponse };
}
