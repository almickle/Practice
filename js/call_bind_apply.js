// const name = {
//     firstName: "Michael",
//     lastName: "Dear"
// }

// const printName = function(hometown, state, zipcode) {
//     console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state + " " + zipcode)
// }

// const printMyName = printName.bind(name)

// // printMyName()

// Function.prototype.myBind = function(...args) {
//     const obj = this, params = args.slice(1)
//     return function(...args2) {
//         obj.apply(args[0], [...params, ...args2])
//     }
// }

// const printMyNameAgain = printName.myBind(name)

// // printMyNameAgain("Pawleys Island", "SC", "29585")




// const michael = {
//     name: "Michael",
//     food: "soup",
//     sport: "swimming",
//     job: "software developer",
//     describeMyself: function() {
//         console.log("Hi, my name is " + this.name + ". I like " + this.food + " and " + this.sport + ". I am a " + this.job + ".")
//     }
// }

// const describeSomeone = function(farewell) {
//     console.log("Hi, my name is " + this.name + ". I like " + this.food + " and " + this.sport + ". I am a " + this.job + ". " + farewell)
// }

// michael.describeMyself()

// const alex = {
//     name: "Alex",
//     food: "tomatoes",
//     sport: "golf",
//     job: "garbage man"
// }

// michael.describeMyself.call(alex)
// describeSomeone.call(michael, "Goodbye!")

// const describeYourself = michael.describeMyself.bind(alex)
// describeYourself()

// describeSomeone.apply(michael, ["See ya!"])

// const theBind = describeSomeone.bind(alex, "Later!")
// theBind()



const michael = {
    name: "michael",
    intro: function(farewell) {
        console.log("Hello my name is " + this.name + ". " + farewell )
    }
}

const adam = {
    name: "adam"
}

class Carter {
    constructor(name) {
        this.name = name
    }
}

const carter = new Carter("Carter")

const introAdam = michael.intro.call(adam, "Goodbye")
const introAdam2 = michael.intro.apply(adam, ["Goodbye"])
const introAdam3 = michael.intro.bind(adam)

const introCarter = michael.intro.call(carter, "Goodbye")

introAdam3("Goodbye")