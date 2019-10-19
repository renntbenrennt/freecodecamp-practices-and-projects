/**
 * Question Description:
 * 
 * We'll pass you an array of two numbers. 
 * Return the sum of those two numbers plus the sum of all the numbers between them. 
 * The lowest number will not always come first.
 * 
 * For example, sumAll([4,1]) should return 10 
 * because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 *  
 */


/**
 * 
 * @param {Array} arr 
 */
function sumAll(arr) {
    // The following solution is only limited in the case of
    // only two elements in the array

    let result = 0;

    if (arr[0] - arr[1] > 0) { // when the first element is the largest
        for (let i = arr[1] + 1; i < arr[0]; i++) {
            result += i;
        }
        console.log('result1 += ', result);
    } else {
        for (let i = arr[0] + 1; i < arr[1]; i++) {
            result += i;
        }
        console.log('result2 += ', result);
    }

    return result + arr.reduce((pre, cur) => pre + cur )
}