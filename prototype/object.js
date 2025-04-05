/*
What is prototype ?
=> Prototype means extra given property and method of any data types.
*/
let user1 = {
    userName : "Sushil Chaudhary",
    profession : "Software Developer",
    salary : "20 LPA",
    about(){
        return `Employee name is ${this.userName}. He is a ${this.profession}. His salary is ${this.salary}`
    }
}

let user2 = {}

user2.__proto__ = user1

console.log(user2.about());