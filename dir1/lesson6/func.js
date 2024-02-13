// function sum () {
//     console.log(2+2)
// }

// function sum (param1, param2, param3=10) { //parameters
//     if (param2 > param1) {
//         console.log("parameter number 2 higher than paramter number 1")
//     } else if (param1 < param2) {
//         console.log("parameter number 1 higher than paramter number 2")
//     } else {
//         console.log('Parameters are the same values')
//     }

//     const sum = param1 + param2 + param3
//     return sum
// }

// const getSum =  sum(4, 4, 5)
// console.log(getSum)

// function greeting (name, hello='Hello') {
//     console.log(hello + " " + name)
//     console.log(hello.concat(' ',name))
//     console.log(`${hello} ${name}`)
// }

// greeting('Koala', 'Privet')


// function sum2 (...numbers) {
//     let sum = 0
//     for(let num of numbers){
//         sum += num
//     }
//     return sum;
// }

// const resultOfFuncWithParams = sum2(2,3,4,5,67,2024)
// console.log(resultOfFuncWithParams)

// function sum3 (param1, param2, ...restNumbers) {
// }

// import readline from "readline";

function greetUser() {
    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    input.question("What is your name?", function (name) {
        // const name = prompt("What is your name?") // works only in browser
        let helloTxt = 'Hello'
        if (name) {
            console.log(`${helloTxt} ${name}`)
            name.length
            console.log(`The length of name is ${name.length}`)
            input.close()
        } else {
            console.log('Need paramter name')
            input.close()
        }
    })
}

greetUser()

function hi() {
    // console.log('hi')
    hi()
}

function by() {
    console.log('by')
}

hi()