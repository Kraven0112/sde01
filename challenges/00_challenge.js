//  challenge - 1
let teaFlavors = ["Green tea","Black tea","Oolong tea"]

let firstTea = teaFlavors[0]

// console.log(firstTea)


// challenge - 1
let cities = ["Paris","London","Tokyo","NewYork"]
let favoriteCity = cities[3]
// console.log(favoriteCity)


// challenge - 3
let teaTypes = ["herbal tea","masala chai","white tea"]

teaTypes[2] = "Jasmine tea"

// challenge - 4
let citiesVisited = ["Mumbai","Sydney"]
citiesVisited.push("Berlin")

// challenge - 5  => joining two arrays in one
let oddNum = [1,3,5,7,9]
let evenNum = [2,4,6,8,10]

const megaArray1 = [...oddNum,...evenNum]
const megaArray2 = oddNum.concat(evenNum)


let worldCities = ["Dubai","Paris","London","Rome"]

// includes() method in array in javascript
let isCityThere = worldCities.includes("Dubai")
console.log(isCityThere)

// push() method in array in javascWe
// We can add multiple elements at the end of the array by using push method in javascript
worldCities.push("Kathmandu","San Francisco")

// unshift() method is used to add element at the first of the array
// We can add multiple elements in the first position of array in javascript
worldCities.unshift("Tokyo","Mumbai")

// pop() method used to remove element end of the array
worldCities.pop()

// shift() method used to remove element from the first position of the array
worldCities.shift()

console.log(worldCities)