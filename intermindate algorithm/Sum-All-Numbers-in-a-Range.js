function sumAll(arr) {
    // The following solution is only limited in the case of
    // only two elements in the array

    let result = 0;

    if (arr[0] - arr[1] > 0) { // when the first element is the largest
        for (let i = arr[1] + 1; i < arr[0]; i++) {
            result += i;
        }
        console.log('result1 += ', result);
    } else {
        for (let i = arr[0] + 1; i < arr[1]; i++) {
            result += i;
        }
        console.log('result2 += ', result);
    }

    return result + arr.reduce((pre, cur) => pre + cur )
}