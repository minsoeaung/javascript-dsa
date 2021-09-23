function callBackTester(param1, param2, callback) {

    // some code that modified param1 and param2

    callback(param1, param2)
}


callBackTester('hello', 'goodbye', (param1, param2) => {
    console.log(`${param1} and ${param2}`)
})