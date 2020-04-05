let res = [];

function getArr(arr) {
    for (let i of arr) {
        !(Array.isArray(i)) ? res.push(i) : getArr(i);
    }
}


/**
 * Flatten a nested array. You must account for varying levels of nesting.
 * 
 * steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
 * steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
 * steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
 * steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
 * Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
 * 
 * @param {*} arr 
 */
function steamrollArray(arr) {
    res = [];
    getArr(arr);

    return res;
}