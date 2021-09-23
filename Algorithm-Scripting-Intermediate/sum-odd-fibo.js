function sumFibs(num) {

    let sumOfOdd = 0;

    if (num <= 1) return num;

    let a = 1, b = 1;

    for (let i = 0; i <= num; i = a + b) {
        a = b;
        b = i;
        if (b % 2 == 1) sumOfOdd += b;
    }

    return sumOfOdd

}

console.log(sumFibs(10))


/*
sumFibs(1) should return a number.

sumFibs(1000) should return 1785.

sumFibs(4000000) should return 4613732.

sumFibs(4) should return 5.

sumFibs(75024) should return 60696.

sumFibs(75025) should return 135721.
*/