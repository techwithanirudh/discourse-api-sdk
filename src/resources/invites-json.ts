// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class InvitesJson extends APIResource {
  /**
   * Create an invite
   *
   * @example
   * ```ts
   * const invitesJson = await client.invitesJson.create({
   *   'Api-Username': 'Api-Username',
   * });
   * ```
   */
  create(params: InvitesJsonCreateParams, options?: RequestOptions): APIPromise<InvitesJsonCreateResponse> {
    const { 'Api-Username': apiUsername, ...body } = params;
    return this._client.post('/invites.json', {
      body,
      ...options,
      headers: buildHeaders([{ 'Api-Username': apiUsername }, options?.headers]),
    });
  }
}

export interface InvitesJsonCreateResponse {
  id?: number;

  created_at?: string;

  custom_message?: string | null;

  email?: string;

  emailed?: boolean;

  expired?: boolean;

  expires_at?: string;

  groups?: Array<unknown>;

  link?: string;

  topics?: Array<unknown>;

  updated_at?: string;
}

export interface InvitesJsonCreateParams {
  /**
   * Header param:
   */
  'Api-Username': string;

  /**
   * Body param: optional, for email invites
   */
  custom_message?: string;

  /**
   * Body param: required for email invites only
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

export declare namespace InvitesJson {
  export {
    type InvitesJsonCreateResponse as InvitesJsonCreateResponse,
    type InvitesJsonCreateParams as InvitesJsonCreateParams,
  };
}
