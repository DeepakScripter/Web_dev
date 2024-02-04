const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to generate a random number (0 to 9)
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

// Function to create a faulty calculator
function faultyCalculator(num1, num2, operator) {
  let result;

  // Generate a random number to determine if it's a faulty calculation
  const randomNum = getRandomNumber();

  // Check if it's a faulty calculation (10% of the time)
  if (randomNum === 0) {
    // Perform wrong operations
    switch (operator) {
      case "+":
        result = num1 - num2;
        break;
      case "*":
        result = num1 + num2;
        break;
      case "-":
        result = num1 / num2;
        break;
      case "/":
        result = num1 ** num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }

    console.log("Oops! The calculator made a mistake.");
  } else {
    // Perform correct operation for the rest of the cases
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  }

  console.log(`Result: ${result}`);
}

// Prompt the user for input
rl.question("Enter the first number: ", (num1) => {
  rl.question("Enter the second number: ", (num2) => {
    rl.question("Enter the operator (+, *, -, /): ", (operator) => {
      // Call the faulty calculator function
      faultyCalculator(parseFloat(num1), parseFloat(num2), operator);

      // Close the readline interface
      rl.close();
    });
  });
});
