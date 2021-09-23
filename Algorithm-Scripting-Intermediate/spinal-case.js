function spinalCase(str) {

    /* 
        some notes-----

        i flag - ignore upper and lower case
        g flag - retrieve multiple times
        . - match any one char
        [] - match single character with multiple possibilities ([aiu] - a or i or u)
        * - match char that occur 0 or more times
        + - match char that occur 1 or more times
        ? - lazy match
        ^ - match beginning string pattern
        $ - match ending string pattern
        [^] - negation
        { } - Specify Upper and Lower Number of Matches
        u? - means u is optional
    */

    return str.replace(/([A-Z])/g, ' $1') /*Find all cap and add space at the start*/
        .replace(/[^A-Za-z0-9]/g, ' ') /*Find all non alpha numeric and replace it with space*/
        .replace(/\s{1,}/g, "-") /*Convert all spaces to -*/
        .replace(/^\-|[\-]$/g, '') /*Slice - at the start and end*/
        .toLowerCase(); /*LowerCase it*/
}

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase("thisIsSpinalTap"))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))

