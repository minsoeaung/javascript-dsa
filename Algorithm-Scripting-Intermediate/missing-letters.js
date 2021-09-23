function fearNotLetter(str) {

    let alph = "abcdefghijklmnopqrstuvwxyz";

    let j = 0;
    let start = alph.indexOf(str[0])
    let end = alph.indexOf(str[str.length - 1])
    for (let i = start; i < end; ++i) {
        if (str[j] == alph[i]) {
            j++;
        } else {
            return alph[i]
        }
    }
    return
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))


/*
fearNotLetter("abce") should return the string d.

fearNotLetter("abcdefghjklmno") should return the string i.

fearNotLetter("stvwx") should return the string u.

fearNotLetter("bcdf") should return the string e.

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/