
// Array.prototype.test = function() {
//     console.log('This is a test')
// }

// Array.prototype.second = second
// Array.prototype.unique = unique
// Array.prototype.last = last

// const testArray = [1, 2, 3, 3, 5, 4, 1, 2, 5, 9]

// // console.log(testArray.second())
// // console.log(testArray.unique())
// // console.log(testArray.last())

// function second() {
//     return this[1]
// }

// function last() {
//     return this[this.length-1]
// }

// function unique() {
//     const uniqVals = []
//     this.forEach((element) => {
//         if(uniqVals.includes(element) === false) uniqVals.push(element)
//     })
//     return uniqVals
// }



Array.prototype.addPersonality = function(value) {
    return this.personality = value
}

Array.prototype.shape = "circular"
// Array.prototype.radius 

Object.defineProperty(Array.prototype, "radius", {
    value: 20,
    writable: true,
    enumerable: true,
    configurable: true
  })

const newArray = [1, 2, 3, 4, 5, 6, 7, 8]

newArray.addPersonality("cool")
console.log(newArray.personality)

console.log(newArray.shape)
console.log(newArray.radius)

newArray.length
newArray.push()

Array.prototype.addAttribute = function(attribute, value) {
    Object.defineProperty(Array.prototype, attribute, {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
      })
}

// Array.prototype.addRadius = function(attribute, value) {
//     Object.defineProperty(Array.prototype, attribute, {
//         value: value,
//         writable: true,
//         enumerable: true,
//         configurable: true
//       })
// }

newArray.addAttribute("color", "red")
console.log(newArray.color)

Array.prototype.addRadius = function() {
    return this.radius = this.length / 2 * Math.PI
}

newArray.addRadius()
console.log(newArray.radius)

Array.prototype.initializeEndAttribute = function() {
    return this.end = this.length - 1
}

Array.prototype.end = function() {
    return this.end = this.length - 1
}
// newArray.initializeEndAttribute()
// console.log(newArray.length)
console.log(newArray.end())