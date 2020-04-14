function divideNum(num) {
    let res = [];
    while (num > 0) {
        // console.log('num before operating == ', num);
        res.push(num % 10);
        num =  Math.floor(num / 10);
        // console.log('num after operating == ', num);
    }
    return res.map((ele, index) => ele * Math.pow(10, index));
}

function toRoman(num) {
    if (num != 0) {
        if (9 - num >= 0) {
            if (num == 5) {
                return 'V';
            } else if (num == 4) {
                return 'IV';
            } else if (num < 4) {
                return [...Array(num).keys()].map(ele => ele = 'I').join('');
            } else if (num == 9) {
                return 'IX';
            } else {
                return 'V' + [...Array(num - 5).keys()].map(ele => ele = 'I').join('');
            }
        } else if (90 - num >= 0) {
            if (num == 50) {
                return 'L';
            } else if (num == 40) {
                return 'XL';
            } else if (num < 40) {
                return [...Array(num / 10).keys()].map(ele => ele = 'X').join('');
            } else if (num == 90) {
                return 'XC';
            } else {
                return 'L' + [...Array(num / 10 - 5).keys()].map(ele => ele = 'X').join('');
            } 
        } else if (900 - num >= 0) {
            if (num == 500) {
                return 'D';
            } else if (num == 400) {
                return 'CD';
            } else if (num < 400) {
                return [...Array(num / 100).keys()].map(ele => ele = 'C').join('');
            } else if (num == 900) {
                return 'CM';
            } else {
                return 'D' + [...Array(num / 100 - 5).keys()].map(ele => ele = 'C').join('');
            } 
        } else if (num >= 1000) {
            return [...Array(num / 1000).keys()].map(ele => ele = 'M').join('');
        } 
    }
}

/**
 * Convert the given number into a roman numeral.
 * 
 * Roman numeral stuff:
 * https://www.mathsisfun.com/roman-numerals.html
 * 
 * @param {Number} num 
 */
function convertToRoman(num) {
    let dividedNum = divideNum(num).reverse();
    let romanArr = dividedNum.map(ele => toRoman(ele));
    return romanArr.join('');
}