/*
Polymorphism is a mechanism that allows object, functions or variables to take multiple form to perform different operations.
 */

// Compile-time polymorphism - this happen when method overloading in class
// Runtime-polymorphism - this happen when method overriding in class and subclass

class Cat {
    sound(){
        return `Cat makes meow sound.`
    }
}

class Dog extends Cat{
    sound(){
        return `Dog is barking......`
    }
}

let cat = new Cat()
console.log(cat.sound());

let dog = new Dog()
console.log(dog.sound());