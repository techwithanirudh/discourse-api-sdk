// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import { C, CListTopicsParams, CListTopicsResponse, CShowCategoryResponse } from './resources/c';
import { Categories, CategoryUpdateParams, CategoryUpdateResponse } from './resources/categories';
import {
  CategoriesJson,
  CategoriesJsonCreateParams,
  CategoriesJsonCreateResponse,
  CategoriesJsonListParams,
  CategoriesJsonListResponse,
} from './resources/categories-json';
import {
  DirectoryItemsJson,
  DirectoryItemsJsonListParams,
  DirectoryItemsJsonListResponse,
} from './resources/directory-items-json';
import { InviteCreateMultipleParams, InviteCreateMultipleResponse, Invites } from './resources/invites';
import { InvitesJson, InvitesJsonCreateParams, InvitesJsonCreateResponse } from './resources/invites-json';
import { LatestJson, LatestJsonGetLatestParams, LatestJsonGetLatestResponse } from './resources/latest-json';
import {
  NotificationMarkReadParams,
  NotificationMarkReadResponse,
  Notifications,
} from './resources/notifications';
import { NotificationsJson, NotificationsJsonListResponse } from './resources/notifications-json';
import {
  PostActionsJson,
  PostActionsJsonCreateParams,
  PostActionsJsonCreateResponse,
} from './resources/post-actions-json';
import {
  PostCreateParams,
  PostCreateResponse,
  PostDeleteParams,
  PostListParams,
  PostListResponse,
  PostRetrieveResponse,
  PostUpdateParams,
  PostUpdateResponse,
  Posts,
} from './resources/posts';
import {
  SearchJson,
  SearchJsonPerformSearchParams,
  SearchJsonPerformSearchResponse,
} from './resources/search-json';
import {
  Session,
  SessionRetrieveCurrentResponse,
  SessionSendForgotPasswordEmailParams,
  SessionSendForgotPasswordEmailResponse,
} from './resources/session';
import { Site, SiteRetrieveBasicInfoResponse } from './resources/site';
import { SiteJson, SiteJsonRetrieveResponse } from './resources/site-json';
import { Tag, TagRetrieveResponse } from './resources/tag';
import {
  TagGroupCreateParams,
  TagGroupCreateResponse,
  TagGroupListResponse,
  TagGroupRetrieveResponse,
  TagGroupUpdateParams,
  TagGroupUpdateResponse,
  TagGroups,
} from './resources/tag-groups';
import { TagsJson, TagsJsonListResponse } from './resources/tags-json';
import { TopJson, TopJsonRetrieveParams, TopJsonRetrieveResponse } from './resources/top-json';
import {
  UploadAbortMultipartParams,
  UploadAbortMultipartResponse,
  UploadBatchPresignMultipartPartsParams,
  UploadBatchPresignMultipartPartsResponse,
  UploadCompleteExternalUploadParams,
  UploadCompleteExternalUploadResponse,
  UploadCompleteMultipartParams,
  UploadCompleteMultipartResponse,
  UploadCreateMultipartParams,
  UploadCreateMultipartResponse,
  UploadGeneratePresignedPutParams,
  UploadGeneratePresignedPutResponse,
  Uploads as UploadsAPIUploads,
} from './resources/uploads';
import { UploadsJson, UploadsJsonCreateParams, UploadsJsonCreateResponse } from './resources/uploads-json';
import {
  UserActionsJson,
  UserActionsJsonListParams,
  UserActionsJsonListResponse,
} from './resources/user-actions-json';
import { UserAvatar, UserAvatarRefreshGravatarResponse } from './resources/user-avatar';
import { UserBadgeListResponse, UserBadges } from './resources/user-badges';
import { UsersJson, UsersJsonCreateParams, UsersJsonCreateResponse } from './resources/users-json';
import { Admin, AdminCreateGroupParams, AdminCreateGroupResponse } from './resources/admin/admin';
import {
  Chat,
  ChatReactToMessageParams,
  ChatReactToMessageResponse,
  ChatSendMessageParams,
  ChatSendMessageResponse,
} from './resources/chat/chat';
import {
  GroupListResponse,
  GroupRetrieveResponse,
  GroupUpdateParams,
  GroupUpdateResponse,
  Groups,
} from './resources/groups/groups';
import {
  T,
  TBookmarkParams,
  TCreateTimerParams,
  TCreateTimerResponse,
  TInviteGroupParams,
  TInviteGroupResponse,
  TInviteParams,
  TInviteResponse,
  TRetrievePostsParams,
  TRetrievePostsResponse,
  TSetNotificationsParams,
  TSetNotificationsResponse,
  TUpdateStatusParams,
  TUpdateStatusResponse,
  TUpdateTimestampParams,
  TUpdateTimestampResponse,
} from './resources/t/t';
import { Topics } from './resources/topics/topics';
import { U, UFetchCardResponse, UListEmailsResponse } from './resources/u/u';
import { Users } from './resources/users/users';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['DISCOURSE_SDK_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Defaults to process.env['DISCOURSE_SDK_DEFAULT_HOST'].
   */
  defaultHost?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['DISCOURSE_SDK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['DISCOURSE_SDK_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Discourse SDK API.
 */
export class DiscourseSDK {
  apiKey: string;
  defaultHost: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Discourse SDK API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['DISCOURSE_SDK_API_KEY'] ?? undefined]
   * @param {string | undefined} [opts.defaultHost=process.env['DISCOURSE_SDK_DEFAULT_HOST'] ?? discourse.example.com]
   * @param {string} [opts.baseURL=process.env['DISCOURSE_SDK_BASE_URL'] ?? https://{defaultHost}] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('DISCOURSE_SDK_BASE_URL'),
    apiKey = readEnv('DISCOURSE_SDK_API_KEY'),
    defaultHost = readEnv('DISCOURSE_SDK_DEFAULT_HOST') ?? 'discourse.example.com',
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.DiscourseSDKError(
        "The DISCOURSE_SDK_API_KEY environment variable is missing or empty; either provide it, or instantiate the DiscourseSDK client with an apiKey option, like new DiscourseSDK({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      defaultHost,
      ...opts,
      baseURL: baseURL || `https://${defaultHost}`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? DiscourseSDK.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('DISCOURSE_SDK_LOG'), "process.env['DISCOURSE_SDK_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
    this.defaultHost = defaultHost;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      defaultHost: this.defaultHost,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://{defaultHost}';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ 'Api-Key': this.apiKey }]);
  }

  /**
   * Basic re-implementation of `qs.stringify` for primitive types.
   */
  protected stringifyQuery(query: Record<string, unknown>): string {
    return Object.entries(query)
      .filter(([_, value]) => typeof value !== 'undefined')
      .map(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        if (value === null) {
          return `${encodeURIComponent(key)}=`;
        }
        throw new Errors.DiscourseSDKError(
          `Cannot stringify type ${typeof value}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`,
        );
      })
      .join('&');
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      body instanceof Blob ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static DiscourseSDK = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static DiscourseSDKError = Errors.DiscourseSDKError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  admin: API.Admin = new API.Admin(this);
  categoriesJson: API.CategoriesJson = new API.CategoriesJson(this);
  categories: API.Categories = new API.Categories(this);
  c: API.C = new API.C(this);
  groups: API.Groups = new API.Groups(this);
  invitesJson: API.InvitesJson = new API.InvitesJson(this);
  invites: API.Invites = new API.Invites(this);
  notificationsJson: API.NotificationsJson = new API.NotificationsJson(this);
  notifications: API.Notifications = new API.Notifications(this);
  posts: API.Posts = new API.Posts(this);
  postActionsJson: API.PostActionsJson = new API.PostActionsJson(this);
  topics: API.Topics = new API.Topics(this);
  searchJson: API.SearchJson = new API.SearchJson(this);
  siteJson: API.SiteJson = new API.SiteJson(this);
  site: API.Site = new API.Site(this);
  tagsJson: API.TagsJson = new API.TagsJson(this);
  tag: API.Tag = new API.Tag(this);
  t: API.T = new API.T(this);
  latestJson: API.LatestJson = new API.LatestJson(this);
  topJson: API.TopJson = new API.TopJson(this);
  uploadsJson: API.UploadsJson = new API.UploadsJson(this);
  uploads: API.Uploads = new API.Uploads(this);
  userBadges: API.UserBadges = new API.UserBadges(this);
  usersJson: API.UsersJson = new API.UsersJson(this);
  u: API.U = new API.U(this);
  directoryItemsJson: API.DirectoryItemsJson = new API.DirectoryItemsJson(this);
  userAvatar: API.UserAvatar = new API.UserAvatar(this);
  userActionsJson: API.UserActionsJson = new API.UserActionsJson(this);
  session: API.Session = new API.Session(this);
  users: API.Users = new API.Users(this);
  chat: API.Chat = new API.Chat(this);
  tagGroups: API.TagGroups = new API.TagGroups(this);
}
DiscourseSDK.Admin = Admin;
DiscourseSDK.CategoriesJson = CategoriesJson;
DiscourseSDK.Categories = Categories;
DiscourseSDK.C = C;
DiscourseSDK.Groups = Groups;
DiscourseSDK.InvitesJson = InvitesJson;
DiscourseSDK.Invites = Invites;
DiscourseSDK.NotificationsJson = NotificationsJson;
DiscourseSDK.Notifications = Notifications;
DiscourseSDK.Posts = Posts;
DiscourseSDK.PostActionsJson = PostActionsJson;
DiscourseSDK.Topics = Topics;
DiscourseSDK.SearchJson = SearchJson;
DiscourseSDK.SiteJson = SiteJson;
DiscourseSDK.Site = Site;
DiscourseSDK.TagsJson = TagsJson;
DiscourseSDK.Tag = Tag;
DiscourseSDK.T = T;
DiscourseSDK.LatestJson = LatestJson;
DiscourseSDK.TopJson = TopJson;
DiscourseSDK.UploadsJson = UploadsJson;
DiscourseSDK.Uploads = UploadsAPIUploads;
DiscourseSDK.UserBadges = UserBadges;
DiscourseSDK.UsersJson = UsersJson;
DiscourseSDK.U = U;
DiscourseSDK.DirectoryItemsJson = DirectoryItemsJson;
DiscourseSDK.UserAvatar = UserAvatar;
DiscourseSDK.UserActionsJson = UserActionsJson;
DiscourseSDK.Session = Session;
DiscourseSDK.Users = Users;
DiscourseSDK.Chat = Chat;
DiscourseSDK.TagGroups = TagGroups;
export declare namespace DiscourseSDK {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Admin as Admin,
    type AdminCreateGroupResponse as AdminCreateGroupResponse,
    type AdminCreateGroupParams as AdminCreateGroupParams,
  };

  export {
    CategoriesJson as CategoriesJson,
    type CategoriesJsonCreateResponse as CategoriesJsonCreateResponse,
    type CategoriesJsonListResponse as CategoriesJsonListResponse,
    type CategoriesJsonCreateParams as CategoriesJsonCreateParams,
    type CategoriesJsonListParams as CategoriesJsonListParams,
  };

  export {
    Categories as Categories,
    type CategoryUpdateResponse as CategoryUpdateResponse,
    type CategoryUpdateParams as CategoryUpdateParams,
  };

  export {
    C as C,
    type CListTopicsResponse as CListTopicsResponse,
    type CShowCategoryResponse as CShowCategoryResponse,
    type CListTopicsParams as CListTopicsParams,
  };

  export {
    Groups as Groups,
    type GroupRetrieveResponse as GroupRetrieveResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupListResponse as GroupListResponse,
    type GroupUpdateParams as GroupUpdateParams,
  };

  export {
    InvitesJson as InvitesJson,
    type InvitesJsonCreateResponse as InvitesJsonCreateResponse,
    type InvitesJsonCreateParams as InvitesJsonCreateParams,
  };

  export {
    Invites as Invites,
    type InviteCreateMultipleResponse as InviteCreateMultipleResponse,
    type InviteCreateMultipleParams as InviteCreateMultipleParams,
  };

  export {
    NotificationsJson as NotificationsJson,
    type NotificationsJsonListResponse as NotificationsJsonListResponse,
  };

  export {
    Notifications as Notifications,
    type NotificationMarkReadResponse as NotificationMarkReadResponse,
    type NotificationMarkReadParams as NotificationMarkReadParams,
  };

  export {
    Posts as Posts,
    type PostCreateResponse as PostCreateResponse,
    type PostRetrieveResponse as PostRetrieveResponse,
    type PostUpdateResponse as PostUpdateResponse,
    type PostListResponse as PostListResponse,
    type PostCreateParams as PostCreateParams,
    type PostUpdateParams as PostUpdateParams,
    type PostListParams as PostListParams,
    type PostDeleteParams as PostDeleteParams,
  };

  export {
    PostActionsJson as PostActionsJson,
    type PostActionsJsonCreateResponse as PostActionsJsonCreateResponse,
    type PostActionsJsonCreateParams as PostActionsJsonCreateParams,
  };

  export { Topics as Topics };

  export {
    SearchJson as SearchJson,
    type SearchJsonPerformSearchResponse as SearchJsonPerformSearchResponse,
    type SearchJsonPerformSearchParams as SearchJsonPerformSearchParams,
  };

  export { SiteJson as SiteJson, type SiteJsonRetrieveResponse as SiteJsonRetrieveResponse };

  export { Site as Site, type SiteRetrieveBasicInfoResponse as SiteRetrieveBasicInfoResponse };

  export { TagsJson as TagsJson, type TagsJsonListResponse as TagsJsonListResponse };

  export { Tag as Tag, type TagRetrieveResponse as TagRetrieveResponse };

  export {
    T as T,
    type TCreateTimerResponse as TCreateTimerResponse,
    type TInviteResponse as TInviteResponse,
    type TInviteGroupResponse as TInviteGroupResponse,
    type TRetrievePostsResponse as TRetrievePostsResponse,
    type TSetNotificationsResponse as TSetNotificationsResponse,
    type TUpdateStatusResponse as TUpdateStatusResponse,
    type TUpdateTimestampResponse as TUpdateTimestampResponse,
    type TBookmarkParams as TBookmarkParams,
    type TCreateTimerParams as TCreateTimerParams,
    type TInviteParams as TInviteParams,
    type TInviteGroupParams as TInviteGroupParams,
    type TRetrievePostsParams as TRetrievePostsParams,
    type TSetNotificationsParams as TSetNotificationsParams,
    type TUpdateStatusParams as TUpdateStatusParams,
    type TUpdateTimestampParams as TUpdateTimestampParams,
  };

  export {
    LatestJson as LatestJson,
    type LatestJsonGetLatestResponse as LatestJsonGetLatestResponse,
    type LatestJsonGetLatestParams as LatestJsonGetLatestParams,
  };

  export {
    TopJson as TopJson,
    type TopJsonRetrieveResponse as TopJsonRetrieveResponse,
    type TopJsonRetrieveParams as TopJsonRetrieveParams,
  };

  export {
    UploadsJson as UploadsJson,
    type UploadsJsonCreateResponse as UploadsJsonCreateResponse,
    type UploadsJsonCreateParams as UploadsJsonCreateParams,
  };

  export {
    UploadsAPIUploads as Uploads,
    type UploadAbortMultipartResponse as UploadAbortMultipartResponse,
    type UploadBatchPresignMultipartPartsResponse as UploadBatchPresignMultipartPartsResponse,
    type UploadCompleteExternalUploadResponse as UploadCompleteExternalUploadResponse,
    type UploadCompleteMultipartResponse as UploadCompleteMultipartResponse,
    type UploadCreateMultipartResponse as UploadCreateMultipartResponse,
    type UploadGeneratePresignedPutResponse as UploadGeneratePresignedPutResponse,
    type UploadAbortMultipartParams as UploadAbortMultipartParams,
    type UploadBatchPresignMultipartPartsParams as UploadBatchPresignMultipartPartsParams,
    type UploadCompleteExternalUploadParams as UploadCompleteExternalUploadParams,
    type UploadCompleteMultipartParams as UploadCompleteMultipartParams,
    type UploadCreateMultipartParams as UploadCreateMultipartParams,
    type UploadGeneratePresignedPutParams as UploadGeneratePresignedPutParams,
  };

  export { UserBadges as UserBadges, type UserBadgeListResponse as UserBadgeListResponse };

  export {
    UsersJson as UsersJson,
    type UsersJsonCreateResponse as UsersJsonCreateResponse,
    type UsersJsonCreateParams as UsersJsonCreateParams,
  };

  export {
    U as U,
    type UFetchCardResponse as UFetchCardResponse,
    type UListEmailsResponse as UListEmailsResponse,
  };

  export {
    DirectoryItemsJson as DirectoryItemsJson,
    type DirectoryItemsJsonListResponse as DirectoryItemsJsonListResponse,
    type DirectoryItemsJsonListParams as DirectoryItemsJsonListParams,
  };

  export {
    UserAvatar as UserAvatar,
    type UserAvatarRefreshGravatarResponse as UserAvatarRefreshGravatarResponse,
  };

  export {
    UserActionsJson as UserActionsJson,
    type UserActionsJsonListResponse as UserActionsJsonListResponse,
    type UserActionsJsonListParams as UserActionsJsonListParams,
  };

  export {
    Session as Session,
    type SessionRetrieveCurrentResponse as SessionRetrieveCurrentResponse,
    type SessionSendForgotPasswordEmailResponse as SessionSendForgotPasswordEmailResponse,
    type SessionSendForgotPasswordEmailParams as SessionSendForgotPasswordEmailParams,
  };

  export { Users as Users };

  export {
    Chat as Chat,
    type ChatReactToMessageResponse as ChatReactToMessageResponse,
    type ChatSendMessageResponse as ChatSendMessageResponse,
    type ChatReactToMessageParams as ChatReactToMessageParams,
    type ChatSendMessageParams as ChatSendMessageParams,
  };

  export {
    TagGroups as TagGroups,
    type TagGroupCreateResponse as TagGroupCreateResponse,
    type TagGroupRetrieveResponse as TagGroupRetrieveResponse,
    type TagGroupUpdateResponse as TagGroupUpdateResponse,
    type TagGroupListResponse as TagGroupListResponse,
    type TagGroupCreateParams as TagGroupCreateParams,
    type TagGroupUpdateParams as TagGroupUpdateParams,
  };
}
