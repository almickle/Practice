class Human {
    constructor(height, weight, name) {
        this.height = height
        this.weight = weight
        this.name = name
    }

    gainWeight() {
        this.weight += 10
    }
}

class Artist extends Human {
    constructor(height, weight, name, type) {
        super(height, weight, name)
        this.type = type
    }

    changeType(newType) {
        this.type = newType
    }
}

const michael = new Human(128, 70, "Michael")

console.log("Hi, my name is " + michael.name + ". I weigh " + michael.weight + " kg")

console.log("Oops! I really let myself go")
michael.gainWeight()

console.log("Now I weigh " + michael.weight + " kg...")

const alexandria = new Artist(120, 60, "Alexandria", "graphic designer")

console.log("Hi, my name is " + alexandria.name + ". I weigh " +alexandria.weight + " kg")
console.log("I am a " + alexandria.type)

alexandria.changeType("painter")

console.log("I am so fickle! I just changed to a " + alexandria.type)

Human.prototype.assignPersonality = function(personality) {
    return this.personality = personality
}

michael.assignPersonality("cool")
console.log(michael.personality)

