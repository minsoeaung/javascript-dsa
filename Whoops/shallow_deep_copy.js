/*
*   Shallow copies
*   copying a value in JS is almost always a shallow.
*   changes to deeply nested values will mutate original
* */


const myOriginalObject = {
    prop1: "some string",
    prop2: {
        a: 1,
        b: true
    }
}


/*
*   used spread operator
*   changes to newObject should not have effect on myOriginalObject
*   but...
* */
const newObject = {...myOriginalObject}


/*
*   adding or changing a property DIRECTLY on the shallow copy
*   will only affect the copy, not the original
* */
newObject.prop3 = "some string for prop3"
console.log(myOriginalObject.prop3) // undefined


/*
*   HOWEVER
*   adding or changing a DEEPLY nested property affects both the copy and the original
* */
newObject.prop2.c = "some string for c"
console.log(myOriginalObject.prop2.c) // some string for c



// https://web.dev/structured-clone/