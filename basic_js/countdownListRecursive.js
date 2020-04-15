/**
 * Use Recursion to Create a Countdown.
 * @param {Number} n 
 */
function countdown(n) {
    let res = [];

    function pushNum(num) {
        // console.log(num);
        if (num == -1) {
            return res;
        } else if (num == 1) {
            res.push(1);
            return res;
        } else {
            res.push(num);
            return pushNum(num - 1);
        }   
    }

    return pushNum(n);
}