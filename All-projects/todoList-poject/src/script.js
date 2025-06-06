// Task 1

document.addEventListener('DOMContentLoaded', function () {
    const todoValue = document.getElementById('taskValue')
    const form = document.getElementById('myForm')
    const todoList = document.getElementById('allTask')

    let taskList = JSON.parse(localStorage.getItem("tasks")) || []

    taskList.forEach(task => getItemFromLocalStorage(task))
    
    form.addEventListener('click', function (event) {
        event.preventDefault()
        
        const taskValue = todoValue.value.trim()

        if (taskValue === "") return;

        const taskObject = {
            id: Date.now(),
            text: taskValue,
            complete: false
        }

        taskList.push(taskObject)
        saveInLocalStorage()
        getItemFromLocalStorage(taskObject)
        todoValue.value = "" //clear input value
    })


    function saveInLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(taskList))
    }

    function getItemFromLocalStorage(task) {
        const li = document.createElement('li')
        li.innerHTML = `
        <span>${task.text}</span>
        <button>Delete</button>
        `
        li.classList.add('list')
        li.querySelector('button').classList.add('mybutton')

        li.addEventListener('click',function(){
            li.classList.toggle('complete')
            task.complete = !task.complete
            saveInLocalStorage()
        })

        li.querySelector('.mybutton').addEventListener('click',function(event) {
            event.stopPropagation()
            taskList = taskList.filter(t => t.id !== task.id)
            li.remove()
            saveInLocalStorage()
        })

        todoList.appendChild(li)
    }
})

