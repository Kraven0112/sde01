const container = document.getElementById('container')

Array.from({length : 30}).forEach(el => {
    const div = document.createElement('div')
    div.id = "myDiv"
    div.innerHTML = `<img id="img" src="https://picsum.photos/id/237/300/200"/>`

    container.appendChild(div)
})