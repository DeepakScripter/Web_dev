// Select all elements with the class "box" and change their background color to green
console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach((box) => {
  box.style.backgroundColor = "green";
});

// Select by ID
const containerById = document.getElementById("container");

// Select by class
const headerByClass = document.getElementsByClassName("header");

// Select by tag name
const paragraphsByTagName = document.getElementsByTagName("p");

// Select by query selector
const containerByQuerySelector = document.querySelector("#container");
const headerByQuerySelector = document.querySelector(".header");
const paragraphByQuerySelector = document.querySelector("p");

// Select multiple elements by query selector
const listItemsByQuerySelectorAll = document.querySelectorAll("ul li");

// Log information to the console
console.log("Select by ID:", containerById);
console.log("Select by Class:", headerByClass);
console.log("Select by Tag Name:", paragraphsByTagName);
console.log("Select by Query Selector (ID):", containerByQuerySelector);
console.log("Select by Query Selector (Class):", headerByQuerySelector);
console.log("Select by Query Selector (Tag):", paragraphByQuerySelector);
console.log(
  "Select Multiple by Query Selector All:",
  listItemsByQuerySelectorAll
);

// Modify selected elements
if (containerById) {
  containerById.style.border = "2px solid red";
}

if (headerByClass.length > 0) {
  headerByClass[0].style.fontSize = "24px";
}

if (paragraphByQuerySelector) {
  paragraphByQuerySelector.innerHTML = "This paragraph has been modified.";
}
