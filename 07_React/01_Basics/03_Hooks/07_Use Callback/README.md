# React `useCallback` and `React.memo`

## Introduction

React provides several hooks and higher-order components to optimize performance and prevent unnecessary re-renders. Two important tools for this purpose are `useCallback` and `React.memo`.

---

## What is `useCallback`?

`useCallback` is a React Hook that returns a memoized version of a callback function. It helps prevent unnecessary re-creations of functions when a component re-renders.

### Syntax

```js
const memoizedCallback = useCallback(
    () => {
        // function logic
    },
    [dependencies],
);
```

### Why Use `useCallback`?

- Functions are re-created on every render in React.
- Passing new function references as props can cause child components to re-render unnecessarily.
- `useCallback` ensures the same function instance is used unless dependencies change.

### Best Use Case

- When passing functions as props to child components that are optimized with `React.memo`.
- Useful in lists, complex UIs, or when functions are dependencies of other hooks.

---

## What is `React.memo`?

`React.memo` is a higher-order component that memoizes a functional component. It prevents re-rendering if the props have not changed.

### Syntax

```js
const MemoizedComponent = React.memo(Component);
```

### Why Use `React.memo`?

- By default, React re-renders child components when the parent re-renders.
- `React.memo` skips rendering if props are the same, improving performance.

### Best Use Case

- For pure functional components that render the same output given the same props.
- Useful in large lists, dashboards, or components with expensive rendering logic.

---

## How They Work Together

When you pass a function as a prop to a memoized component, ensure the function reference is stable using `useCallback`. Otherwise, the child will re-render because the function prop changes on every parent render.

### Example

```js
const Child = React.memo(({ onClick }) => {
    return <button onClick={onClick}>Click me</button>;
});

function Parent() {
    const handleClick = useCallback(() => {
        // handle click
    }, []);
    return <Child onClick={handleClick} />;
}
```

---

## Importance in React

- Improves performance by reducing unnecessary renders.
- Essential for optimizing large applications.
- Helps maintain predictable and efficient UI updates.

---

## Summary

- Use `useCallback` to memoize functions and prevent unnecessary re-creations.
- Use `React.memo` to memoize components and prevent unnecessary re-renders.
- Combine both for best results when passing functions as props to memoized components.
