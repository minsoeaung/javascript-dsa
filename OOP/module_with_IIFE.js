// Use an IIFE to Create a Module

// constructor
function Bird() {}


// -------- two mixin -------------
function glideMixin(obj) {
    obj.glide = () => {
        console.log('Gliding on the water')
    }
}
function flyMixin(obj) {
    obj.fly = () => {
        console.log('Flying, wooosh!')
    }
}


// can group these mixins into a module as follows
let motionModule = (() => {

    // return two obj
    return {

        glideMixin: (obj) => {
            obj.glide = () => {
                console.log('gliding')
            }
        },

        flyMixin: (obj) => {
            obj.fly = () => {
                console.log('flying')
            }
        }

    }
}) () // IIFE


// using it
let duck = new Bird()
motionModule.glideMixin(duck)
duck.glide()