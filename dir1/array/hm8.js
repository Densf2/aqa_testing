// task 1
let student = {}

student.firstName = 'Alice'
student.lastName = 'Stenford'
student.age = '21'
student.course = [ 'Math' , 'History', 'Programming' ]

console.log(student)

//task 2
let book = { 
    title: ' The Witcher ',
    author: ' Andrzej Sapkowski ',
    year: ' 1990 '

}

const { title, author } = book
console.log(title)
console.log(author)

// task 3
const Car1 = {
    brand: 'Car',
    model: 'NewModel',
    year: '1890'
}

const Car2 = {
    brand: 'Ford',
    model: 'Escape',
    owner: 'Some Person'
}

const Car3 = { ...Car1, ...Car2 }
console.log(Car3)
// task 4
const person = {
    firstName: 'Fjjfjf',
    lastName: 'Olkol',
    age: 3400,
}

person.emailAddress = 'blabla@gmail.com'

delete person.age

console.log(person)

// task 5
let users = [
    { name: 'Travis',   
      email: 'Travis.email@gmail.com',
      age: 37
    } , 
    { name: 'David',   
      email: 'David.email@gmail.com',
      age: 44
    } , 
    { name: 'Antony',   
      email: 'Antony.email@gmail.com',
      age: 52
    }

]

for (const { name, email, age } of users) {
    // const { name, email, age } = WebsiteUser
    console.log(`Name of user: ${name}, User email: ${email}, User age: ${age}`)
}


// -------Additional task ---- solution
function isObjectsEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    } for (let key in obj1) { 
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
                if (obj1[key].toLowerCase() !== obj2[key].toLowerCase()) { return false; } 
            }
                else if (obj1[key] !== obj2[key]) { return false; } }
                else { return false; } }
    return true;
}

// objects for comparing
const obj1 = { name: "john", age: 30, city: "new york" };
const obj2 = { name: "John", age: 30, city: "New York" };

console.log(isObjectsEqual(obj1, obj2))

// solution getting from student
function isObjectsEqual2(obj1, obj2) {
    const keysFromObj1 = Object.keys(obj1);
    const keysFromObj2 = Object.keys(obj2);
  
    for (const key of keysFromObj1) {
      //Перевірка на однаковість значенб ключів
      if (typeof obj1[key] === "string" && typeof obj2[key] === "string") {
        if (obj1[key].toLowerCase() !== obj2[key].toLowerCase()) {
          return false;
        }
      }
    }
    return true;
  }
  const obj111 = { name: "john", age: 30, city: "new york" };
  const obj222 = { name: "John", age: 30, city: "New York" };
  const obj3 = { name: "Jane", age: 25, city: "Paris" };
  
  console.log(isObjectsEqual2(obj111, obj222));
  console.log(isObjectsEqual2(obj111, obj3));
  // end of solution getting from student