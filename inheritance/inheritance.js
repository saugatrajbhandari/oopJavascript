function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}


function SavingAccount(customerName, balance=0){
    BankAccount.call(this, customerName, balance)
    this.transactionLimit = 10000;
}

SavingAccount.prototype.takePersonalLoan = function(amount){
    console.log(`Taking personal loan ${amount}`);
}

SavingAccount.prototype = Object.create(BankAccount.prototype)

const rakesh = new SavingAccount('rakesh k', 5)
rakesh.deposit(500)
console.log(rakesh);