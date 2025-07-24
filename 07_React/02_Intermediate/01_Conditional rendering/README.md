# Conditional Rendering in React

Conditional rendering in React allows you to render different UI elements or components based on certain conditions. This is useful for displaying content dynamically depending on the application's state or props.

Below are four common ways to implement conditional rendering in React, along with code examples and use cases.

---

## 1. If-Else Statement

**Use Case:** Show a login button if the user is not logged in, otherwise show a logout button.

```jsx
function AuthButton({ isLoggedIn }) {
    if (isLoggedIn) {
        return <button>Logout</button>;
    } else {
        return <button>Login</button>;
    }
}
```

---

## 2. Ternary Operator

**Use Case:** Display a personalized greeting based on user status.

```jsx
function Greeting({ isMember }) {
    return (
        <h1>
            {isMember ? 'Welcome back, Member!' : 'Welcome, Guest!'}
        </h1>
    );
}
```

---

## 3. Logical && Operator

**Use Case:** Show a warning message only if there is a warning.

```jsx
function Warning({ hasWarning }) {
    return (
        <div>
            {hasWarning && <p style={{color: 'red'}}>Warning: Something went wrong!</p>}
        </div>
    );
}
```

---

## 4. Early Return

**Use Case:** Prevent rendering of a component if required data is missing.

```jsx
function UserProfile({ user }) {
    if (!user) {
        return null; // Nothing is rendered
    }
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}
```

---

Conditional rendering helps create dynamic and interactive user interfaces in React applications.