// Function 'nice' that takes a 'name' parameter and logs multiple messages
function nice(name) {
  console.log("Hey " + name + " you are nice!");
  console.log("Hey " + name + " you are good!");
  console.log("Hey " + name + " your t-shirt is nice!");
  console.log("Hey " + name + " your course is good too!");
}

// Function 'sum' that takes two parameters 'a' and 'b', with a default value of 3 for 'c'
function sum(a, b, c = 3) {
  // Uncommented console.log statement
  // console.log(a + b)
  // Log the values of 'a', 'b', and 'c'
  console.log(a, b, c);
  // Return the sum of 'a', 'b', and 'c'
  return a + b + c;
}

// Call the 'sum' function with different arguments and store the results
result1 = sum(3, 2);
result2 = sum(7, 5);
result3 = sum(3, 13, 1);

// Log the results of the 'sum' function calls
console.log("The sum of these numbers is: ", result1);
console.log("The sum of these numbers is: ", result2);
console.log("The sum of these numbers is: ", result3);

// Arrow function 'func1' that takes a parameter 'x' and logs a message
const func1 = (x) => {
  console.log("I am an arrow function", x);
};

// Call the arrow function 'func1' with different arguments
func1(34);
func1(66);
func1(84);
