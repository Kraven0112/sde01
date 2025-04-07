/*
class is a template or blueprint for creating an object.
It is a way to define sets of properties and methods that can be shared by multiple objects.
 */

class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }

    aboutAnimal() {
        return `${this.name} is a animal. It's color is ${this.color}.`
    }


}

let animal1 = new Animal("Cat", "white and black")
console.log(animal1.aboutAnimal());

let animal2 = new Animal("Dog", "gray")
console.log(animal2.aboutAnimal());

let animal3 = new Animal("Goat", "black")
console.log(animal3.aboutAnimal());


class Employee {
    constructor(name,profession,address){
        this.name = name
        this.profession = profession
        this.address = address
    }

    employeeDetail(){
        return `The name of an employee is ${this.name}. He/She is a ${this.profession}. He/She is from ${this.address}. He/She is very creative in our organization.`
    }
}

let emp1 = new Employee("John Doe","Software Developer","America")
console.log(emp1.employeeDetail())

let emp2 = new Employee("Sushil Chaudhary","Software Developer","Nepal")
console.log(emp2.employeeDetail())

let emp3 = new Employee("Adam Smith","Human Resource Manager","Australia")
console.log(emp3.employeeDetail())

