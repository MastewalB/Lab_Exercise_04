let account1 = {
    firstName: "",
    lastName: "",
    bank_number: "",
    balance: ""
};


let account2 = {
    firstName: "",
    lastName: "",
    bank_number: "",
    balance: ""
};


account1.firstName = prompt("Enter your First name:");
account1.lastName = prompt("Enter your Second name:");
account1.bank_number = 2345;
account1.balance = 0;
account2.balance = 0;




(function () {
    while (1) {
        let choice = prompt("Choose a service \n 1. Deposit \n 2. Withdraw \n 3. Balance \n 4. Transfer \n 5.Exit");
        choice = parseInt(choice);

        if (choice === 1) {
            let depositValue = prompt("How much do you want to deposit.");
            depositValue = parseInt(depositValue);
            if (depositValue < 0) {
                alert("You inserted an invalid value");
            }
            account1.balance = account1.balance + depositValue;
        } else if (choice === 2) {
            let withdrawValue = prompt("How much do you want to withdraw.");
            withdrawValue = parseInt(withdrawValue);
            if (withdrawValue > account1.balance) {
                alert("You don't have sufficient balance");
            } else {
                account1.balance = account1.balance - withdrawValue;
            }
        } else if (choice === 3) {
            alert("Your account balance is " + account1.balance);
        } else if (choice === 4) {
            let transferNo = prompt("Enter the transfer amount:");
            transferNo = parseInt(transferNo);
            if (transferNo > account1.balance) {
                alert("You don't have sufficient balance");
                console.log("You don't have sufficient balance");
            } else {
                account2.firstName = prompt("Enter the recipient's first name:");
                account2.lastName = prompt("Enter the recipient's last name:");
                account2.bank_number = prompt("Enter the recipient's Account Number:");
                account2.balance = account2.balance + transferNo;
                account1.balance = account1.balance - transferNo;
                alert("Transferred succesfully");
            }

        } else if (choice === 5) {
            break;
        } else {
            alert("Wrong input. Try again Please!");
        }

    }

})();