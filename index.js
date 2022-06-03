"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = exports.floor = exports.ceil = void 0;
/**
 * Returns the smallest integer greater than or equal to its numeric argument.
 * @param value A numeric expression.
 * @param precision A number of significant digits. Can be negative.
 * @returns The smallest integer greater than or equal to the given number.
 */
function ceil(value, precision = 0) {
    return decimalAdjust(value, precision, "ceil");
}
exports.ceil = ceil;
/**
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param value A numeric expression.
 * @param precision A number of significant digits. Can be negative.
 * @returns A number representing the largest integer less than or equal to the specified number.
 */
function floor(value, precision = 0) {
    return decimalAdjust(value, precision, "floor");
}
exports.floor = floor;
/**
 * Returns a supplied numeric expression rounded to the nearest integer.
 * @param value The value to be rounded to the nearest integer.
 * @param precision A number of significant digits. Can be negative.
 * @returns The value of the given number rounded to the nearest integer.
 */
function round(value, precision = 0) {
    return decimalAdjust(value, precision, "round");
}
exports.round = round;
const MAX_SAFE_PRECISION = 292; // the max precision for Number.MAX_SAFE_INTEGER before hitting NaN
function decimalAdjust(value, precision, method) {
    value = Number(value);
    precision = Number(precision);
    if (Number.isFinite(value) && Number.isInteger(precision)) {
        precision = Math.min(precision, MAX_SAFE_PRECISION);
        const [valueMantissa, valueExponent] = value.toExponential().split('e');
        value = Math[method](+(valueMantissa + 'e' + (+valueExponent + precision)));
        const [roundedMantissa, shiftedExponent] = value.toExponential().split('e');
        return +(roundedMantissa + 'e' + (+shiftedExponent - precision));
    }
    return Math[method](value);
}
