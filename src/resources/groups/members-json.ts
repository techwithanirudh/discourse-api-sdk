// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MembersJson extends APIResource {
  /**
   * List group members
   *
   * @example
   * ```ts
   * const membersJsons = await client.groups.membersJson.list(
   *   'name',
   * );
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<MembersJsonListResponse> {
    return this._client.get(path`/groups/${id}/members.json`, options);
  }

  /**
   * Add group members
   *
   * @example
   * ```ts
   * const response = await client.groups.membersJson.add(0);
   * ```
   */
  add(
    id: number,
    body: MembersJsonAddParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MembersJsonAddResponse> {
    return this._client.put(path`/groups/${id}/members.json`, { body, ...options });
  }

  /**
   * Remove group members
   *
   * @example
   * ```ts
   * const membersJson = await client.groups.membersJson.remove(
   *   0,
   * );
   * ```
   */
  remove(
    id: number,
    body: MembersJsonRemoveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MembersJsonRemoveResponse> {
    return this._client.delete(path`/groups/${id}/members.json`, { body, ...options });
  }
}

export interface MembersJsonListResponse {
  members: Array<MembersJsonListResponse.Member>;

  meta: MembersJsonListResponse.Meta;

  owners: Array<MembersJsonListResponse.Owner>;
}

export namespace MembersJsonListResponse {
  export interface Member {
    id: number;

    added_at: string;

    avatar_template: string;

    last_posted_at: string;

    last_seen_at: string;

    name: string | null;

    timezone: string;

    title: string | null;

    username: string;
  }

  export interface Meta {
    limit: number;

    offset: number;

    total: number;
  }

  export interface Owner {
    id: number;

    added_at: string;

    avatar_template: string;

    last_posted_at: string;

    last_seen_at: string;

    name: string | null;

    timezone: string;

    title: string | null;

    username: string;
  }
}

export interface MembersJsonAddResponse {
  emails: Array<unknown>;

  success: string;

  usernames: Array<unknown>;
}

export interface MembersJsonRemoveResponse {
  skipped_usernames: Array<unknown>;

  success: string;

  usernames: Array<unknown>;
}

export interface MembersJsonAddParams {
  /**
   * comma separated list
   */
  usernames?: string;
}

export interface MembersJsonRemoveParams {
  /**
   * comma separated list
   */
  usernames?: string;
}

export declare namespace MembersJson {
  export {
    type MembersJsonListResponse as MembersJsonListResponse,
    type MembersJsonAddResponse as MembersJsonAddResponse,
    type MembersJsonRemoveResponse as MembersJsonRemoveResponse,
    type MembersJsonAddParams as MembersJsonAddParams,
    type MembersJsonRemoveParams as MembersJsonRemoveParams,
  };
}
