function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // this.deposit = function(amount){
    //     this.balance += amount;
    // }

    // this.withdraw = (amount) =>{
    //     this.balance -= amount;
    // }
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}

// console.log(BankAccount.prototype);

const rakesh = new BankAccount('rakesh k')
rakesh.deposit(500)
console.log(rakesh);