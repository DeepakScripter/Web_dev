document.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child was clicked");
});

document.querySelector(".childContainer").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("childContainer was clicked");
});

document.querySelector(".container").addEventListener("click", () => {
  alert("Container was clicked");
});

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}

// Uncomment the setInterval code if you want to change the background color periodically
let intervalId = setInterval(() => {
  document.querySelector(".childContainer").style.background = getRandomColor();
}, 1000);

// Uncomment the clearTimeout code if you want to stop the background color change after a certain time
let timeoutId = setTimeout(() => {
  document.querySelector(".container").style.background = getRandomColor();
}, 1000);

// console.log(intervalId, timeoutId);

let button = document.getElementById("btn");

button.addEventListener("dblclick", () => {
  document.querySelector(".box").innerHTML =
    "<b>Yayy you were clicked</b> Enjoy your click!";
});

button.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // Prevent default context menu
  alert("Don't hack us by right-clicking, please!");
});

document.addEventListener("keydown", (e) => {
  console.log(e, e.key, e.keyCode);
});

function changeContent() {
location.reload();
}

