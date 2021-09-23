function diffArray(arr1, arr2) {
    var newArr = [...arr1, ...arr2];

    // convert all item of newArr to string for easier use within obj
    newArr.toString()

    var obj = {}

    // storing in obj, which key appear how many times according to newArr
    for (let i = 0; i < newArr.length; ++i) {
        let key = newArr[i];

        if (obj.hasOwnProperty(key)) {
            obj[key] += 1;
        } else {
            obj[key] = 1;
        }

    }

    var resultArr = []

    // iterate obj and push to result that key only appear one time
    for (const key in obj)
        if (obj[key] == 1) {
            if(!isNaN(key)) {
                resultArr.push(parseInt(key))
            } else {
                resultArr.push(key)
            }
        }

    return resultArr;
}
// console.log(typeof(obj[]))
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))