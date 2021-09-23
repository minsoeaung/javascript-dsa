function fibo(n) {
    let a = 0, b = 1, c;
    if (n == 0) return a;

    for (let i = 2; i < n; ++i) {
        c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fibo(0))
console.log(fibo(1))
console.log(fibo(10))