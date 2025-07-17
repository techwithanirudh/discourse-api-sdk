// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JsonAPI from './json';
import { Json, JsonRetrieveParams, JsonRetrieveResponse, JsonUpdateParams, JsonUpdateResponse } from './json';
import * as ByExternalAPI from './by-external/by-external';
import { ByExternal } from './by-external/by-external';
import * as PreferencesAPI from './preferences/preferences';
import {
  PreferenceUpdateEmailParams,
  PreferenceUpdateUsernameParams,
  Preferences,
} from './preferences/preferences';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class U extends APIResource {
  json: JsonAPI.Json = new JsonAPI.Json(this._client);
  byExternal: ByExternalAPI.ByExternal = new ByExternalAPI.ByExternal(this._client);
  preferences: PreferencesAPI.Preferences = new PreferencesAPI.Preferences(this._client);

  /**
   * Fetch a user card
   */
  fetchCard(username: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/u/${username}/card.json`, options);
  }

  /**
   * Get email addresses belonging to a user
   */
  listEmails(username: string, options?: RequestOptions): APIPromise<UListEmailsResponse> {
    return this._client.get(path`/u/${username}/emails.json`, options);
  }
}

export type UFetchCardResponse = unknown;

export interface UListEmailsResponse {
  associated_accounts: Array<unknown>;

  email: string;

  secondary_emails: Array<unknown>;

  unconfirmed_emails: Array<unknown>;
}

U.Json = Json;
U.ByExternal = ByExternal;
U.Preferences = Preferences;

export declare namespace U {
  export { type UFetchCardResponse as UFetchCardResponse, type UListEmailsResponse as UListEmailsResponse };

  export {
    Json as Json,
    type JsonRetrieveResponse as JsonRetrieveResponse,
    type JsonUpdateResponse as JsonUpdateResponse,
    type JsonRetrieveParams as JsonRetrieveParams,
    type JsonUpdateParams as JsonUpdateParams,
  };

  export { ByExternal as ByExternal };

  export {
    Preferences as Preferences,
    type PreferenceUpdateEmailParams as PreferenceUpdateEmailParams,
    type PreferenceUpdateUsernameParams as PreferenceUpdateUsernameParams,
  };
}
