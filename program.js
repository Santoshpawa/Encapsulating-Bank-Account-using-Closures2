function createBankAccount(amt){
    let balance=amt;
    return {
        deposit: function(amt){
            balance+=amt;
            return `Balance: ${balance}`
        },
        withdraw: function(amt){
            if(balance>=amt){
                balance-=amt;
                return `Balance: ${balance}`
            }
            else
                return "Insufficient Balance"
        },
        getBalance: function(){
            return `Balance: ${balance}`
        }
    }
}

let user=createBankAccount(1000);
console.log(user.getBalance());
console.log(user.deposit(500))
console.log(user.withdraw(2000))