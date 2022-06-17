class BankAccount{
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }


}

const rakesh = new BankAccount("Rakesh", 100);
rakesh.deposit(4300)
console.log(rakesh);