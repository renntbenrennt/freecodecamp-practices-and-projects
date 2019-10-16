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