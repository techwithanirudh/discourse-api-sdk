// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JsonAPI from './json';
import { Json, JsonDeleteParams, JsonDeleteResponse, JsonRetrieveResponse } from './json';
import * as ListAPI from './list';
import { List, ListGetParams, ListGetResponse } from './list';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Users extends APIResource {
  json: JsonAPI.Json = new JsonAPI.Json(this._client);
  list: ListAPI.List = new ListAPI.List(this._client);

  /**
   * Activate a user
   *
   * @example
   * ```ts
   * const response = await client.admin.users.activate(0);
   * ```
   */
  activate(id: number, options?: RequestOptions): APIPromise<UserActivateResponse> {
    return this._client.put(path`/admin/users/${id}/activate.json`, options);
  }

  /**
   * Anonymize a user
   *
   * @example
   * ```ts
   * const response = await client.admin.users.anonymize(0);
   * ```
   */
  anonymize(id: number, options?: RequestOptions): APIPromise<UserAnonymizeResponse> {
    return this._client.put(path`/admin/users/${id}/anonymize.json`, options);
  }

  /**
   * Deactivate a user
   *
   * @example
   * ```ts
   * const response = await client.admin.users.deactivate(0);
   * ```
   */
  deactivate(id: number, options?: RequestOptions): APIPromise<UserDeactivateResponse> {
    return this._client.put(path`/admin/users/${id}/deactivate.json`, options);
  }

  /**
   * Log a user out
   *
   * @example
   * ```ts
   * const response = await client.admin.users.logOut(0);
   * ```
   */
  logOut(id: number, options?: RequestOptions): APIPromise<UserLogOutResponse> {
    return this._client.post(path`/admin/users/${id}/log_out.json`, options);
  }

  /**
   * Silence a user
   *
   * @example
   * ```ts
   * const response = await client.admin.users.silence(0, {
   *   reason: 'reason',
   *   silenced_till: '2022-06-01T08:00:00.000Z',
   * });
   * ```
   */
  silence(id: number, body: UserSilenceParams, options?: RequestOptions): APIPromise<UserSilenceResponse> {
    return this._client.put(path`/admin/users/${id}/silence.json`, { body, ...options });
  }

  /**
   * Suspend a user
   *
   * @example
   * ```ts
   * const response = await client.admin.users.suspend(0, {
   *   reason: 'reason',
   *   suspend_until: '2121-02-22',
   * });
   * ```
   */
  suspend(id: number, body: UserSuspendParams, options?: RequestOptions): APIPromise<UserSuspendResponse> {
    return this._client.put(path`/admin/users/${id}/suspend.json`, { body, ...options });
  }
}

export interface UserActivateResponse {
  success: string;
}

export interface UserAnonymizeResponse {
  success: string;

  username: string;
}

export interface UserDeactivateResponse {
  success: string;
}

export interface UserLogOutResponse {
  success: string;
}

export interface UserSilenceResponse {
  silence: UserSilenceResponse.Silence;
}

export namespace UserSilenceResponse {
  export interface Silence {
    silence_reason: string;

    silenced: boolean;

    silenced_at: string;

    silenced_by: Silence.SilencedBy;

    silenced_till: string;
  }

  export namespace Silence {
    export interface SilencedBy {
      id: number;

      avatar_template: string;

      name: string;

      username: string;
    }
  }
}

export interface UserSuspendResponse {
  suspension: UserSuspendResponse.Suspension;
}

export namespace UserSuspendResponse {
  export interface Suspension {
    full_suspend_reason: string;

    suspend_reason: string;

    suspended_at: string;

    suspended_by: Suspension.SuspendedBy;

    suspended_till: string;
  }

  export namespace Suspension {
    export interface SuspendedBy {
      id: number;

      avatar_template: string;

      name: string;

      username: string;
    }
  }
}

export interface UserSilenceParams {
  reason: string;

  silenced_till: string;

  /**
   * Will send an email with this message when present
   */
  message?: string;

  post_action?: string;
}

export interface UserSuspendParams {
  reason: string;

  suspend_until: string;

  /**
   * Will send an email with this message when present
   */
  message?: string;

  post_action?: string;
}

Users.Json = Json;
Users.List = List;

export declare namespace Users {
  export {
    type UserActivateResponse as UserActivateResponse,
    type UserAnonymizeResponse as UserAnonymizeResponse,
    type UserDeactivateResponse as UserDeactivateResponse,
    type UserLogOutResponse as UserLogOutResponse,
    type UserSilenceResponse as UserSilenceResponse,
    type UserSuspendResponse as UserSuspendResponse,
    type UserSilenceParams as UserSilenceParams,
    type UserSuspendParams as UserSuspendParams,
  };

  export {
    Json as Json,
    type JsonRetrieveResponse as JsonRetrieveResponse,
    type JsonDeleteResponse as JsonDeleteResponse,
    type JsonDeleteParams as JsonDeleteParams,
  };

  export { List as List, type ListGetResponse as ListGetResponse, type ListGetParams as ListGetParams };
}
