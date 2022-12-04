// // Throttling & Debouncing
// // limit rate of function calls
// // ie. resize event calls

// // function onResize() {
// //     console.log("Resized!")
// // }

// // function handleResize(callback, limit) {
// //     let flag = true
// //     function throttle() {
// //         if(flag) {
// //             callback()
// //             flag = false
// //             setTimeout(() => {
// //                 flag = true
// //             }, limit)
// //         }
// //     }

// //     window.addEventListener("resize", throttle)
// // }

// // handleResize(onResize, 300)



// // function handleContinuousEvent(callback, delay) {
// //     let flag = true
// //     function throttle() {
// //         if(flag) {
// //             flag = false
// //             setTimeout(() => {
// //                 callback()
// //                 flag = true
// //             }, delay)
// //         }
// //     }

// //     window.addEventListener("resize", throttle)
// // }

// // handleContinuousEvent(() => console.log("Throttled!"), 1000)







// // function handleContinousEvent(callback, delay) {
// //     let flag = true
// //     function throttle() {
// //         if(flag) {
// //             flag = false
// //             setTimeout(() => {
// //                 callback()
// //                 flag = true
// //             }, delay)
// //         }
// //     }

// //     document.getElementById("throttle-button").addEventListener("click", throttle)
// // }

// // handleContinousEvent(() => console.log("Oooh!"), 600)




// // function handleContinousEvent(callback, delay) {
// //     let permission = true
// //     function throttle() {
// //         if(permission) {
// //             permission = false
// //             setTimeout(() => {
// //                 callback()
// //                 permission = true
// //             }, delay)
// //         }
// //     }

// //     document.getElementById("throttle-button").addEventListener("click", throttle)
// // }

// // handleContinousEvent(() => console.log("Now that's throttling!"), 600)





// function handleContinousEvent(callback, delay) {
//     let permission = true
//     function throttle() {
//         if(permission) {
//             permission = false
//             setTimeout(() => {
//                 callback()
//                 permission = true
//             }, delay)
//         }
//     }

//     document.getElementById("throttle-button").addEventListener("click", throttle)
// }

// handleContinousEvent(() => console.log("I got throttled!"), 1000)



function handleContinousEvent(callback, delay) {
    let permission = true
    function throttle() {
        if(permission) {
            permission = false
            setTimeout(() => {
                callback()
                permission = true
            }, delay)
        }
    }

    document.getElementById("throttle-button").addEventListener("click", throttle)
}

handleContinousEvent(() => console.log("Throttle!"), 700)