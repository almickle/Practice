
function factorial(n) {
    let num = 1
    for(let i=1; i <=n; i++) {
        num *= i
    }

    if(n === 0) num = 1
    return num
}

// console.log(factorial(11))

// Big-O = O(n) (linear)

function isPrime(n) {
    if(n % 2 === 0) {
        return false
    } else {
        for(let i=3; i <= Math.sqrt(n); i++) {
            if( n % i === 0) {
                return false
            }
        }
        return true
    }

}

// console.log(isPrime(35))
// console.log(isPrime(91))
// console.log(isPrime(45))


function isPowerOfTwo(n) {
    const k = n/2
    const c = n % 2
    if(k === 1) {
        return true
    }
    if(c !== 0) {
        return false
    }

    return isPowerOfTwo(k)
}

// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(16))
// console.log(isPowerOfTwo(32))
// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(100))
// console.log(isPowerOfTwo(150))

// const fibonacci = [0, 1, 1, 2, 3, 5]

function recursiveFibonacci(n) {
    const num1 = 0
    const num2 = 1
    let k = 2

    function recursiveWork(n, num1, num2) {
        let sum = num1 + num2
        if(k === n) {
            return sum
        }
        k++
        return recursiveWork(n, num2, sum)
    } 

    if(n >= 2) {
        return recursiveWork(n, num1, num2)
    } else {
        return n
    }
}

function betterRecursiveFibonacci(n) {
    if(n < 2) {
        return n
    }
    return betterRecursiveFibonacci(n-1) + betterRecursiveFibonacci(n-2)
}

// console.log(betterRecursiveFibonacci(5))


function recursiveFactorial(n) {
    if(n < 3) {
        return n
    }

    return n * recursiveFactorial(n-1) 
}

// console.log(recursiveFactorial(6))


function binarySearch(arr, t) {
    if(t < arr[0] || t > arr[arr.length-1]) {
        return -1
    } else {
        let binaryArr = arr
        while(binaryArr.length > 1) {
            let binary = Math.floor(binaryArr.length/2)
            if(t < binary) {
                binaryArr.splice(binary)
            } else {
                binaryArr.splice(binary, binaryArr.length-1)
            }
        }
        return binaryArr[0]
    }
}

const array = [1, 2, 3, 4, 7, 11, 12, 13, 14, 15]
// console.log(binarySearch(array, 9))

function betterBinarySearch(array, t) {
    let leftIndex = 0
    let rightIndex = array.length - 1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if(t === array[middleIndex]) {
            return middleIndex
        }
        if(t < array[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(betterBinarySearch(array, 7))