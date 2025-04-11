// challenge 1

document.getElementById('changeText').addEventListener('click', function () {
    document.getElementById('mytext').textContent = "I am a Software Developer as well as Programmer."
})

// challenge 2

document.getElementById('changeColor').addEventListener('click', function () {
    document.getElementById('color').style.color = "#f53a2e"
})

// challenge 3

document.getElementById('addNewElement').addEventListener('click', function () {
    let listItem = document.createElement('li')
    listItem.textContent = "Basketball"
    document.getElementById('unorderList').appendChild(listItem)
})

// challenge 4

document.getElementById('removeElement').addEventListener('click', function () {
    document.getElementById('list').lastElementChild.remove()
})

// challenge 5

document.getElementById('capitalLetter').addEventListener('click', function () {
    let afterCapitalize = document.getElementById('about').textContent.toLocaleUpperCase()
    document.getElementById('about').textContent = afterCapitalize
})

// challenge 6

document.getElementById('addClass').addEventListener('click', function () {
    document.getElementById('myDiv').classList.add("card")
    let image = document.createElement('img')
    image.src = 'https://plus.unsplash.com/premium_photo-1707353401897-da9ba223f807?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    document.getElementById('myDiv').appendChild(image)
})


// challenge 7

document.getElementById("teaball").addEventListener('click',function(event){
    if(event.target && event.target.matches('#ball')){
        console.log(`You selected : ${event.target.textContent}`);
    }
})

// challenge 8

document.getElementById('changeBackGround').addEventListener('click', function(){
    document.getElementById('diver').classList.toggle('myback')
})


// challenge 9
document.getElementById('myform').addEventListener('submit', function(event){
    event.preventDefault()

    let feedback = document.getElementById('feedback').value

    document.getElementById('displayFeedback').textContent = `Feedback is : ${feedback}`
})

// challenge 10
document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('loadDOM').textContent = "DOMContentLoaded Successfully !!"
})
