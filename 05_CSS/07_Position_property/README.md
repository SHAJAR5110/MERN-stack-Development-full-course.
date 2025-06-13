# CSS `position` Property

The `position` property in CSS specifies how an element is positioned in a document. It affects the layout and stacking of elements on the page.

## Values of `position`

### 1. `static`
- **Default value.**
- Elements are positioned according to the normal flow of the document.
- `top`, `right`, `bottom`, and `left` have no effect.

```css
.element {
    position: static;
}
```

---

### 2. `relative`
- Element is positioned relative to its normal position.
- `top`, `right`, `bottom`, and `left` move the element from where it would normally be.

```css
.element {
    position: relative;
    top: 10px;
    left: 20px;
}
```

---

### 3. `absolute`
- Element is positioned relative to the nearest positioned ancestor (not `static`).
- If no such ancestor exists, it is positioned relative to the initial containing block (usually the `<html>` element).

```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 0;
    right: 0;
}
```

---

### 4. `fixed`
- Element is positioned relative to the browser window.
- Stays in the same place even when the page is scrolled.

```css
.element {
    position: fixed;
    bottom: 10px;
    right: 10px;
}
```

---

### 5. `sticky`
- Element toggles between `relative` and `fixed` depending on the scroll position.
- Useful for headers or navigation bars that stick to the top of the viewport.

```css
.element {
    position: sticky;
    top: 0;
}
```

---

## Stacking Context and `z-index`

- Positioned elements (`relative`, `absolute`, `fixed`, `sticky`) can use the `z-index` property to control stacking order.

```css
.element {
    position: absolute;
    z-index: 10;
}
```

---

## Summary Table

| Value     | Positioned Relative To         | Removed from Flow | Can Use `z-index` |
|-----------|-------------------------------|-------------------|-------------------|
| static    | Normal flow                   | No                | No                |
| relative  | Itself (normal position)      | No                | Yes               |
| absolute  | Nearest positioned ancestor   | Yes               | Yes               |
| fixed     | Viewport                      | Yes               | Yes               |
| sticky    | Scroll position (container)   | No                | Yes               |

---

## References

- [MDN: position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [CSS Tricks: Positioning](https://css-tricks.com/almanac/properties/p/position/)
