// prototypical inheritance is a mechanism that allows an object to inherit properties and methods from another objects

let user1 = {
    userName : "Sushil",
    greet(){
        console.log(`Hello, I am Sushil here.`)
    },
    start(){
        console.log(`Let's start coding.`);
    }
}

let user2 = Object.create(user1)

user2.about = function () {
    console.log(`I am software Developer.`)
}

user2.greet()
user2.about()
user2.start()
