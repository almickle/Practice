
function handleContinuousEvent(callback, delay) {
    let flag = true
    function throttle() {
        if(flag) {
            flag = false
            setTimeout(() => {
                callback()
                flag = true
            }, delay)
        }
    }

    document.getElementById("throttle-button").addEventListener("click", throttle)
}

handleContinuousEvent(() => console.log("throttle"), 800)



function handleDebounce(callback, delay) {
    function debounce() {
        let timerID
        return function() {
            clearTimeout(timerID)
            timerID = setTimeout(callback, delay)
        }
    }
    
    document.getElementById("debounce-button").addEventListener("click", debounce(callback, delay))
}

handleDebounce(() => console.log('debounce'), 500)


function asynchronousProcess() {
    const isValid = true
    const data = [1, 2, 3]
    const error = "Sorry, the promise was not fulfilled"
    return new Promise((resolve, reject) => {
        if(isValid) {
            setTimeout(() => {
                resolve(data)
            }, 2000)
        } else {
            reject(error)
        }
    })
}

console.log(asynchronousProcess())

asynchronousProcess()
.then((data) => console.log(data))
.catch((error) => console.log(error))



class Shape {
    constructor(name, area, color) {
        this.name = name
        this.area = area
        this.color = color
    }

    describe() {
        console.log("This " + this.name + " has an area of " + this.area + " units and is " + this.color + " colored")
    }
}

class Example {
    constructor(name, area, color) {
        this.name = name
        this.area = area
        this.color = color
    }
}


const triangle = new Shape("triangle", 30, "red")
triangle.describe()

const myExample = new Example("Pupppy", 20, "brown")
triangle.describe.call(myExample)

const bound = triangle.describe.bind(myExample)
bound()


Function.prototype.customBind = function(...args) {
    const obj = this, params = args.slice(1)
    return function(...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

const polyfill = triangle.describe.customBind(myExample)
console.log("polyfill")
polyfill()


Object.defineProperty(Array.prototype, "radius", {
    get: function() {
        return this.length / (Math.PI * 2)
    }
})

const testArray = [0, 0, 0, 0, 0, 1]
console.log(testArray.radius)