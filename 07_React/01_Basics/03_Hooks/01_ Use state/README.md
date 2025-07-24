# What is `useState` in React?

`useState` is a React Hook that lets you add state to functional components. State allows components to keep track of information between renders, such as user input, toggles, counters, etc.

## Why do we use `useState`?

- To store and update data within a component.
- To trigger re-renders when the state changes.
- To manage interactive UI elements (like forms, modals, counters).

## Best Use Case

A common use case is handling form inputs or toggling UI elements (like showing/hiding content).

---

## Example: Counter App

### Folder Structure

```
03_Hooks/
└── 01_ Use state/
    ├── CounterApp.js
    └── README.md
```

### `CounterApp.js`

```jsx
import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CounterApp;
```

---

## Summary

- `useState` lets you add state to functional components.
- Use it for interactive, dynamic UI.
- Example above shows a simple counter using `useState`.
- Folder structure helps organize your files.