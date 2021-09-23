function whatIsInAName(collection, source) {
    var arr = [];

    for (let i = 0; i < collection.length; ++i) {

        let allFine = true;

        for(const key in source) {
            if(!collection[i].hasOwnProperty(key) || collection[i][key] !== source[key]) {
                allFine = false;
                break;
            }
        }

        if(allFine) {
            arr.push(collection[i])
        }
    }

    return arr;
}


console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))