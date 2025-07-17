// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class UsersJson extends APIResource {
  /**
   * Creates a user
   */
  create(params: UsersJsonCreateParams, options?: RequestOptions): APIPromise<UsersJsonCreateResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.post('/users.json', {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }
}

export interface UsersJsonCreateResponse {
  active: boolean;

  message: string;

  success: boolean;

  user_id?: number;
}

export interface UsersJsonCreateParams {
  /**
   * Body param:
   */
  email: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  password: string;

  /**
   * Body param:
   */
  username: string;

  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Body param: This param requires an api key in the request header or it will be
   * ignored
   */
  active?: boolean;

  /**
   * Body param:
   */
  approved?: boolean;

  /**
   * Body param:
   */
  external_ids?: unknown;

  /**
   * Body param:
   */
  user_fields?: UsersJsonCreateParams.UserFields;
}

export namespace UsersJsonCreateParams {
  export interface UserFields {
    '1'?: boolean;

    [k: string]: unknown;
  }
}

export declare namespace UsersJson {
  export {
    type UsersJsonCreateResponse as UsersJsonCreateResponse,
    type UsersJsonCreateParams as UsersJsonCreateParams,
  };
}
