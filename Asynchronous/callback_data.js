
// in real project, we got data from api call, api call take some time


function getData(data, callback) {
    setTimeout(() => {
        console.log(data)
        callback()
    }, 1000)
}

getData("SOME DATA", () => {
    console.log('Displayed the data we got')
})