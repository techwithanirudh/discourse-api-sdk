// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TagGroups extends APIResource {
  /**
   * Creates a tag group
   */
  create(body: TagGroupCreateParams, options?: RequestOptions): APIPromise<TagGroupCreateResponse> {
    return this._client.post('/tag_groups.json', { body, ...options });
  }

  /**
   * Get a single tag group
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TagGroupRetrieveResponse> {
    return this._client.get(path`/tag_groups/${id}.json`, options);
  }

  /**
   * Update tag group
   */
  update(
    id: string,
    body: TagGroupUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TagGroupUpdateResponse> {
    return this._client.put(path`/tag_groups/${id}.json`, { body, ...options });
  }

  /**
   * Get a list of tag groups
   */
  list(options?: RequestOptions): APIPromise<TagGroupListResponse> {
    return this._client.get('/tag_groups.json', options);
  }
}

export interface TagGroupCreateResponse {
  tag_group: TagGroupCreateResponse.TagGroup;
}

export namespace TagGroupCreateResponse {
  export interface TagGroup {
    id: number;

    name: string;

    one_per_topic: boolean;

    parent_tag_name: Array<unknown>;

    permissions: unknown;

    tag_names: Array<unknown>;
  }
}

export interface TagGroupRetrieveResponse {
  tag_group?: TagGroupRetrieveResponse.TagGroup;
}

export namespace TagGroupRetrieveResponse {
  export interface TagGroup {
    id?: number;

    name?: string;

    one_per_topic?: boolean;

    parent_tag_name?: Array<unknown>;

    permissions?: TagGroup.Permissions;

    tag_names?: Array<unknown>;
  }

  export namespace TagGroup {
    export interface Permissions {
      everyone?: number;
    }
  }
}

export interface TagGroupUpdateResponse {
  success?: string;

  tag_group?: TagGroupUpdateResponse.TagGroup;
}

export namespace TagGroupUpdateResponse {
  export interface TagGroup {
    id?: number;

    name?: string;

    one_per_topic?: boolean;

    parent_tag_name?: Array<unknown>;

    permissions?: TagGroup.Permissions;

    tag_names?: Array<unknown>;
  }

  export namespace TagGroup {
    export interface Permissions {
      everyone?: number;
    }
  }
}

export interface TagGroupListResponse {
  tag_groups?: Array<TagGroupListResponse.TagGroup>;
}

export namespace TagGroupListResponse {
  export interface TagGroup {
    id?: number;

    name?: string;

    one_per_topic?: boolean;

    parent_tag_name?: Array<unknown>;

    permissions?: TagGroup.Permissions;

    tag_names?: Array<unknown>;
  }

  export namespace TagGroup {
    export interface Permissions {
      staff?: number;
    }
  }
}

export interface TagGroupCreateParams {
  name: string;
}

export interface TagGroupUpdateParams {
  name?: string;
}

export declare namespace TagGroups {
  export {
    type TagGroupCreateResponse as TagGroupCreateResponse,
    type TagGroupRetrieveResponse as TagGroupRetrieveResponse,
    type TagGroupUpdateResponse as TagGroupUpdateResponse,
    type TagGroupListResponse as TagGroupListResponse,
    type TagGroupCreateParams as TagGroupCreateParams,
    type TagGroupUpdateParams as TagGroupUpdateParams,
  };
}
