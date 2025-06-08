
# 🎯 Using ID and Class in External CSS

When writing CSS in an external `.css` file, you can **target specific elements** using `id` and `class` attributes in your HTML. These are powerful selectors for applying styles efficiently and cleanly.

> 📌 Tip: Use **classes** for styling multiple elements and **IDs** for single, specific items (like a banner or main title).

---

## 🔹 ID Selector

### 📌 What is it?
An `id` is a unique identifier for a single HTML element.

- ✅ Use when styling only **one specific element**
- ❗ Must be **unique** on a page

### 🧠 Syntax in CSS:
```css
#myElement {
  color: red;
  font-weight: bold;
}
```

### 🧾 Usage in HTML:

```html
<h1 id="myElement">This heading uses an ID selector</h1>
```

---

## 🔸 Class Selector

### 📌 What is it?

A `class` is a reusable label that can be assigned to **multiple elements**.

* ✅ Use when styling **many elements** with the same style

### 🧠 Syntax in CSS:

```css
.card {
  background-color: lightgray;
  padding: 10px;
  border-radius: 5px;
}
```

### 🧾 Usage in HTML:

```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
```

---

## ✅ External CSS Example

### 📄 style.css

```css
#main-title {
  font-size: 24px;
  color: navy;
}

.button {
  background-color: green;
  color: white;
  padding: 8px 16px;
  border: none;
}
```

### 📁 index.html

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 id="main-title">Welcome to My Website</h1>
  <button class="button">Click Me</button>
  <button class="button">Submit</button>
</body>
</html>
```

---

## 🧠 Key Differences

| Selector | Symbol | Unique | Reusable | Usage           |
| -------- | ------ | ------ | -------- | --------------- |
| ID       | `#`    | ✅ Yes  | ❌ No     | `#idname {}`    |
| Class    | `.`    | ❌ No   | ✅ Yes    | `.classname {}` |

> 📌 Tip: Use **classes** for styling multiple elements and **IDs** for single, specific items (like a banner or main title).

