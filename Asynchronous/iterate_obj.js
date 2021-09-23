// an object
const user = {

    name: 'John Doe',

    email: 'john.doe@example.com',

    age: 25,

    dob: '08/02/1989',

    active: true
};


// iterate over the user obj
// for(const key in user) {
//     console.log(`${key}: ${user[key]}`)
// }

if(user.hasOwnProperty("age")) {
    user.age = 34;
    console.log(user)
}