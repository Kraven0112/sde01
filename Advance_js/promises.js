/*
A promise is an object that represents eventual completion or failure of asynchronous operation.
There are three state of promises:
    pending
    fulfilled
    rejected
*/

function fetchData(){
    return new Promise(function (resolve,reject){
        let success = false
        setTimeout(() => {
            if (success) {
                resolve("data fetched successfully.")
            } else {
                reject("Error data fetching")
            }
        }, 2000);
    })
}

fetchData()
    .then((response) => console.log(response)).
    catch((error) => console.error(error))
