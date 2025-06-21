# CSS Transform: 2D & 3D

## 2D Transforms

2D transforms allow you to manipulate elements on the X and Y axes.

### Common 2D Transform Functions

- `translate(x, y)`: Moves an element from its current position.
- `rotate(angle)`: Rotates an element clockwise or counterclockwise.
- `scale(x, y)`: Scales the element’s width and height.
- `skew(x-angle, y-angle)`: Skews the element along the X and Y axes.
- `matrix(a, b, c, d, e, f)`: Combines all 2D transform methods into one.

**Example:**
```css
.box {
    transform: translate(50px, 20px) rotate(15deg) scale(1.2, 1.2);
}
```

---

## 3D Transforms

3D transforms add depth by manipulating elements along the Z axis.

### Common 3D Transform Functions

- `rotateX(angle)`: Rotates around the X-axis.
- `rotateY(angle)`: Rotates around the Y-axis.
- `rotateZ(angle)`: Rotates around the Z-axis.
- `translateZ(z)`: Moves the element along the Z-axis.
- `scaleZ(z)`: Scales the element along the Z-axis.
- `perspective(n)`: Defines the perspective from which the 3D element is viewed.

**Example:**
```css
.cube {
    transform: perspective(500px) rotateY(45deg) translateZ(50px);
}
```

---

## Resources

- [MDN: CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [CSS Tricks: 2D & 3D Transforms](https://css-tricks.com/almanac/properties/t/transform/)