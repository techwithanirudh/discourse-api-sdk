// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Site extends APIResource {
  /**
   * Can be used to fetch basic info about a site
   */
  retrieveBasicInfo(options?: RequestOptions): APIPromise<SiteRetrieveBasicInfoResponse> {
    return this._client.get('/site/basic-info.json', options);
  }
}

export interface SiteRetrieveBasicInfoResponse {
  apple_touch_icon_url: string;

  description: string;

  favicon_url: string;

  header_background_color: string;

  header_primary_color: string;

  include_in_discourse_discover: boolean;

  locale: string;

  login_required: boolean;

  logo_small_url: string;

  logo_url: string;

  mobile_logo_url: string;

  title: string;
}

export declare namespace Site {
  export { type SiteRetrieveBasicInfoResponse as SiteRetrieveBasicInfoResponse };
}
