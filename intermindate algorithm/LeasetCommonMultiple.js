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