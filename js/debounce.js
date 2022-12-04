
// // function debounce(callback, delay) {
// //     let timerID
// //     console.log(timerID)
// //     return function(...args) {
// //         if(timerID) {
// //             clearTimeout(timerID)
// //         }
// //         timerID = setTimeout(() => {
// //             callback()
// //         }, delay)
// //     }
// // }

// // document.getElementById("button").addEventListener("click", debounce(() => console.log("Hello, world!"), 200))




// // function debounce(callback, delay) {
// //     let timerID
// //     return function() {
// //         if(timerID) {
// //             clearTimeout(timerID)
// //         }
// //         timerID = setTimeout(callback, delay)
// //     }
// // }

// // function myCallback() {
// //     console.log("Debounced!")
// // }

// // document.getElementById("debounce-button").addEventListener("click", debounce(myCallback, 1000))

// // function debounce(timerID, callback, delay) {
// //     return function() {
// //         if(timerID) {
// //             clearTimeout(timerID)
// //         }
// //         timerID = setTimeout(callback, delay)
// //     }
// // }

// // function myCallback() {
// //     console.log("I got clicked!")
// // }

// // document.getElementById("button").addEventListener("click", debounce(null, myCallback, 1000))


// // function testFunction() {
// //     console.log("I am a test")
// // }

// // document.getElementById("button").addEventListener("click", testFunction())


// // Attempted Bind Method

// // function debounce(timerID, callback, delay) {
// //         if(timerID) {
// //             clearTimeout(timerID)
// //         }
// //         timerID = setTimeout(callback, delay)
// // }

// // const myDebounce = debounce.bind(this, undefined, myCallback, 1000)

// // function myCallback() {
// //     console.log("I got clicked!")
// // }

// // document.getElementById("button").addEventListener("click", myDebounce)


// // function handleDebounce() {
// //     function debounce(callback, delay) {
// //         let timerID
// //         return function() {
// //             if(timerID) {
// //                 clearTimeout(timerID)
// //             }
// //             timerID = setTimeout(callback, delay)
// //         }
// //     }
    
// //     function myCallback() {
// //         console.log("Bouncy!")
// //     }
    
// //     document.getElementById("debounce-button").addEventListener("click", debounce(myCallback, 600))
// // }

// // handleDebounce()



// function handleDebounce() {
//     function debounce(callback, delay) {
//         let timerID
//         return function() {
//             clearTimeout(timerID)
//             timerID = setTimeout(callback, delay)
//         }
//     }

//     document.getElementById("debounce-button").addEventListener("click", debounce(() => console.log("I'm bouncy!"), 1000))
// }

// handleDebounce()



function handleDebounce(callback, delay) {
    function debounce() {
        let timerID
        return function() {
            clearInterval(timerID)
            timerID = setTimeout(callback, delay)
        }
    }

    document.getElementById("debounce-button").addEventListener("click", debounce(callback, delay))
}

handleDebounce(() => console.log("New callback"), 700)