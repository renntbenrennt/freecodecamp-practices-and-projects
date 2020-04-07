function palindrome(str) {
    let removedNonNumNonAlphCharArr = [...str].map(ele => ele.replace(/\W|_*/g, ''));
    return removedNonNumNonAlphCharArr.reverse().join('').toLowerCase() == removedNonNumNonAlphCharArr.join('').toLowerCase();
}