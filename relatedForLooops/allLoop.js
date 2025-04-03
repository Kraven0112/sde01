let allUsers = [
    {
        userName: "Sushil Chaudhary",
        country: "Nepal",
        education: "Bachelore of Information Management",
        profession: "software engineer"
    },
    {
        userName: "Raman Kumar",
        country: "India",
        education: "Bachelore of Technology",
        profession: "customer representative"
    },
    {
        userName: "Milan Chaudhary",
        country: "Nepal",
        education: "Bachelore in Hotel Managemnet",
        profession: "chef"
    },
    {
        userName: "Subhash Shekhar",
        country: "India",
        education: "Bachelore of Business Administration",
        profession: "business Analyst"
    },
    {
        userName: "John",
        country: "Germany",
        education: "Bachelore of Information Managemnet",
        profession: "software engineer"
    },
    {
        userName: "Deepesh Gupta",
        country: "India",
        education: "Bachelore of Technology",
        profession: "software engineer"
    },
]

let allSoftwareEngineer = []

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].profession === "software engineer") {
        allSoftwareEngineer.push(allUsers[i])
    }
}
// console.table(allSoftwareEngineer);



// Challenge - skip the user if he/she is business analyst and rest users should be stored in restUsers array using for of loop

let restUsers = []

for (const user of allUsers) {
    if (user.profession === "business analyst") {
        continue;
    }
    restUsers.push(user)
}
// console.table(restUsers)



//  Challenge - use forEach loop to iterate over allUsers array and add all the education level in new array.

let educationLevel = []

allUsers.forEach(function (user) {

    educationLevel.push(user.education.toLocaleUpperCase())
});
// console.table(educationLevel)



// Challenge - use for of loop and get all the userName in uppercase  and store in new array "allCapitalized"

let allCapitalized = []

for (const user of allUsers) {
    allCapitalized.push(user.userName.toLocaleUpperCase())
}

console.table(allCapitalized)


//  We cannot use break and continue directly in callback function in forEach, map  and filter method in javascript.