// procedural programming

function calculateSum (a, b) {
    return a + b
}

const resultOfSum = calculateSum(5, 5)
console.log(resultOfSum)

// functional programming
const calculateSum2 = (a, b) => a + b
console.log(calculateSum2(5, 3))

const triple = (arr) => arr.map(num => num * 3)

const filterEven = (arr) => arr.filter(num => num %2 ==0)

const calculateSum3 = (arr) => arr.reduce((acc, num) => acc + num, 0)

const numbers = [1, 2, 3, 4, 5]
// const resultOfTriple = triple(numbers)
// console.log(filterEven(numbers))

console.log(calculateSum3(filterEven(triple(numbers))))


// OOP

class MyClass {
    constructor() {}
    method() {}
    method1() {}
}

class User {
    #timeout = 3000
    static country = 'ua'
    constructor(name, age, url) {
        this.name = name
        this.age = age
        this._url = url
    }
    sayHi() {
        console.log(this.name)
    }
    sendRequest() {
        console.log('request was send')
    }
    get showUrl() {
        return this._url
    }
    set showUrl(value) {
        if(value.length <= 10) {
            console.log('url not approved')
            return
        }
        this._url = value
    }
    #addTimeout() {
        this.#timeout++
    }
    getTimeout() {
        return this.#timeout
    }
    static walk(number) {
        return number + 1
    }
}

let myUser = new User('Denys')
myUser.sayHi()
myUser.age = 2024
myUser._url = '234234'
console.log('Timeout is: ' + myUser.getTimeout())

console.log(User.walk(50))
console.log(User.country)

// myUser.#addTimeout()
// myUser.#timeout = 10000
// console.log(typeof myUser)

class ApiController extends User {

    sendPostRequest() {
        console.log(`${this.age}, sksdkfjskdf`)
    }
    sendRequest() {
        super.sendRequest('httpdgdflgkldfkgld')

        console.log('The field with http param correct')
    }
}

const newApiCall = new ApiController('axios-child', 3000, 'my-url')
newApiCall.sendPostRequest()

const objectBasedOnUser = new User('axios-child', 3000, 'my-urlsdfksjfksd')
newApiCall.showUrl = 'my'
console.log(newApiCall.showUrl)


class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  
    drive() {
      console.log(`${this.make} ${this.model} is driving.`);
    }
  }


  