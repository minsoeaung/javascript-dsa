function myReplace(str, before, after) {

    // let regex = new RegExp()
    let upperCaseRegex = /[A-Z]/;
    if(upperCaseRegex.test(before.charAt(0))) {
        after = after.replace(after.charAt(0), after.charAt(0).toUpperCase())
    } else {
        after = after.replace(after.charAt(0), after.charAt(0).toLowerCase())
    }
    str = str.replace(before, after)

    return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"))