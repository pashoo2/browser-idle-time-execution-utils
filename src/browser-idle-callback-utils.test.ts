import {
  getRequestIdleCallback,
  resolveOnIdleCallback,
} from './browser-idle-callback-utils';

describe("Utilities to work with event loop's idle period", () => {
  describe('getRequestIdleCallback', () => {
    it('Should return a function', () => {
      expect(getRequestIdleCallback()).toEqual(expect.any(Function));
    });
    it('Should return a function which accepts a callback function which will be called after some time', async () => {
      const callbackExpected = jest.fn();
      const callOnIdle = getRequestIdleCallback();
      callOnIdle(callbackExpected);
      expect(callbackExpected).not.toBeCalled();
      await new Promise(r => setTimeout(r, 100));
      expect(callbackExpected).toHaveBeenCalledWith(
        expect.objectContaining({
          didTimeout: expect.any(Boolean),
          timeRemaining: expect.any(Function),
        })
      );
    });
  });

  describe('resolveOnIdleCallback', () => {
    it('Should return a promise resolved after timeout', async () => {
      const timeoutValue = 30;
      await expect(resolveOnIdleCallback(timeoutValue)).resolves.toEqual({
        didTimeout: expect.any(Boolean),
        timeRemaining: expect.any(Number),
      });
    });
  });
});
