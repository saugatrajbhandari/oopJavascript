function BankAccount(customerName, balance=0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount){
        this.balance += amount;
    }

    this.withdraw = (amount) =>{
        this.balance -= amount;
    }
}

// const ramAccount = new BankAccount('ram', 1000);
// ramAccount.deposit(50)

// console.log(ramAccount);

const accounts = [];

const accountForm = document.querySelector('#accountForm')
const customerName = document.querySelector('#customerName')
const balance = document.querySelector('#balance')

const depositForm = document.querySelector('#depositForm')
const amount = document.querySelector('#amount')
const accountNumber = document.querySelector('#accountNumber')


accountForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
})

depositForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const account = accounts.find((account)=>{
        account.accountNumber === +accountNumber;
    })
    account.deposit(+amount.value);
})