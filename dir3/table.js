import readline from "readline";
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//while loop
input.question("Будь ласка, введіть число від 1 до 10: ", (number) => {
  if (number > 0 && number <= 10) {
    if (Number.isInteger(parseFloat(number))) {
      let i = 1;
      while (i <= 10) {
        let result = number * i;
        console.log(number + " " + "x " + i + " = " + result);
        i++;
      }
    } else {
      console.log("Введене число не ціле.");
    }
  } else {
    console.log("Число має бути від 1 до 10, спробуйте знову.");
  }
  input.close();
});


// import readline from "readline";
// const input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// //for loop
// input.question("Будь ласка, введіть число від 1 до 10: ", (number) => {
//   if (number > 0 && number <= 10) {
//     if (Number.isInteger(parseFloat(number))) {
//       for (let i = 1; i <= 10; i++) {
//         let result = number * i;
//         console.log(number + " x " + i + " = " + result);
//       }
//     } else {
//       console.log("Введене число не ціле.");
//     }
//   } else {
//     console.log("Число має бути від 1 до 10, спробуйте знову.");
//   }
//   input.close();
// });
 




let Mynumber = 2

for (let counter = 1; counter <= 10; counter++) {
    console.log(Mynumber + " x " + counter + " = " + (Mynumber * counter))
}

// let counter = 1
while (counter <=10) {
    console.log(Mynumber + " x " + counter + " = " + (Mynumber * counter))
    counter++;
}