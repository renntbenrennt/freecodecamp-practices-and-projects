/**
 * Funcion return Greatest Common Divisor of two number, 
 * implemented based on Euclidean algorithm
 * https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-algorithm
 * 
 * @param {int} a 
 * @param {int} b 
 */
function GCD(a, b) {
    /// original attempt, fail at [1, 13] as test in the final usage
    // if (a > b) {
    //     if (b == 0) {
    //         return a;
    //     } else {
    //         return GCD(b, a - b);
    //     }
    // } else {
    //     if (a == 0) {
    //         return b;
    //     } else {
    //         return GCD(a, b - a);
    //     }
    // }

    /// better one 
    return (b === 0 ? a : GCD(b, a % b));
}


/**
 * Function return Least Common Multiple of two number,
 * based on the following formular
 * lcm(a, b) = |a * b| / gcd(a, b)
 * 
 * @param {int} a 
 * @param {int} b 
 */
function LCM(a, b) {
    return Math.abs(a * b) / GCD(a, b);
}

/**
 * 
 * Find the smallest common multiple of the provided parameters 
 * that can be evenly divided by both, 
 * as well as by all sequential numbers in the range between these parameters. 
 * The range will be an array of two numbers 
 * that will not necessarily be in numerical order. 
 * 
 * For example, if given 1 and 3, 
 * find the smallest common multiple of both 1 and 3 
 * that is also evenly divisible by all numbers between 1 and 3. 
 * The answer here would be 6.
 * 
 * smallestCommons([1, 5]) should return a number.
 * smallestCommons([1, 5]) should return 60.
 * smallestCommons([5, 1]) should return 60.
 * smallestCommons([2, 10]) should return 2520.
 * smallestCommons([1, 13]) should return 360360.
 * smallestCommons([23, 18]) should return 6056820.
 * 
 * @param {*} arr 
 */
function lcmOfNums(arr) {
    /// initial attempt, fail at [23, 18] as final test...
    // let nums = [];
    // for (let i = Math.max(arr[0], arr[1]); i > Math.min(arr[0], arr[1]); i--) {
    //     nums.push(i);
    // }

    // let lcm = nums[0];

    // for (let i = 1; i < nums.length; i++) {
    //     lcm = LCM(lcm, nums[i]);
    // }

    /// better one...
    let [min, max] = arr.sort((a, b) => a - b);

    let lcm = min;

    while (min < max) {
        lcm = LCM(lcm, ++min);
    }

    return lcm;
}