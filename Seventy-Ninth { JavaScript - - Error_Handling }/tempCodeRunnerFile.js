function main() {
  let x = 1;
  try {
    console.log("The sum is ", sum * x);
    return true;
  } catch (error) {
    console.log("Error aa gaya bhai");
    return false;
  } finally {
    console.log("files are being closed and db connection is being closed");
  }
}

let c = main();