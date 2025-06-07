
# HTML Media Tags: Audio, Video, and Iframe

## Overview

HTML provides built-in support for embedding multimedia content such as **audio**, **video**, and **external web resources**. These capabilities are essential for creating rich, interactive web pages. This document provides a detailed explanation of the `audio`, `video`, and `iframe` HTML tags.

---

## 📢 `<audio>` Tag

### Purpose:

The `<audio>` tag is used to embed sound content in a web page, such as music, podcasts, sound effects, or voice recordings.

### Key Features:

* Supports multiple audio formats like `.mp3`, `.ogg`, and `.wav`.
* Provides controls like play, pause, volume, and duration (if the `controls` attribute is used).
* Can autoplay audio or loop it indefinitely.
* Can be muted by default using the `muted` attribute.

### Common Attributes:

* `src`: Specifies the audio file path.
* `controls`: Displays audio playback controls.
* `autoplay`: Starts playing automatically when the page loads.
* `loop`: Repeats the audio indefinitely.
* `muted`: Starts the audio in a muted state.
* `preload`: Informs the browser whether to load the audio file when the page loads.

---

## 🎬 `<video>` Tag

### Purpose:

The `<video>` tag is used to embed video content on a web page. It allows for native video playback in browsers without needing external plugins.

### Key Features:

* Supports video formats such as `.mp4`, `.webm`, and `.ogg`.
* Enables control over playback with the `controls` attribute.
* Can autoplay, loop, or start muted.
* Supports captioning and subtitles using `<track>` elements.

### Common Attributes:

* `src`: Path to the video file.
* `controls`: Displays video playback controls (play, pause, volume, etc.).
* `autoplay`: Starts playing the video when the page loads.
* `loop`: Repeats the video automatically.
* `muted`: Mutes the video on startup.
* `poster`: Displays an image before the video plays.
* `width` / `height`: Specifies the size of the video player.

---

## 🌐 `<iframe>` Tag

### Purpose:

The `<iframe>` (Inline Frame) tag is used to embed another HTML page or web resource (like YouTube videos, Google Maps, or another website) inside the current page.

### Key Features:

* Allows integration of external content without reloading the main page.
* Can be used for embedding documents, interactive maps, charts, or even full websites.
* Supports sandboxing for security and restricting permissions.

### Common Attributes:

* `src`: URL of the content to embed.
* `width` / `height`: Dimensions of the iframe.
* `title`: Describes the iframe content for accessibility.
* `frameborder` (deprecated): Specifies whether to display a border.
* `allowfullscreen`: Enables fullscreen support (especially for video content).
* `sandbox`: Restricts actions that the content inside the iframe can perform.
* `loading`: Controls lazy loading behavior (`lazy`, `eager`).

---

## Summary

| Tag        | Used For                   | Supports           | Common Use Cases                         |
| ---------- | -------------------------- | ------------------ | ---------------------------------------- |
| `<audio>`  | Playing sound              | mp3, wav, ogg      | Background music, sound effects          |
| `<video>`  | Displaying video           | mp4, webm, ogg     | Tutorials, trailers, media content       |
| `<iframe>` | Embedding external content | Any embeddable URL | Maps, YouTube videos, external web pages |

Each tag enhances the user's interaction with web content, making websites more dynamic and multimedia-rich.


