/*
bind(), call() and apply method are used to control the value of this within a function

Method	 Invocation	 Arguments Format	    Use Case
call	 Immediate	 Individual values	    Borrow methods or invoke functions with custom context
apply	 Immediate	 Array format	        Pass arrays as arguments for functions
bind	 Deferred	 Individual values	    Create reusable functions with specific contexts
*/


let user = {
    userName : "Sushil",
    about(){
        // console.log(`Username is ${this.userName}`)
    }
}

let boundFunction = user.about
boundFunction() // output : Username is undefined because we are copying user.about method without original context.

let bound2 = user.about.bind({userName :"Ram"}) 
bound2() // here we are copying but changing the context so the output is Username is Ram

let bound3 = user.about.bind(user)
bound3() // here we are copying with original context


function greet(position,profession){
    // console.log(`${this.name} is a employee's name. Position is ${position}. Profession is ${profession}.`)
}

// using call() method
greet.call({name:"Sushil Chaudhary"},"Senior","Software Engineer")
greet.call({name:"Ram Saini"},"Senior","Software Developer")


// using apply() method
greet.apply({name:"Mohan"},["Assistant","UI/UX Developer"])
greet.apply({name:"Nimrat Khair"},["Senior","UI/UX Developer"])



let computer = {
    name : "Dell",
    about(configuration,price){
        // console.log(`Name of laptop is ${this.name}. It's price is ${price}. Configuration : ${configuration}`)
    }
}

// using call() method
computer.about.call({name :"Lenovo"},"Ryzen 3 Ryzen",45000)
computer.about.call({name:"Dell"},"i5 intelCore",45000)

// using apply() method
computer.about.apply({name:"Asus"},["i3 intelCore",55000])
computer.about.apply({name:"Dell"},["i7 intelCore",65000])

// using bind() method
let binding = computer.about.bind({name:"Ryzen Book"})
binding("i7 intelCore", 80000)
binding("Ryzen 7",85000)



const object = {
    0 : "a",
    1 : "b",
    2 : "c",
    length : 3
}

let result1 = Array.prototype.map.call(object,(el) => el.toLocaleUpperCase())
let result2 = Array.prototype.map.apply(object,[(el) => el.toLocaleUpperCase()])
console.log(result1);
console.log(result2);