const promises = [
    new Promise(resolve => setTimeout(() => resolve("Promise 1"), Math.random() * 4000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve("Promise 2"), Math.random() * 4000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve("Promise 3"), Math.random() * 4000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve("Promise 4"), Math.random() * 4000 + 1000)),
    new Promise(resolve => setTimeout(() => resolve("Promise 5"), Math.random() * 4000 + 1000))
];

// Using Promise.any() to wait for the first resolved promise
Promise.any(promises)
    .then(result => {
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = result;
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });