function rot13(str) {
    let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"

    let result = []
    // iterate through each char of str
    for (let i = 0; i < str.length; ++i) {

        // transform letter
        if (/[A-Z]/.test(str.charAt(i))) {
            result[i] = output.charAt(input.indexOf(str.charAt(i)))
        } 
        
        // do not transform all non-alphabetic char 
        else {
            result[i] = str.charAt(i)
        }
    }

    return result.join("");
}

console.log(rot13("SERR PBQR PNZC"))


// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)