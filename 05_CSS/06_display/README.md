# 📘 CSS Display Property – Beginner Guide

The **`display`** property in CSS determines how an element is visually rendered on the webpage — whether it's a block, inline, or inline-block element.

---

## 🔹 display: block

- Elements with `display: block` start on a new line and take up the full width available.
- Common block elements: `<div>`, `<h1>` to `<h6>`, `<p>`, `<section>`, etc.

📌 Characteristics:
- Starts on a new line.
- Takes 100% width of the parent container.
- You can set `width`, `height`, `margin`, `padding`.

---

## 🔸 box-sizing: border-box

- The `box-sizing` property controls how the total size of an element is calculated.
- With `box-sizing: border-box`, padding and border are included in the element's total width and height.

📌 Example:
If `width: 200px; padding: 10px; border: 2px;`, then the final box remains `200px` wide (not 224px).

✅ Recommended for consistent layouts and responsive design.

---

## 🔹 display: inline

- Elements with `display: inline` do **not** start on a new line.
- They only take up as much width as needed.

📌 Characteristics:
- Flows within a line like text.
- Width and height cannot be set.
- Padding and margin apply horizontally only.

Common inline elements: `<span>`, `<a>`, `<strong>`, `<em>`, etc.

---

## 🔄 Inline vs Block

| Feature       | Block Elements       | Inline Elements        |
|---------------|----------------------|------------------------|
| Line Break    | Yes                  | No                     |
| Width/Height  | Can be set           | Cannot be set          |
| Full Width    | Takes full width     | Takes content width    |
| Common Tags   | `<div>`, `<p>`       | `<span>`, `<a>`        |

---

## 🔹 display: inline-block

- Combines features of `inline` and `block`.
- Sits inline with other content but **can have width, height, padding, and margin** like a block element.

📌 Use Case:
Good for layouts where you want elements to sit side by side but also be box-like (e.g., buttons, cards in a row).

---

## ✅ Summary

- Use `block` for major layout elements.
- Use `inline` for flowing text or small elements.
- Use `inline-block` when you need block-level control without breaking lines.
- Use `box-sizing: border-box` for more predictable sizing.

---
