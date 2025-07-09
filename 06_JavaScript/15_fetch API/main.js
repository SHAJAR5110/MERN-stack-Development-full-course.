// Example 1: GET request - What & Why
// Fetch data from a public API (e.g., JSONPlaceholder) to read resources.
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json()) // Parse JSON response
    .then(data => console.log('GET Example 1:', data))
    .catch(error => console.error('Error:', error));

// Example 2: GET request with query params - How
// Fetch filtered data using query parameters.
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then(response => response.json())
    .then(data => console.log('GET Example 2:', data))
    .catch(error => console.error('Error:', error));

// Example 3: POST request - What & Why
// Send new data to the server to create a resource.
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log('POST Example 3:', data))
    .catch(error => console.error('Error:', error));

// Example 4: POST request with async/await - How
// Using async/await for cleaner syntax.
async function createPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'baz',
                body: 'qux',
                userId: 2
            })
        });
        const data = await response.json();
        console.log('POST Example 4:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}
createPost();