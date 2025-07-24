## What is State Lifting in React?

**State lifting** is a concept in React where you move the state from a child component up to a common parent component. This allows multiple child components to share and synchronize data.

### Why Do We Use State Lifting?

In React, each component can have its own state. Sometimes, two or more components need to access or update the same data. If the state is kept in only one child, the other child cannot access it directly. By "lifting" the state up to their common parent, both children can receive the state as props and communicate changes through callback functions.

### Major Use of State Lifting

The main use of state lifting is to enable communication and data sharing between sibling components. It helps keep your application's data flow predictable and organized.

### Where Can We Use State Lifting?

You use state lifting whenever:
- Two or more components need to access or update the same data.
- You want to synchronize UI elements (like forms, lists, or controls) that depend on shared state.

### Best Use Case Example

A common example is a form with multiple input fields. Suppose you have two components: one for entering a user's name and another for displaying a greeting. If the name is stored in the parent component, both the input and greeting components can access and update it.

#### Example Diagram

```
ParentComponent (holds state)
├── NameInput (receives state and callback as props)
└── Greeting (receives state as props)
```

### Summary

- **State lifting** helps share data between components.
- It keeps your data flow clear and manageable.
- Use it when multiple components need to access or update the same state.

### Example: State Lifting in a Simple React App

Suppose you have a parent component that manages the state for a user's name, and two child components: one for input and one for displaying a greeting.

```jsx
// ParentComponent.jsx
import React, { useState } from "react";
import NameInput from "./NameInput";
import Greeting from "./Greeting";

function ParentComponent() {
    const [name, setName] = useState("");

    return (
        <div>
            <NameInput name={name} setName={setName} />
            <Greeting name={name} />
        </div>
    );
}

// NameInput.jsx
function NameInput({ name, setName }) {
    return (
        <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
        />
    );
}

// Greeting.jsx
function Greeting({ name }) {
    return <h2>Hello, {name || "Guest"}!</h2>;
}
```

**Explanation:**  
- The `ParentComponent` holds the `name` state.
- `NameInput` receives the state and the setter function as props, allowing it to update the name.
- `Greeting` receives the name as a prop and displays a greeting.
- This setup allows both child components to share and update the same state via the parent.
