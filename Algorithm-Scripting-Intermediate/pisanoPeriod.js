function getPisanoPeriodLength(m) {
    let a = 0, b = 1, c, pisano;

    for (let i = 0; i < m * m; ++i) {
        c = (a + b) % m;
        a = b;
        b = c;

        if (a == 1 && b == 0)
            pisano = i + 1;
    }

    return pisano;
}

console.log(getPisanoPeriodLength(20))  