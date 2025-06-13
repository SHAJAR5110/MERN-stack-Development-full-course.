# Flexbox in CSS

Flexbox (Flexible Box Layout) is a CSS layout model that allows you to design complex layouts with ease and distribute space dynamically between items in a container, even when their size is unknown or dynamic.

## Why Use Flexbox?

- Makes it easier to design flexible responsive layout structures.
- Aligns items both vertically and horizontally.
- Distributes space dynamically among items.
- Handles both small-scale and large-scale layouts.

## Flex Container and Flex Items

- **Flex Container:** The parent element with `display: flex` or `display: inline-flex`.
- **Flex Items:** The direct children of the flex container.

## Main Axis and Cross Axis

- **Main Axis:** The primary axis along which flex items are laid out (default: left to right).
- **Cross Axis:** Perpendicular to the main axis (default: top to bottom).

## Flex Container Properties

| Property           | Description                                               |
|--------------------|----------------------------------------------------------|
| `display`          | Defines a flex container (`flex` or `inline-flex`).      |
| `flex-direction`   | Sets the direction of the main axis (`row`, `column`, `row-reverse`, `column-reverse`). |
| `flex-wrap`        | Controls whether items wrap onto multiple lines (`nowrap`, `wrap`, `wrap-reverse`). |
| `flex-flow`        | Shorthand for `flex-direction` and `flex-wrap`.          |
| `justify-content`  | Aligns items along the main axis (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`). |
| `align-items`      | Aligns items along the cross axis (`stretch`, `flex-start`, `flex-end`, `center`, `baseline`). |
| `align-content`    | Aligns multiple lines along the cross axis (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`). |

## Flex Item Properties

| Property         | Description                                               |
|------------------|----------------------------------------------------------|
| `order`          | Controls the order of the flex item.                     |
| `flex-grow`      | Defines the ability to grow relative to other items.     |
| `flex-shrink`    | Defines the ability to shrink relative to other items.   |
| `flex-basis`     | Sets the initial main size of the item.                  |
| `flex`           | Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. |
| `align-self`     | Overrides `align-items` for individual items.            |

## Types of Flexbox Layouts

1. **One-dimensional Layouts**
    - Flexbox is designed for one-dimensional layouts, either as a row or a column.

2. **Main Axis Types**
    - **Row:** Items are placed horizontally (default).
    - **Row-reverse:** Items are placed horizontally in reverse order.
    - **Column:** Items are placed vertically.
    - **Column-reverse:** Items are placed vertically in reverse order.

3. **Wrapping Types**
    - **No Wrap:** All items are on a single line.
    - **Wrap:** Items wrap onto multiple lines.
    - **Wrap-reverse:** Items wrap onto multiple lines in reverse order.

## Example

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
```

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Resources

- [MDN Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [CSS Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
