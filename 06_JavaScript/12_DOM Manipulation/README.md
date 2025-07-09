# DOM Manipulation (CSS Elements) in JavaScript

## What is DOM Manipulation?

DOM (Document Object Model) manipulation refers to using JavaScript to dynamically change the structure, style, or content of a web page. When focusing on CSS elements, it means altering the appearance of HTML elements by modifying their styles.

## Why Manipulate CSS with JavaScript?

- **Dynamic Styling:** Change styles based on user actions (e.g., hover, click).
- **Interactive UI:** Show/hide elements, animate transitions, or highlight content.
- **Responsive Design:** Adjust styles based on device or window size.

## How to Manipulate CSS with JavaScript

### 1. Inline Style Changes

```js
const element = document.getElementById('myDiv');
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';
```

### 2. Adding/Removing CSS Classes

```js
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');
```

### 3. Accessing Computed Styles

```js
const styles = window.getComputedStyle(element);
console.log(styles.backgroundColor);
```

## Example

```html
<div id="myDiv">Hello World</div>
<button onclick="changeStyle()">Change Style</button>

<script>
    function changeStyle() {
        const div = document.getElementById('myDiv');
        div.style.color = 'white';
        div.style.backgroundColor = 'green';
        div.classList.toggle('highlight');
    }
</script>
```

---

By manipulating CSS through JavaScript, you can create more engaging and interactive web experiences.