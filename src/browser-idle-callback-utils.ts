import {THROTTLING_UTILS_IDLE_CALLBACK_TIMEOUT_DEFAULT_MS} from './browser-idle-callback-utils.const';
import {
  IRequestIdleCallback,
  ICancelRequestIdleCallback,
  IRequestIdleCallbackArgument,
} from './browser-idle-callback-utils.types';

/**
 * Returns a function which accepts a callback function as a parameter,
 * and that one will be called each time when a browser is got into idle period.
 * If a browser doesn't support "requestIdleCallback" API it will use a mock
 * which will execute every 50 milliseconds.
 *
 * @export
 * @returns {IRequestIdleCallback}
 */
export function getRequestIdleCallback(): IRequestIdleCallback {
  return (
    (window as any).requestIdleCallback ||
    function (cb) {
      return window.setTimeout(() => {
        const start = Date.now();
        cb({
          didTimeout: false,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - start));
          },
        });
      }, 1);
    }
  );
}

export function getCancelRequestIdleCallback(): ICancelRequestIdleCallback {
  return (
    (window as any).cancelIdleCallback ||
    function (id: number) {
      clearTimeout(id);
    }
  );
}

/**
 * Returns a promise which will be resolved within an idle timeframe of event loop or if a timeout will be fired.
 *
 * @param timeoutMs [1000] - after this period of time (measured in milliseconds) the promise will be resolved in any case,
 * even if this haven't been called because of an idle period was happen.
 * @returns
 */
export function resolveOnIdleCallback(
  timeoutMs: number = THROTTLING_UTILS_IDLE_CALLBACK_TIMEOUT_DEFAULT_MS
): Promise<{
  timeRemaining: number;
  didTimeout: boolean;
}> {
  return new Promise(res => {
    const requestIdleCallback = getRequestIdleCallback();
    const idleCallback = requestIdleCallback(
      (e: IRequestIdleCallbackArgument) => {
        const timeRemaining = Number(e.timeRemaining && e.timeRemaining());
        res({
          timeRemaining,
          didTimeout: !!e.didTimeout,
        });
        getCancelRequestIdleCallback()(idleCallback);
      },
      {timeout: timeoutMs}
    );
  });
}
