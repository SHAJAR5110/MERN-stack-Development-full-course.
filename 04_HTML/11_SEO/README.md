
# 🌐 HTML SEO & Head Section Essentials

This document explains the foundational elements of HTML `<head>` section to optimize web pages for SEO, appearance, and functionality.

---

## 📌 1. Introduction to SEO in HTML

**SEO (Search Engine Optimization)** is the practice of optimizing your webpage to rank higher in search engine results. HTML plays a big role in on-page SEO through:

- Relevant meta tags
- Page titles
- Structured content
- Responsive design meta tags

---

## 📝 2. Adding a Title

The `<title>` tag defines the **title of your web page**, shown in browser tabs and search engine results.

```html
<title>QuickEats - Fast Food Delivery in Pakistan</title>
````

* Keep it short and relevant
* Use keywords naturally

---

## 📎 3. Adding a Favicon

Favicons are small icons shown on browser tabs. They help with branding and user recognition.

```html
<link rel="icon" href="/images/favicon.ico" type="image/x-icon">
```

✅ Can be `.ico`, `.png`, or `.svg`

---

## 🎨 4. Linking a CSS Stylesheet

External CSS files keep your code modular and reusable.

```html
<link rel="stylesheet" href="styles.css">
```

* Place it in `<head>` for faster style loading
* Can link multiple stylesheets

---

## 💻 5. Linking a JavaScript File

JavaScript adds interactivity to your webpage.

```html
<script src="main.js" defer></script>
```

* Use `defer` to load after HTML parsing (recommended)
* Place before closing `</body>` if not using `defer`

---

## 🧠 6. SEO & Meta Tags

Meta tags give metadata about your webpage and are used by search engines and browsers.

Common tags include:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Order delicious food quickly with QuickEats. Enjoy fast delivery and top-rated restaurants near you.">
<meta name="keywords" content="QuickEats, food delivery, order food online, fast delivery Pakistan">
<meta name="author" content="QuickEats Team">
```

---

## ⚙️ 7. Emmet Boilerplate Meta Tag Decoding

Typing `! + Tab` in VS Code creates a standard HTML5 boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
</html>
```

**Explanation:**

* `charset="UTF-8"`: Supports all characters and symbols
* `X-UA-Compatible`: Makes sure it's compatible with IE
* `viewport`: Ensures mobile responsiveness

---

## 🔍 8. Additional Meta Tags

You can also add:

### Open Graph (for social sharing):

```html
<meta property="og:title" content="QuickEats - Order Food Fast">
<meta property="og:description" content="Hungry? Get your food delivered instantly!">
<meta property="og:image" content="https://quickeats.pk/og-image.jpg">
<meta property="og:url" content="https://quickeats.pk">
```

### Twitter Cards:

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="QuickEats - Fast Food Delivery">
<meta name="twitter:description" content="Delicious meals delivered to your doorstep.">
<meta name="twitter:image" content="https://quickeats.pk/twitter-card.jpg">
```

---

## ✅ Best Practices

* Always add `meta viewport` for mobile-friendly pages
* Keep titles and descriptions unique per page
* Use relevant, descriptive keywords
* Test your site with tools like [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## 📁 Summary of Tags in `<head>`

| Tag                         | Purpose                  |
| --------------------------- | ------------------------ |
| `<title>`                   | Page title               |
| `<meta charset>`            | Character encoding       |
| `<meta name="viewport">`    | Mobile responsiveness    |
| `<meta name="description">` | SEO description          |
| `<link rel="icon">`         | Favicon                  |
| `<link rel="stylesheet">`   | Link to CSS              |
| `<script src="...">`        | JavaScript functionality |

---
