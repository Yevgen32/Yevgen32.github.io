type Payload = {
  code?: number;
  data?: unknown;
  stack?: string;
};

type InputPayload = {
  field?: string;
};

export class ValidationError extends Error {
  payload: Payload;

  constructor(message: string, payload: Payload = {}) {
    super(message);
    this.name = 'ValidationError';
    this.message = message;
    this.payload = payload;
    if (payload.stack) {
      this.stack = payload.stack;
    }
  }

  toJSON(): Record<string, unknown> {
    return {
      error: {
        name: this.name,
        message: this.message,
        stacktrace: this.stack,
        payload: this.payload,
      },
    };
  }
}

export class PermissionError extends Error {
  payload: Payload;

  constructor(message: string, payload: Payload = {}) {
    super(message);
    this.name = 'PermissionError';
    this.message = message;
    this.payload = payload;
    if (payload.stack) {
      this.stack = payload.stack;
    }
  }

  toJSON(): Record<string, unknown> {
    return {
      error: {
        name: this.name,
        message: this.message,
        stacktrace: this.stack,
        payload: this.payload,
      },
    };
  }
}

export class ApiError extends Error {
  payload: Payload;

  constructor(message: string, payload: Payload = {}) {
    super(message);
    this.name = 'ApiError';
    this.message = message;
    this.payload = payload;
    if (payload.stack) {
      this.stack = payload.stack;
    }
  }

  toJSON(): Record<string, unknown> {
    return {
      error: {
        name: this.name,
        message: this.message,
        stacktrace: this.stack,
        payload: this.payload,
      },
    };
  }
}

export class PropertyError extends Error {
  payload: InputPayload;

  constructor(message: string, payload: InputPayload = {}) {
    super(message);
    this.name = 'PropertyError';
    this.message = message;
    this.payload = payload;
  }

  toJSON(): Record<string, unknown> {
    return {
      error: {
        name: this.name,
        message: this.message,
        stacktrace: this.stack,
        payload: this.payload,
      },
    };
  }
}

export class FatalError extends Error {
  payload: Payload;

  constructor(message: string, payload: Payload = {}) {
    super(`Fatal error: ${message}`);
    this.name = 'FatalError';
    this.message = message;
    this.payload = payload;
    if (payload.stack) {
      this.stack = payload.stack;
    }
  }

  toJSON(): Record<string, unknown> {
    return {
      error: {
        name: this.name,
        message: this.message,
        stacktrace: this.stack,
        payload: this.payload,
      },
    };
  }
}

export type Errors = Error | PermissionError | ApiError | ValidationError | FatalError | null;
