/* 
    Pig Latin is a way of altering English Words. The rules are as follows:

    - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
      everything except aeiou 

    - If a word begins with a vowel, just add way at the end.
      aeiou
*/

function translatePigLatin(str) {
    let arr = str.split('')


    for (let i = 0; i < arr.length; ++i) {

        if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
            // if start with vowel, just add 'way' at the end and job done
            if (i == 0) {
                return arr.join('').concat('way')
            }

            // handing consonant, or consonant cluster
            else {
                let consonant_cluster = arr.splice(0, i) // at this point this cluster was removed from arr
                let finalArr = arr.concat(consonant_cluster, 'ay')
                return finalArr.join('')
            }
        }

    }
    
    // in case, no vowel at all
    return str.concat('ay')
}

console.log(translatePigLatin("california"))
console.log(translatePigLatin("rhythm"))