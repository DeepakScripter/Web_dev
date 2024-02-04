
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Generate a random grayscale color
function getRandomColor() {
  var red = getRandomNumber(0, 256);
  var green = getRandomNumber(0, 256);
  var blue = getRandomNumber(0, 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Get elements with the class "box"
let boxes = document.getElementsByClassName("box");

// Loop through each element with the class "box" and set the background color
for (let i = 0; i < boxes.length; i++) {
  let randomColor = getRandomColor();
  boxes[i].style.backgroundColor = randomColor;
}

function reloadPage() {
  location.reload();
}





