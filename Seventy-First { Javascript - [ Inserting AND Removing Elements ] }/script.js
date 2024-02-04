// Select the container element
let container = document.querySelector(".container");

// Insert a new element before the container
container.insertAdjacentHTML(
  "beforebegin",
  "<b> I am under the water. Please help me. Too much raining.... iuuuuooooo</b>"
);

// Create a new paragraph element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

// Append the new paragraph to the "insertExample" div
const insertExampleDiv = document.getElementById("insertExample");
insertExampleDiv.appendChild(newParagraph);

// Function to toggle visibility
function toggleVisibility() {
  const toggleExampleDiv = document.getElementById("toggleExample");

  // Toggle the "hidden" class to show or hide the element
  toggleExampleDiv.classList.toggle("hidden");
}
