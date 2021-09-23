// ------------------------------------ Promise way -------------------------------------//

let data = true;

let promise = new Promise((resolve, reject) => {
    if(data) {
        resolve("we got the data from db pro_")
    } else {
        reject("we did not get the data from db pro_")
    }
})

promise.then((data) => {
    console.log(data)
    displayDataToUser()
}, (err) => {
    console.log(err)
})

function displayDataToUser() {
    console.log("Displaying data pro_")
}

//------------------------------------- callback way ----------------------------------------//

function fetchAndDisplay(data, displayer) {
    if(data) {
        console.log("fetched data cb_")
        displayer()
    }
    else {
        console.log("cant fetch cb_")
    }
}

fetchAndDisplay(data, () => {
    console.log("showing data cb_ \n")
})