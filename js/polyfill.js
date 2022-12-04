class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const michael = new Person("Michael", "Dear")

const printName = function(hometown, state, zipcode) {
        console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state + " " + zipcode)
    }

// Function.prototype.myBind = function(...args) {
//         const obj = this, params = args.slice(1)
//         return function(...args2) {
//             obj.apply(args[0], [...params, ...args2])
//         }
//     }
    
//     const printMyNameAgain = printName.myBind(michael)
    
//     printMyNameAgain("Pawleys Island", "SC", "29585")


Function.prototype.customBind = function(...args) {
    const obj = this, params = args.slice(1)
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

// const myPolyfill = printName.customBind(michael)
// myPolyfill("Myrtle Beach", "SC", "29577")



Function.prototype.newBind = function(...outer) {
    const obj = this, params = outer.slice(1)
    return function(...inner) {
        obj.call(outer[0], ...params, ...inner)
    }
}

const newPolyfill = printName.newBind(michael)
newPolyfill("Myrtle Beach", "SC", "29577")