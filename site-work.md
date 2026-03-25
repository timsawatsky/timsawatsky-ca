# Site Documentation - timsawatsky.ca

## How to View Your Site Locally

Before publishing, you can see how your site looks by running these commands in your terminal:

### 1. View the Production Version (Highly Recommended)
This shows you EXACTLY what will be published. It serves the final files from the `dist/` directory.
```bash
npm run preview
```
- Open your browser to `http://localhost:4321/`

### 2. View the Development Version (For Editing)
Use this when you are writing new posts or changing the design. The site will update instantly in your browser as you save changes.
```bash
npm run dev -- --host
```
- Open your browser to `http://localhost:4321/`

### 3. View on Your Local Network
To see how your site looks from other devices (like a phone or another computer) on your network:
```bash
npm run preview -- --host
```
- Open your browser to `http://192.168.1.162:4321/` (using your local IP).

---

## How to Use Your Site

### 1. Adding a New Reflection (Blog Post)
- Create a new `.md` file in `src/content/blog/`.
- Use the following format for the top of the file (frontmatter):
```markdown
---
title: "Your Title Here"
description: "A short summary of your reflection."
pubDate: "2026-03-20"
tags: ["Silence", "Prayer"]
---
Your reflection content goes here...
```

### 2. Adding a New Book Review
- Create a new `.md` file in `src/content/reviews/`.
- Use the following format:
```markdown
---
title: "Book Title"
author: "Author Name"
description: "A brief overview of the book."
pubDate: "2026-03-20"
heroImage: "URL_TO_IMAGE"
amazonId: "AMAZON_ASIN_HERE"
rating: 5
tags: ["Counseling", "Book Review"]
---
Your review content goes here...
```

### 3. Activating the YouTube Feed
- Open `src/components/YouTubeEmbed.astro`.
- Find the line `const CHANNEL_ID = 'UCgwopAlppToMfcy9GC5Vi0Q';`.
- Your latest video is already configured to appear on the home page at build-time.

### 4. Building and Deploying
- Run `npm run build` to generate the static files in the `dist/` directory.
- Upload the contents of the `dist/` folder to your web host.

---

## Architectural Summary

### 1. Design Philosophy: "Digital Sanctuary"
- **Aesthetic:** Warm Minimalism using a grounded, nature-informed color palette.
- **Typography:** *Lora* (Serif) for a contemplative reading experience and *Inter* (Sans-Serif) for modern navigation.
- **Atmosphere:** "Micro-calm" fade-in transitions (0.8s) applied to all page loads for a peaceful feel.

### 2. Technology Stack
- **Framework:** Astro 6 (Static Site Generation) for industry-leading speed and security.
- **Styling:** Tailwind CSS 4 with the Typography plugin for beautiful, responsive text.
- **Content:** MDX-ready content collections using the modern `glob` loader.
- **Integrations:** 
    - YouTube RSS feed for automated video updates.
    - Amazon Affiliate integration for book reviews.
    - Automated RSS 2.0 feed generation (`/rss.xml`).

### 3. Key Components
- `BaseLayout.astro`: The master template providing the "Digital Sanctuary" shell.
- `YouTubeEmbed.astro`: Performance-optimized player that only loads when needed.
- `ReflectionCard.astro` & `BookCard.astro`: Visually distinct cards for browsing content.
- `Navigation.astro` & `Footer.astro`: Minimalist, "sticky" navigation and professional footer.

### 4. Page Structure
- `/`: Home page featuring the latest reflection, YouTube community link, and recent reviews.
- `/about`: Professional mission and bio.
- `/blog`: Reverse-chronological feed of all reflections.
- `/reviews`: A visual grid of recommended resources.
- `/contact`: Direct email link and social connections.
- `/rss.xml`: Automated feed for readers using RSS apps.

---

## How to Edit Your Content

### 1. Update the "About" Page
Open the file **`src/pages/about.astro`**.

*   **To change the picture:**
    Find the `<img>` tag (around line 17). 

    **Image Specifications:**
    - **Folder:** Place your new image in the `public/` folder (e.g., `public/profile.jpg`).
    - **Size:** I recommend **800 x 800 pixels** (or higher).
    - **Aspect Ratio:** The site is set to a **perfect square** (`aspect-square`).
    - **How to use it:** Change the `src` to `"/your-image.jpg"`.

*   **To change the content:**
    Edit the text within the `<h1>`, `<h2>`, and `<p>` tags. For example, you can rewrite your mission statement or personal history directly in the file.
*   **To change the contact email:**
    Scroll to the bottom of the file (around line 53) and update the `mailto:tim@timsawatsky.ca` link and the button text.

### 2. Update the Contact Email
Open the file **`src/pages/contact.astro`**.

*   Find the `<a>` tag (around line 20) and update both the `href="mailto:..."` and the text of the button to your preferred email address.

### 3. Replace or Delete the Book Review
Book reviews are stored as individual files in **`src/content/reviews/`**.

*   **To delete the example:** Simply delete the file `src/content/reviews/the-art-of-spiritual-direction.md`.
*   **To add your own:** 
    1. Create a new file in that same folder (e.g., `src/content/reviews/my-favorite-book.md`).
    2. Follow the format of the existing file. I recommend opening `the-art-of-spiritual-direction.md` first to copy its "Frontmatter" (the section between the `---` lines at the top), as Astro needs that data (title, author, date, etc.) to display the review correctly.

### 4. Add an Image to a Blog Post

To add a picture to a blog post, you have two primary options depending on whether you want the image to be "featured" (at the top/in cards) or just placed within the text.

*   **Step 1: Place the Image File**  
    Put your image (e.g., `my-photo.jpg`) into the `public/` folder. This makes it accessible at the root path `/my-photo.jpg`.

*   **Step 2: Option A - Add a "Hero" Image (Top of Post)**  
    Add a `heroImage` field to the top of your markdown file (the "frontmatter"):
    ```markdown
    ---
    title: "Your Post Title"
    heroImage: "/my-photo.jpg"
    pubDate: "2026-03-24"
    ---
    ```

*   **Step 3: Option B - Add an Image Inside the Content**  
    You can add images directly within the text of your post using standard Markdown or HTML:
    - **Markdown Style (Simple):**
      ```markdown
      ![A description of the image](/my-photo.jpg)
      ```
    - **HTML Style (For Custom Styling):**
      ```html
      <img src="/my-photo.jpg" alt="Description" class="rounded-3xl shadow-xl" />
      ```
