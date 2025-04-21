document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const searchBtn = document.getElementById('searchBtn')
    const displaySection = document.getElementById('displaySection')
    const errorMessage = document.getElementById('error')

    searchBtn.addEventListener('click', async function () {
        const inputItem = input.value.trim()


        if (!inputItem) {
            return;
        }

        const imageData = await fetchImages(inputItem)
        displayImages(imageData)


        input.value = ""
    })


    const access = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw"
    let page = 1

    async function fetchImages(input) {
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${access}`)
            
            console.log(response)

            if (!response.ok) {
                displayError()
            }
            const data = await response.json()
            return data

        } catch (error) {
            console.error(error)
        }
    }

    function displayImages(allImages) {
        displaySection.classList.remove('hidden')
        errorMessage.classList.add('hidden')

        if (page > 1) {
            displaySection.innerHTML = ""
        }

        allImages["results"].map((item, i) => {
            const imageContainer = document.createElement('div')
            const para1 = document.createElement('p')
            const img = document.createElement('img')

            imageContainer.id = "myDiv"

            img.src = item.urls.small
            img.id = 'myImg'

            para1.id = "description"
            para1.innerHTML = `${item.
                alt_description
                }`

            imageContainer.append(img, para1)
            displaySection.appendChild(imageContainer)

            page++
        })
    }

    function displayError() {
        displaySection.classList.add('hidden')
        errorMessage.classList.remove('hidden')
    }
})