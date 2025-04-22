document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.getElementById('expenseForm')
    const expenseNameInput = document.getElementById('expenseName')
    const expenseAmountInput = document.getElementById('expenseAmount')
    const expensesDisplay = document.getElementById('expenses')
    const expenseTotalAmt = document.getElementById('totalAmt')

    let expensesList = JSON.parse(localStorage.getItem("expenses")) || []
    
    let totalAmount = calculateTotalAmt()
    
    // calling display() functon for re-render when document is loaded
    displayExpenses()

    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault()
        const expenseName = expenseNameInput.value.trim()
        const expenseAmount = parseFloat(expenseAmountInput.value.trim())

        if (expenseName !== "" && expenseAmount > 0) {
            const expenseObj = {
                id: Date.now(),
                name: expenseName,
                amount: expenseAmount
            }
            expensesList.push(expenseObj)
            saveToLocalStorage()
            displayExpenses()
            calculateTotalAmt()
        
            expenseNameInput.value = ""
            expenseAmountInput.value = ""
        }
        
    })
    
    function displayExpenses() {
        expensesDisplay.innerHTML = ""
        
        expensesList.forEach((expense) => {
            const li = document.createElement('li')
            li.innerHTML = `
            <span>${expense.name}</span>
            <span>$${expense.amount}</span>
            <button id="removeBtn" >Delete</button>
            `
            expensesDisplay.appendChild(li)

            li.addEventListener('click',function(e){
                if(e.target.tagName === "BUTTON"){
                    expensesList = expensesList.filter(item => item.id !== expense.id)
                    li.remove()
                    saveToLocalStorage()
                    displayExpenses()
                    calculateTotalAmt()
                }
            })
        })

        // calling calculateTotalAmt() function to track totalAmount
        totalAmount = calculateTotalAmt()
        expenseTotalAmt.textContent = `Total amount : $${totalAmount}`
    }

    // locating all items in localStorage for re-retrieve and reuse
    function saveToLocalStorage(){
        localStorage.setItem("expenses",JSON.stringify(expensesList))
    }

    // calculating totalAmount 
    function calculateTotalAmt() {
       return expensesList.reduce((acc, curr) => (acc + curr.amount), 0)

    }
})