document.addEventListener('DOMContentLoaded', function () {
    const timeDisplay = document.getElementById('actualtime')

    setInterval(displayTime, 1000)

    function displayTime() {
        let second = 0
        let minute = 0
        let hour = 0
        let period = "AM"

        let date = new Date()

        second = date.getSeconds()
        minute = date.getMinutes()
        hour = date.getHours()

        if (hour >= 12) {
            period = "PM"
            if (hour > 12) {
                hour -= 12
            }
        }

        if (hour === 0) {
            hour = 12
        }



        timeDisplay.textContent = `
        ${hour < 10 ? "0" + hour : hour} :
        ${minute < 10 ? "0" + minute : minute} :
        ${second < 10 ? "0" + second : second}
        ${period}
        `
    }
})