let users = new Array("Sushil","Bipin","Dinesh","Punam","Deepak","Saliram","Mohan Singh Bohara")

let reverseString = users.map((el,i)=>el.split("").reverse().join(""))

let longestString = users.reduce((acc,curr)=>curr.length > acc.length ? acc = curr : acc ,"")

Array.prototype.capitalize = function () {
    return this.map(function(el){
        return el.toLocaleUpperCase()
    })
}

Array.prototype.toSmall = function () {
    return this.map(function (el) {
        return el.toLocaleLowerCase()
    })
}


for (const user of users) {
    function checkWho(){
        let result ={
            "Sushil" : "He is a software Developer",
            "Saliram" : "He is a software Engineer",
            "Dinesh" : "He is a Data Scientist",
            default  : "He/She is a pilot."
        }
        // console.log(result[user] || result.default);
    }
    checkWho(user)
}


// function that takes two or more arrays as an arguments and merge them in single array

function mergeArray(...arguments){
    return arguments.reduce((acc,curr) => acc.concat(curr),[])
}

let afterMerging = mergeArray([1,2,3,4,5],[6,7,8,9,20],[11,12,13,14,15])
// console.log(afterMerging);
