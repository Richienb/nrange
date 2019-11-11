/**
 * Check if numbers or strings are ordered from smallest to largest.
 * @param values The values to compare.
 * @example
 * ```
 * const nRange = require("nrange");
 * 
 * nRange(1, 2, 3);
 * //=> true
 * 
 * nRange(1, 3, 2);
 * //=> false
 * 
 * nRange("a", "b", "c");
 * //=> true
 * 
 * nRange("a", "c", "b");
 * //=> false
 * ```
*/
declare function nRange(...values: ArrayLike<string | number>): boolean;

export = nRange;
