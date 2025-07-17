// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ExternalID extends APIResource {
  /**
   * Get topic by external_id
   *
   * @example
   * ```ts
   * await client.t.externalID.retrieve('external_id');
   * ```
   */
  retrieve(externalID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/t/external_id/${externalID}.json`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
