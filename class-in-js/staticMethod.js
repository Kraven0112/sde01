/*
static method, objects and variables can be accessed by class only. Accessing static method through class is a best practice in programming
*/

class Animal{
    static walk(){
        return `Animal can walk and run.`
    }
}

class Dog extends Animal{
    static sound(){
        return `Dog is barking....`
    }
}
console.log(Dog.walk());
console.log(Dog.sound());