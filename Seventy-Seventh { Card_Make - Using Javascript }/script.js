// JavaScript function to create a card dynamically
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Calculate the abbreviated view count
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views > 1000000) {
    viewStr = (views / 1000000).toFixed(1) + "M";
  } else {
    viewStr = (views / 1000).toFixed(1) + "K";
  }

  // HTML template for a card
  let html = `<div class="card">
                <div class="image">
                    <img src="${thumbnail}" alt="${title}">
                    <div class="capsule">${duration}</div>
                </div>
                <div class="text">
                    <h1>${title}</h1>
                    <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
                </div> 
            </div>`;

  // Append the card to the container
  document.querySelector(".container").innerHTML += html;
}

// Create a sample card
createCard(
  "Deepak Vishwakarma",
  "codercraze_deepak",
  560000,
  7,
  "31:22",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7JDZYybeEEu1Kbfxk_qFcEz7aA65LxEAeJ4eHKJg3cg&s"
);
