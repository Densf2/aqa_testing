export const myValue = 'text TEXT';
                    //  012345678
// console.log(myValue[5]);
// // console.log(myValue.length)
// console.log(myValue.toUpperCase())
// let onlyUpperCaseText = myValue.substring(5, 9)
                        

let myNumber2 = 2
export function add(a, b) {
    let myNumber = 10;
    myNumber2 = 22
    return a + b
}

let result = add(2, 2)

// console.log(myNumber2)
// console.log(myNumber)

// commonjs import->export
// const myValueForNumberInMyTest = 'text2'
// module.exports = {myValu2}

let resultOfDividing = 5 % 2; // 1

// ++
let counter = 1;
let counterText = '1';

let numberOne = ++counter
console.log(counter)
console.log(numberOne)

// numberOne++;
// a > b; a < b; counter == counterText; counter === counterText; 
// console.log(counter !== counterText)
// console.log(undefined === null)

console.log(false || false)
console.log(false && true)
console.log(!true)


let newMyValue = '10'
let varF
let varX
let varR

varF = varR = varX = 10
console.log(varX)

varX = varX * 2
varX +=20
console.log(varX)
console.log(String(varX)) // 
console.log(Number(newMyValue))
// null, undefined, NaN, 0 => false
// 1, 'ass' => true

let javascriptName = "   Javascript    " // trim() => "Javascript"

let newVariable = javascriptName + " " + myValue
console.log(newVariable)

let newVariableConcat = javascriptName.concat(" ", myValue)