/*
    A promise is an object that represents an eventual completion or failure of asynchronous operation.
    There are different types of promise methods:
    Promise.all() => takes array as an arguments and gives all resolved response if all promises are resolved but gives rejected response if one the promises is rejected.

    Promise.any() => takes array as an arguments and seeks for resolved promise, if it gets promise resolved it responses that promise is resolved. If all promises are rejected it gives aggregated error (means array of rejection and error).

    Promise.race() => takes array as an arguments and gives response either promise is resolved or rejected. It depends on time that how much time promise takes to get resolved or rejected.

    Promise.allSettled() => takes array as an argument and gives response of array of promises status and value either promise is resolved or is rejected.
*/

const promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("promise1 is resolved")
        // reject("promise1 is rejected")
    }, 2000);
})

const promise2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("promise2 is resolved")
        // reject("promise2 is rejected")
    }, 4000);
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("promise3 is resolved")
        reject("promise3 is rejected")
    }, 5000);
})

// Promise.all([promise1,promise2,promise3])
//     .then((data) => {
//         const[res1,res2,res3] = data
//         // console.log(res1)
//         // console.log(res2)
//         // console.log(res3)
//         console.log(data);
//     })
//     .catch(error => console.error(error))



Promise.any([promise1,promise2,promise3])
    .then((data) => {
        console.log(data)
    })
    .catch(error => console.error(error))


// Promise.race([promise1,promise2,promise3])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(error => console.error(error))

    
// Promise.allSettled([promise1,promise2,promise3])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(error => console.error(error))

