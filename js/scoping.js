// x = 10
// console.log(x)

// var x = 5
// var x = 10
// console.log(x) // var can be redeclared

// console.log(y)
// var y = 5
// console.log(y)

// console.log(a)
// const a = 7
// const a = 8 // SyntaxError: cannot be redeclared
// a = 8 // TypeError: cannot be reassigned
// a++ // counts as reassignment
// const a // SyntaxError: must be initialized

// function constTest() {
//     const a = 5
//     console.log(a) // can access - within function scope
// }
// constTest()
// console.log(a) // ReferenceError: a is not defined (cannot access outside of function scope)

// for(const a=1; a !==1;) {
//     console.log(a)
// }
// console.log(a) // cannot access - outside of scope (block)

// for(var x=0; x < 3; x++) {

// }
// console.log(x) can still be accessed (var is not block scoped)

// function varScope() {
//     var x = 10
//     console.log(x) // can access - within function scope
// }
// varScope()
// console.log(x) // ReferenceError: x is not defined (outside of function scope)


// let a 
// console.log(a) // does not need to be initialized
// let a = 10
// let a =  // SyntaxError: cannot be redeclared
// let a = 10
// a = 20
// console.log(a) // can be reassigned

// for(let x=0; x<3; x++) {
//     console.log(x)
// }
// console.log(x) // ReferenceError: cannot be accessed outside of scope (block)

// console.log(x)
// let x = 5  // cannot be hoisted

// if(1) {
//     let x = 5
//     const y = 10
//     var z = 20
// }

// console.log(x) // cannot access
// console.log(y) // cannot access
// console.log(z) // can access

// {
//     const x = 5
//     let y = 10       // creates a scope
//     var z = 20
//     console.log(x)
// }

// console.log(x) // cannot access
// console.log(y) // cannot access
// console.log(z) // can access