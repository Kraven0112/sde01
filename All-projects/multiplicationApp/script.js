document.addEventListener('DOMContentLoaded', function(){
    const scoreDisplay = document.getElementById('score')
    const multiplicandDisplay = document.getElementById('multiplicand')
    const multiplierDisplay = document.getElementById('multiplier')
    const answerInput = document.getElementById('answer')
    const form = document.getElementById('inputForm')
    const wrongMessage = document.getElementById('wrongMessage')

    let score = 0
    let multiplicand = generateMultiliplicand()
    let multiplier = generateMultiplier()

    displayAllitem()
    
    form.addEventListener('submit', function(event){
        event.preventDefault()
        
        if(!answerInput) return;

        const answerValue = parseInt(answerInput.value.trim())

        if (answerValue === (multiplicand * multiplier) && answerValue !== ""){
            score  = score + 1
            scoreDisplay.textContent = `Score : ${score}`
            wrongMessage.classList.add('hidden')
            multiplicand = generateMultiliplicand()
            multiplier = generateMultiplier()
            displayAllitem()
        }else{
            wrongMessage.classList.remove('hidden')
        }

        answerInput.value = ""

    })

    function generateMultiliplicand(){
        return Math.floor(Math.random() * 10)
    }
    function generateMultiplier(){
        return Math.floor(Math.random() * 10)
    }

    function displayAllitem(){
        multiplicandDisplay.textContent = multiplicand
        multiplierDisplay.textContent = multiplier
    }
})