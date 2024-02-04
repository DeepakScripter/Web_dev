// Assign the value 7 to variable 'a'
let a = 7;

// Function to calculate factorial using Array.from and reduce
function factorial(number) {
  // Create an array from 1 to the given number
  let arr = Array.from(Array(number + 1).keys());

  // Remove the first element (0) and calculate the product of the array elements
  let result = arr.slice(1).reduce((a, b) => a * b);

  // Return the calculated factorial
  return result;
}

// Function to calculate factorial using a for loop
function facFor(number) {
  // Initialize the factorial variable to 1
  let fac = 1;

  // Iterate from 1 to the given number and multiply the factorial variable
  for (let index = 1; index <= number; index++) {
    fac = fac * index;
  }

  // Return the calculated factorial
  return fac;
}

// Display the result of factorial using Array.from and reduce
console.log("Factorial using Array.from and reduce:", factorial(a));

// Display the result of factorial using a for loop
console.log("Factorial using for loop:", facFor(a));
