export interface Response<T> {
    status: 'ok' | 'error';
    code: number;
    data: T;
}

//TODO extend from Request
export interface Options {
    method: 'POST' | 'PUT' | 'GET' | 'DELETE';
    body?: string | number | Record<string, unknown> | ReadableStream<Uint8Array>;
}
