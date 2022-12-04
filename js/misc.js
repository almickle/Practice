// const str1 = "akhdlsfh"
// console.log(str1.split('').sort().join(''))

// const obj = {
//     name: "michael",
//     age: 25
// }

// for(const value in obj) {
//     console.log(value)
// }

function areKAnagrams(str1, str2, k){
    if(str1.length !== str2.length) {
        return false
    } else {
        let uniq1 = str1
        let uniq2 = str2
        for(const char of str1) {
            if(str2.includes(char)) {
                uniq1 = uniq1.replace(char, '')
                uniq2 = uniq2.replace(char, '')
            }
        }

        // barcode making
        let bar1 = {}
        let bar2 = {}
        for(const char of uniq1) {
            if(!bar1[char]) {
                bar1[char] = 1
            } else {
                bar1[char]++
            }
        }
        for(const char of uniq2) {
            if(!bar2[char]) {
                bar2[char] = 1
            } else {
                bar2[char]++
            }
        }
        console.log(bar1, bar2)

        // key making
        let code1 = Object.values(bar1).sort((a, b) => a - b), code2 = Object.values(bar2).sort((a, b) => a - b)
        let key1 = []
        let key2 = []
        let n = 0
        for(let i=0; i<code1.length; i++) {
            if(i === 0) {
                if(code1[i] !== 1) {
                    for(let k=0; k<=code1[0]; k++) {
                        key1.push(0)
                        if(k !== code1[0]) {
                            n++
                        } 
                    }
                } else {
                    key1[0] = 1
                }
            } else {
                if(code1[i] === code1[i-1]) {
                    key1[n]++
                } else {
                    n++
                    key1[n] = 1
                }
            }
        }
        n = 0
        for(let i=0; i<code2.length; i++) {
            if(i === 0) {
                if(code2[i] !== 1) {
                    for(let k=0; k<=code2[0]; k++) {
                        key2.push(0)
                        if(k !== code2[0]) {
                            n++
                        } 
                    }
                } else {
                    key2[0] = 1
                }
            } else {
                if(code2[i] === code2[i-1]) {
                    key2[n]++
                } else {
                    n++
                    key2[n] = 1
                }
            }
        }
        if(key1.length < key2.length) {
            for(let i=0; i<(key2.length - key1.length); i++) {
                key1.push(0)
            }
        } else if(key1.length !== key2.length) {
            for(let i=0; i<(key1.length - key2.length); i++) {
                key2.push(0)
            }
        }
        key1 = [7, 0, 0]
        key2 = [6, 0, 1]
        console.log(key1, key2)

        // jewel making
        const jewel = key1.map((num, i) => {
            if(num <= key2[i]) {
                return 0
            } else {
                return num - key2[i]
            }
        })
        console.log(jewel)
        const solution = jewel.reduce((a, b, c) => a + b*(c+1))
        console.log(solution)
        if(solution <= k) {
            return true
        }
    }
        return false
}

// areKAnagrams("gmigmeeafnvezua", "rowxjiftoofihdh", 2)
// console.log(areKAnagrams("wurkbxkgkfmlzofn", "mczujslxzvhecrpy", 10))
console.log(areKAnagrams("pvsiherdddzwnrfxqd", "nrdaepbkpgazxrurad", 2))

// const strA = "zjwusu", strB = "wetkfj"

// const b = strA.replace('u', '')

// console.log(b)


// for(let i=0; i<bar1.length; i++) {
//     if(bar1[i] === bar2[i]) {
//         delete bar1[i]
//         delete bar2[i]
//         mutations++
//     }
// }
// for(const key in bar1) {
//     remainder += bar1[key]
// }
// console.log(mutations)
// console.log(remainder)
// if(mutations + remainder <= k) {
//     return true
// }