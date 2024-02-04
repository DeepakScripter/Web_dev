// Create an array of random image URLs
const imageUrls = [
  "https://img.freepik.com/free-photo/breathtaking-scenery-snowy-rocks-cloudy-sky-dolomiten-italy_181624-14537.jpg?w=900&t=st=1707053373~exp=1707053973~hmac=8054cb959ad7a50f5c5ec4e927050a1dfd6ed43cbbc6cf7db8b3b42dc2f364c6",
];

// Function to get a random image URL from the array
function getRandomImageUrl() {
  // Get a random index from the array
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  // Return the randomly selected image URL
  return imageUrls[randomIndex];
}

// Function to create a card and append it to the container
function createCard(title, cName, views, monthsOld, duration) {
  // Get a random image URL
  const thumbnail = getRandomImageUrl();

  // Format the view count
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views > 1000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 1000 + "K";
  }

  // Create HTML for the card
  let html = `<div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
        </div> 
    </div>`;

  // Append the HTML to the container
  document.querySelector(".container").innerHTML += html;
}

// Call the createCard function with sample data
createCard("Another Video Title", "AnotherChannel", 1200, 2, "10:45");
// Add more function calls as needed
