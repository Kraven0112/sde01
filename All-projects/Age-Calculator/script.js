document.addEventListener('DOMContentLoaded', function () {
    const birthdayInput = document.getElementById('birthday')
    const form = document.getElementById('inputField')
    const result = document.getElementById('result')
    const message = document.getElementById('message')

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        getAge()
    })

    function getAge() {
        const birthday = birthdayInput.value

        if (birthday === "") {
            message.classList.remove('hidden')
        } else {
            message.classList.add('hidden')
            const age = convertAge(birthday)
            result.innerHTML = `Your are ${age} ${age > 1 ? "years" : "year"} old.`
        }

        birthdayInput.value = ""
    }

    function convertAge(birthday) {
        const currentDate = new Date()
        const birthdayDate = new Date(birthday)
        let age = currentDate.getFullYear() - birthdayDate.getFullYear()

        let month = currentDate.getMonth() - birthdayDate.getMonth()

        if (month < 0 || (month === 0 && currentDate.getDate() > birthdayDate.getDate())) {
            age--
        }

        return age
    }
})