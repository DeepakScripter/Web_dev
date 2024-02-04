// index.js

// Log a message to indicate that the script is initializing
console.log("Script.js initializing");

// Get the children of the container element
let boxes = document.querySelector(".container").children;

// Function to generate a random RGB color
function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}

// Loop through each box and assign random colors
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});
