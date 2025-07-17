// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class UploadsJson extends APIResource {
  /**
   * Creates an upload
   */
  create(body: UploadsJsonCreateParams, options?: RequestOptions): APIPromise<UploadsJsonCreateResponse> {
    return this._client.post(
      '/uploads.json',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface UploadsJsonCreateResponse {
  id: number;

  extension: string;

  filesize: number;

  height: number;

  human_filesize: string;

  original_filename: string;

  retain_hours: string | null;

  short_path: string;

  short_url: string;

  thumbnail_height: number;

  thumbnail_width: number;

  url: string;

  width: number;

  dominant_color?: string | null;

  thumbnail?: UploadsJsonCreateResponse.Thumbnail | null;
}

export namespace UploadsJsonCreateResponse {
  export interface Thumbnail {
    id?: number;

    extension?: string;

    filesize?: number;

    height?: number;

    upload_id?: number;

    url?: string;

    width?: number;
  }
}

export interface UploadsJsonCreateParams {
  type: 'avatar' | 'profile_background' | 'card_background' | 'custom_emoji' | 'composer';

  file?: Uploadable;

  /**
   * Use this flag to return an id and url
   */
  synchronous?: boolean;

  /**
   * required if uploading an avatar
   */
  user_id?: number;
}

export declare namespace UploadsJson {
  export {
    type UploadsJsonCreateResponse as UploadsJsonCreateResponse,
    type UploadsJsonCreateParams as UploadsJsonCreateParams,
  };
}
