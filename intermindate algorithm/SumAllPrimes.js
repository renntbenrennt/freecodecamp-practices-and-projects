/**
 * 
 * A prime number is a whole number greater than 1 with exactly two divisors: 
 * 1 and itself. 
 * For example, 2 is a prime number because it is only divisible by 1 and 2. 
 * In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
 * 
 */

function sumAllPrimes(target) {
    function isPrime(N) {
        if (N < 2) return false;
        for (let i = 2; i * i <= N; i++) {
            if (N % i === 0) return false
        }
        return true;
    }

    /// Compare this prime number checker with the one before,
    /// the key different is the boolean expression in the for loop.
    /// The former one using square to eliminate the times to check prime
    // function isPrime(x) {
    // for (let i = 2; i < x; i++) {
    //     if (x % i === 0) return false;
    // }
    // return x !== 1 && x !== 0;
    // }

    /// This `+ 1` here is because Array index, the keys() return value,
    /// start from 0, which will make the result miss the limit, our target here.
    const allNum = [...Array(target + 1).keys()];

    const allPrimes = allNum.filter(ele => isPrime(ele));

    const res = allPrimes.reduce((pre, cur) => pre + cur);

    return res;
}