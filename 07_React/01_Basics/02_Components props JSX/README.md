# Learning Components, Props, and JSX in React

This document provides a detailed overview of three fundamental concepts in React: **Components**, **Props**, and **JSX**.

---

## 1. Components

Components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces that can be managed separately.

- **Functional Components:** Defined as JavaScript functions. Example:
    ```jsx
    function Welcome() {
        return <h1>Hello, World!</h1>;
    }
    ```
- **Class Components:** Defined as ES6 classes (less common in modern React).
- **Reusability:** Components can be reused throughout your app, making code more maintainable.

---

## 2. Props

Props (short for "properties") are a way of passing data from parent to child components.

- **Usage:** Props are read-only and help make components dynamic.
- **Example:**
    ```jsx
    function Greeting(props) {
        return <h1>Hello, {props.name}!</h1>;
    }

    // Usage
    <Greeting name="Alice" />
    ```
- **Benefits:** Enable customization and reusability of components.

---

## 3. JSX

JSX (JavaScript XML) is a syntax extension for JavaScript, used with React to describe what the UI should look like.

- **Looks like HTML:** JSX allows you to write HTML-like code in your JavaScript files.
- **Example:**
    ```jsx
    const element = <h1>Welcome to React!</h1>;
    ```
- **Why JSX?** It makes code more readable and writing UI components easier.

---

## Summary

- **Components** organize and reuse UI code.
- **Props** pass data and make components dynamic.
- **JSX** simplifies writing and understanding UI structure.

---

## Further Reading

- [React Official Documentation](https://react.dev/)
- [Introducing JSX](https://react.dev/learn/writing-markup-with-jsx)
- [Components and Props](https://react.dev/learn/passing-props-to-a-component)
