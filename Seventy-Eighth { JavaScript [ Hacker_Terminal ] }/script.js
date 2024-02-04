const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.getElementById("terminal").append(div);
};

const randomDelay = () => {
  return new Promise((resolve) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

async function main() {
  let t = setInterval(() => {
    let last = document.getElementById("terminal").lastElementChild;
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 300);

  let text = [
    "Initialized Hacking now reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up",
  ];

  for (const item of text) {
    await addItem(item);
  }

  await randomDelay();
  clearInterval(t);
}

main();
