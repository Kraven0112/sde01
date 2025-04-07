/*
Inheritance is mechanism that allows one class to inherit properties and methods from another class.
*/

class Car {
    constructor(name,make){
        this.name = name
        this.make = make
    }

    aboutCar(){
        return `A name of car is ${this.name}. It is made by ${this.make}. It is an amazing car.`
    }

    start(){
        return `${this.name} car is ready to drive.`
    }

    drive(){
        return `It is very cool and easy to drive ${this.name} car.`
    }
}

class Toyota extends Car{
    looksOfCar(){
        return `A look of ${this.name} car is amazing. And color is also very fantastic.`
    }
}

let toyota = new Toyota("Corolla","Toyota")
// console.log(toyota.aboutCar());
// console.log(toyota.looksOfCar());
// console.log(toyota.start());
// console.log(toyota.drive());


class Mahendra extends Toyota {
    aboutMahendra(){
        return`The car made by Mahendra company is very strong`
    }
}

let car1 = new Mahendra("Thar","Mahendra")
console.log(car1.aboutCar());
console.log(car1.start());
console.log(car1.drive());
console.log(car1.aboutMahendra());
console.log(car1.looksOfCar());