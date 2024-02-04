
  // Async function that returns a Promise
  async function getData() {
    try {
      // Fetch data from the JSONPlaceholder API
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error; // Re-throw the error to be caught in the main function
    }
  };

// Function to update the result in the HTML
function updateResult(message) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = message;
}

// Event listener for the button
document.getElementById("fetchDataBtn").addEventListener("click", async () => {
  try {
    // Using async/await to handle the asynchronous operation
    const result = await getData();
    updateResult(JSON.stringify(result));
  } catch (error) {
    console.error("Error:", error);
    updateResult("Error occurred!");
  }
});

// Main function
async function main() {
  try {
    console.log("Loading modules");
    console.log("Do something else");

    console.log("Load data");

    let data = await getData();

    console.log(data);

    // Process the data or update the UI as needed
    updateResult(JSON.stringify(data));

    console.log("Process data");
    console.log("Task 2");
  } catch (error) {
    console.error("Error in main:", error.message);
    // Handle errors, display a message, etc.
    updateResult("Error occurred while fetching data.");
  }
}

// Call the main function
main();
function reloadpage() {
  location.reload();
}
