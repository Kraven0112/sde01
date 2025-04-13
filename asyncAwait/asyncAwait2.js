async function getUserData(){
    return await new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve({userName :"Sushil Chaudhary",country : "Nepal",profession : "software Developer"})
            reject("Error fetching data !!")
        }, 5000);
    })
}

getUserData()
    .then(data => console.log(`My name is ${data["userName"]}. I am from ${data["country"]}. I am a ${data["profession"]}.`))
    .catch (error => console.error(error))