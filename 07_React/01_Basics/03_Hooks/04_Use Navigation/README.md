# useNavigation Hook in React

## What is `useNavigation`?

The `useNavigation` hook is a part of React Router (v6.4+). It provides information and utilities related to navigation events in your application, such as pending navigation states.

## Why Do We Use `useNavigation`?

- To detect when a navigation is in progress (e.g., loading a new route).
- To show loading indicators or disable UI elements during navigation.
- To improve user experience by providing feedback during route changes.

## How is it Helpful?

- **Loading States:** Easily manage loading states when navigating between pages.
- **UI Feedback:** Prevent multiple navigations or actions while a route is loading.
- **Better UX:** Inform users that something is happening in the background.

## Example Usage

```jsx
import { useNavigation } from "react-router-dom";

function MyComponent() {
    const navigation = useNavigation();

    return (
        <div>
            {navigation.state === "loading" ? (
                <p>Loading...</p>
            ) : (
                <p>Content loaded.</p>
            )}
        </div>
    );
}
```

## Summary

The `useNavigation` hook helps you manage and respond to navigation events in React Router applications, making it easier to provide a smooth and responsive user experience.