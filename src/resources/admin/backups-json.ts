// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BackupsJson extends APIResource {
  /**
   * Create backup
   *
   * @example
   * ```ts
   * const backupsJson = await client.admin.backupsJson.create({
   *   with_uploads: true,
   * });
   * ```
   */
  create(body: BackupsJsonCreateParams, options?: RequestOptions): APIPromise<BackupsJsonCreateResponse> {
    return this._client.post('/admin/backups.json', { body, ...options });
  }

  /**
   * List backups
   *
   * @example
   * ```ts
   * const backupsJsons = await client.admin.backupsJson.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<BackupsJsonListResponse> {
    return this._client.get('/admin/backups.json', options);
  }
}

export interface BackupsJsonCreateResponse {
  success: string;
}

export type BackupsJsonListResponse = Array<BackupsJsonListResponse.BackupsJsonListResponseItem>;

export namespace BackupsJsonListResponse {
  export interface BackupsJsonListResponseItem {
    filename: string;

    last_modified: string;

    size: number;
  }
}

export interface BackupsJsonCreateParams {
  with_uploads: boolean;
}

export declare namespace BackupsJson {
  export {
    type BackupsJsonCreateResponse as BackupsJsonCreateResponse,
    type BackupsJsonListResponse as BackupsJsonListResponse,
    type BackupsJsonCreateParams as BackupsJsonCreateParams,
  };
}
