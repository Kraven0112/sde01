/*
Constructor function is a type of function that is used to create and initialize object.
It is typically invoked using new keyword,which ensures that new object is created and initialized
Importance of constructor function:
1. Simplify object creation
2. Enables reusability
3. Supports dynamic initialization
4. Compatibility with ES6 class 
*/

function Cat(name,species){
    if(!new.target){
        throw new Error("Cat must be called with new keyword")
    }
    this.name = name
    this.species = species
}

let cat1 = new Cat("kitty","brazilian")
// console.log(cat1);


function Car(make,model){
    if(!new.target){
        throw new Error("Car must be called using new keyword to ensure that new object is created and initialized.")
    }

    this.make = make
    this.model = model

    this.describe = function () {
        return `Car name is ${this.model} and this is made by ${this.make} company.`
    }
}

let car1 = new Car("Tata","Thar")
let car2 = new Car("Mahendra","Thar")
// console.log(car2.describe());


function Person(name,profession){
    if(!new.target){
        throw new Error("Person must be called using new keyword to ensure that an object is created and initialized.")
    }
    this.name = name
    this.profession = profession
    this.aboutPerson = function (){
        return `The person name is ${this.name}. He is a ${this.profession}`
    }
}

let person1 = new Person("Sushil Chaudhary","Software Developer")
let person2 = new Person("Dinesh Chaudhary","Software Engineer")
let person3 = new Person("Saliram Chaudhary","Software Engineer")

console.log(person1);
console.log(person3.aboutPerson());