console.log('GA Bank ES6');

class Account {
  constructor(openingBalance = 0) {
    this.balance = openingBalance;
  }
  withdraw(amount) {
    return amount <= this.balance ? this.balance -= amount : false;
  }
  deposit(amount) {
    return (this.balance += amount);
  }
  getBalance() {
    return this.balance;
  }
}

b = new Account(120);

b.withdraw(12);
