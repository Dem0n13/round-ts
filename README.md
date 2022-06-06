# `round-ts`

> Correctly round values to specified precision with TypeScript

Key Features
- TypeScript written
- no dependencies (TypeScript is the only dev-dependency)
- uses the best-known rounding algorithm (solves common problems with incorrect results) and simple implemetation
- 3 methods: ceil, floor and round with the similar behavior to Math.xxx methods

Inspired by the packages:
- [`round-tofixed`](https://www.npmjs.com/package/round-tofixed) - good accuracy, no TypeScript, no negative precision
- [`round-precision`](https://www.npmjs.com/package/round-precision) - bad accuracy, no TypeScript, no negative precision
- [`round`](https://www.npmjs.com/package/round) - uses `round-precision`
- [`round10`](https://www.npmjs.com/package/round10) - good accuracy, no TypeScript
- [`round-floor-ceil`](https://www.npmjs.com/package/round-floor-ceil) - good accuracy, no TypeScript
- [`lodash.round`](https://www.npmjs.com/package/lodash.round) - good implementation, but [contains many compatibility utils](https://github.com/lodash/lodash/blob/npm-packages/lodash.round/index.js)

## Install

```
npm install round-ts [-S]
```

## Basic Usage

```js
import { ceil, floor, round } from "round-ts"

ceil(0.444, 2) // 0.45
floor(0.444, 2) // 0.44
round(0.444, 2) // 0.44
```

## API

### ceil(value: number, precision?: number): number

Returns the smallest number of provided precision greater than or equal to its numeric argument.

**Params**

- value `number` The value to be rounded.
- precision `number` (optional, default=0) A number of significant digits. Must be integer. Can be negative.

**Returns** `number` The smallest number of provided precision greater than or equal to the given number.

### floor(value: number, precision?: number): number

Returns the greatest number of provided precision less than or equal to its numeric argument.

**Params**

- value `number` The value to be rounded.
- precision `number` (optional, default=0) A number of significant digits. Must be integer. Can be negative.

**Returns** `number` The largest number of provided precision less than or equal to the specified number.

### round(value: number, precision?: number): number

Returns a supplied numeric expression rounded to the nearest number of provided precision.

**Params**

- value `number` The value to be rounded.
- precision `number` (optional, default=0) A number of significant digits. Must be integer. Can be negative.

**Returns** `number` The value of the given number rounded to the nearest number of provided precision.
