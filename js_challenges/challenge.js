// Print numbers from 1 to 10
for(let i = 0; i <= 10; i++){
    // console.log(`Iteration -${i}`)
}

// print odd numbers less than 100
let allOddNum = []
for(let i = 1; i <= 100; i++){
    if(i % 2 != 0){
        allOddNum.push(i)
    }
}
// console.log(allOddNum)

// Print multiplication table of 7
for(let i = 0; i <= 10; i++){
    // console.log(`7 * ${i} = ${7 * i}`)
}

// print multiplication table from 1 to 100

for(let i = 1; i <=100; i++){
    for(let j = 1; j <= 10; j++){
        // console.log(`${i} * ${j} = ${i*j}`)
    }
    // console.log()
}


// calculate the sum of numbers from 1 to 10
let sum = 0
for(let i = 1; i <= 10; i++){
    sum = sum + i
}
// console.log(`Total sum from 1 to 10 is ${sum}`)


// calculate 10! means of fibonacci of 10

let total = 1

for (let i = 1; i < 10; i++) {
    total = total * i
}

// console.log(total)


// Calculate the sum of even number greater than 10 and less than 30

let totalSum = 0
for (let i = 10; i < 30; i++) {
    if(i % 2 === 0)
    totalSum = totalSum + i
}

// console.log(`Total sum of number greater than 10 and less than 30 is ${totalSum}`);




// Largest number and smallest number from array element
let numbers = [12,13,14,15,16.90,700,199,133]
// console.log(Math.max(...numbers))
// console.log(Math.min(...numbers))




// calculate the sum of numbers in an array of numbers
let oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21,
    23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43,
    45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65,
    67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87,
    89, 91, 93, 95, 97, 99]

let mySum = oddNum.reduce((acc,current) => acc + current , 0)
console.log(mySum)