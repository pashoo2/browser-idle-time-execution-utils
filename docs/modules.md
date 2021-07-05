[@pashoo2/browser-idle-time-execution-utils](README.md) / Exports

# @pashoo2/browser-idle-time-execution-utils

## Table of contents

### Interfaces

- [ICancelRequestIdleCallback](interfaces/icancelrequestidlecallback.md)
- [IRequestIdleCallback](interfaces/irequestidlecallback.md)
- [IRequestIdleCallbackArgument](interfaces/irequestidlecallbackargument.md)
- [IRequestIdleCallbackOptions](interfaces/irequestidlecallbackoptions.md)

### Type aliases

- [TRequestIdleCallbackId](modules.md#trequestidlecallbackid)

### Variables

- [THROTTLING\_UTILS\_IDLE\_CALLBACK\_TIMEOUT\_DEFAULT\_MS](modules.md#throttling_utils_idle_callback_timeout_default_ms)

### Functions

- [getCancelRequestIdleCallback](modules.md#getcancelrequestidlecallback)
- [getRequestIdleCallback](modules.md#getrequestidlecallback)
- [resolveOnIdleCallback](modules.md#resolveonidlecallback)

## Type aliases

### TRequestIdleCallbackId

Ƭ **TRequestIdleCallbackId**: `number`

#### Defined in

[browser-idle-callback-utils.types.ts:10](https://github.com/pashoo2/browser-idle-time-execution-utils/blob/5a433da/src/browser-idle-callback-utils.types.ts#L10)

## Variables

### THROTTLING\_UTILS\_IDLE\_CALLBACK\_TIMEOUT\_DEFAULT\_MS

• `Const` **THROTTLING\_UTILS\_IDLE\_CALLBACK\_TIMEOUT\_DEFAULT\_MS**: ``1000``

#### Defined in

[browser-idle-callback-utils.const.ts:1](https://github.com/pashoo2/browser-idle-time-execution-utils/blob/5a433da/src/browser-idle-callback-utils.const.ts#L1)

## Functions

### getCancelRequestIdleCallback

▸ **getCancelRequestIdleCallback**(): [`ICancelRequestIdleCallback`](interfaces/icancelrequestidlecallback.md)

#### Returns

[`ICancelRequestIdleCallback`](interfaces/icancelrequestidlecallback.md)

#### Defined in

[browser-idle-callback-utils.ts:34](https://github.com/pashoo2/browser-idle-time-execution-utils/blob/5a433da/src/browser-idle-callback-utils.ts#L34)

___

### getRequestIdleCallback

▸ **getRequestIdleCallback**(): [`IRequestIdleCallback`](interfaces/irequestidlecallback.md)

Returns a function which accepts a callback function as a parameter,
and that one will be called each time when a browser is got into idle period.
If a browser doesn't support "requestIdleCallback" API it will use a mock
which will execute every 50 milliseconds.

**`export`**

#### Returns

[`IRequestIdleCallback`](interfaces/irequestidlecallback.md)

#### Defined in

[browser-idle-callback-utils.ts:17](https://github.com/pashoo2/browser-idle-time-execution-utils/blob/5a433da/src/browser-idle-callback-utils.ts#L17)

___

### resolveOnIdleCallback

▸ **resolveOnIdleCallback**(`timeoutMs?`): `Promise`<`Object`\>

Returns a promise which will be resolved within an idle timeframe of event loop or if a timeout will be fired.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeoutMs` | `number` | after this period of time (measured in milliseconds) the promise will be resolved in any case, even if this haven't been called because of an idle period was happen. |

#### Returns

`Promise`<`Object`\>

#### Defined in

[browser-idle-callback-utils.ts:50](https://github.com/pashoo2/browser-idle-time-execution-utils/blob/5a433da/src/browser-idle-callback-utils.ts#L50)
