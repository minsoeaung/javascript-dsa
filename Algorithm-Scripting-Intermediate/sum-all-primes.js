function primeChecker(x) {
    if(x === 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(x); ++i) {
        if(x % i === 0) {
            return false
        }
    }
    return true;
}


function sumPrimes(num) {
    let sum = 0;

    for (let i = 2; i <= num; ++i) {
        if(primeChecker(i)) {
            sum+=i
        }
    }

    return sum;
}
console.log(sumPrimes(977))

/*
    sumPrimes(10) should return a number.

    sumPrimes(10) should return 17.

    sumPrimes(977) should return 73156.
*/