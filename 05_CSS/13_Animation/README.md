# CSS Animation

CSS Animation allows you to animate transitions from one CSS style configuration to another. It enhances user experience by making web pages more interactive and visually appealing.

## Key Concepts

### 1. Transitions vs Animations

- **Transitions:** Animate changes between two states (e.g., hover).
- **Animations:** Keyframe-based, allowing multiple intermediate steps.

---

## CSS Transitions

Transitions enable smooth changes between property values.

```css
.element {
    transition: property duration timing-function delay;
}
```

**Example:**
```css
.button {
    background: blue;
    transition: background 0.3s ease;
}
.button:hover {
    background: green;
}
```

---

## CSS Animations

Animations use `@keyframes` to define styles at various points.

### Syntax

```css
@keyframes animationName {
    0%   { /* initial styles */ }
    50%  { /* mid styles */ }
    100% { /* final styles */ }
}

.element {
    animation: animationName duration timing-function delay iteration-count direction fill-mode;
}
```

### Example

```css
@keyframes slideIn {
    from { transform: translateX(-100px); }
    to   { transform: translateX(0); }
}

.box {
    animation: slideIn 1s ease-in-out;
}
```

---

## Animation Properties

- `animation-name`: Name of the keyframes.
- `animation-duration`: How long the animation lasts.
- `animation-timing-function`: Speed curve (e.g., `linear`, `ease`).
- `animation-delay`: Wait before animation starts.
- `animation-iteration-count`: Number of times to repeat.
- `animation-direction`: Direction (`normal`, `reverse`, `alternate`).
- `animation-fill-mode`: How styles apply before/after (`none`, `forwards`, `backwards`, `both`).

---

## Best Practices

- Use animations to enhance, not distract.
- Keep performance in mind (prefer `transform` and `opacity`).
- Test on multiple devices/browsers.

---

## Resources

- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Tricks: Animation Guide](https://css-tricks.com/almanac/properties/a/animation/)
