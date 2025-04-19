document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('products')
    const cartList = document.getElementById('cartList')
    const emptyMessage = document.getElementById('emptyMessage')
    const totalAmount = document.getElementById('totalAmount')
    const checkOutBtn = document.getElementById('checkOutBtn')

    let products = [
        { id: Date.now(), name: "Product 1", price: 29.99 },
        { id: Date.now(), name: "Product 2", price: 25.99 },
        { id: Date.now(), name: "Product 3", price: 39.99 },
        { id: Date.now(), name: "Product 4", price: 9.99 },
        { id: Date.now(), name: "Product 5", price: 19.99 },
    ] || JSON.parse(localStorage.getItem('cartItems')) 

    let cart =JSON.parse(localStorage.getItem('cardItems')) ||[]

    let totalPrice = 0

    products.forEach(product => displayProducts(product))

    function displayProducts(product) {
        const li = document.createElement('li')
        li.innerHTML = `
        <span>${product.name}</span>
        <span>$${product.price}</span>
        <button>Add To Cart</button>
        `
        productList.appendChild(li)

        li.querySelector('button').addEventListener('click', function (event) {
            event.stopPropagation()
            products = products.filter(item => item.id !== product.id)
            addToCart(product)
            totalPrice += product.price
            totalAmount.textContent = `Total Amount : $${totalPrice.toFixed(2)}`
            addToLocalStorage()
            li.remove()
        })

    }

    function addToCart(product) {
        if(cart.length === 0){
            cartList.classList.add('hidden')
            totalAmount.classList.add('hidden')
            checkOutBtn.classList.add('hidden')
            emptyMessage.classList.remove('hidden')
        }

        cartList.classList.remove('hidden')
        totalAmount.classList.remove('hidden')
        checkOutBtn.classList.remove('hidden')
        emptyMessage.classList.add('hidden')
        
        const li = document.createElement('li')
        li.innerHTML = `
        <span>${product.name}</span>
        <span>$${product.price}</span>
        <button id="buy">Buy</button>
        <button id="remove">remove</button>
        `

        li.querySelector('#remove').addEventListener('click', function(event){
            event.stopPropagation()
            addToLocalStorage()
            products = products.filter(item => deletedItem(item.id === product.id))
            totalPrice -= product.price
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
