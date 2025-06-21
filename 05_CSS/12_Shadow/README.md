# CSS Shadow Effects

CSS provides powerful shadow effects that can enhance the appearance of elements on your web pages. The two main types of shadows in CSS are **Box Shadow** and **Text Shadow**.

---

## 1. Box Shadow

The `box-shadow` property adds shadow effects around an element's frame. You can create single or multiple shadows, and control their color, blur, spread, and position.

### Syntax

```css
box-shadow: offset-x offset-y blur-radius spread-radius color;
```

- **offset-x**: Horizontal shadow position (positive = right, negative = left)
- **offset-y**: Vertical shadow position (positive = down, negative = up)
- **blur-radius**: (Optional) Blur distance (higher = more blurred)
- **spread-radius**: (Optional) Size of the shadow
- **color**: Shadow color

### Example

```css
.box {
    width: 200px;
    height: 100px;
    background: #fff;
    box-shadow: 4px 4px 15px 0px rgba(0,0,0,0.3);
}
```

**Result:**

<div style="width:200px;height:100px;background:#fff;box-shadow:4px 4px 15px 0px rgba(0,0,0,0.3);margin-bottom:10px;"></div>

### Multiple Shadows

You can add multiple shadows by separating them with commas:

```css
box-shadow: 2px 2px 5px #888, 0 0 10px #f00;
```

---

## 2. Text Shadow

The `text-shadow` property adds shadow to text, making it stand out or giving it a 3D effect.

### Syntax

```css
text-shadow: offset-x offset-y blur-radius color;
```

- **offset-x**: Horizontal shadow position
- **offset-y**: Vertical shadow position
- **blur-radius**: (Optional) Blur distance
- **color**: Shadow color

### Example

```css
h1 {
    text-shadow: 2px 2px 5px #888;
}
```

**Result:**

<span style="font-size:2em;text-shadow:2px 2px 5px #888;">Text Shadow Example</span>

### Multiple Shadows

You can also add multiple text shadows:

```css
text-shadow: 1px 1px 2px #000, 0 0 25px #0ff, 0 0 5px #00f;
```

---

## Tips

- Use `rgba()` for semi-transparent shadows.
- Shadows can impact performance if overused.
- Experiment with different values for creative effects.

---

## References

- [MDN: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [MDN: text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)

---