function dropElements(arr, func) {
    let n = arr.length
    for (let i = 0; i < n; ++i) {
        if (func(arr[0])) break
        arr.shift()
    }
    return arr
}

console.log(dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }))