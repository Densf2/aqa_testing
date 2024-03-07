

//homework 10
// https://github.com/LenaTester/aqa-advanced/pull/12/files

//interesting solution
// https://github.com/Pon20995/aqa-advanced/pull/11/files#diff-7c7977f5100839b8c6ef17bf2463184ca5eb6a3eb14b1b251e0815babb3546d9

function task1(text, timeout) {
    setTimeout(function() {
      console.log(text)}, timeout)
  }

task1('Hello, Java Script!', 5000); 

function todo1(url) {
    const fetchPromise1 = fetch(url)
    fetchPromise1
    .then(response=> response.json())
    .then(data => console.log(data))
    .catch(error => console.error(`Could not get todo: ${error}`))
    }

todo1("https://jsonplaceholder.typicode.com/todos/1")

function user2(url) {
    const fetchPromise2 = fetch(url)
    fetchPromise2
    .then(response=> response.json())
    .then(data => console.log(data))
    .catch(error => console.error(`Could not get user: ${error}`))
    }

user2("https://jsonplaceholder.typicode.com/users/1")

function promiseArray(callback1, callback2) {
    Promise.all([callback1("https://jsonplaceholder.typicode.com/todos/1"), 
    callback2("https://jsonplaceholder.typicode.com/users/1")]).then(values => console.log(values))

}

promiseArray(todo1, user2)

// task3
async function asyncTodo(url) {
    try {
        const get_response = await fetch(url)
        const response_data = await get_response.json()
        console.log(response_data)
    } catch (error) {console.error(error)}
}

asyncTodo("https://jsonplaceholder.typicode.com/todos/1")

async function asyncUser(url) {
    try {
        const get_response = await fetch(url)
        const response_data = await get_response.json()
        console.log(response_data)
    } catch (error) {console.error(error)}
}
asyncUser("https://jsonplaceholder.typicode.com/users/1")

// additional task
class getToDo {
    constructor (url) {
        this.url = url 
    }

    async initialize() {
        try {
            const get_response = await fetch(this.url)
            const response_data = await get_response.json()
            return console.log(response_data)
        } catch (error) {console.error(`Could not get todo: ${error}`)}
    }
}

class getUser {
    constructor (url) {
        this.url = url 
    }

    async initialize() {
        try {
            const get_response = await fetch(this.url)
            const response_data = await get_response.json()
            return console.log(response_data)
        } catch (error) {console.error(`Could not get todo: ${error}`)}
    }
}

const firstToDo = new getToDo("https://jsonplaceholder.typicode.com/todos/1")
firstToDo.initialize()
const firstUser = new getUser("https://jsonplaceholder.typicode.com/users/1")
firstUser.initialize() 

//aditional task 2
function checkNumber(num) {

    let myPromise = new Promise(function(resolve, reject) {
        if (num <= 10) {resolve("Success")}
        else {reject(new Error('Failure'))}
    })

    myPromise.then(
        result => console.log(result),
        error => console.error(error.message)
    )

  }

checkNumber(3)
checkNumber(12) 