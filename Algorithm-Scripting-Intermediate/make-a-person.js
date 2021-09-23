var Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullname = firstAndLast

    this.getFirstname = () => {
        return fullname.split(' ')[0].toString()
    }

    this.getLastname = () => {
        return fullname.split(' ')[1].toString()
    }

    this.getFullName = () => {
        return fullname.toString()
    }

    this.setFirstName = (first) => {
        fullname = first + ' ' + fullname.split(' ')[1]
    }

    this.setLastName = (last) => {
        fullname = fullname.split(' ')[0] + ' ' + last
    }

    this.setFullName = (firstAndLast) => {
        fullname = firstAndLast
    }

    return firstAndLast;
};

var bob = new Person('Bob Ross');
// console.log(Object.keys(bob).length) 
// console.log(bob instanceof Person)
// console.log(bob.firstName)
// console.log(bob.lastName)
console.log(bob.getFirstname())
// console.log(bob.getLastname())
// bob.setFirstName("Haskell")
// bob.setLastName("Curry")
// console.log(bob.getFullName())

// bob.setFullName("Haskell Curry")
// console.log(bob.getFirstname())