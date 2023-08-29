export const API_URL = 'http://some/api/v1';

import { StatusCodes } from 'http-status-codes';

import { RequestMethods } from './types';

export const CoreClient = (baseUrl: string) => ({
  catchError: async (error: string) => {
    throw new Error(error);
  },
  get: async function (url: string): Promise<unknown> {
    return fetch(`${baseUrl}${url}`)
      .then((response) => response.json())
      .then((data) => data)
      .catch(this.catchError);
  },
  post: async function <T = unknown>(url: string, body: unknown = {}): Promise<T> {
    const result = await fetch(url, {
      method: RequestMethods.POST,
      body: JSON.stringify(body),
    });
    if (result.status !== StatusCodes.OK) {
      this.catchError(result.statusText);
    }
    return result.json();
  },
  delete: async () => {
    return new Promise((_, rej) => rej('not implemented'));
  },
  put: async () => {
    return new Promise((_, rej) => rej('not implemented'));
  },

  patch: async () => {
    return new Promise((_, rej) => rej('not implemented'));
  },
});

export const clientApi = CoreClient(API_URL);
