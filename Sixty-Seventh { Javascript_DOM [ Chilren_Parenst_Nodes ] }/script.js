// Access parent element
const parentElement = document.getElementById("parent");

// Access child elements
const childrenElements = parentElement.children;

// Access the first child element
const firstChild = parentElement.firstElementChild;

// Access the last child element
const lastChild = parentElement.lastElementChild;

// Access parent of the first child
const parentOfFirstChild = firstChild.parentElement;

// Access next sibling of the first child
const nextSibling = firstChild.nextElementSibling;

// Access previous sibling of the last child
const prevSibling = lastChild.previousElementSibling;

// Log information to the console
console.log("Parent Element:", parentElement);
console.log("Children Elements:", childrenElements);
console.log("First Child:", firstChild);
console.log("Last Child:", lastChild);
console.log("Parent of First Child:", parentOfFirstChild);
console.log("Next Sibling of First Child:", nextSibling);
console.log("Previous Sibling of Last Child:", prevSibling);

// Additional lines of code
// Access the first child element of the body
document.body.firstElementChild;

// Access child nodes of the first child element of the body
document.body.firstElementChild.childNodes;

// Access child elements of the first child element of the body
document.body.firstElementChild.children;
