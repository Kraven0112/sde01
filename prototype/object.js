/*
What is prototype ?
=> Prototype means extra given properties and methods of any given data type.clear
*/

let user1 = {
    userName: "Sushil Chaudhary",
    profession: "Software Developer",
    salary: "20 LPA",
    about() {
        return `Employee name is ${this.userName}. He is a ${this.profession}. His salary is ${this.salary}`
    }
}

let user2 = {}

user2.__proto__ = user1

// console.log(user2.about());


Object.prototype.takeIt = function () {
    return this
}

let object = {
    user: "Sushil",
    profession : "software developer"
}


Array.prototype.positiveNum = function () {
    return this.filter((el,i) => el > 0)
}
let array = [1,2,3,-12,-1,-2,-3,4,5,-6,-7]
let allPositiveNum = array.positiveNum()

Array.prototype.maxNum = function () {
    return this.reduce((acc,curr)=> acc < curr ? acc = curr : acc ,0)
}

Array.prototype.minNum = function () {
    return this.reduce((acc,curr) => acc > curr ? acc = curr : acc ,0)
}

Object.setPrototypeOf(object, takeIt)
