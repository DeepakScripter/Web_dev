/* 
  Create a faulty calculator using JavaScript
  
  This faulty calculator does the following:
  1. It takes two numbers as input from the user.
  2. It performs wrong operations 10% of the times:
     + ---> -
     * ---> +
     - ---> /
     / ---> **
  
  It alerts the user with the correct or faulty result.
*/

// Generate a random number between 0 and 1
let random = Math.random();
console.log(random);

// Take user input for the first number, operation, and second number
let a = prompt("Enter the first number");
let c = prompt("Enter the operation");
let b = prompt("Enter the second number");

// Define a mapping for faulty operations
let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

// Check if the random number is greater than 0.1 to decide whether to perform a correct or faulty calculation
if (random > 0.1) {
  // Perform correct calculation
  console.log(`The result is ${a} ${c} ${b}`);
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  // Perform faulty calculation by swapping the operation
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
