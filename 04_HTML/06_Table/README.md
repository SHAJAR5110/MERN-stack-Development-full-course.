
# HTML Tables 

## Introduction
In this session, we explored the use of HTML tables to organize and present data in a structured format. Tables are essential for displaying tabular data like records, scores, and reports.

## What is a Table?
An HTML table consists of rows and columns. Each row is defined using `<tr>`, headers with `<th>`, and data cells with `<td>`. Tables can be customized using attributes like `border`, `colspan`, and `rowspan`.

## Examples Covered
- **Basic Table** with headers and rows.
- **Advanced Table** using `rowspan` and `colspan` to merge cells and improve layout.

## Homework
Students are assigned to create tables showing student records and practice using advanced features like merged rows and columns.



### ✅ What is `colspan`?

* **`colspan`** means:
  **“This cell should take up more than one column.”**

📦 Imagine a row with 3 boxes (columns).
If one box needs to stretch over 2 boxes, you use:

```html
<td colspan="2">Big Cell</td>
```

---

### ✅ What is `rowspan`?

* **`rowspan`** means:
  **“This cell should take up more than one row.”**

📦 Imagine 2 rows stacked on top of each other.
If a box should cover both rows vertically, use:

```html
<td rowspan="2">Tall Cell</td>
```



### 🎨 Visual Example:

#### 🔹 Using `colspan="2"`:

| Name | Marks in 2 Subjects |
| ---- | ------------------- |
| Ali  | Math + Science      |

#### 🔹 Using `rowspan="2"`:

| Name (2 rows) | Math | Science |
| ------------- | ---- | ------- |
| Ali           | 90   | 85      |
|               | 92   | 88      |



### 🧠 Think of it like this:

* **colspan = stretch sideways (left to right)**
* **rowspan = stretch vertically (top to bottom)**

