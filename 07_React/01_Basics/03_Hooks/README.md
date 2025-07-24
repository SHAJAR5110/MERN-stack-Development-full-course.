# React Hooks Overview

React Hooks are functions that let you use state and other React features in functional components. Introduced in React 16.8, they simplify code and encourage reusable logic.

## Basic Hooks

### 1. `useState`
- **Purpose:** Add state to functional components.
- **Use Case:** Track values like form inputs, toggles, counters.
- **Example:**  
    ```js
    const [count, setCount] = useState(0);
    ```

### 2. `useEffect`
- **Purpose:** Perform side effects (data fetching, subscriptions, DOM updates).
- **Use Case:** Fetch API data, set up event listeners, update document title.
- **Example:**  
    ```js
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    ```

### 3. `useContext`
- **Purpose:** Access context values without `<Context.Consumer>`.
- **Use Case:** Theme, authentication, language settings.
- **Example:**  
    ```js
    const theme = useContext(ThemeContext);
    ```

## Additional Hooks

### 4. `useReducer`
- **Purpose:** Manage complex state logic.
- **Use Case:** Multiple related state values, state transitions.
- **Example:**  
    ```js
    const [state, dispatch] = useReducer(reducer, initialState);
    ```

### 5. `useCallback`
- **Purpose:** Memoize callback functions.
- **Use Case:** Prevent unnecessary re-renders, optimize child components.
- **Example:**  
    ```js
    const memoizedCallback = useCallback(() => { /* ... */ }, [deps]);
    ```

### 6. `useMemo`
- **Purpose:** Memoize expensive calculations.
- **Use Case:** Optimize performance for heavy computations.
- **Example:**  
    ```js
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```

### 7. `useRef`
- **Purpose:** Access mutable values, DOM nodes.
- **Use Case:** Focus input, store interval IDs, persist values.
- **Example:**  
    ```js
    const inputRef = useRef(null);
    ```

### 8. `useImperativeHandle`
- **Purpose:** Customize instance value exposed to parent via `ref`.
- **Use Case:** Expose imperative methods from child components.
- **Example:**  
    ```js
    useImperativeHandle(ref, () => ({ focus: () => { /* ... */ } }));
    ```

### 9. `useLayoutEffect`
- **Purpose:** Like `useEffect`, but fires synchronously after DOM mutations.
- **Use Case:** Read layout, measure DOM nodes.
- **Example:**  
    ```js
    useLayoutEffect(() => { /* ... */ }, []);
    ```

### 10. `useDebugValue`
- **Purpose:** Display custom hook values in React DevTools.
- **Use Case:** Debugging custom hooks.
- **Example:**  
    ```js
    useDebugValue(value);
    ```

## Custom Hooks

- **Purpose:** Reuse stateful logic across components.
- **Use Case:** Form handling, data fetching, authentication.
- **Example:**  
    ```js
    function useCustomHook() { /* ... */ }
    ```

---

**References:**
- [React Docs: Hooks](https://react.dev/reference/react)
- [React Docs: Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)