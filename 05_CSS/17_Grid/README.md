# CSS Grid Layout

CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create complex layouts easily and efficiently.

---

## Key Concepts

- **Grid Container**: The element with `display: grid` or `display: inline-grid`.
- **Grid Items**: The direct children of the grid container.
- **Grid Lines**: The dividing lines that make up the structure of the grid.
- **Grid Tracks**: The space between two adjacent grid lines (rows or columns).
- **Grid Cell**: The space between two adjacent row and two adjacent column lines.
- **Grid Area**: Any rectangular area formed by grid cells.

---

## Basic Properties

### Container Properties

| Property             | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `display`            | Sets the element as a grid container (`grid` or `inline-grid`).             |
| `grid-template-rows` | Defines the row sizes.                                                      |
| `grid-template-columns` | Defines the column sizes.                                                |
| `grid-template-areas`| Defines named grid areas.                                                   |
| `grid-template`      | Shorthand for `grid-template-rows`, `grid-template-columns`, and `grid-template-areas`. |
| `grid-row-gap` / `row-gap` | Sets the gap between rows.                                            |
| `grid-column-gap` / `column-gap` | Sets the gap between columns.                                   |
| `grid-gap` / `gap`   | Shorthand for row and column gaps.                                          |
| `justify-items`      | Aligns grid items along the row (inline) axis.                              |
| `align-items`        | Aligns grid items along the column (block) axis.                            |
| `place-items`        | Shorthand for `align-items` and `justify-items`.                            |
| `justify-content`    | Aligns the whole grid along the row (inline) axis.                          |
| `align-content`      | Aligns the whole grid along the column (block) axis.                        |
| `place-content`      | Shorthand for `align-content` and `justify-content`.                        |
| `grid-auto-rows`     | Sets the size of implicitly created rows.                                   |
| `grid-auto-columns`  | Sets the size of implicitly created columns.                                |
| `grid-auto-flow`     | Controls how auto-placed items are inserted (row, column, dense).           |

### Item Properties

| Property             | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `grid-row-start`     | Line where the item starts on the row axis.                                 |
| `grid-row-end`       | Line where the item ends on the row axis.                                   |
| `grid-column-start`  | Line where the item starts on the column axis.                              |
| `grid-column-end`    | Line where the item ends on the column axis.                                |
| `grid-row`           | Shorthand for `grid-row-start` and `grid-row-end`.                          |
| `grid-column`        | Shorthand for `grid-column-start` and `grid-column-end`.                    |
| `grid-area`          | Assigns a name or specifies start/end lines for an item.                    |
| `justify-self`       | Aligns the item along the row (inline) axis.                                |
| `align-self`         | Aligns the item along the column (block) axis.                              |
| `place-self`         | Shorthand for `align-self` and `justify-self`.                              |

---

## Grid Types

1. **Explicit Grid**: Defined using `grid-template-rows` and `grid-template-columns`.
2. **Implicit Grid**: Created automatically when items are placed outside the explicit grid, controlled by `grid-auto-rows` and `grid-auto-columns`.

---

## Example

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 2fr;
    grid-template-rows: 100px auto;
    gap: 10px;
}
.item1 {
    grid-column: 1 / 3;
    grid-row: 1;
}
```

---

## Resources

- [MDN CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
