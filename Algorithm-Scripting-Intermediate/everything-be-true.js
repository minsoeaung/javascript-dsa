function truthCheck(collection, pre) {

    let truthy = true

    for (let i = 0; i < collection.length; ++i) {

        if (!collection[i].hasOwnProperty(pre)) {
            truthy = false
            break
        }
        if(!Boolean(collection[i][pre])) {
            truthy = false
            break
        }

    }

    return truthy ? true : false
}


console.log(truthCheck([{ "single": "double" }, { "single": NaN }], "single"))