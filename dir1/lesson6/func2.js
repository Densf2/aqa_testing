
// // sayHi()
// // // another code
// // // another code
// // // another code

function sayHi () {
    console.log('Hi')
}
// // let sayHi2 = function() {
// //     console.log('Hi')
// // }
// // const sayhi3 = () => { console.log('Hi') }

// // const newSayHi4 = sayhi3
// // const newSayHi5 = sayHi

// // console.log(newSayHi5.name)
// // console.log(newSayHi5.toString())

// // const say = (funcParam) => { console.log(funcParam.name.length) }
// // say(sayHi)
// // newSayHi5()

// // sayHi2()


// const isOdd = (n) => { return n % 2 !== 0; }

// let useAnotherFunction = (callback, num) => {
//     const isNumOdd = callback(num)
//     console.log(`The number ${num} is an odd number: ${isNumOdd}`)
// }

// useAnotherFunction(isOdd, 5)


function fetchData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error));
  }
  
  fetchData('https://jsonplaceholder.typicode.com/todos/1', function(data) {
    console.log(data);
  });


// const carMy = { 
// type: "Ford", model: 'Kuga', wheels: 4, color: `white`, sound: 'beep',
// makeSignal: function() { console.log(`Car make signal ${this.sound}`) }
// }
// carMy.makeSignal()

// const car2 = { type: "Nissan" };

// function showType () { console.log( this.type) }
// carMy.fff = showType
// car2.functionF = showType

// car2.functionF()
// carMy.fff()

// function Person(name) {
//   this.name = name;
//   this.greet = function() {
//     console.log(`Hello, ${this.name}!`);
//   };
// }

// const Jack = new Person('Koala')
// Jack.greet()

// // call
// greet = function() {
//   console.log(`Hello, ${this.name}!`);
// };
// const person22 = { name: 'Koala' }
// greet.call(person22)
// // apply 
// function greet(timesOfDay, weather) {
//   console.log(`Good ${timesOfDay}, ${this.name}! It's ${weather} today.`);
// }

// const person = { name: 'Bob' };
// greet.apply(person22, ['morning', 'sunny']); // Виведе: Good morning, Bob! It's sunny today.
// // bind
// function greet() {
//   console.log(`Hi, I'm ${this.name}`);
// }

// const person33 = { name: 'Charlie' };
// const greetPerson = greet.bind(person33);
// greetPerson(); // Виведе: Hi, I'm Charlie

// // login
// (function() {
//   // function body
//   // open
//   // login name & pass
// })();



// // dashboard tests

// let login = function() {
//     console.log('Hi')
// }




// function master () {
//     // console.log('Hi')
//     let masterValue = 10

//     return function () {
//       // console.log(masterValue)
//       return ++masterValue
//     }
//   // return slave
// }

// let closureFunc = master()
// // closureFunc() // 12
// console.log(closureFunc())
// console.log(closureFunc())



// //recursion
// function factorial(n) {
//   // Базовий випадок: факторіал 0 або 1 = 1
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     // Рекурсивний випадок: факторіал числа n = n * факторіал (n - 1)
//     return n * factorial(n - 1); // 5 4 3 2 1 
//   }
// }

// const factorialRes = factorial(5)
// console.log(factorialRes)


function* GenerateData () {
  yield 1
  yield 2
  yield 3
}

const genearatorUsage = GenerateData()
console.log(genearatorUsage.next())