class BankAcc{

    constructor(accNo,balance){
        this.accNo = accNo;
        this.balance = balance;
    }

    deposite(amount){
        this.balance += amount;
        console.log("Amount deposited : "+amount +" Balance : "+this.balance);
    }
    withdraw(amount){
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount+" Balance : "+this.balance);
        } else {
            console.log("Insufficient balance");
        }
    }
}

class SavingsAcc extends BankAcc{

    constructor(accNo,balance,interestRate){
        super(accNo,balance);
        this.interestRate = interestRate;
    }

    calcInterest(){
        let interest = this.balance * this.interestRate / 100;
        console.log("Interest:", interest);
    }
}

let acc = new SavingsAcc("ACC101",5000,5);
acc.calcInterest();
acc.deposite(5000);
acc.withdraw(8000);
