document.addEventListener('DOMContentLoaded', function () {
    const inputValue = document.getElementById('inputCity')
    const searchButton = document.getElementById('searchButton')
    const displaySection = document.getElementById('displaySection')
    const displayCityName = document.getElementById('cityName')
    const displayTemperature = document.getElementById('temperature')
    const displayDescription = document.getElementById('description')
    const displayHumidity = document.getElementById('humidity')
    const errorSection = document.getElementById('errorSection')


    searchButton.addEventListener('click', async function () {
        const cityName = inputValue.value.trim()

        if (!cityName) {
            return
        }
        const weatherData = await fetchWeatherData(cityName)
        displayData(weatherData)
        inputValue.value = ""
    })

    async function fetchWeatherData(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=179201cf4a2038abcb731df735f5138e`)

            if (!response.ok) {
                displayError()
            }
            const data = await response.json()

            return data
        } catch (error) {
            console.error(error)
        }
    }

    function displayData(data) {
        const { name, main, weather } = data
        displayCityName.textContent = name
        displayTemperature.textContent = `Temperature : ${main.temp}° C`
        displayDescription.textContent = `Description : ${weather[0].description}`
        displayHumidity.textContent = `Humidity : ${main.humidity}%`

        displaySection.classList.remove('hidden')
        errorSection.classList.add('hidden')

        console.log(data)
    }

    function displayError() {
        errorSection.classList.remove('hidden')
        displaySection.classList.add('hidden')
    }
})