
// Bind Method

function add(a, b) {
    console.log(a + b)
}

const add1 = add.bind(this, 1)
const add2 = add.bind(this, 2)

add1(2)
add2(2)

// Closure Method

// function add(a) {
//     return function(b) {
//         console.log(a + b)
//     }
// }

// const add1 = add(1)
// const add2 = add(2)

// add1(2)
// add2(2)