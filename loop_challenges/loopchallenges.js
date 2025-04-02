// First challenge get the sum of all the numbers from 1 t 5 using while loop in javascript

let sum = 0
let i = 1
while (i <= 5) {
    sum = sum + i
    i++
}


// Second challenge write js code using while loop to show count down 5 to 1 and stores all the numbers in variable named countdown
let ii = 5
let countdown = []

while (ii >= 1) {
    countdown.push(ii)
    ii--
}

// Third challenge  use prompt to take name of favorite tea and push it in the tealist if stop written in prompt then need to stop the operation.

// let favoriteTea = []
// let teaName

// do {
//     teaName = prompt(`write favoritetea name (write stop if you don't want to write further)`)
//     if(teaName !== "stop"){
//         favoriteTea.push(teaName)
//     }
// } while (teaName !== "stop");


// Write for loop to manipulate array and multiply array element by 2 and add each element in new array

let allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = []

for (let index = 0; index < allNum.length; index++) {
    newArray.push(allNum[index] * 2)
}
// console.log(newArray);

// Challenge
let allTea = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTea = []

for (let j = 0; j < allTea.length; j++) {
    if (allTea[j] === "chai") {
        return;
    }
    selectedTea.push(allTea[j])
}
