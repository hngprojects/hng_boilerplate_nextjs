/* eslint-disable @typescript-eslint/no-explicit-any */
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

interface FetchOptions<TRequestBody>
  extends Omit<RequestInit, 'body' | 'method'> {
  method?: HttpMethod
  headers?: Record<string, string>
  body?: TRequestBody
  params?: Record<string, string>
}

interface FetchConfig {
  baseUrl: string
  defaultHeaders?: Record<string, string>
}

export class HttpError extends Error {
  public statusCode: number
  public responseBody: any
  public statusText: string

  constructor(
    public response: Response,
    responseBody: any,
    statusText: string
  ) {
    super(`HTTP error! status: ${response.status}`)
    this.name = 'HttpError'
    this.statusCode = response.status
    this.responseBody = responseBody
    this.statusText = statusText
  }
}

export const createFetchUtil = (config: FetchConfig) => {
  const { baseUrl, defaultHeaders = {} } = config

  return async function fetchUtil<TResponse, TRequestBody = unknown>(
    endpoint: string,
    options: FetchOptions<TRequestBody> = {}
  ): Promise<TResponse> {
    const {
      method = 'GET',
      headers = {},
      body,
      params,
      ...restOptions
    } = options

    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
    const normalizedEndpoint = endpoint.startsWith('/')
      ? endpoint.slice(1)
      : endpoint

    const url = new URL(normalizedEndpoint, normalizedBaseUrl)

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value)
      })
    }

    const mergedHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders,
      ...headers,
    }

    const fetchOptions: RequestInit = {
      method,
      headers: mergedHeaders,
      ...restOptions,
    }

    if (body) {
      fetchOptions.body = JSON.stringify(body)
    }

    const response = await fetch(url.toString(), fetchOptions)

    let responseBody
    const contentType = response.headers.get('content-type')
    if (contentType && contentType.includes('application/json')) {
      responseBody = await response.json()
    } else {
      responseBody = await response.text()
    }

    if (!response.ok) {
      throw new HttpError(response, responseBody, response.statusText)
    }

    return responseBody as TResponse
  }
}

export const withAuth = (token: string): Record<string, string> => ({
  Authorization: `Bearer ${token}`,
})
