// Your JS code goes here.
$(document).ready(function() {
	var account;
	var balance;
	var transaction;
	var amount;

	balance = [100, 1000, 10000];


	account = prompt("Which account would you like to access: 1, 2, or 3?");

	transaction = prompt("Would you like to make a withdrawl or deposit?");

	amount = parseInt(prompt("What is the amount?"));


	if (account == 1) {
		if (transaction == "withdrawl") {
			balance[0] -= amount;
			console.log(balance);
			if (balance < 0) {
				console.log("You are neg!");
			}
		}
		else if (transaction == "deposit") {
			balance[0] += amount;
			console.log(balance);
		}
		else {
			console.log("You did not specify withdrawl or deposit!");
		}
	}

	else if (account == 2) {
		if (transaction == "withdrawl") {
			balance[1] -= amount;
			console.log(balance);
			if (balance < 0) {
				console.log("You are neg!");
			}
		}
		else if (transaction == "deposit") {
			balance[1] += amount;
			console.log(balance);
		}
		else {
			console.log("You did not specify withdrawl or deposit!");
		}
	}

	else if (account == 3) {
		if (transaction == "withdrawl") {
			balance[2] -= amount;
			console.log(balance);
			if (balance < 0) {
				console.log("You are neg!");
			}
		}
		else if (transaction == "deposit") {
			balance[2] += amount;
			console.log(balance);
		}
		else {
			console.log("You did not specify withdrawl or deposit!");
		}
	}


	for (var i = 0; i < 3; i++) {
		console.log("Your balance for account " + (i + 1) + " " + "is " + "$" + balance[i]);
		
		$('p').text('Your balance is ' + balance[i]);


	}




		//$('p').text('Your balance is ' + balance[account-1]);

}); 
