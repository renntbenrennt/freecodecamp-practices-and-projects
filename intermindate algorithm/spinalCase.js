let str = "sdfAllThe"; // The string to be splited

let capitalLetterRgex = /[A-Z]/g; // The token tell the program how to split the string

let splitedStr = str.split(capitalLetterRgex);

console.log("splitedStr", splitedStr);

let tokenIndex = []; // The array to store the index of token

let tokenArr = [];

for (let numOfLoop = 0; numOfLoop < str.length; numOfLoop++) {
    // console.log(capitalLetterRgex.test(str[numOfLoop]));

    if (capitalLetterRgex.test(str[numOfLoop])) {
        console.log(str.charAt(numOfLoop));
        tokenIndex.push(numOfLoop);
        tokenArr.push(str.charAt(numOfLoop));
    }

}

console.log("tokenIndex", tokenIndex)
console.log("tokenArr", tokenArr)

if (splitedStr[0]) {
    splitedStr[0] = tokenArr[0] + splitedStr[0]
} else {
    splitedStr.shift();
}

for (let numOfLoop = 0; numOfLoop < splitedStr.length; numOfLoop++) {
    splitedStr[numOfLoop] = tokenArr[numOfLoop] + splitedStr[numOfLoop]
}

console.log(splitedStr);

// if (splitedStr[0]) {
//     splitedStr[0] = tokenArr[0] + splitedStr[0]
// } else {
//     splitedStr.shift();
// }
// let innerStr = ''

// for (let numOfLoop = 0; numOfLoop < tokenIndex.length; numOfLoop++) {
//     for (let numOfInnerLoop = tokenIndex[numOfLoop]; numOfInnerLoop < tokenIndex[numOfLoop+1]; numOfInnerLoop++) {
//         // innerStr += str[]
//     }
// }

// console.log(tokenIndex);

// console.log(str.search(capitalLetterRgex));