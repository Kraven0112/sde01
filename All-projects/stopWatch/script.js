document.addEventListener('DOMContentLoaded', function () {
    const timeDisplay = document.getElementById('time')
    const startBtn = document.getElementById('start')
    const stopBtn = document.getElementById('stop')
    const resetBtn = document.getElementById('reset')

    let second = 0
    let minute = 0
    let hour = 0

    let timeStatus = 0


    startBtn.addEventListener('click', function () {
        timeStatus = trackTime()
    })

    stopBtn.addEventListener('click', function () {
        clearInterval(timeStatus)
    })

    resetBtn.addEventListener('click', function () {
        second = 0
        minute = 0
        hour = 0
        clearInterval(timeStatus)
        timeDisplay.textContent = `00 : 00 : 00`
    })

    function trackTime() {
        return setInterval(function () {
            second++
            if (second > 59) {
                minute++
                second = 0
                if (minute > 59) {
                    hour++
                    minute = 0
                    if (hour > 12) {
                        hour = 0
                    }
                }
            }

            showTime()

        }, 1000)
    }

    function showTime() {
        timeDisplay.textContent = `${hour < 10 ? "0" + hour : hour} :
         ${minute < 10 ? "0" + minute : minute} : 
         ${second < 10 ? "0" + second : second}`
    }

})