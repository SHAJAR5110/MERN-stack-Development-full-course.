# 🧾 CSS Writing Types – Inline, Internal, and External

CSS (Cascading Style Sheets) can be written in three different ways depending on how and where you apply the styles. Each method has its own use case depending on the project size, structure, and maintainability needs.

Tip: For most real-world projects, **External CSS** is preferred due to scalability and maintainability.


---

## 1️⃣ Inline CSS

### 📌 What is it?
Inline CSS is written directly inside an HTML tag using the `style` attribute.

### ✅ When to use:
- For quick testing
- When applying a unique style to a single element

### ❌ Avoid if:
- You need to style multiple elements (becomes hard to manage)

### 💡 Example:
```html
<p style="color: red; font-size: 18px;">This is an inline styled paragraph.</p>
```

---

## 2️⃣ Internal CSS

### 📌 What is it?

Internal CSS is placed within a `<style>` tag inside the `<head>` section of the HTML document.

### ✅ When to use:

* When you need to style a single HTML page

### ❌ Avoid if:

* You have multiple pages to style (repetition)

### 💡 Example:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: gray;
    }
  </style>
</head>
<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph with internal CSS.</p>
</body>
</html>
```

---

## 3️⃣ External CSS

### 📌 What is it?

External CSS is written in a separate `.css` file and linked to the HTML using the `<link>` tag.

### ✅ When to use:

* For large or multi-page websites
* When you want reusability and cleaner code

### ❌ Avoid if:

* You're working on a very small project with no file structure

### 💡 Example:

#### 📁 File: `style.css`

```css
h2 {
  color: green;
  font-family: Arial, sans-serif;
}
```

#### 📄 File: `index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>This heading is styled using external CSS.</h2>
</body>
</html>
```

---

## 🧠 Summary

| Type     | Location             | Use Case                           | Maintainability  |
| -------- | -------------------- | ---------------------------------- | ---------------- |
| Inline   | Inside HTML element  | Quick fixes, single element        | ❌ Hard to manage |
| Internal | `<style>` tag        | Single-page styling                | ⚠️ Moderate      |
| External | Separate `.css` file | Multi-page projects, best practice | ✅ Easy to manage |

> 🎯 Tip: For most real-world projects, **External CSS** is preferred due to scalability and maintainability.


