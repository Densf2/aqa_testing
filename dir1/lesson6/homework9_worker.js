class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error("it is abstract class");
        }
    }
    eat() {
        console.log("eating");
    }
    listen() {
        console.log("listening");
    }
}

class Worker extends Human {
    constructor(name, salary, workTime) {
        super();
        this.name = name;
        this.salary = salary;
        this.workTme = workTime;
    }
    greeting() {
        console.log(`hello, my name is ${this.name}`);
    }
    salaryInfo() {
        console.log(`my current salary is ${this.salary}`);
    }
    finishWork() {
        console.log("by, working day is over");
    }
    isWorkingNow() {
        const now = new Date();
        const hours = now.getHours();
        if (hours > 9 && hours < 18) {
            console.log("Working hours, open for request");
        } else {
            console.log("outside working hours");
        }
    }
}

let worker_1 = new Worker("worker1", 1000, 8);
worker_1.greeting();
worker_1.salaryInfo();
worker_1.finishWork();



let employee_1 = new Worker();
employee_1.isWorkingNow();