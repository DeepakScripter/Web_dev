// Example demonstrating IIFE, Destructuring, Spread Operator, and Hoisting

// Hoisting Example
console.log(a1); // Outputs: undefined

// Immediately Invoked Function Expression (IIFE) using async function
(async function main() {
  // Async function calls with sleep, but commented out for simplicity
  // let a = await sleep()
  // console.log(a)
  // let b = await sleep()
  // console.log(b);

  // Destructuring Assignment Example
  // Destructuring the object properties
  let obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  let { a, b } = obj; // Destructuring assignment
  console.log(a, b); // Outputs: 1 2

  // Spread Operator Example
  // Spread operator used to pass array elements as individual arguments
  let arr = [1, 4, 6];
  console.log(sum(arr[0], arr[1], arr[2])); // Outputs: 11
  console.log(sum(...arr)); // Outputs: 11

  // Variable hoisting
  var a1 = 6; // Declaration is hoisted to the top

  // Function declarations are also hoisted
  const sleep = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(45);
      }, 1000);
    });
  };

  const sum = async (a, b, c) => {
    return a + b + c;
  };
})();

(function () {
  // Destructuring Assignment Example
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };

  // Destructuring the object properties
  const { firstName, lastName } = person;
  console.log(firstName, lastName); // Outputs: John Doe

  // Spread Operator Example
  const numbers = [1, 2, 3, 4, 5];

  // Using spread operator to create a new array with additional elements
  const extendedNumbers = [...numbers, 6, 7, 8];
  console.log(extendedNumbers); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8]

  // Variable Hoisting
  var a1 = 6; // Declaration is hoisted to the top

  // Output within the IIFE
  console.log(a1); // Outputs: 6
})();

// Variables and functions declared with var are hoisted
console.log(a1); // Outputs: 6

// Function Declarations are hoisted
hoistedFunction(); // Outputs: Function is hoisted

function hoistedFunction() {
  console.log("Function is hoisted");
}
