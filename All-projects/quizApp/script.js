document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn')
    const restartBtn = document.getElementById('restartBtn')
    const nextBtn = document.getElementById('nextBtn')
    const contentDisplay = document.getElementById('contentContainer')
    const questionDisplay = document.getElementById('question')
    const choicesListDisplay = document.getElementById('choiceList')
    const scoreDisplay = document.getElementById('score')
    const resultContainer = document.getElementById('resultContainer')
    const correctMsg = document.getElementById('correct')
    const wrongtMsg = document.getElementById('wrong')

    // iteration index
    let currentIndex = 0
    let score = 0

    // questions and answerlists

    const questions = [
        {
            question: "Who was the father of computer ?",
            answerList: ["Charles Babbage", "Wilson Fisk", "Galileo Galilei", "Albert Einstein"],
            answer: "Charles Babbage"
        },
        {
            question: "Who was the father of science ?",
            answerList: ["Charles Babbage", "Galileo Galilei", "James Smith", "Albert Einstein"],
            answer: "Galileo Galilei"
        },
        {
            question: "Who was the first person stepped in moon ?",
            answerList: ["Charles Babbage", "Neil Armstrong", "James Smith", "Albert Einstein"],
            answer: "Neil Armstrong"
        },
        {
            question: "What is humidity means ?",
            answerList: ["Amount of water vapour in the air", "Amount of cloud in the air", "Amount of carbondioxide in the air", "Amount of oxygen in hte air"],
            answer: "Amount of water vapour in the air"
        },
        {
            question: "Who was the father of Psychology ?",
            answerList: ["Charles Babbage", "Wilhelm Wundt", "James Smith", "Albert Einstein"],
            answer: "Wilhelm Wundt"
        },
        {
            question: "What is the capital city of Nepal ?",
            answerList: ["Kathmandu","Delhi","Pokhara","Lumbini"],
            answer: "Kathmandu"
        },
        {
            question: "What is the capital city of India ?",
            answerList: ["Kathmandu","Delhi","Karnataka","Mumbai"],
            answer: "Delhi"
        },
        {
            question: "What is the capital city of China ?",
            answerList: ["Huangho","Beijing","Wuangho","Muangho"],
            answer: "Beijing"
        },
        {
            question: "Who is the father of modern physics ?",
            answerList: ["Albert Einstein","Galelio Galile","Adam Smith","Wilson Fisk"],
            answer: "Albert Einstein"
        }
    ]

    startBtn.addEventListener('click', startQuiz)

    nextBtn.addEventListener('click', function () {
        currentIndex++
        nextBtn.classList.add('hidden')
        wrongtMsg.classList.add('hidden')
        correctMsg.classList.add('hidden')
        if (currentIndex < questions.length) {
            showQuestion()
        } else {
            contentDisplay.classList.add('hidden')
            resultContainer.classList.remove('hidden')
            showResult()
        }
    })

    restartBtn.addEventListener('click', function () {
        currentIndex = 0
        score = 0

        resultContainer.classList.add('hidden')
        contentDisplay.classList.remove('hidden')
        showQuestion()
    })

    function startQuiz() {
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        contentDisplay.classList.remove('hidden')
        nextBtn.classList.add('hidden')
        showQuestion()
    }

    function showQuestion() {
        questionDisplay.textContent = questions[currentIndex].question

        choicesListDisplay.innerHTML = "" // to clear choices list

        questions[currentIndex].answerList.forEach(choice => {
            const li = document.createElement('li')
            li.innerHTML = choice
            li.classList.add('choice')
            li.addEventListener('click', function (event) {
                event.target.classList.add('clickLiBg')
                trackScore(choice)
            })
            choicesListDisplay.appendChild(li)
        })
    }

    function trackScore(choice) {
        const correctAnswer = questions[currentIndex].answer

        if (choice === correctAnswer) {
            setTimeout(() => {
                correctMsg.classList.remove('hidden')
                wrongtMsg.classList.add('hidden')
                score++
                nextBtn.classList.remove('hidden')
            }, 100)
        } else {
            setTimeout(() => {
                correctMsg.classList.add('hidden')
                wrongtMsg.classList.remove('hidden')
                nextBtn.classList.remove('hidden')
            }, 100);
        }


    }

    function showResult() {
        scoreDisplay.textContent = `Score : ${score} out of ${questions.length}`
    }

})