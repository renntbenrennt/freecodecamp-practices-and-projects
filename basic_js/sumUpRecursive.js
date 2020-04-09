/**
 * Write a recursive function, sum(arr, n), 
 * that returns the sum of the first n elements of an array arr.
 * 
 * @param {Array} arr 
 * @param {int} n 
 */
function sum(arr, n) {
    // Only change code below this line
    let res = 0;
    if (n == 0) {
        return res;
    } else if (n == 1) {
        res = arr[0];
    } else {
        res = sum(arr, n - 1) + arr[n - 1];
    }

    return res;
    // Only change code above this line
}