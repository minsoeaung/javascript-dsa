function steamrollArray(arr) {

    let result = []

    for (let i = 0; i < arr.length; ++i) {
        /* 
            1
            [ 2 ]
            [ 3, [ [ 4 ] ] ]
        */
        if(Array.isArray(arr[i])) {
            result.push(...steamrollArray(arr[i]))
        } else {
            result.push(arr[i])
        }
    }

    return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))

/*
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/