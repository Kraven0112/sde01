document.addEventListener('DOMContentLoaded', function(){

    const monthDisplay = document.getElementById('month')
    const dateDisplay = document.getElementById('date')
    const dayDisplay = document.getElementById('day')
    const yearDisplay = document.getElementById('year')
    
    const date = new Date()

    monthDisplay.textContent = date.toLocaleDateString('default', { month: 'long' })
    dateDisplay.textContent = date.getDate()
    dayDisplay.textContent = date.toLocaleDateString('en-US', { weekday: 'long' })
    yearDisplay.textContent = date.getFullYear()

    document.getElementById('mainDiv').addEventListener('click', function(){
        document.getElementById('mainDiv').classList.toggle('bgc')
    })
})