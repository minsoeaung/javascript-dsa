// Use a Mixin to Add common Behavior Between Unrelated Objects


let flyMixin = (obj) => {
    obj.fly = () => {
        console.log("Flying")
    }
}

let bird = {
    name: "Donald",
    numLegs: 2
}

let plane = {
    model: "777",
    numPassengers: 524
}


/* 
    bird and plane can fly
    but a bird is not a type of airplane and vice versa
    inheritance does not work well for unrelated object like bird and place
*/

flyMixin(bird)
flyMixin(plane)

bird.fly()
plane.fly()