function createRandomPromise() {
  const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds in milliseconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${Math.floor(randomTime / 1000)} seconds`);
    }, randomTime);
  });
}

window.promises = [
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise()
];

Promise.any(window.promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = result;
  })
  .catch((error) => console.error("Error:", error));
