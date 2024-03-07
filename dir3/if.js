
// let ageCustomer = 70
// let isAdult = 18

// if (ageCustomer) {
//     console.log('please fille your age')
// }
// else if (ageCustomer < 18) {
//     console.log('customer age under 18')
//     if (ageCustomer < 10) {
//         console.log('customer age not valid, under 10')
//     }
// }
// else if (ageCustomer >= isAdult) {
//     console.log('customer age valid, not more 50')
// } else if (ageCustomer >= 50) {
//     // g
// } else if (ageCustomer >= 80) {
//     //
// } else {
//     console.log('Parameter not allign to 1 and more', + ageCustomer)
// }

// // && - combine few conditions

// // if (conditionMy >=1 && conditionMy <= 50) {
// //     console.log('hghgh')
// // } else if (conditionMy > 50 && conditionMy < 100) {
// //     console.log('ghghghg 2')
// // } 

// if (ageCustomer > isAdult) {
//     console.log('good')
// } else {
//     console.log('bad')
// }

// const accessByAge = (ageCustomer > isAdult) ? console.log('goodT') :
//     (ageCustomer >= 50) ? console.log('over 50 years, T') : console.log('badT')


// switch (true) {
//     case ageCustomer > isAdult:
//         console.log('goodS')
//         break;
//     case ageCustomer >= 50:
//         console.log('goodS')
//         break;
//     default:
//         // Code that will be executed if none of the values match
//         console.log('badS')
// }

for (let i = 0; i <= 5; ++i) {
    if (i == 3) {
        // continue; // go to next iteration
        break // stop execution
    }
    console.log(i)
}

const carMy = { type: "Ford", model: 'Kuga', wheels: 4, color: `white` }

const carMySecond = {
    type: "Ford",
    model: 'Kuga',
    wheels: 4,
    color: `white`,
    isGasoline: true,
    engineSound: function () { console.log('brbrbr') }
}



console.log(carMySecond.type) //=> Ford
console.log(carMySecond["type"])
carMySecond.engineSound()

let objectProp = carMySecond.type

let someText = "";
for (let value in carMySecond) {
    // someText = carMySecond[value]
    console.log(carMySecond[value])
}

for (let x of carMySecond.color) {
    console.log(x)
}

//while
let count = 0;
while (count <= 5) {
    console.log(count)
    count++
}



// try {
//     do {
//         console.log('Counter from previous loop ' + count)
//     } while (count < 10)
// } catch (error) {
//     console.error('Some issues with do/while loop:', error.message)
// }

try {
   func()
//    console.log(result);
} catch (error) {
    console.error('Some issues: ', error.message);
}
