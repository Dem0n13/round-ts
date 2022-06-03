/**
 * Returns the smallest number of provided precision greater than or equal to its numeric argument.
 * @param {number} value The value to be rounded.
 * @param {number} [precision=0] A number of significant digits. Must be integer. Can be negative.
 * @returns {number} The smallest number of provided precision greater than or equal to the given number.
 */
export declare function ceil(value: number, precision?: number): number;
/**
 * Returns the greatest number of provided precision less than or equal to its numeric argument.
 * @param {number} value The value to be rounded.
 * @param {number} [precision=0] A number of significant digits. Must be integer. Can be negative.
 * @returns {number} The largest number of provided precision less than or equal to the specified number.
 */
export declare function floor(value: number, precision?: number): number;
/**
 * Returns a supplied numeric expression rounded to the nearest number of provided precision.
 * @param {number} value The value to be rounded to the nearest integer.
 * @param {number} [precision=0] A number of significant digits. Must be integer.    Can be negative.
 * @returns {number} The value of the given number rounded to the nearest number of provided precision.
 */
export declare function round(value: number, precision?: number): number;
