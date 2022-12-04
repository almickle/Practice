
function asynchronousProcess() {
    const valid = false
    return new Promise((resolve, reject) => {
        if(valid) {
            resolve("Hello!")
        } else {
            reject("Goodbye...cruel world")
        }
    })
}

async function doWork() {
    try {
        const resp = await asynchronousProcess()
        console.log(resp)
    } catch (error) {
        console.log(error)
    }
}

doWork()

// myPromise().then((a) => console.log(a)).catch((b) => console.log(b))
// console.log('synchronous')