// Use Closure to Protect Properties Within an Object from Being Modified ExternallyPassed



// constructor
function Bird() {
    
    // private property
    let hatchedEgg = 10

    // this method can access private property above
    // becasuse it is declared in the same context
    // in JS, a fun always has access to the context in which it was created
    // This is called closure
    this.getHatchedEggCount = () => {
        return hatchedEgg
    }
}

let ducky = new Bird()
console.log(ducky.getHatchedEggCount())