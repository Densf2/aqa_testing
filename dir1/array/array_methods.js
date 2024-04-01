


let fruits = ['Apple', "Banana", 'Orange', 'Kivi']
                // 0           1       2         3

console.log(fruits[2])
let elementNumber2 = fruits[2]
console.log(`I like ${elementNumber2}`)


fruits[3] = 'Peach'
fruits[9] = 'Lemon'
fruits[6] = function() {console.log('Hello_From_Array')}

let newFruits = []
let anotherFruits = new Array();

// console.log(fruits[fruits.length - 998])
// console.log(fruits)

// function iterator(arr) {
//     let startIndex = 0
//     return {
//         next: function () {
//             if (startIndex < arr.length) {
//                 return {
//                     value: arr[startIndex++],
//                     done: false
//                 }
//             }
//             return {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }

// const arrayIterator = iterator(fruits)
// console.log(arrayIterator.next())

// for(let i=0; i<fruits.length; i++) {
//     console.log('index ' + i + ' value of index: ' + fruits[i])
// }

let passwords = ['sads', 'sdadad', 1111, 44]
// for (const password of passwords) {
//     console.log(password)
// }

// let a = 10
// let b = a

// a = 20

// console.log(a)
// console.log(b)

// const fruitsUpdated = fruits
// fruits.push('greipfruit')

// console.log(fruits)
// console.log(fruitsUpdated)

// fruitsUpdated.push('Cocos')
// console.log(fruits)
// console.log(fruitsUpdated)


fruits.push('Cocos') // added in the end new element
fruits.pop() // remove the last element

fruits.unshift('Ginger') // add the element at the start
fruits.shift() // remove the element at start

const slicedFruits = fruits.slice(2, 4)
console.log(slicedFruits)

fruits.splice(2, 0, 'Pineapple', 'Melon')
console.log(fruits)

fruits.splice(2, 2)
console.log(fruits)


const fruitsAndPasswords = fruits.concat(passwords)
console.log(fruitsAndPasswords)

// fruitsAndPasswords.forEach((element) => {
//     console.log(element)
// })

const evenPassForTests = fruitsAndPasswords.find((element) => element % 2 === 0)

console.log(evenPassForTests)

fruitsAndPasswords.sort()
console.log(fruitsAndPasswords)
console.log(fruits.includes('Lemon'))

// Set
const emptyNewSet = new Set()
const setNumberOne = new Set([1,1,1,2,3,4,4,4,5])
console.log(setNumberOne)

setNumberOne.add(6)
setNumberOne.delete(3)
console.log(setNumberOne.size)

