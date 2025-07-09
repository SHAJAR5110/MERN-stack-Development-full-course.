# All About Events & Listeners in JavaScript

## What are Events?

Events are actions or occurrences that happen in the browser, such as user interactions (clicks, key presses), browser actions (page load, resize), or other activities.

## Why Use Event Listeners?

Event listeners allow you to execute code in response to specific events, making your web pages interactive and dynamic.

## How to Use Event Listeners

### 1. Inline Event Handlers

```html
<button onclick="alert('Button clicked!')">Click Me</button>
```

### 2. Using JavaScript

```js
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    alert('Button clicked!');
});
```

### 3. Removing Event Listeners

```js
function handleClick() {
    alert('Clicked!');
}
btn.addEventListener('click', handleClick);
// To remove:
btn.removeEventListener('click', handleClick);
```

## Common Event Types

- `click`
- `mouseover`
- `keydown`
- `submit`
- `load`
- `resize`

## Best Practices

- Use `addEventListener` for flexibility and separation of concerns.
- Remove listeners when not needed to avoid memory leaks.
- Use event delegation for dynamic elements.

---

**Summary:**  
Events and listeners are fundamental for interactive web applications. Mastering them is key to effective JavaScript development.