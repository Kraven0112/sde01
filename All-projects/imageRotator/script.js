const forwardBtn = document.getElementById('forward-Btn')
const backwardBtn = document.getElementById('backward-Btn')
const imageDisplay = document.getElementById('myImg')

let currentIndex = 0

const allImages = [
    "https://picsum.photos/id/237/300/200",
    "https://picsum.photos/id/23/300/200",
    "https://picsum.photos/id/48/300/200",
    "https://picsum.photos/id/12/300/200",
    "https://picsum.photos/id/59/300/200",
    "https://picsum.photos/id/160/300/200",
    "https://picsum.photos/id/370/300/200",
    "https://picsum.photos/id/478/300/200"
]

function displayImage() {
    if (currentIndex < allImages.length) {
        imageDisplay.src = allImages[currentIndex]
    }else{
        currentIndex = 0
        imageDisplay.src = allImages[currentIndex]
    }
}

forwardBtn.addEventListener('click', function () {
    currentIndex++
    displayImage()
})
backwardBtn.addEventListener('click', function () {
    if(currentIndex === 0){
        currentIndex = allImages.length - 1
    }
    else{
        currentIndex--
    }
    displayImage()
})
