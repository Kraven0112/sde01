let user1 = {
    userName: "Sushil Chaudhary",
    profession: "Software Developer",
    country: "Nepal",
    workStation: "PhinTech Software Solution Pvt Ltd"
}

let user2 = {
    userName: "Sushil Chaudhary",
    profession: "Software Developer",
    country: "Nepal",
    workStation: "PhinTech Software Solution Pvt Ltd"
}

/*
Object.freeze(object) => avoid addition, deletion and modification of properties.
Object.seal(object) => avoid deletion and addition but apply modification of existed properties in an object.
Object.keys(object) and Object.values(object) return array of values and keys
*/

Object.freeze(user1)
user1.userName = "Sushil Bhai" // modification
user1.motherTongue = "Nepali"  // add new property
delete user1.workStation  // delete existed property


Object.seal(user2)
user2.userName = "Sush" //modification
user2.motherTongue = "Nepali" //add new property
delete user2.profession // delete existed property


for (const key in user1) {
    // console.log(user1[key])
}

let keys = Object.keys(user1)
// console.log(keys);

let values = Object.values(user1)
// console.log(values);

Object.prototype.getValues = function(){
    return Object.values(this)
}


Object.prototype.getKeys = function () {
    return Object.keys(this)
}

