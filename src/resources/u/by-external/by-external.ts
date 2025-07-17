// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as JsonAPI from './json';
import {
  Json,
  JsonRetrieveByProviderParams,
  JsonRetrieveByProviderResponse,
  JsonRetrieveParams,
  JsonRetrieveResponse,
} from './json';

export class ByExternal extends APIResource {
  json: JsonAPI.Json = new JsonAPI.Json(this._client);
}

ByExternal.Json = Json;

export declare namespace ByExternal {
  export {
    Json as Json,
    type JsonRetrieveResponse as JsonRetrieveResponse,
    type JsonRetrieveByProviderResponse as JsonRetrieveByProviderResponse,
    type JsonRetrieveParams as JsonRetrieveParams,
    type JsonRetrieveByProviderParams as JsonRetrieveByProviderParams,
  };
}
