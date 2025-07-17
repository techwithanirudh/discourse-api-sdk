// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class TagsJson extends APIResource {
  /**
   * Get a list of tags
   */
  list(options?: RequestOptions): APIPromise<TagsJsonListResponse> {
    return this._client.get('/tags.json', options);
  }
}

export interface TagsJsonListResponse {
  extras?: TagsJsonListResponse.Extras;

  tags?: Array<TagsJsonListResponse.Tag>;
}

export namespace TagsJsonListResponse {
  export interface Extras {
    categories?: Array<unknown>;
  }

  export interface Tag {
    id?: string;

    count?: number;

    pm_count?: number;

    target_tag?: string | null;

    text?: string;
  }
}

export declare namespace TagsJson {
  export { type TagsJsonListResponse as TagsJsonListResponse };
}
