var uniqueOccurrences = function(arr) {
    const uniqVals = []
    arr.forEach((element, index) => {
        if(uniqVals.includes(element) === false) uniqVals.push(element)
    })

    console.log(uniqVals)

    const occurences = []
    uniqVals.forEach((value) => {
        let count = 0
        arr.forEach((el) => {
            if(el === value) {
                count++
            }
        })
        occurences.push(count)
    })

    console.log(occurences)

    let unique = true
    occurences.forEach((element, index) => {
        occurences.forEach((e, i) => {
            if(element === e && index !== i) {
                unique = false
            }
        })
    })

    return unique
};



 var removeDuplicates = function(s, k) {
    const stringArray = s.split('')
    const duplicates = []
    let n = 0
    stringArray.forEach((element, index, array) => {
        if(index === 0) {
            duplicates.push([1])
        } else {
            if(element === array[index-1]) {
                duplicates[n].push(1)
            } else {
                n++
                duplicates.push([1])
            }
        }
    })

    const newDupes = duplicates.map((arr) => arr.length)

    console.log(newDupes)

    let position = 0
    newDupes.forEach((num, index) => {
        if(num >= k) {
            stringArray.splice(position, position+k-1)
            position -= num
        }
        position += num
    })

    console.log(stringArray)
    console.log(s.split(''))


    // let repeat = false
    // newDupes.forEach((num) => {
    //     if(num >= k) {
    //         repeat = true
    //     }
    // })

    // console.log(repeat)

    // if(repeat === true) {
    //     removeDuplicates(stringArray.join(''), k)
    // } else {
    //     return stringArray.join('')
    // }

};

removeDuplicates('deeedbbcccbdaa', 3)
