// ----------------------------------- flags ------------------------------------


// i : ignores uppercase and lowercase
let regex = /nice/i // match NICE , nice, NiCe,....etc


// g : retrieves multiple values
regex = /Repeat/g // match all "Repeat" that appear in a string


// ----------------------------- . [] {} ^ $ - + * --------------------------------


// . : match any one char
regex = /blabla./


// [] : match single char with multiple possibilities
regex = /b[aiu]g/ // match bag, big, bug


// - : match letters of the alphabet
// below regex match a through e + at
regex = /[a-e]at/


/*
    * : match char that occurs 0 or more times
    + : match char that occurs 1 or more times
*/
let str1 = "goooooooal"
let str2 = "gut feeling"
let str3 = "over the moon"
regex = /go*/
let regex2 = /go+/
str1.match(regex) // "gooooooo"
str2.match(regex) // "g"
str2.match(regex2) // null
str3.match(regex) // null


/* 
    ^ : match beginning string patterns
    if ^ was inside a char set [], it is negation 
*/
str = "Ricky is fast and can be found"
str1 = "You can't find Ricky now"
regex = /^Ricky/
regex.test(str) // true
regex.test(str1) // false


// $ : match ending string patterns
str = "This is a never ending story"
str1 = "Sometimes a story will have no end"
regex = /story$/
regex.test(str) // true
regex.test(str1) // false


//--------------------------- shortcut -------------------------------


/*
    \w == [a-zA-Z0-9_]
    \W == [^a-zA-Z0-9_]
    \d == [0-9]
    \D == [^0-9]
    \s == [\r\t\f\n\v]
    \S == non-whitespace
*/


// ------------------------- name validation example ----------------------------


// username can only use alpha-numeric char
// num have to be at the end. there can be 0 or more num
// username cannot start with the number
// username letters are case insensitive
// usernames have to be at least two char long
// a two char username can only use alphaphet letters
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);

// explanation
/*
    ^ == start of input
    ^[a-z] == first char is one of a-z
    [a-z]+ == following 1 or more char are a-z
    \d*$ == input ends with 0 or more digits

    | == or

    ^[a-z] == first char is one of a-z
    \d\d+ == following char are 2 or more digits
    $ == end of input

    i == ignores uppercase and lowercase
*/


// ---------------------- times of occurance -------------------------------


// {} : specify upper and lower number of matches
// {3, } == specify only the lower number of matches
// {3} == specify exact number of matches
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);// return true;
multipleA.test(A2); // return false;

// ? : all or none
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true


// ------------------------  password validate example  ---------------------------


// looks for between 3 and 6 char and at least one number
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // return true

// greater than 5 char long, do not begin with num,
// have two consecutive digits
checkPass = /^\D(?=\w{5})(?=\w*\d{2})/;