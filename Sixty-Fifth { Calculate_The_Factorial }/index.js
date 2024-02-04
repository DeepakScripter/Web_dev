function calculateFactorial() {
  // Get the input value
  const inputNumber = document.getElementById("numberInput").value;

  // Check for invalid input
  if (inputNumber === "" || isNaN(inputNumber) || inputNumber < 0) {
    document.getElementById("result").textContent =
      "Invalid input. Please enter a non-negative integer.";
    return;
  }

  // Use reduce to calculate the factorial
  const factorial = Array.from(
    { length: parseInt(inputNumber) },
    (_, index) => index + 1
  ).reduce((accumulator, currentValue) => accumulator * currentValue, 1);

  // Display the result
  document.getElementById(
    "result"
  ).textContent = `Factorial of ${inputNumber} is: ${factorial}`;
}
