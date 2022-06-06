"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.floor = exports.ceil = void 0;
/**
 * Returns the smallest number of provided precision greater than or equal to its numeric argument.
 * @param {number} value The value to be rounded.
 * @param {number} [precision=0] A number of significant digits. Must be integer. Can be negative.
 * @returns {number} The smallest number of provided precision greater than or equal to the given number.
 */
function ceil(value, precision = 0) {
    return decimalAdjust(value, precision, "ceil");
}
exports.ceil = ceil;
/**
 * Returns the greatest number of provided precision less than or equal to its numeric argument.
 * @param {number} value The value to be rounded.
 * @param {number} [precision=0] A number of significant digits. Must be integer. Can be negative.
 * @returns {number} The largest number of provided precision less than or equal to the specified number.
 */
function floor(value, precision = 0) {
    return decimalAdjust(value, precision, "floor");
}
exports.floor = floor;
/**
 * Returns a supplied numeric expression rounded to the nearest number of provided precision.
 * @param {number} value The value to be rounded to the nearest integer.
 * @param {number} [precision=0] A number of significant digits. Must be integer.    Can be negative.
 * @returns {number} The value of the given number rounded to the nearest number of provided precision.
 */
function round(value, precision = 0) {
    return decimalAdjust(value, precision, "round");
}
exports.round = round;
const MAX_SAFE_PRECISION = 292; // the max precision for Number.MAX_SAFE_INTEGER before hitting NaN
function decimalAdjust(value, precision, method) {
    value = +value; // finite number, NaN, Infinity, -Infinity
    precision = Math.trunc(precision); // integer, NaN, Infinity, -Infinity
    if (Number.isFinite(value) && Number.isFinite(precision)) {
        precision = Math.min(precision, MAX_SAFE_PRECISION);
        const [valueMantissa, valueExponent] = value.toExponential().split('e');
        value = Math[method](+(valueMantissa + 'e' + (+valueExponent + precision)));
        const [roundedMantissa, shiftedExponent] = value.toExponential().split('e');
        return +(roundedMantissa + 'e' + (+shiftedExponent - precision));
    }
    return Math[method](value); // fallback if value and/or precision are not finite
}
