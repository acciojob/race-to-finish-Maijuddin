window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Create an array of five promises that resolve with random times between 1 and 5 seconds
const promises = Array.from({ length: 5 }, () => {
  const randomTime = Math.floor(Math.random() * 5 + 1) * 1000; // Convert to milliseconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime);
  });
});

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = `The first promise resolved with a time of ${result} milliseconds.`;
  })
  .catch(error => {
    console.error('All promises rejected:', error);
  });
