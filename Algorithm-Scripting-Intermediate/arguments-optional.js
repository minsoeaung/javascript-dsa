function addTogether() {

    // if only one argu, 
    // return a fun that expects one argu and return the sum
    if (arguments.length === 1) {
        if (typeof (arguments[0]) !== 'number') return
        return x => {
            if(typeof(x) !== 'number')
                return
            return arguments[0] + x
        }
    }
    // if not a valid num, undefined
    if (typeof (arguments[0]) !== 'number' || typeof (arguments[1]) !== 'number')
        return

    // everything normal case
    return arguments[0] + arguments[1]
}

console.log(addTogether("http://bit.ly/IqT6zt"))