document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('myInput')
    const resultDisplay = document.getElementById('result')

    let count = 0

    input.addEventListener('input', function () {
        countWord1()
    })

    function countWord1() {
        count++
        resultDisplay.innerHTML = `Total ${count > 1 ? "words" : "word"} ${count > 1 ? "are" : "is"} ${count}  `
    }
})