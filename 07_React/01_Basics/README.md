# React Basics

Welcome to the React Basics guide! This document covers the fundamental concepts of React, including components, props, and more.

## What is React?

React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and efficiently update the UI when data changes.

## Components

Components are the building blocks of a React application. They can be functional or class-based.

**Example Functional Component:**
```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}
```

## Props

Props (short for "properties") are used to pass data from parent to child components.

**Example:**
```jsx
<Welcome name="Alice" />
```
Here, `name="Alice"` is a prop passed to the `Welcome` component.

## State

State is a way to store data that can change over time in a component.

**Example using Hooks:**
```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

## JSX

JSX is a syntax extension for JavaScript that looks similar to HTML. It is used to describe the UI in React components.

**Example:**
```jsx
const element = <h1>Hello, world!</h1>;
```

## Rendering

React renders components to the DOM using the `ReactDOM.render()` method.

**Example:**
```jsx
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

## Conclusion

These are the basics of React. Explore more about lifecycle methods, hooks, and advanced patterns as you progress!
