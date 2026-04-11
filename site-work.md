# Site Documentation - timsawatsky.ca

## How to Upload Changes to GitHub

Follow these steps in your terminal to save your work and update your live website:

1.  **Check your changes:**
    ```bash
    git status
    ```
2.  **Stage your changes:**
    ```bash
    git add .
    ```
3.  **Commit your changes:**
    ```bash
    git commit -m "Brief description of what you changed"
    ```
4.  **Push to GitHub:**
    ```bash
    git push
    ```
    *Note: Pushing to the main branch will automatically trigger a build and deploy your site to the web.*

---

## How to View Your Site Locally

Before publishing, you can see how your site looks by running these commands in your terminal:

### 1. Local Previews

*   **Production Version (Recommended):**
    This shows you EXACTLY what will be published by serving the final files from the `dist/` directory.
    *   **Command:** `npm run preview`
    *   **Access:** Open your browser to `http://localhost:4321/`

*   **Development Version (Editing):**
    Use this when you are writing new posts or changing the design. The site will update instantly as you save changes.
    *   **Command:** `npm run dev -- --host`
    *   **Access:** Open your browser to `http://localhost:4321/`

*   **Mobile/Network Testing:**
    To see how your site looks from other devices (like a phone) on your local network:
    *   **Command:** `npm run preview -- --host`
    *   **Access:** Open your browser to your local IP (e.g., `http://192.168.1.162:4321/`).

---

## How to Use Your Site

### 1. Adding Content

*   **New Reflection (Blog Post):**
    Create a new `.md` file in `src/content/blog/`.
    *   **Format:** Use the following template at the top of the file:
        ```markdown
        ---
        title: "Your Title Here"
        description: "A short summary of your reflection."
        pubDate: "2026-03-20"
        tags: ["Silence", "Prayer"]
        ---
        Your reflection content goes here...
        ```

*   **New Book Review:**
    Create a new `.md` file in `src/content/reviews/`.
    *   **Format:** Use the following template at the top of the file:
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

### 2. Management & Deployment

*   **YouTube Feed:**
    The latest video is configured to appear on the home page at build-time.
    *   **Configuration:** Found in `src/components/YouTubeEmbed.astro`.
    *   **Channel ID:** `UCgwopAlppToMfcy9GC5Vi0Q`

*   **Publishing the Site:**
    Follow these steps to generate the final website files:
    *   **Build:** Run `npm run build` to generate the `dist/` directory.
    *   **Upload:** Transfer the contents of the `dist/` folder to your web host.

---

## Architectural Summary

### 1. Design & Identity

*   **Digital Sanctuary:**
    A "Warm Minimalist" aesthetic using a grounded, nature-informed color palette.
    *   **Typography:** *Lora* (Serif) for reading and *Inter* (Sans-Serif) for UI.
    *   **Atmosphere:** "Micro-calm" fade-in transitions applied to all page loads.

*   **Technology Stack:**
    Built for speed and security using modern industry standards.
    *   **Framework:** Astro 6 (Static Site Generation).
    *   **Styling:** Tailwind CSS 4 with `@tailwindcss/typography`.
    *   **Integrations:** YouTube RSS feed and Amazon Affiliate links.

### 2. Page Structure

*   **Key Components:**
    Modular blocks used across the site:
    *   `BaseLayout.astro`: The master template shell.
    *   `YouTubeEmbed.astro`: Performance-optimized video player.
    *   `Navigation.astro` & `Footer.astro`: Global site headers and footers.

*   **Main Navigation:**
    *   `/`: Home page with latest content and YouTube link.
    *   `/about`: Professional mission and bio.
    *   `/blog`: Reverse-chronological feed of reflections.
    *   `/reviews`: Visual grid of recommended resources.
    *   `/contact`: Direct email and social links.

---

## How to Edit Your Content

### 1. Update Static Pages

*   **The "About" Page:**
    Open the file **`src/pages/about.astro`**.
    *   **Change Picture:** Find the `<img>` tag and update the `src`.
    *   **Image Specs:** Place in `public/`, recommended **800x800px** square.
    *   **Update Text:** Edit content within `<h1>`, `<h2>`, and `<p>` tags.
    *   **Change Email:** Update the `mailto:` link near the bottom of the file.

*   **The Contact Page:**
    Open the file **`src/pages/contact.astro`**.
    *   **Update Email:** Update the `href="mailto:..."` and the button text.

### 2. Manage Dynamic Content

*   **Edit Book Reviews:**
    Stored in **`src/content/reviews/`**.
    *   **Delete:** Remove the specific `.md` file from the folder.
    *   **Add:** Create a new `.md` file (copy frontmatter from an existing one).

*   **Add Images to Posts:**
    Place your image in the `public/` folder first.
    *   **Hero Image:** Add `heroImage: "/your-image.jpg"` to the frontmatter.
    *   **In-Text (Simple):** `![Description](/your-image.jpg)`
    *   **In-Text (Styled):** `<img src="/your-image.jpg" class="rounded-3xl shadow-xl" />`

### 3. Text Editing

*   **Static Templates:**
    For hard-coded text on the main pages:
    *   **Paths:** `src/pages/index.astro`, `about.astro`, or `contact.astro`.

*   **Article Content:**
    For blog posts and reviews stored as Markdown:
    *   **Paths:** `src/content/blog/` or `src/content/reviews/`.

*   **Global Elements:**
    For text that appears on every page (Headers/Footers):
    *   **Paths:** `src/components/Navigation.astro` or `Footer.astro`.
