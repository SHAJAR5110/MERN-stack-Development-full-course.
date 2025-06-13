# Media Queries in CSS

Media queries are a fundamental part of responsive web design. They allow you to apply CSS styles based on the characteristics of the device or viewport, such as its width, height, orientation, and resolution.

## Syntax

```css
@media media-type and (condition) {
    /* CSS rules */
}
```

- **media-type**: Optional. Common types are `all`, `screen`, `print`, etc.
- **condition**: One or more expressions that evaluate to true or false.

## Common Media Features

- `width` / `min-width` / `max-width`
- `height` / `min-height` / `max-height`
- `orientation` (`portrait` or `landscape`)
- `resolution`
- `aspect-ratio`

## Example

```css
/* Apply styles for screens smaller than 600px */
@media (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}

/* Apply styles for landscape orientation */
@media (orientation: landscape) {
    body {
        font-size: 1.2em;
    }
}
```

## Combining Media Queries

You can combine multiple conditions using `and`, `,` (comma for OR), and `not`.

```css
@media screen and (min-width: 768px) and (max-width: 1024px) {
    /* Styles for tablets */
}
```

## Responsive Design Workflow

1. Start with a mobile-first approach using base styles.
2. Add media queries to adjust layouts for larger screens.
3. Test across devices and viewports.

## Useful Tips

- Use `em` or `rem` units for breakpoints to respect user settings.
- Keep media queries organized and grouped logically.
- Test with browser developer tools for different device sizes.

## Resources

- [MDN Web Docs: Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [CSS Tricks: A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
