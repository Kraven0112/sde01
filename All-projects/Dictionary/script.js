document.addEventListener('DOMContentLoaded', function () {
})
const form = document.getElementById('myInputField')
const inputQuery = document.getElementById('query')
const displaySection = document.getElementById('displaySection')

const wordDisplay = document.getElementById('wordDisplay')
const meaningDisplay = document.getElementById('meaningDisplay')
const invalidDislay = document.getElementById('invalidWord')

form.addEventListener('submit', async function (event) {
    event.preventDefault()

    const inputItem = inputQuery.value.trim()

    if (!inputItem) return

    const data = await fetchWordMeaning(inputItem)
    displayMeaning(inputItem, data[0].meanings[0].definitions[0])


    inputQuery.value = ""
})

async function fetchWordMeaning(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

        if (!response.ok) {
            displayError()
        }

        return response.json()

    } catch (error) {
        console.error(error)
    }
}


function displayError() {
    invalidDislay.classList.remove('hidden')
    displaySection.classList.add('hidden')
}

function displayMeaning(word, meaning) {
    invalidDislay.classList.add('hidden')
    displaySection.classList.remove('hidden')

    wordDisplay.textContent = `Word : ${word}`
    meaningDisplay.textContent = `Meaning : ${meaning.definition}`
}