export interface IRequestIdleCallbackArgument {
  didTimeout?: boolean;
  timeRemaining?(): number;
}

export interface IRequestIdleCallbackOptions {
  timeout?: number;
}

export type TRequestIdleCallbackId = number;

export interface IRequestIdleCallback {
  (
    cb: (deadline: IRequestIdleCallbackArgument) => void,
    options?: IRequestIdleCallbackOptions
  ): TRequestIdleCallbackId;
}

export interface ICancelRequestIdleCallback {
  (id: TRequestIdleCallbackId): void;
}
