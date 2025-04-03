let allTea = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTea = []

for (let j = 0; j < allTea.length; j++) {
    if(allTea[j] === "chai"){
        break
    }
    selectedTea.push(allTea[j])
}


let cities = ["London","NewYork","Paris","Berlin"]
let visitedCities = []
for(let i = 0; i < cities.length; i++){
    if(cities[i] === "Paris" || cities[i] === "paris"){
        continue
    }
    visitedCities.push(cities[i])
}
// console.log(visitedCities)

// challenge
let numbers = [2,5,7,9]
let doubledNumbers = []

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 7){
        continue
    }
    doubledNumbers.push(numbers[i] * 2) 
}
// console.log(doubledNumbers);


// challenge
let myTea = ["chai","green tea","black tea","jasmine tea","herbal tea"]

let shortTeas = []

for (const tea of myTea) {
    if(tea.length > 10){
        break
    }
    shortTeas.push(tea)
}

console.log(shortTeas)