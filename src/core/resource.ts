// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { DiscourseSDK } from '../client';

export abstract class APIResource {
  protected _client: DiscourseSDK;

  constructor(client: DiscourseSDK) {
    this._client = client;
  }
}
