function Clown() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve("CLOWN EMOJI")
        }, 2000)
    })
}

async function msg(callback) {
    const msg = await Clown()
    console.log("Message: ", msg)

    callback()
}

msg(getResult)

function getResult(params) {
    console.log('Execute After')
}
