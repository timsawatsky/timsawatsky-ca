# GEMINI.md - timsawatsky.ca Project Context

## Project Overview
This project is a personal website for **Tim Sawatsky**, designed as a "Digital Sanctuary" for reflections and resources related to spiritual direction and counselling. It is built using **Astro 6** with a focus on high performance, clean typography, and a "Warm Minimalist" aesthetic.

### Main Technologies:
- **Framework:** Astro 6 (Static Site Generation)
- **Styling:** Tailwind CSS 4 with `@tailwindcss/typography`
- **Content:** Markdown and MDX via Astro Content Collections (Astro 6 `glob` loader)
- **Typography:** *Lora* (Serif) for content, *Inter* (Sans-Serif) for UI
- **Integrations:** YouTube RSS feed for automated video embedding, Amazon Affiliate links for book reviews.

### Architecture:
- **`src/content/`**: Contains Markdown files for `blog` (reflections) and `reviews` (book reviews).
- **`src/layouts/`**: `BaseLayout.astro` provides the core design, including sticky navigation, "Micro-calm" fade-in transitions, and a professional footer.
- **`src/components/`**: Modular components like `YouTubeEmbed.astro`, `ReflectionCard.astro`, and `BookCard.astro`.
- **`src/pages/`**: Standard Astro pages (`index`, `about`, `blog/`, `reviews/`, `contact`, `rss.xml.js`).

## Building and Running
The project uses standard npm scripts defined in `package.json`.

- **Development Server:** `npm run dev` (Runs Astro's local development server with HMR).
- **Production Build:** `npm run build` (Generates a static site in the `dist/` directory).
- **Preview Build:** `npm run preview` (Serves the production build locally for verification).
- **Astro CLI:** `npm run astro -- [command]` (Access to Astro's built-in CLI tools).

## Development Conventions

### Content Management:
- **File Naming:** Blog posts and reviews should be lowercase with hyphens (e.g., `the-quiet-place.md`).
- **Frontmatter:** Rigorous adherence to the schema defined in `src/content.config.ts` is required for successful builds.
- **Dynamic Routing:** Routing uses `id` instead of `slug` to align with the Astro 6 Content Layer API.

### Styling & Aesthetics:
- **Grounded Sanctuary Palette:** Always use the custom theme variables defined in `src/styles/global.css` (`linen`, `charcoal`, `terracotta`, `sage`).
- **Transitions:** Content should be wrapped in the `.fade-in` class (standardized in `BaseLayout.astro`) to maintain the "Micro-calm" effect.
- **Prose:** Use Tailwind's `prose` classes for Markdown rendering, specifically `prose-stone` and `prose-lg` with custom `prose-headings` and `prose-a` overrides.

### Components:
- **YouTube:** The `YouTubeEmbed.astro` component requires a `CHANNEL_ID` to be configured for automatic updates.
- **Affiliate Links:** The `reviews/` detail pages include a specialized CTA section for Amazon affiliate links, triggered by the `amazonId` frontmatter property.
