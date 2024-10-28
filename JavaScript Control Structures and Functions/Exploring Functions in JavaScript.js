let balance = 1000; // Initial balance

// Function to deposit money
function deposit(amount) {
  balance += amount;
  console.log(`Deposited: $${amount}. New Balance: $${balance}`);
}

// Function to withdraw money
function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
    console.log(`Withdrew: $${amount}. New Balance: $${balance}`);
  } else {
    console.log("Insufficient funds.");
  }
}

// Function to check balance
function checkBalance() {
  console.log(`Current Balance: $${balance}`);
}

// Testing the functions
deposit(500);        // Deposits $500
withdraw(200);       // Withdraws $200
checkBalance();      // Displays current balance
