/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface TokenCreate {
  /**
   * Password
   * @minLength 1
   */
  password?: string;
  /**
   * Username
   * @minLength 1
   */
  username?: string;
}

export interface User {
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /** ID */
  id?: number;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   */
  username?: string;
}

export interface UserCreate {
  /**
   * Email address
   * @format email
   * @maxLength 254
   */
  email?: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  username: string;
  /** ID */
  id?: number;
  /**
   * Password
   * @minLength 1
   */
  password: string;
}

export interface Activation {
  /**
   * Uid
   * @minLength 1
   */
  uid: string;
  /**
   * Token
   * @minLength 1
   */
  token: string;
}

export interface SendEmailReset {
  /**
   * Email
   * @format email
   * @minLength 1
   */
  email: string;
}

export interface PasswordResetConfirm {
  /**
   * Uid
   * @minLength 1
   */
  uid: string;
  /**
   * Token
   * @minLength 1
   */
  token: string;
  /**
   * New password
   * @minLength 1
   */
  new_password: string;
}

export interface UsernameResetConfirm {
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  new_username: string;
}

export interface SetPassword {
  /**
   * New password
   * @minLength 1
   */
  new_password: string;
  /**
   * Current password
   * @minLength 1
   */
  current_password: string;
}

export interface SetUsername {
  /**
   * Current password
   * @minLength 1
   */
  current_password: string;
  /**
   * Username
   * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
   * @minLength 1
   * @maxLength 150
   * @pattern ^[\w.@+-]+$
   */
  new_username: string;
}

export interface GetProvider {
  /** ID */
  pk?: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /**
   * Location
   * @minLength 1
   * @maxLength 50
   */
  location: string;
  /**
   * Photo
   * @format uri
   */
  photo?: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
}

export interface GetProduct {
  /** ID */
  pk?: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /** Price */
  price: number;
  /**
   * Description
   * @minLength 1
   * @maxLength 1000
   */
  description: string;
  /**
   * Photo
   * @format uri
   */
  photo?: string;
  provider: GetProvider;
}

export interface GetOrders {
  /** ID */
  pk?: number;
  /** State */
  state?: "P" | "A" | "R";
  /**
   * Quantity
   * @min -2147483648
   * @max 2147483647
   */
  quantity: number;
  product: GetProduct;
  /**
   * ShCart
   * @format uuid
   */
  shCart: string;
}

export interface PutOrders {
  /** ID */
  pk?: number;
  /**
   * Quantity
   * @min -2147483648
   * @max 2147483647
   */
  quantity: number;
  /** Product */
  product: number;
  /**
   * ShCart
   * @format uuid
   */
  shCart: string;
}

export interface PutProduct {
  /** ID */
  pk?: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /** Price */
  price: number;
  /**
   * Description
   * @minLength 1
   * @maxLength 1000
   */
  description: string;
  /**
   * Category
   * @minLength 1
   * @maxLength 20
   */
  category: string;
  /**
   * Photo
   * @format uri
   */
  photo?: string;
  /** Provider */
  provider: number;
}

export interface PutProvider {
  /** ID */
  pk?: number;
  /**
   * Name
   * @minLength 1
   * @maxLength 50
   */
  name: string;
  /**
   * Location
   * @minLength 1
   * @maxLength 50
   */
  location: string;
  /**
   * Photo
   * @format uri
   */
  photo?: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /** User */
  user: number;
}

export interface GetShCart {
  /**
   * Id
   * @format uuid
   */
  pk?: string;
  /**
   * Address
   * @minLength 1
   * @maxLength 100
   */
  address: string;
  /**
   * Date
   * @format date
   */
  date: string;
  /** State */
  state?: "A" | "B" | "C" | "D";
  /** Customer */
  customer: number;
  /**
   * CreatingTime
   * @format date
   */
  creatingTime?: string;
  /**
   * ConfirmedTime
   * @format date
   */
  confirmedTime?: string | null;
}

export interface PutShCart {
  /**
   * Id
   * @format uuid
   */
  pk?: string;
  /**
   * Address
   * @minLength 1
   * @maxLength 100
   */
  address: string;
  /**
   * Date
   * @format date
   */
  date: string;
  /** Customer */
  customer: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://127.0.0.1:8000";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Snippets API
 * @version v1
 * @license BSD License
 * @termsOfService https://www.google.com/policies/terms/
 * @baseUrl http://127.0.0.1:8000
 * @contact <contact@snippets.local>
 *
 * Test description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * @description Use this endpoint to obtain user authentication token.
     *
     * @tags auth
     * @name AuthTokenLoginCreate
     * @request POST:/auth/token/login/
     * @secure
     */
    authTokenLoginCreate: (data: TokenCreate, params: RequestParams = {}) =>
      this.request<TokenCreate, any>({
        path: `/auth/token/login/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Use this endpoint to logout user (remove user authentication token).
     *
     * @tags auth
     * @name AuthTokenLogoutCreate
     * @request POST:/auth/token/logout/
     * @secure
     */
    authTokenLogoutCreate: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/token/logout/`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersList
     * @request GET:/auth/users/
     * @secure
     */
    authUsersList: (params: RequestParams = {}) =>
      this.request<User[], any>({
        path: `/auth/users/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersCreate
     * @request POST:/auth/users/
     * @secure
     */
    authUsersCreate: (data: UserCreate, params: RequestParams = {}) =>
      this.request<UserCreate, any>({
        path: `/auth/users/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersActivation
     * @request POST:/auth/users/activation/
     * @secure
     */
    authUsersActivation: (data: Activation, params: RequestParams = {}) =>
      this.request<Activation, any>({
        path: `/auth/users/activation/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersMeRead
     * @request GET:/auth/users/me/
     * @secure
     */
    authUsersMeRead: (params: RequestParams = {}) =>
      this.request<User[], any>({
        path: `/auth/users/me/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersMeUpdate
     * @request PUT:/auth/users/me/
     * @secure
     */
    authUsersMeUpdate: (data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/auth/users/me/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersMePartialUpdate
     * @request PATCH:/auth/users/me/
     * @secure
     */
    authUsersMePartialUpdate: (data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/auth/users/me/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersMeDelete
     * @request DELETE:/auth/users/me/
     * @secure
     */
    authUsersMeDelete: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/users/me/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersResendActivation
     * @request POST:/auth/users/resend_activation/
     * @secure
     */
    authUsersResendActivation: (data: SendEmailReset, params: RequestParams = {}) =>
      this.request<SendEmailReset, any>({
        path: `/auth/users/resend_activation/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersResetPassword
     * @request POST:/auth/users/reset_password/
     * @secure
     */
    authUsersResetPassword: (data: SendEmailReset, params: RequestParams = {}) =>
      this.request<SendEmailReset, any>({
        path: `/auth/users/reset_password/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersResetPasswordConfirm
     * @request POST:/auth/users/reset_password_confirm/
     * @secure
     */
    authUsersResetPasswordConfirm: (data: PasswordResetConfirm, params: RequestParams = {}) =>
      this.request<PasswordResetConfirm, any>({
        path: `/auth/users/reset_password_confirm/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersResetUsername
     * @request POST:/auth/users/reset_username/
     * @secure
     */
    authUsersResetUsername: (data: SendEmailReset, params: RequestParams = {}) =>
      this.request<SendEmailReset, any>({
        path: `/auth/users/reset_username/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersResetUsernameConfirm
     * @request POST:/auth/users/reset_username_confirm/
     * @secure
     */
    authUsersResetUsernameConfirm: (data: UsernameResetConfirm, params: RequestParams = {}) =>
      this.request<UsernameResetConfirm, any>({
        path: `/auth/users/reset_username_confirm/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersSetPassword
     * @request POST:/auth/users/set_password/
     * @secure
     */
    authUsersSetPassword: (data: SetPassword, params: RequestParams = {}) =>
      this.request<SetPassword, any>({
        path: `/auth/users/set_password/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersSetUsername
     * @request POST:/auth/users/set_username/
     * @secure
     */
    authUsersSetUsername: (data: SetUsername, params: RequestParams = {}) =>
      this.request<SetUsername, any>({
        path: `/auth/users/set_username/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersRead
     * @request GET:/auth/users/{id}/
     * @secure
     */
    authUsersRead: (id: number, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/auth/users/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersUpdate
     * @request PUT:/auth/users/{id}/
     * @secure
     */
    authUsersUpdate: (id: number, data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/auth/users/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersPartialUpdate
     * @request PATCH:/auth/users/{id}/
     * @secure
     */
    authUsersPartialUpdate: (id: number, data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/auth/users/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUsersDelete
     * @request DELETE:/auth/users/{id}/
     * @secure
     */
    authUsersDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/users/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  orders = {
    /**
     * No description
     *
     * @tags orders
     * @name OrdersList
     * @request GET:/orders/
     * @secure
     */
    ordersList: (
      query?: {
        shCart?: string;
        provider?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetOrders[], any>({
        path: `/orders/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersCreate
     * @request POST:/orders/
     * @secure
     */
    ordersCreate: (data: PutOrders, params: RequestParams = {}) =>
      this.request<PutOrders, any>({
        path: `/orders/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersRead
     * @request GET:/orders/{id}/
     * @secure
     */
    ordersRead: (id: number, params: RequestParams = {}) =>
      this.request<PutOrders, any>({
        path: `/orders/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersUpdate
     * @request PUT:/orders/{id}/
     * @secure
     */
    ordersUpdate: (id: number, data: PutOrders, params: RequestParams = {}) =>
      this.request<PutOrders, any>({
        path: `/orders/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersPartialUpdate
     * @request PATCH:/orders/{id}/
     * @secure
     */
    ordersPartialUpdate: (id: number, data: PutOrders, params: RequestParams = {}) =>
      this.request<PutOrders, any>({
        path: `/orders/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersDelete
     * @request DELETE:/orders/{id}/
     * @secure
     */
    ordersDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/orders/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  products = {
    /**
     * No description
     *
     * @tags products
     * @name ProductsList
     * @request GET:/products/
     * @secure
     */
    productsList: (
      query?: {
        category?: string;
        name?: string;
        price?: string;
        provider?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetProduct[], any>({
        path: `/products/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductsCreate
     * @request POST:/products/
     * @secure
     */
    productsCreate: (data: PutProduct, params: RequestParams = {}) =>
      this.request<PutProduct, any>({
        path: `/products/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductsRead
     * @request GET:/products/{id}/
     * @secure
     */
    productsRead: (id: number, params: RequestParams = {}) =>
      this.request<PutProduct, any>({
        path: `/products/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductsUpdate
     * @request PUT:/products/{id}/
     * @secure
     */
    productsUpdate: (id: number, data: PutProduct, params: RequestParams = {}) =>
      this.request<PutProduct, any>({
        path: `/products/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductsPartialUpdate
     * @request PATCH:/products/{id}/
     * @secure
     */
    productsPartialUpdate: (id: number, data: PutProduct, params: RequestParams = {}) =>
      this.request<PutProduct, any>({
        path: `/products/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags products
     * @name ProductsDelete
     * @request DELETE:/products/{id}/
     * @secure
     */
    productsDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/products/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  providers = {
    /**
     * No description
     *
     * @tags providers
     * @name ProvidersList
     * @request GET:/providers/
     * @secure
     */
    providersList: (
      query?: {
        name?: string;
        location?: string;
        category?: string;
        username?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetProvider[], any>({
        path: `/providers/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags providers
     * @name ProvidersCreate
     * @request POST:/providers/
     * @secure
     */
    providersCreate: (data: PutProvider, params: RequestParams = {}) =>
      this.request<PutProvider, any>({
        path: `/providers/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags providers
     * @name ProvidersRead
     * @request GET:/providers/{id}/
     * @secure
     */
    providersRead: (id: number, params: RequestParams = {}) =>
      this.request<PutProvider, any>({
        path: `/providers/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags providers
     * @name ProvidersUpdate
     * @request PUT:/providers/{id}/
     * @secure
     */
    providersUpdate: (id: number, data: PutProvider, params: RequestParams = {}) =>
      this.request<PutProvider, any>({
        path: `/providers/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags providers
     * @name ProvidersPartialUpdate
     * @request PATCH:/providers/{id}/
     * @secure
     */
    providersPartialUpdate: (id: number, data: PutProvider, params: RequestParams = {}) =>
      this.request<PutProvider, any>({
        path: `/providers/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags providers
     * @name ProvidersDelete
     * @request DELETE:/providers/{id}/
     * @secure
     */
    providersDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/providers/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  shoppingcarts = {
    /**
     * No description
     *
     * @tags shoppingcarts
     * @name ShoppingcartsList
     * @request GET:/shoppingcarts/
     * @secure
     */
    shoppingcartsList: (
      query?: {
        id?: string;
        username?: string;
        location?: string;
        date?: string;
        state?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetShCart[], any>({
        path: `/shoppingcarts/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shoppingcarts
     * @name ShoppingcartsCreate
     * @request POST:/shoppingcarts/
     * @secure
     */
    shoppingcartsCreate: (data: PutShCart, params: RequestParams = {}) =>
      this.request<PutShCart, any>({
        path: `/shoppingcarts/`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shoppingcarts
     * @name ShoppingcartsRead
     * @request GET:/shoppingcarts/{id}/
     * @secure
     */
    shoppingcartsRead: (id: string, params: RequestParams = {}) =>
      this.request<PutShCart, any>({
        path: `/shoppingcarts/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shoppingcarts
     * @name ShoppingcartsUpdate
     * @request PUT:/shoppingcarts/{id}/
     * @secure
     */
    shoppingcartsUpdate: (id: string, data: PutShCart, params: RequestParams = {}) =>
      this.request<PutShCart, any>({
        path: `/shoppingcarts/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shoppingcarts
     * @name ShoppingcartsPartialUpdate
     * @request PATCH:/shoppingcarts/{id}/
     * @secure
     */
    shoppingcartsPartialUpdate: (id: string, data: PutShCart, params: RequestParams = {}) =>
      this.request<PutShCart, any>({
        path: `/shoppingcarts/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shoppingcarts
     * @name ShoppingcartsDelete
     * @request DELETE:/shoppingcarts/{id}/
     * @secure
     */
    shoppingcartsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/shoppingcarts/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
