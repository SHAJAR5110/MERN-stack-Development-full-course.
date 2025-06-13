# CSS Size Units

CSS provides various units to define the size of elements. Understanding these units helps create responsive and consistent layouts.

## Absolute Units

Absolute units are fixed and do not scale with screen size.

| Unit | Description         | Example   |
|------|---------------------|-----------|
| px   | Pixels              | `width: 100px;` |
| pt   | Points (1/72 inch)  | `font-size: 12pt;` |
| pc   | Picas (1pc = 12pt)  | `width: 2pc;` |
| in   | Inches              | `width: 1in;` |
| cm   | Centimeters         | `width: 2cm;` |
| mm   | Millimeters         | `width: 10mm;` |

## Relative Units

Relative units scale based on other values, making layouts more flexible.

| Unit | Description                                   | Example   |
|------|-----------------------------------------------|-----------|
| em   | Relative to font-size of the element          | `font-size: 2em;` |
| rem  | Relative to font-size of the root element     | `font-size: 1.5rem;` |
| %    | Relative to parent element                    | `width: 50%;` |
| vw   | 1% of viewport width                          | `width: 50vw;` |
| vh   | 1% of viewport height                         | `height: 30vh;` |
| vmin | 1% of the smaller viewport dimension          | `font-size: 5vmin;` |
| vmax | 1% of the larger viewport dimension           | `font-size: 5vmax;` |
| ex   | x-height of the element's font                | `font-size: 2ex;` |
| ch   | Width of the "0" character in the font        | `width: 10ch;` |

## Usage Tips

- Use **relative units** (`em`, `rem`, `%`, `vw`, `vh`) for responsive design.
- Use **absolute units** (`px`, `cm`, etc.) for print or fixed-size elements.
- Prefer `rem` for consistent typography across components.

## Example

```css
.container {
    width: 80vw;
    font-size: 1.2rem;
    padding: 2em;
}
```

## References

- [MDN: CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [W3C: CSS Values and Units Module](https://www.w3.org/TR/css-values-4/)
