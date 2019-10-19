/**
 * 
 * Compare two arrays and return a new array 
 * with any items only found in one of the two given arrays, 
 * but not both. 
 * In other words, return the symmetric difference of the two arrays. 
 * 
 * Note:
 * You can return the array with its elements in any order.
 * 
 */


/**
 * 
 * @param {Array} arrA 
 * @param {Array} arrB 
 */
function diffArray(arrA, arrB) {
    let combinedArr = arrA.concat(arrB);

    let allEleWithoutRepeated = Array.from(new Set(combinedArr));

    // console.log(allEleWithoutRepeated);

    let uniqueArr = [];

    allEleWithoutRepeated.forEach(
        ele => {
            if (!arrA.includes(ele)) {
                uniqueArr.push(ele);
            }
        }
    )

    allEleWithoutRepeated.forEach(
        ele => {
            if (!arrB.includes(ele)) {
                uniqueArr.push(ele);
            }
        }
    )

    return uniqueArr;
}