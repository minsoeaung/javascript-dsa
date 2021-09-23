function smallestCommons(arr) {
    let start = Math.min(arr[0], arr[1])
    let end = Math.max(arr[0], arr[1])

    let multiple = start;
    for (let i = start; i <= end; ++i) {
        multiple = lcm(Math.min(i, multiple), Math.max(i, multiple))
    }

    // return smallestCommons()
    return multiple
}


// a > b
function gcd(a, b) {
    if (b == 0) return a
    return gcd(b, a % b)
}

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}

// LCM(1, 2, 3, 4, 5) = LCM(LCM(LCM(LCM(1, 2), 3), 4), 5)
console.log(smallestCommons([1, 5]))
// console.log(lcm(12, 28))