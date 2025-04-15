/*
Async-Await and Promise.all
Task 1: Async-Await with Promise.all

Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData()



Task 2: Error Handling in Async/Await with Promise.all

Write two functions fetchSuccess() and fetchFailure(), where fetchSuccess() returns a promise that resolves successfully after 1 second, and fetchFailure() returns a promise that rejects with an error after 1 second.

Create a function handlePromises() that calls both functions using Promise.all and handles success and failure cases.



Task 3: Timeout with Async/Await and Promise.race

Create a function fetchWithTimeout(promise, timeout) that takes a promise and a timeout value in milliseconds. Use Promise.race() to return the result of the promise if it resolves within the timeout, otherwise return "Timeout exceeded".
*/


// Task 1

function fetchUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("user data fetched successfully.")
        }, 1000);
    })
}

function fetchPosts() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("post data fetched successfully.")
        }, 1000);
    })
}

async function fetchAllData() {
    const [posts, user] = await Promise.all([fetchPosts(), fetchUser()])
    console.log(posts)
    console.log(user)
}

// fetchAllData()


// Task 2

function fetchSuccess() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("data fetched successfully.")
        }, 1000);
    })
}

function fetchFailure() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject("Error, failed to fetch data")
        }, 1000);
    })
}


async function handlePromises() {
    try {
        const [success, failure] = await Promise.all([fetchSuccess(), fetchFailure()])
        console.log(success);
    } catch (error) {
        console.log(error);
    }
}

// handlePromises()

async function fetchWithTimeout(promise, timeout) {
    let lastTime = 0
    let now = Date.now()

    if (now - lastTime < timeout) {
        return "Time exceeded"
    } else {
        lastTime = now
        return await Promise.race([promise])
    }
}

let promise = new Promise(function (resolve, reject) {
    resolve("promise resolved successfully.")
})
fetchWithTimeout(promise, 1000)
    .then(data => console.log(data))
    .catch(error => console.error(error))