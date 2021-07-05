import { IRequestIdleCallback, ICancelRequestIdleCallback } from './browser-idle-callback-utils.types';
/**
 * Returns a function which accepts a callback function as a parameter,
 * and that one will be called each time when a browser is got into idle period.
 * If a browser doesn't support "requestIdleCallback" API it will use a mock
 * which will execute every 50 milliseconds.
 *
 * @export
 * @returns {IRequestIdleCallback}
 */
export declare function getRequestIdleCallback(): IRequestIdleCallback;
export declare function getCancelRequestIdleCallback(): ICancelRequestIdleCallback;
/**
 * Returns a promise which will be resolved within an idle timeframe of event loop or if a timeout will be fired.
 *
 * @param timeoutMs [1000] - after this period of time (measured in milliseconds) the promise will be resolved in any case,
 * even if this haven't been called because of an idle period was happen.
 * @returns
 */
export declare function resolveOnIdleCallback(timeoutMs?: number): Promise<{
    timeRemaining: number;
    didTimeout: boolean;
}>;
