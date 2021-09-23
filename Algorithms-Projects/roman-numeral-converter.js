function convertToRoman(num) {

    let roman = "";

    const roman_symbols = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    for (let key in roman_symbols) {
        roman = roman + key.repeat(Math.floor(num / roman_symbols[key]))
        num = num % roman_symbols[key]
    }

    return roman
}

console.log(convertToRoman(2))