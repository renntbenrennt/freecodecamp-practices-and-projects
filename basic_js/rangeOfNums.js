/**
 * Continuing from the previous challenge, 
 * we provide you another opportunity to create a recursive function 
 * to solve a problem.
 * @param {Number} startNum 
 * @param {Number} endNum 
 */
function rangeOfNumbers(startNum, endNum) {
    let res = [];

    function makeRange(s, e) {
        // console.log(`s == ${s} e == ${e}`);
        if (s == e) {
            // console.log(`res 111 = ${res}`);
            res.unshift(e);
            return res;
        } else if (e > s) {
            // console.log(`res 222 = ${res}`);
            res.unshift(e);
            return makeRange(s, e - 1);
        }
    }

    return makeRange(startNum, endNum);
};