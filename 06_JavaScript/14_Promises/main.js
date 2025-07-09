/* Example 1: Basic Promise */
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved after 1 second"), 1000);
});
promise1.then(result => console.log(result));

/* Example 2: Promise with reject */
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Rejected after 1.5 seconds"), 1500);
});
promise2.catch(error => console.log(error));

/* Example 3: Chaining Promises */
const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve(2), 500);
});
promise3
    .then(num => num * 3)
    .then(result => console.log("Chained result:", result));

/* Example 4: Promise.all */
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
Promise.all([p1, p2, p3]).then(values => console.log("Promise.all:", values));

/* Example 5: Fetch API with Promises (browser environment) */
// Uncomment below if running in browser
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log("Fetched data:", data))
//   .catch(error => console.log("Fetch error:", error));