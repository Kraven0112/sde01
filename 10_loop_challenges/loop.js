let allTea = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTea = []

for (let j = 0; j < allTea.length; j++) {
    if (allTea[j] !== "chai") {
        selectedTea.push(allTea[j])
    }
}



let cities = ["London","NewYork","Paris","Berlin"]
let visitedCities = []
 for(let i = 0; i < cities.length; i++){
    if(cities[i] !== "Paris"){
        visitedCities.push(cities[i])
    }
 }

 console.log(visitedCities);