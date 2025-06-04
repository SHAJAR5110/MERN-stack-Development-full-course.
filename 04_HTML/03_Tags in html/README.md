## 🔰 What are Tags and Attributes in HTML?

### 🔹 HTML Tags

Tags are the building blocks of an HTML document. They define the structure and content of a webpage. Tags are written inside angle brackets `<>`.

* Example:

```html
<p>This is a paragraph.</p>
```

Here, `<p>` is the opening tag and `</p>` is the closing tag.

### 🔹 HTML Attributes

Attributes provide **additional information** about HTML elements. They are placed inside the opening tag.

* Example:

```html
<img src="image.jpg" alt="My Image">
```

Here, `src` and `alt` are attributes of the `<img>` tag.

---

## Tag Categorisation

HTML tags can be categorized into:

1. **Paired Tags** - Have both opening and closing tags.

   * Example: `<div> ... </div>`
2. **Unpaired (Self-Closing) Tags** - Do not have a closing tag.

   * Example: `<img />`, `<br />`, `<hr />`
3. **Block-level Tags** - Occupy full width and start on a new line.

   * Example: `<div>`, `<p>`, `<h1>`
4. **Inline Tags** - Occupy only as much width as necessary.

   * Example: `<span>`, `<a>`, `<strong>`

---

## Semantic Tags

Semantic tags clearly describe their meaning to both the browser and developer.

* Examples:

  * `<header>`: Defines the header section.
  * `<nav>`: Defines navigation links.
  * `<main>`: The main content area.
  * `<section>`: A section of related content.
  * `<article>`: A self-contained piece of content.
  * `<footer>`: The footer section.

These improve SEO and accessibility.

---

## Formatting Tags

These tags are used to format and style text.

* Common Formatting Tags:

  * `<b>`: Bold text
  * `<strong>`: Important text (semantically bold)
  * `<i>`: Italic text
  * `<em>`: Emphasized text (semantically italic)
  * `<mark>`: Highlighted text
  * `<u>`: Underlined text
  * `<small>`: Smaller text
  * `<sup>`: Superscript text
  * `<sub>`: Subscript text

---

## Structural Tags

Used to define the layout and structure of the webpage.

* Key Structural Tags:

  * `<html>`: Root of the document
  * `<head>`: Metadata and links
  * `<title>`: Title of the page
  * `<body>`: Content visible to users
  * `<header>`, `<main>`, `<footer>`: Structural layout

---

## Tag vs Element

* **Tag** is just the keyword enclosed in `< >`, like `<p>` or `</p>`.
* **Element** includes everything: opening tag, content, and closing tag.

**Example:**

```html
<p>This is a paragraph.</p>
```

Here:

* `<p>` is the tag
* `<p>This is a paragraph.</p>` is the element


