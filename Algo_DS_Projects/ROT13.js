function add13(str) {
    let charCodeAdd13 = str.charCodeAt() + 13;
    return String.fromCharCode(charCodeAdd13 > 90 ? (charCodeAdd13 - 90 + 64) : charCodeAdd13);
}

/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, 
 * also known as a shift cipher. 
 * In a shift cipher the meanings of the letters are shifted by some set amount.
 * 
 * A common modern use is the ROT13 cipher, 
 * where the values of the letters are shifted by 13 places. 
 * Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * 
 * Write a function which takes a ROT13 encoded string as input 
 * and returns a decoded string.
 * All letters will be uppercase. 
 * Do not transform any non-alphabetic character 
 * (i.e. spaces, punctuation), but do pass them on.
 * 
 * More on ROT13:
 * https://en.wikipedia.org/wiki/ROT13
 * 
 * @param {String} str 
 */
function rot13(str) {
    return [...str].map(ele => RegExp('[A-Z]').test(ele) ? add13(ele) : ele).join('');
}