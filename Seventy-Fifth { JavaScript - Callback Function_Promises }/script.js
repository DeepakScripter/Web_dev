// Synchronous Code
console.log("Deepak is a hacker");
console.log("Rohan is a hacker");

setTimeout(() => {
  console.log("I am inside settimeout");
}, 0);

setTimeout(() => {
  console.log("I am inside settimeout 2");
}, 0);

console.log("The End");

// Callback Function and Script Loading
const fn = () => {
  console.log("Nothing");
};

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};

const loadScript = (src, callback) => {
  let scriptElement = document.createElement("script");
  scriptElement.src = src;
  scriptElement.onload = callback("Deepak", fn);
  document.head.append(scriptElement);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);

// Basic Callback Example
function fetchData(callback) {
  setTimeout(() => {
    const data = "Fetched data";
    callback(data);
  }, 2000);
}

function handleData(data) {
  console.log("Handling data:", data);
}

fetchData(handleData);

// Function that returns a promise
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Fetched data";
      resolve(data);
      // Uncomment the following line to simulate a rejection
      // reject("Error: Unable to fetch data");
    }, 2000);
  });
}

// Using the promise
fetchDataWithPromise()
  .then((data) => {
    console.log("Handling data:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

fetchDataWithPromise()
  .then((data) => {
    console.log("Step 1 - Handling data:", data);
    return "Additional data";
  })
  .then((additionalData) => {
    console.log("Step 2 - Handling additional data:", additionalData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Promise Examples
const promise1 = fetchDataWithPromise();
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second promise"), 1000)
);

Promise.all([promise1, promise2])
  .then((results) => {
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const racePromise1 = new Promise((resolve) =>
  setTimeout(() => resolve("First promise wins"), 2000)
);

const racePromise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Second promise wins"), 1000)
);

Promise.race([racePromise1, racePromise2])
  .then((result) => {
    console.log("The first promise that resolves wins:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// More Promises
let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Deepak");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Harry 2");
    }, 1000);
  }
});

let p3 = Promise.race([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
