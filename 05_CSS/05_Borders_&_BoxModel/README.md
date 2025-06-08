# 📦 CSS Layout Essentials

This guide explains essential CSS layout properties and concepts every beginner should know: **Borders**, **Height & Width**, the **CSS Box Model**, **Padding**, **Margin**, and the **Universal Selector**.

---

## 🟦 Border

The `border` property allows you to define a border around an element.

### 📌 Example:
```css
div {
  border: 2px solid black;
}
````

> You can customize the `border-width`, `border-style`, and `border-color`.

---

## 📏 Height & Width

Use `height` and `width` to control the size of an element.

### 📌 Example:

```css
div {
  width: 200px;
  height: 150px;
}
```

> You can also use `%`, `vw`, or `vh` for responsive sizing.

---

## 📦 CSS Box Model

The **Box Model** describes how elements are structured in the browser:

```
| Margin |
|--------|
| Border |
|--------|
| Padding|
|--------|
| Content|
```

### Components:

* **Content**: Actual text/image inside the box.
* **Padding**: Space between content and border.
* **Border**: The edge line of the element.
* **Margin**: Space outside the border (gap between elements).

---

## 📐 Padding

Padding is the space **inside** the border and **around the content**.

### 📌 Example:

```css
div {
  padding: 20px;
}
```

> You can also use `padding-top`, `padding-right`, etc.

---

## ↔️ Margin

Margin is the space **outside** the border. It separates elements from one another.

### 📌 Example:

```css
div {
  margin: 30px;
}
```

> You can also use `margin-top`, `margin-left`, etc.

---

## 🌐 Universal Selector

The `*` (universal selector) selects **all** elements on the page. Often used to reset or normalize styles.

### 📌 Example:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

> Helps avoid unexpected spacing issues caused by default browser styles.

---

## ✅ Summary Table

| Property         | Purpose                                 |
| ---------------- | --------------------------------------- |
| `border`         | Draws a line around the element         |
| `height`/`width` | Sets size of the element box            |
| `padding`        | Inner space between content and border  |
| `margin`         | Outer space between elements            |
| `box model`      | Describes element layout structure      |
| `*` selector     | Applies styles to all elements globally |

---

📘 Mastering these will give you full control over layout and spacing in your web projects!

