# Blog Markdown Syntax Cheat Sheet

This guide shows you what you can do with your blog post formatting on [timsawatsky.ca](https://timsawatsky.ca).

---

## 1. Text Formatting

-   **Bold:** `**Bold text here**`
-   **Italic:** `*Italic text here*`
-   **Strikethrough:** `~~Strikethrough text here~~`
-   **Links:** `[Clickable Text](https://example.com)`

## 2. Headings

Use hashtags to create sections. In your blog posts, you should start with **H2** (two hashtags) for the main section titles.

```markdown
## This is a Main Section (H2)
### This is a Sub-Section (H3)
#### This is a smaller header (H4)
```

## 3. Lists

### Bullet Points
```markdown
- Item 1
- Item 2
  - Sub-item 2a
```

### Numbered Lists
```markdown
1. First step
2. Second step
3. Third step
```

## 4. Blockquotes

Perfect for highlighting scripture, quotes, or important thoughts:
```markdown
> "Get up and eat some more, or the journey ahead will be too much for you." 1 Kings 19:7
```

## 5. Horizontal Divider

Use three dashes to separate different sections visually:
```markdown
---
```

## 6. Images

### Basic Image
```markdown
![Alternative Text](/your-image.jpg)
```

### Image with Custom Style (Astro Feature)
To make your images look extra nice (like the ones in your current posts), you can use this HTML-style syntax:
```html
<img src="/your-image.jpg" alt="Description" class="rounded-3xl shadow-xl" />
```
*Note: This will give the image rounded corners and a soft shadow, matching your site's aesthetic.*

## 7. Code Blocks

To show a snippet of text or "code":
```markdown
`Short inline code`
```

Or for a whole block:
\```
Line 1
Line 2
\```

---

## 8. Tips for Your "Digital Sanctuary" Aesthetic:

1.  **Use Whitespace:** Don't be afraid to put extra line breaks between paragraphs. It makes the site feel more "calm."
2.  **Short Paragraphs:** Aim for 3-5 sentences max per paragraph to keep it readable on mobile phones.
3.  **Use Blockquotes for Scripture:** It helps important verses stand out from your own reflections.
