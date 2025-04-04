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
// console.log(totalResult)


const longestWord = (array)=>{
    return array.reduce((acc,current) => acc.length > current.length ? acc : current, "")
}

let longestNameOfFruits = ["apple", "banana", "pie", "pineapple", "apricots"]

console.log(longestWord(longestNameOfFruits))

// function to convert fahrenheit to celsius 

function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9
}

// function to convert celsius to fahrenheit 
function celsiusTofahrenheit(celsius){
    return (celsius * 9 / 5) + 32
}

let celsius = `${fahrenheitToCelsius(98.6)}° C `
let fahrenheit = `${celsiusTofahrenheit(37)} ° F`

// console.log(`Temperature in celsius : ${celsius} `)
// console.log(`Temperature in fahrenheit : ${fahrenheit} `)