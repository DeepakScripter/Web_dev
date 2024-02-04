// Declare and initialize the variable 'age'
let age = 1;
let grace = 2;
// Uncommented arithmetic operations (age += grace and the following operations)
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

/*
This is a 
multiline 
comment
*/

// Simple if-else if-else structure to check the value of 'age'
if (age == 18) {
  console.log("You can drive");
} else if (age == 0) {
  console.log("Are you kidding?");
} else if (age == 1) {
  console.log("Are you again kidding?");
} else {
  console.log("You cannot drive");
}

// Declare and initialize variables 'a' and 'b'
a = 6;
b = 8;
// Using the ternary operator to determine the value of 'c'
let c = a > b ? a - b : b - a;

/*
The ternary operator translates to:
if(a>b){
    let c = a - b;
} else {
    let c = b - a;
}
*/
