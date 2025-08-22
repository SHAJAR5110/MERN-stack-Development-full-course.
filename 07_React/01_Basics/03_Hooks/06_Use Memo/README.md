# useMemo in React

## What is `useMemo`?

`useMemo` is a React Hook that allows you to memoize the result of a function. This means React will only recompute the value when its dependencies change, helping to optimize performance by avoiding unnecessary calculations on every render.

## Why do we use `useMemo`?

In React, components re-render whenever their state or props change. Sometimes, these re-renders can cause expensive computations to run repeatedly, even if the inputs to those computations haven't changed. `useMemo` helps prevent this by caching the result until the dependencies change.

## Syntax

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- The first argument is a function that returns the value you want to memoize.
- The second argument is an array of dependencies. The memoized value will only be recalculated when one of these dependencies changes.

## Best Use Cases

- **Expensive Calculations:** When you have a function that performs heavy computation (e.g., filtering a large list, complex math operations).
- **Referential Equality:** When you want to prevent unnecessary re-renders of child components by ensuring that props only change when necessary.
- **Optimizing Performance:** In cases where recalculating a value on every render would negatively impact performance.

## Example

```jsx
import React, { useMemo, useState } from 'react';

function ExpensiveComponent({ items }) {
    const [filter, setFilter] = useState('');

    const filteredItems = useMemo(() => {
        return items.filter(item => item.includes(filter));
    }, [items, filter]);

    return (
        <div>
            <input value={filter} onChange={e => setFilter(e.target.value)} />
            <ul>
                {filteredItems.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
}
```

## Why is `useMemo` Important?

- **Performance Optimization:** Prevents unnecessary recalculations and renders, especially in large or complex applications.
- **Efficient Resource Usage:** Helps keep your app responsive by reducing CPU usage for expensive operations.
- **Cleaner Code:** Makes intent clear when a value should only be recalculated under certain conditions.

## When Not to Use

- Avoid using `useMemo` for simple or cheap calculations, as it can add unnecessary complexity.
- Use it only when you notice performance issues due to expensive computations.

## Summary

`useMemo` is a powerful tool for optimizing React applications by memoizing expensive calculations and preventing unnecessary renders. Use it wisely to keep your components efficient and performant.