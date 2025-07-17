// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Invites extends APIResource {
  /**
   * Create multiple invites
   *
   * @example
   * ```ts
   * const response = await client.invites.createMultiple({
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  createMultiple(
    params: InviteCreateMultipleParams,
    options?: RequestOptions,
  ): APIPromise<InviteCreateMultipleResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.post('/invites/create-multiple.json', {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }
}

export interface InviteCreateMultipleResponse {
  failed_invitations?: Array<unknown>;

  num_failed_invitations?: number;

  num_successfully_created_invitations?: number;

  successful_invitations?: Array<unknown>;
}

export interface InviteCreateMultipleParams {
  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Body param: optional, for email invites
   */
  custom_message?: string;

  /**
   * Body param: pass 1 email per invite to be generated. other properties will be
   * shared by each invite.
   */
  email?: string;

  /**
   * Body param: optional, if not supplied, the invite_expiry_days site setting is
   * used
   */
  expires_at?: string;

  /**
   * Body param: Optional, either this or `group_names`. Comma separated list for
   * multiple ids.
   */
  group_ids?: string;

  /**
   * Body param: Optional, either this or `group_ids`. Comma separated list for
   * multiple names.
   */
  group_names?: string;

  /**
   * Body param: optional, for link invites
   */
  max_redemptions_allowed?: number;

  /**
   * Body param:
   */
  skip_email?: boolean;

  /**
   * Body param:
   */
  topic_id?: number;
}

export declare namespace Invites {
  export {
    type InviteCreateMultipleResponse as InviteCreateMultipleResponse,
    type InviteCreateMultipleParams as InviteCreateMultipleParams,
  };
}
