class BankAccount{
    customerName;
    accountNumber;
    #balance = 0;
    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;

    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    // setBalance(amount){
    //     this.#balance = amount;
    // }

    // getBalance(){
    //     return this.#balance;
    // }
    

    set balance(amount){
        this.#balance = amount;
    }

    get balance(){
        return this.#balance;
    }
}


class SavingAccount extends BankAccount{
    constructor(customerName, balance=0){
        super(customerName, balance)
    }
    transactionLimit = 10000;

    #calculateInterest(){
        console.log('calculating interest');
    }

    takePersonalLoan(amount){
        this.#calculateInterest()
        console.log(`Taking personal loan ${amount}`);
        
    }
}


const rakesh = new SavingAccount('rakesh k', 5)
// rakesh.balance = 500
// console.log(rakesh.balance);

rakesh.takePersonalLoan()