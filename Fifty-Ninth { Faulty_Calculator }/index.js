/* Create a faulty calculator using JavaScript

This faulty calculator does the following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

   + ---> -
   * ---> +
   - ---> /
   / ---> **

It performs the wrong operation 10% of the times

*/

// Generate a random number between 0 and 1
let random = Math.random();
console.log(random);

// Prompt the user to enter the first number, operation, and second number
function calculate() {
  // Generate a random number between 0 and 1
  let random = Math.random();

  // Get user inputs
  let a = parseFloat(document.getElementById("first-number").value);
  let c = document.getElementById("operation").value;
  let b = parseFloat(document.getElementById("second-number").value);

  // Define an object to map correct operations to faulty operations
  let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
  };

  // Check if the random number is greater than 0.1 (90% of the time)
  if (random > 0.1) {
    // Perform correct calculation
    let result = eval(`${a} ${c} ${b}`);
    displayResult(`The result is ${result}`);
  } else {
    // Perform wrong calculation by using the mapped faulty operator
    c = obj[c];
    let result = eval(`${a} ${c} ${b}`);
    displayResult(
      `The result is ${result} (Oops! The calculator made a mistake.)`
    );
  }
}

function displayResult(message) {
  // Get the result-container element
  const resultContainer = document.getElementById("result-container");

  // Display the result message in the result-container
  resultContainer.innerText = message;

  // Animate the result container properties (example: changing color and font size)
  resultContainer.style.color = "#4caf50"; // Green color
  resultContainer.style.fontSize = "24px"; // Larger font size

  // Use the animate method to smoothly transition the color property
  resultContainer.animate(
    [
      { color: "#4caf50" }, // Start color
      { color: "#333" }, // End color
    ],
    {
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-out", // Easing function
    }
  );
}
