/*
Prototypical Inheritance is a mechanism that allows an object to inherits properties and methods from another object.
*/

function Employee (name,profession) {
    if(!new.target){
        throw new Error("Constructor function must be invoked using new keyword.")
    }
    this.name = name
    this.profession = profession
}

Employee.prototype.about = function () {
    console.log(`Name of employee is ${this.name}. He/She is a ${this.profession}.`)
}

let emp1 = new Employee("Sushil Chaudhary", "Assistant Backend Developer")
emp1.about()