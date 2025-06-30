# JavaScript Overview

JavaScript is a versatile, high-level programming language primarily used to create interactive effects within web browsers. It is a core technology of the World Wide Web, alongside HTML and CSS. JavaScript enables dynamic content, control of multimedia, animated images, and much more, making web pages more engaging and functional.

## How to Connect JavaScript with HTML

There are several ways to connect JavaScript to an HTML document:

### 1. Inline JavaScript

You can write JavaScript code directly within an HTML element using the `onclick`, `onmouseover`, or other event attributes.

```html
<button onclick="alert('Hello, World!')">Click Me</button>
```

### 2. Internal JavaScript

JavaScript code can be placed inside a `<script>` tag within the HTML file, usually in the `<head>` or at the end of the `<body>` section.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Internal JavaScript Example</title>
    <script>
        function greet() {
            alert('Hello from internal JavaScript!');
        }
    </script>
</head>
<body>
    <button onclick="greet()">Greet</button>
</body>
</html>
```

### 3. External JavaScript

JavaScript code can be written in a separate `.js` file and linked to the HTML document using the `<script src="..."></script>` tag.

**HTML:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>External JavaScript Example</title>
    <script src="script.js"></script>
</head>
<body>
    <button onclick="greet()">Greet</button>
</body>
</html>
```

**script.js:**
```javascript
function greet() {
    alert('Hello from external JavaScript!');
}
```

## Types of JavaScript Integration

1. **Inline JavaScript:** Directly within HTML tags.
2. **Internal JavaScript:** Inside `<script>` tags in the HTML file.
3. **External JavaScript:** In separate `.js` files linked to HTML.

## Most Commonly Used Method

**External JavaScript** is the most widely used method. This approach separates the JavaScript code from the HTML, making the code easier to maintain, debug, and reuse. It also improves page loading speed by allowing browsers to cache the JavaScript file.

## Summary

- JavaScript is a powerful scripting language for web development.
- It can be connected to HTML in three main ways: inline, internal, and external.
- External JavaScript is preferred for better organization and maintainability.
