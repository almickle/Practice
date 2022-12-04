

// // function asynchronousProcess() {
// //     const valid = true
// //     const myData = [1, 2, 3, 4, 5]
// //     const myError = new Error("This promise has been rejected")
// //     return new Promise((resolve, reject) => {
// //         if(!valid) {
// //             reject(myError)
// //         }
// //         resolve(myData)
// //         // setTimeout(() => {
// //         //     resolve(myData)
// //         // }, 2000)
// //     })
// // }

// // asynchronousProcess().then((data) => console.log(data))
// // console.log("Hello, world!")


// function asynchronousProcess() {
//     const isValid = false
//     const error = new Error("Promise was rejected")
//     const data = "Hello beautiful promise!"
//     return new Promise((resolve, reject) => {
//         if(isValid) {
//             resolve(data)
//         } else {
//             reject(error)
//         }
//     })
// }

// // console.log(asynchronousProcess())
// asynchronousProcess()
// .then((data) => console.log(data))
// .catch((error) => console.log(error))


function asynchronousProcess() {
    const isValid = false
    const data = "Hello, world!"
    const error = new Error("This is an error")
    return new Promise((resolve, reject) => {
        if(isValid) {
            resolve(data)
        } else {
            reject(error)
        }
    })
}

asynchronousProcess()
.then((data) => console.log(data))
.catch((error) => console.log(error))