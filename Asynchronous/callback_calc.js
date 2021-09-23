/*
	`I will call back later`
	A callback is a function passed as an argument to another function.
	This technique allows a fun to call another fun.
	A callback fun can run after another fun has finished.
	JS fun are executed in the sequence they are called.
	Not in the sequence they are defined.
*/

/*
	Callbacks shine in asynchronous function,
	where one function has to wait for another function,
	(like waiting for a file to load)
*/


function myDisplayer(some) {
	console.log(some);
	console.log('\n')
}



function myCal(x, y) {
	let sum = x + y;
	return sum;
}
// call myCal, save the result and call another fun myDisplayer.
// have to call two function.
let result = myCal(5,5);
myDisplayer(result);



// calling myCalculator fun and let the fun call myDisplayer
// cannot prevent from displaying the result even if the sum resulf failed.
function myCalculator(x, y) {
	let sum = x + y;
	myDisplayer(sum);
}
myCalculator(5,5);


// CALLBACK
// using a callback, call the fun myCalculator with a callback,
// and let the calculator fun run the callback after calc is finished.
function myCalculator_using_callback(x, y, myCallBack) {
	let sum = x + y;
	myCallBack(sum);
}

myCalculator_using_callback(5, 5, myDisplayer);


myCalculator_using_callback(5, 5, (some) => {
    console.log(some);
    console.log('\n');
})
