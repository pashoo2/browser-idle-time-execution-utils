export interface IRequestIdleCallbackArgument {
    didTimeout?: boolean;
    timeRemaining?(): number;
}
export interface IRequestIdleCallbackOptions {
    timeout?: number;
}
export declare type TRequestIdleCallbackId = number;
export interface IRequestIdleCallback {
    (cb: (deadline: IRequestIdleCallbackArgument) => any, options?: IRequestIdleCallbackOptions): TRequestIdleCallbackId;
}
export interface ICancelRequestIdleCallback {
    (id: TRequestIdleCallbackId): void;
}
