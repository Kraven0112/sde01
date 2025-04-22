document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('products')
    const cartList = document.getElementById('cartList')
    const emptyMessage = document.getElementById('emptyMessage')
    const totalAmount = document.getElementById('totalAmount')

    let products = JSON.parse(localStorage.getItem("expenses")) || JSON.parse(localStorage.getItem('cartItems'))

    let cart =JSON.parse(localStorage.getItem('cardItems')) ||[]

    let totalPrice = 0

    products.forEach(product => displayProducts(product))

    function displayProducts(product) {
        const li = document.createElement('li')
        li.innerHTML = `
        <span>${product.name}</span>
        <span>$${product.amount}</span>
        <button id="buy">Buy</button>
        <button id="addToCart">Add To Cart</button>
        `
        productList.appendChild(li)

        li.querySelector('#addToCart').addEventListener('click', function (event) {
            event.stopPropagation()
            products = products.filter(item => item.id !== product.id)
            addToCart(product)
            totalPrice += product.amount
            totalAmount.textContent = `Total Amount : $${totalPrice.toFixed(2)}`
            addToLocalStorage()
        })

    }

    function addToCart(product) {
        if(cart.length === 0){
            cartList.classList.add('hidden')
            totalAmount.classList.add('hidden')
            emptyMessage.classList.remove('hidden')
        }

        cartList.classList.remove('hidden')
        totalAmount.classList.remove('hidden')
        emptyMessage.classList.add('hidden')
        
        const li = document.createElement('li')
        li.innerHTML = `
        <span>${product.name}</span>
        <span>$${product.amount}</span>
        <button id="buy">Buy</button>
        <button id="remove">remove</button>
        `

        li.querySelector('#remove').addEventListener('click', function(event){
            event.stopPropagation()
            addToLocalStorage()
            products = products.filter(item => item.id === product.id)
            totalPrice -= product.amount
            totalAmount.textContent = `Total Amount : $${totalPrice.toFixed(2)}`
            li.remove()
        })
        
        cartList.appendChild(li)
        cart.push(product)

    }

    function addToLocalStorage() {
        localStorage.setItem('products', JSON.stringify(products))
        localStorage.setItem('cartItems',JSON.stringify(cart))
    }


})
