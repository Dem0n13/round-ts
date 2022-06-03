/**
 * Returns the smallest number of provided precision greater than or equal to its numeric argument.
 * @param {number} value The value to be rounded.
 * @param {number} [precision=0] A number of significant digits. Must be integer. Can be negative.
 * @returns {number} The smallest number of provided precision greater than or equal to the given number.
 */
export function ceil(value: number, precision = 0) {
    return decimalAdjust(value, precision, "ceil")
}

/**
 * Returns the greatest number of provided precision less than or equal to its numeric argument.
 * @param {number} value The value to be rounded.
 * @param {number} [precision=0] A number of significant digits. Must be integer. Can be negative.
 * @returns {number} The largest number of provided precision less than or equal to the specified number.
 */
export function floor(value: number, precision = 0) {
    return decimalAdjust(value, precision, "floor")
}

/**
 * Returns a supplied numeric expression rounded to the nearest number of provided precision.
 * @param {number} value The value to be rounded to the nearest integer.
 * @param {number} [precision=0] A number of significant digits. Must be integer.    Can be negative.
 * @returns {number} The value of the given number rounded to the nearest number of provided precision.
 */
export function round(value: number, precision = 0) {
    return decimalAdjust(value, precision, "round")
}

const MAX_SAFE_PRECISION = 292 // the max precision for Number.MAX_SAFE_INTEGER before hitting NaN

function decimalAdjust(value: number, precision: number, method: "round" | "ceil" | "floor") {
    value = Number(value)
    precision = Number(precision)
    if (Number.isFinite(value) && Number.isInteger(precision)) {
        precision = Math.min(precision, MAX_SAFE_PRECISION) 
        const [valueMantissa, valueExponent] = value.toExponential().split('e')
        value = Math[method](+(valueMantissa + 'e' + (+valueExponent + precision)))
        const [roundedMantissa, shiftedExponent] = value.toExponential().split('e')
        return +(roundedMantissa + 'e' + (+shiftedExponent - precision))
    }
    return Math[method](value)
}
// https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c