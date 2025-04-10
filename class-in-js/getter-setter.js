// getter and setter

class BankAccount {
    #holderName
    #balance
    constructor(holderName, balance) {
        if (balance <= 0) {
            throw new Error("balance must be positive number.")
        }
        this.#holderName = holderName
        this.#balance = balance
    }

    get balance() {
        return this.#balance
    }

    set balance(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be positive number.")
        }else{
            this.#balance = amount
        }
    }

    get holderName(){
        return this.#holderName
    }

    set holderName(name){
        return this.#holderName = name
    }
}

let account = new BankAccount("Aman Chaudhary", 50000)
console.log(account.holderName);