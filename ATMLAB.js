class account{
    constructor(name, password,balance){
        this.name=name;
        this.password=password;
        this.balance=balance;
    }

}

class atm{

    constructor(accounts=[],currentaccount){
        this.accounts=accounts;
        this.accounts.push({name:"Troy",password:"Vizina",balance:100});
        this.currentaccount=null;
    }

    register(){
        let name = prompt("Please input a name")
        console.log(name);
        let password= prompt("Please input a password")
        console.log(password);
        let balance= prompt("Inital Deposit value")
        let newaccount= new account (name,password,balance)
        this.accounts.push(newaccount);

        console.log(this.accounts);
        return;
    }

    login(){
        let username =prompt("Username: ")
        let password=prompt("Password: ")

        console.log(this.accounts);

        for (let i=0;i<this.accounts.length;i++){
            if(username===this.accounts[i].name&&password===this.accounts[i].password){
                this.currentaccount=this.accounts[i];
                         
            }
        }
        if (this.currentaccount===null){
            console.log("Login Failed");
        }
        else{
            return;
        }        

    }

    logout(){
        if (this.currentaccount!==null){
            this.currentaccount=null;
        }
        else{
            console.log("Error there is no active account")
        }

    }

    checkBalance(){
        if (this.currentaccount!==null){
            console.log(this.currentaccount.balance);
        }
        else{
            console.log("Error there is no active account");
        }
    }

    deposit(){
        if (this.currentaccount!==null){
            let deposit=prompt("How much would like to deposit?");
             
                this.currentaccount.balance=parseFloat(this.currentaccount.balance) + parseFloat(deposit);
                console.log(this.currentaccount.balance);
        }
        else{
            console.log("Error there is no active account");        
        }
    }

    withdraw(){
        if (this.currentaccount!==null){
            let withdrawl=prompt("How much would like to withdraw?");
            if((this.currentaccount.balance-withdrawl)>=0){
                this.currentaccount.balance-=withdrawl;
                console.log(this.currentaccount.balance);
            }
            else if((this.currentaccount.balance-withdrawl)<0){
                console.log("Insufficient Funds")
            }
        }
        else{
            console.log("Error there is no active account");
        }
    }
}

let a =new atm();
a.login();
a.checkBalance();
a.deposit();
a.withdraw();
a.logout();