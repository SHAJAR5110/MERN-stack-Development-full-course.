# 🧪 First HTML Program: "Hello, World!"

## 🔹 What are HTML Tags?
HTML (HyperText Markup Language) uses tags to structure web content. Tags are keywords enclosed in angle brackets like < >.
**Example**
```
<p>This is a paragraph</p>
```

## 🔹 What are Opening and Closing Tags?
Opening tag: <tagname>

Closing tag: </tagname>
**Example**
```
<h1>Hello</h1>

```


## 🔹 What is <!DOCTYPE html>?
<!DOCTYPE html> tells the browser that this file is written in HTML5.
It should always be the first line of an HTML file.
**Example**
```
<!DOCTYPE html>
<html>
  ...
</html>

```

## 🔹 What is a <meta> tag?
The <meta> tag provides metadata (data about the page) to browsers and search engines.
It is written inside the <head> section.
**Example**
```
<meta charset="UTF-8">
<meta name="description" content="This is my personal website.">

```

## 🔹 Where does the <title> tag appear?
The <title> tag sets the name of the browser tab. It is written inside the <head> tag.
**Example**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> <!-- Character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive scaling -->
    <title>title</title> <!-- Page title in browser tab -->
</head>
<body>
    <!-- Your visible content goes here -->
</body>
</html>

```

## 🔹 Can we write outside the <body> tag?
❌ No, all visible content (like text, images, buttons, etc.) must be written inside the <body> tag.
Only metadata (like title, meta tags, etc.) is written inside <head>.



### ✅ Step 1: Boilerplate Code

Boilerplate means the **basic structure** of an HTML document. It always starts with this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> <!-- Character encoding -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive scaling -->
    <title>title</title> <!-- Page title in browser tab -->
</head>
<body>
    <!-- Your visible content goes here -->
</body>
</html>
```

This structure is **required** for every HTML document to work correctly in all modern browsers.

---

### ✅ Step 2: Write Your Code in the `<body>`

All content that should be **visible on the webpage** goes inside the `<body>` tag. Here's your complete **first program**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First Program</title>
</head>
<body>
    Hello, World!
</body>
</html>
```


### ✅ Step 2: How to Run the Code

1. Open **Visual Studio Code** (VS Code)
2. Create a new file called `index.html`
3. Paste the above code into the file and save it
4. **Right-click** on the file and choose **"Open with Live Server"**

   * If Live Server is not installed, you can install it from the Extensions tab (`Ctrl+Shift+X`)
5. The browser will open and show:

```
Hello, World!
```

If you don't use Live Server:

* Just **double-click** the HTML file
* It will open in your default browser and show the result

---

### ✅ Summary

* Always start with boilerplate code
* All visible content goes inside `<body>`
* Save your file with a `.html` extension
* Open the file in a browser to see the result


