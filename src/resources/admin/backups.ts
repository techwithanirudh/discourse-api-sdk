// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Backups extends APIResource {
  /**
   * Download backup
   *
   * @example
   * ```ts
   * await client.admin.backups.download('filename', {
   *   token: 'token',
   * });
   * ```
   */
  download(filename: string, query: BackupDownloadParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/admin/backups/${filename}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Send download backup email
   *
   * @example
   * ```ts
   * await client.admin.backups.sendDownloadEmail('filename');
   * ```
   */
  sendDownloadEmail(filename: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/admin/backups/${filename}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BackupDownloadParams {
  token: string;
}

export declare namespace Backups {
  export { type BackupDownloadParams as BackupDownloadParams };
}
