import fetch from 'isomorphic-unfetch';

import type http from 'http';
import { ApiError, ValidationError, PermissionError } from '../error/error.types';


import type { Response, Options } from './api.types';

export function isValid<T>(url: string, response: Response<T>): Response<T> | never {
    if (response.code === 401) {
        throw new PermissionError(`Access denied [${response.code}] to ${url}`);
    }

    if (response.status !== 'ok') {
        throw new ValidationError(`${response.code} ${response.data}`, {
            code: response.code,
            data: response.data,
        });
    }
    return response;
}

export default async function api<T>(
    url: string,
    options?: Options,
    headers?: http.OutgoingHttpHeaders,
) {
    const mode: RequestMode = 'cors';
    try {
        const request = fetch(
            `${url}`,
            Object.assign(
                {},
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        ...headers,
                    },
                    mode,
                },
                options,
                options?.body && options?.method !== 'GET' ? { body: JSON.stringify(options.body) } : {},
            ),
        );
        const result = await request;
        console.log("result", result)

        let response: Response<T> = null!;

        if (result.ok) {
            response = await result.json();
        } else {
            throw new ValidationError('Json parsing error', {
                code: result.status,
                data: {
                    url,
                    method: options?.method,
                },
            });
        }

        console.log("response", response)
        console.group(`API Request Debug ${url}`);
        console.info(`Url ${url}`);
        console.info('Response', response);

        return response;
    } catch (e) {
        if (e instanceof ValidationError) {
            throw e;
        }

        throw new ApiError(e.message, {
            code: 500,
            stack: e.stack,
        });
    }
}

export const pause = (duration: number): Promise<void> =>
    new Promise(res => setTimeout(res, duration));


export async function retry<T>(
    retries: number,
    fn: () => Promise<T>,
    delay = 500,
    delayMultiply = 1,
): Promise<T> {
    try {
        return await fn();
    } catch (e) {
        if (retries > 1) {
            await pause(delay);
            return retry(retries - 1, fn, delay * delayMultiply);
        }
        throw e;
    }
}
