// simple function in javascript
function greet(param){
    return `Hello welcome Mr. ${param}`
}
let message = greet("Sushil Chaudhary")

// console.log(message);


/*
Higher order function in javascript
Higher order function is a technique in js where function can take one or more functions as an arguments and return function.
*/
function parent(paramFun){
    return paramFun(122,122)
}

function sumNum(num1,num2){
    return num1 + num2
}

let result = parent(sumNum)
// console.log(result)


/*
closure in javascript
closure is a combination of functions bundled together in the reference of their lexical scope .
It defines a function can access to its outer scope
*/
function parent(num1){
    return function(num2){
        return function(num3,num4){
            return num1+num2+num3+num4
        }
    }
}

let totalResult = parent(4)(5)(10,10)
console.log(totalResult)