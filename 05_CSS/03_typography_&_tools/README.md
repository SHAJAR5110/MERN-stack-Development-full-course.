# CSS: Typography, Colors & Developer Tools

## Fonts

- Use `@import` or `<link>` to add Google Fonts.
- Example:
    ```css
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    body {
        font-family: 'Roboto', Arial, sans-serif;
    }
    ```

## Colors

- Define colors using HEX, RGB, or CSS variables.
- Example:
    ```css
    :root {
        --primary-color: #3498db;
        --secondary-color: #2ecc71;
        --text-color: #333;
    }
    body {
        color: var(--text-color);
        background: var(--primary-color);
    }
    ```

## Developer Tools

- **Browser DevTools**: Inspect elements, modify CSS live, debug layouts.
- **Extensions**: Use tools like *WhatFont* (font inspection) and **ColorZilla** (color picker).
- **Online Tools**:
    - [Google Fonts](https://fonts.google.com/)
    - [Colors](https://coolors.co/) for palettes
    - [CSS Gradient](https://cssgradient.io/) for gradients

---

**Tip:** Use DevTools (F12) to experiment with fonts and colors directly in your browser.