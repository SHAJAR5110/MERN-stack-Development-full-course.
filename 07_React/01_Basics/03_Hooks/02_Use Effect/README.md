# useEffect in React

## What is `useEffect`?

`useEffect` is a React Hook that lets you perform side effects in function components. Side effects are operations that affect other components or cannot be done during rendering, such as data fetching, subscriptions, or manually changing the DOM.

## Why do we use `useEffect`?

- To fetch data from APIs
- To set up subscriptions or timers
- To update the DOM directly
- To clean up resources when a component unmounts

## Major Use Case

A common use case is fetching data from an API when a component mounts.

## Example Code

```jsx
// src/App.js
import React, { useEffect, useState } from "react";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from API when component mounts
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
```

## Folder Structure

```
your-project/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
│   └── ...other files
├── package.json
└── README.md
```

- Place the code in `src/App.js`.
- Run your React app to see the effect.
