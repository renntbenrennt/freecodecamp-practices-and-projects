
/**
 * Create a function that sums two arguments together. 
 * If only one argument is provided, 
 * then return a function that expects one argument 
 * and returns the sum.
 * 
 * For example, addTogether(2, 3) should return 5, 
 * and addTogether(2) should return a function.
 * Calling this returned function with a single argument 
 * will then return the sum:
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5.
 * 
 * If either argument isn't a valid number, return undefined.
 * 
 * @param  {...any} args 
 */
function addTogether(...args) {
    if (args.some(ele => (typeof ele) != 'number')) {
        return undefined;
    }

    if (args.length > 1) {
        return args.reduce((pre, cur) => pre + cur);
    } else {
        return function (num) {
            if (typeof num != 'number') {
                return undefined;
            } else {
                return args[0] + num;
            }
        }
    }
}