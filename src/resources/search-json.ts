// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SearchJson extends APIResource {
  /**
   * Search for a term
   */
  performSearch(
    query: SearchJsonPerformSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SearchJsonPerformSearchResponse> {
    return this._client.get('/search.json', { query, ...options });
  }
}

export interface SearchJsonPerformSearchResponse {
  categories: Array<unknown>;

  grouped_search_result: SearchJsonPerformSearchResponse.GroupedSearchResult;

  groups: Array<unknown>;

  posts: Array<unknown>;

  tags: Array<unknown>;

  users: Array<unknown>;
}

export namespace SearchJsonPerformSearchResponse {
  export interface GroupedSearchResult {
    can_create_topic: boolean;

    category_ids: Array<unknown>;

    error: string | null;

    group_ids: Array<unknown>;

    more_categories: string | null;

    more_full_page_results: string | null;

    more_posts: string | null;

    more_users: string | null;

    post_ids: Array<unknown>;

    search_log_id: number;

    tag_ids: Array<unknown>;

    term: string;

    user_ids: Array<unknown>;

    extra?: GroupedSearchResult.Extra;
  }

  export namespace GroupedSearchResult {
    export interface Extra {
      categories?: Array<unknown> | null;
    }
  }
}

export interface SearchJsonPerformSearchParams {
  page?: number;

  /**
   * The query string needs to be url encoded and is made up of the following
   * options:
   *
   * - Search term. This is just a string. Usually it would be the first item in the
   *   query.
   * - `@<username>`: Use the `@` followed by the username to specify posts by this
   *   user.
   * - `#<category>`: Use the `#` followed by the category slug to search within this
   *   category.
   * - `tags:`: `api,solved` or for posts that have all the specified tags
   *   `api+solved`.
   * - `before:`: `yyyy-mm-dd`
   * - `after:`: `yyyy-mm-dd`
   * - `order:`: `latest`, `likes`, `views`, `latest_topic`
   * - `assigned:`: username (without `@`)
   * - `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`,
   *   `created`, `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`,
   *   `first`, `pinned`, `wiki`
   * - `with:`: `images`
   * - `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`,
   *   `solved`, `unsolved`
   * - `group:`: group_name or group_id
   * - `group_messages:`: group_name or group_id
   * - `min_posts:`: 1
   * - `max_posts:`: 10
   * - `min_views:`: 1
   * - `max_views:`: 10
   *
   * If you are using cURL you can use the `-G` and the `--data-urlencode` flags to
   * encode the query:
   *
   * ```
   * curl -i -sS -X GET -G "http://localhost:4200/search.json" \
   * --data-urlencode 'q=wordpress @scossar #fun after:2020-01-01'
   * ```
   */
  q?: string;
}

export declare namespace SearchJson {
  export {
    type SearchJsonPerformSearchResponse as SearchJsonPerformSearchResponse,
    type SearchJsonPerformSearchParams as SearchJsonPerformSearchParams,
  };
}
