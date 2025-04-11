/*
    A promise is an object that represents an eventual completion or failure of asynchronous operation.
*/

const promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("promise1 is resolved")
    }, 6000);
})

const promise2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("promise2 is resolved")
    }, 4000);
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(() => {
        reject("promise3 is resolved")
    }, 5000);
})

// Promise.all([promise1,promise2,promise3])
//     .then((data) => {
//         const[res1,res2,res3] = data
//         console.log(res1)
//         console.log(res2)
//         console.log(res3)
//     })
//     .catch(error => console.error(error))



// Promise.any([promise1,promise2,promise3])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(error => console.error(error))


// Promise.race([promise1,promise2,promise3])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(error => console.error(error))

    
Promise.allSettled([promise1,promise2,promise3])
    .then((data) => {
        console.log(data)
    })
    .catch(error => console.error(error))

