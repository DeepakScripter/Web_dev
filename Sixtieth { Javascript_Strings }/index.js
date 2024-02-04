// Declare a string variable 'a' with the value "Harry"
let a = "Deepak";

// Access individual characters in the string using indexing
console.log(a[0]); 
console.log(a[1]); 
console.log(a[2]); 
console.log(a[3]);                                    
console.log(a[4]); 
// console.log(a[5]); // Uncommenting this line will result in an error

// Display the length of the string
console.log(a.length); // 5

// Declare two string variables 'real_name' and 'friend'
let real_name = "Deepak";
let friend = "Rohan";

// Concatenate strings using the + operator
console.log("His name is " + real_name + " and his friend's name is " + friend);

// Concatenate strings using template literals
console.log(`His name is ${real_name} and his friend's name is ${friend}`);

// Declare a string variable 'b' with the value "ShivamSh"
let b = "ShivamSh";

// Convert the string to uppercase and display
console.log(b.toUpperCase()); // SHIVAMSH

// Convert the string to lowercase and display
console.log(b.toLowerCase()); // shivamsh

// Display the length of the string
console.log(b.length); // 8

// Extract a substring using slice method
console.log(b.slice(1, 5)); // ivam

// Extract a substring from index 1 to the end
console.log(b.slice(1)); // hivamSh

// Replace a substring in the string
console.log(b.replace("Sh", "77")); // 77ivamSh

// Concatenate multiple strings
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya")); // ShivamShHarryAishwariyaRahulPriya

// The original string 'b' remains unchanged
console.log(b); // ShivamSh
