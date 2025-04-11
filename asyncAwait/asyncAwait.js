// async await are used to handle asynchronous operations

// example 1
function fetchData () {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve({name:"Sushil Chaudhary",country:"Nepal",profession:"software Developer",workStation:"PhinTech Solution Pvt Ltd"})
        }, 2000);
    })
}

async function getData(){
    try {
        console.log("Fetching data......");
        const data = await fetchData()
        console.log(data);
        console.log("fetched successfully");
    } catch (error) {
        console.error("Error in data fetching :" +error)
    }
}
// getData()


// example 2

function fetUserData(){
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            resolve("user data fetched successfully")
        }, 3000);
    })
}

async function getUserData(){
    try {
        const data = await fetUserData()
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

getUserData()