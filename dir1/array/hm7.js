const numbers = [2, -5, 0, 7, -3, 0, 10, -8]

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++
    }
    if (numbers[i] < 0) {
        negativeCount++
    }
    if (numbers[i] === 0) {
        zeroCount++
    }
}

console.log('Кількість позитивних чисел: ', positiveCount)
console.log(`Кількість негативних чисел: `, negativeCount)
// task 2
const myArray = [1, 2, 3, 4, 5]
const anotherArray = myArray.map(function (elem, index){
    return elem * index
})

console.log(anotherArray)

// task3
const array = [10, 20, 30, 40, 50]

const reduce = array.reduce(function (total, amount) {
    return total + amount
})

console.log(reduce)

// TASK4

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray = array2.filter(function (value) {
    return value % 2 === 0
})
console.log(newArray)

// task 5
const myFirstArray = [ 5, -2, 8, 32, 29, 4, -1 ]
const mySecondArray = [ null, undefined, 'abcd']

const combineMyArraystoone = myFirstArray.concat(mySecondArray)

console.log(combineMyArraystoone)

// task 6
const numbersList = [ 1,10,14,2,4,5,43,34 ]
let numberList2 = numbersList.slice()

let SortofnumberList2 = numberList2.sort((a, b) => a-b)

console.log(numberList2)
console.log(SortofnumberList2)


// additional task
function filterGreaterThanValue(minValue, numbersList) {
    const greaterArray = []
    for (const number of numbersList) {
        if (number > minValue) {
            greaterArray.push(number)
        }
    }

    console.log(greaterArray)
}

