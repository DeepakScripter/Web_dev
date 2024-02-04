// Declare a variable 'a' and assign the value 5 to it
var a = 5;
// 'b' is declared using 'let' with the value 6
let b = 6;
// 'c' is declared as a string with the value "Harry"
let c = "Deepak";
// '_a' is declared as a string with the value "Shubham"
let _a = "Shubham";

// The following line is commented out to prevent an error; variable names cannot start with a number
// var 55a = "Rohan"; // Not Allowed

// Logging the sum of 'a', 'b', and 8 (commented out for now)
// console.log(a + b + 8);
// Logging the data types of 'a', 'b', and 'c' (commented out for now)
// console.log(typeof a, typeof b, typeof c);

// Creating a block with its own scope
{
  // 'a' is logged within this block, showing the value of the outer 'a'
  let a = 66;
  console.log(a);
}

// Logging the value of the outer 'a' after the block
console.log(a);

// Constants in JavaScript (commented out for now)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because 'a1' is constant

// Declaring variables with different data types
let x = "Deepak bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

// Logging values and data types of variables
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// Declaring and manipulating an object 'o'
let o = {
  name: "Deepak",
  "job code": 5600,
  is_handsome: true,
};

// Logging the initial object
console.log(o);

// Adding a new property 'salary' to the object and logging it
o.salary = "100crores";
console.log(o);

// Updating the 'salary' property and logging the modified object
o.salary = "500crores";
console.log(o);
