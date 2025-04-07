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

// console.log(longestWord(longestNameOfFruits))

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


// function that return largest number from an array of number

function getMaxNumber(array){
    let max = array[0]
    array.map((el,i) => el > max ? max = el : max)
    return max
}
let maxNum = getMaxNumber([12,122,13,114,190,2000000,180,199,200,1000,12000])


// function that return smallest number from an array of number
function getMinNumber(array){
    let min = array[0]
    array.map((el,i)=> el < min ? min = el : min)
    return min
}
let minNum = getMinNumber([12, 122, 13, 114, 190, 2000000, 180, 199, 200, 1000, 12000])


// function that return an array of only positive number from an array of number
function getPositiveNum(array){
    return array.filter((el,i) => el > 0)
}
let positiveNum = getPositiveNum([-10,-11,12,11,-13,14,19])


// function that take an number as an argument and return boolean if the number is prime
function isPrime(number) {
    let count = 0
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            count++
        }
    }
    return count === 2 ? true : false
}
let resultPrimeOrNot = isPrime(2)


// function that takes two arrays as an arguments and returns an array with elements in the first array but not in the second array
function getElementInFirstArrayNotInSecondArray(arr1,arr2){
    return arr1.filter((el,i) => !arr2.includes(el))
}
let getElement = getElementInFirstArrayNotInSecondArray([1,2,3,4,5,6,7,8],[1,3,5,7,9])


// function that rotates array to left 1 position
function rotateLeftArrayElement(array){
    if(array.length === 0){
        return array
    }
    
    // removing first element
    const firstElement = array.shift()

    // adding firstElement in the last of an array
    array.push(firstElement)

    return array
}
let afterRotatingToLeft = rotateLeftArrayElement([1,2,3,4,5])



// function that rotates an array to right 1 position
function rotateRightArrayElement(array){
    if(array.length === 0){
        return array
    }
    
    // removing last element of an array
    const lastElement = array.pop()
    
    // adding lastElement in the first of an array
    array.unshift(lastElement)
    
    return array
}
let afterRotatingToRight = rotateRightArrayElement([1,2,3,4,5])


// function that return reversed array
function reverseArray(array){
    return array.reverse()
}

let reversedArray = reverseArray([1,2,3,4,5])


// function that returns reversed string
function reverseString(string){
    return string.split("").reverse().join("")
}
let reversedString = reverseString("Sushil")


// function that takes two array as an argument and merge it then return new array
// spread operator (...) is most powerful that is used to merge arrays
// concat() method is also used to merge an array
function mergeArray(arr1,arr2){
    return [...arr1,...arr2]
}
let afterMerged = mergeArray([1,2,3,4,5],[6,7,8,9,10])


// function that takes (n) numbers of an arrays and merge all then return new array
function getMerge(...arguments){
    return arguments.reduce((acc,curr) => acc.concat(curr),[])
}
console.log(getMerge([1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]))