function task1 (number, CallBackEven, CallBackOdd) {
    if (number % 2 ===0) {
        CallBackEven()
    } else {
        CallBackOdd() }
}
function isEven () {
    console.log("Number type is even")
}
function isOdd () {
    console.log("Number type is odd")
}

task1(10, isEven, isOdd)
// task 1 another variant
let useAnotherFunction = (callback, num) => {
    const isNumOdd = callback(num)
    console.log(`The number ${num} is an odd number: ${isNumOdd}`)
}

/* function whatIsNum (num) {
if (num %2 == 0) {
  return true
} else {
  return false
}
} */

const isOdd = (n) => { return n % 2 !== 0; }

useAnotherFunction(isOdd, 4)



function even () {
    console.log ('number is even');
};

function odd () {
    console.log ('number is odd');
}

function handleNum (n, even, odd) {
    n % 2 == 0 ? even() : odd();
};

handleNum(7, even, odd); 

// ------------------------------------------------

function task2 (numParam) {
    console.log (numParam)

    if (task2 > 0) {
        task2 (numParam-1)
    }     
}


task2(8)




// additional task 1
function makeCounter () {
    let n = 3;
    function someres () {
        n +=5;
    };
    return n
};
let counter =  makeCounter();

console.log(counter());



function divide(numerator, denominator) {
    if (denominator == 0 || typeof numerator !== "number" || typeof denominator !== "number") {
        // throw new Error("Value is 0 or not a number");
        numerator = Number(numerator)
        return numerator / denominator;
    } else {
        return numerator / denominator;
    };
};

try {
    divide(10, 2)
} catch (error) {
    console.error(error.message);
};


function divide (numerator, denominator) {
    try {
    if (typeof denominator !== 'number' || typeof numerator !== 'number') {
        throw new Error("The value is not a number")
    }
    if (denominator === 0 ) {
        throw new Error("Sorry denominator = 0")
    }
    return numerator / denominator
    }
    catch (error) {
        console.log ("Error:", error.message)
        return null
    } 
    finally{
        console.log (`Робота завершена`)
    }
}