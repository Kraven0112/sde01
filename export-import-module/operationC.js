// configured exports using older module system

function getRandomNumber() {
    return Math.floor((Math.random() * 10) + 1)
}

function getDoubleScore(score) {
    return score ** 2
}

function getCubic(num) {
    return num ** 3
}

module.exports = {
    getCubic,
    getDoubleScore,
    getRandomNumber
}