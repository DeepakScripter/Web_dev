// Display an alert with the message "Hello World"
alert("Hello World");

// Log messages to the console for debugging purposes
console.log("Code is running...");
console.log("Code is also running...");
console.log("Code is looking like a wow...");

// Prompt the user to enter a number and store it in variable 'a'
var a = prompt("Enter your number");

// Confirm whether the user wants to leave the page and potentially blast their computer
var isTrue = confirm(
  "Are you sure you want to leave this page and blast your computer "
);

// Check the user's confirmation and log appropriate messages
if (isTrue) {
  console.log("Computer is blasting");
} else {
  console.log("Computer is not blasting");
}

// Log the entered number to the console
console.log("Your number is " + a);

// Change the title of the HTML document
document.title = "Hey I am good";

// Uncomment the following line to set the background color of the body to red
// document.body.style.backgroundColor = "red";
