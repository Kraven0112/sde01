document.addEventListener('DOMContentLoaded', function () {
    const allNoteDisplay = document.getElementById('noteContainer')
    const addbtn = document.getElementById('addBtn')


    let noteList = JSON.parse(localStorage.getItem('notes')) || []

    addbtn.addEventListener('click', createNote)

    loadingFromLocalStorage()

    function createNote() {
        const note = document.createElement('textarea')
        note.setAttribute("placeholder", "Empty note")
        note.setAttribute("name", "textarea")
        note.classList.add('mynote')
        allNoteDisplay.appendChild(note)

        // using change event in textarea node
        note.addEventListener('change', function (event) {
            event.preventDefault()
            if (event.target.value !== "") {
                const text = note.value.trim()
                const noteObj = {
                    id: Date.now(),
                    value: text
                }
                noteList.push(noteObj)
                removeNote(note)
                addToLocalStorage()
            }
        })

    }

    function addToLocalStorage() {
        localStorage.setItem("notes", JSON.stringify(noteList))
    }

    function loadingFromLocalStorage() {
        noteList.forEach(el => {
            const note = document.createElement('textarea')
            note.classList.add('mynote')
            note.value = el.value

            allNoteDisplay.appendChild(note)
            removeNote(note)
        })
    }

    function removeNote(note) {
        note.addEventListener('click', function (event) {
            event.stopPropagation()
            event.target.classList.add('textcross')
            setTimeout(function () {
                noteList.filter(el => (el.id === note.id))
                event.target.remove()
                addToLocalStorage()
            }, 1500)
        })
    }
})