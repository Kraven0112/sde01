/*
Encapsulation means bundling all data in single unit to protect internal implementation of an object from outside the world.
The main principle of an encapsulation in oops is to deny direct access to the internal implementation from the outside world.
*/

class BankAccount {
    #accountHolder = "Sushil Chaudhary"
    #accountType = "Saving Account"
    #balance = 0

    getBalance(){
        return `Available balance : ${this.#balance}`
    }

    depositAmount(amount){
        this.#balance += amount
        return `Deposit amount : Rs.${amount} || Available balance : Rs.${this.#balance}`
    }

    accountDetail(){
        return `Total balance : Rs.${this.#balance} || Account Holder Name : ${this.#accountHolder} || Account-Type : ${this.#accountType}`
    }

    withdraw(amount){
        this.#balance -= amount
        return `Withdrawal amount : Rs.${amount}`
    }
}

let account123 = new BankAccount()
console.log(account123.depositAmount(1000000));
console.log(account123.accountDetail());
console.log(account123.withdraw(90000));
console.log(account123.getBalance());

