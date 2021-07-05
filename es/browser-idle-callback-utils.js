"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveOnIdleCallback = exports.getCancelRequestIdleCallback = exports.getRequestIdleCallback = void 0;
var browser_idle_callback_utils_const_1 = require("./browser-idle-callback-utils.const");
/**
 * Returns a function which accepts a callback function as a parameter,
 * and that one will be called each time when a browser is got into idle period.
 * If a browser doesn't support "requestIdleCallback" API it will use a mock
 * which will execute every 50 milliseconds.
 *
 * @export
 * @returns {IRequestIdleCallback}
 */
function getRequestIdleCallback() {
    return window.requestIdleCallback ||
        function (cb) {
            return window.setTimeout(function () {
                var start = Date.now();
                cb({
                    didTimeout: false,
                    timeRemaining: function () {
                        return Math.max(0, 50 - (Date.now() - start));
                    },
                });
            }, 1);
        };
}
exports.getRequestIdleCallback = getRequestIdleCallback;
;
function getCancelRequestIdleCallback() {
    return (window.cancelIdleCallback ||
        function (id) {
            clearTimeout(id);
        });
}
exports.getCancelRequestIdleCallback = getCancelRequestIdleCallback;
;
/**
 * Returns a promise which will be resolved within an idle timeframe of event loop or if a timeout will be fired.
 *
 * @param timeoutMs [1000] - after this period of time (measured in milliseconds) the promise will be resolved in any case,
 * even if this haven't been called because of an idle period was happen.
 * @returns
 */
function resolveOnIdleCallback(timeoutMs) {
    if (timeoutMs === void 0) { timeoutMs = browser_idle_callback_utils_const_1.THROTTLING_UTILS_IDLE_CALLBACK_TIMEOUT_DEFAULT_MS; }
    return new Promise(function (res) {
        var requestIdleCallback = getRequestIdleCallback();
        var idleCallback = requestIdleCallback(function (e) {
            var timeRemaining = Number(e.timeRemaining && e.timeRemaining());
            res({
                timeRemaining: timeRemaining,
                didTimeout: !!e.didTimeout,
            });
            getCancelRequestIdleCallback()(idleCallback);
        }, { timeout: timeoutMs });
    });
}
exports.resolveOnIdleCallback = resolveOnIdleCallback;
//# sourceMappingURL=browser-idle-callback-utils.js.map