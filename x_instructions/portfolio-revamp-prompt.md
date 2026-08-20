PROMPT FOR OPENCODE / BIG PICKLE — PASTE EVERYTHING BELOW THIS LINE
====================================================================

# ROLE

You are working directly inside my existing static portfolio website project (root folder `Joe_Portfolio2026`). It is a vanilla HTML/CSS/JS site — no framework, no build step. The three core files are `index.html`, `styles.css`, and `script.js`, plus asset folders `Elements/`, `SVG Logos/`, and root images like `Billy ID.jpg`.

This is a full implementation brief for a major revamp. Everything you need is specified below — data, copy, file structure, and design direction. Do not stop to ask me clarifying questions; make the reasonable implementation call, note it in a short summary at the end, and keep going. Read this entire brief before writing any code.

---

# PART A — CURRENT CODEBASE FACTS (ground truth, verified — don't re-derive, just use)

- `index.html` renders 11 sections via IDs: `hero`, `work` (Featured Artworks), `showcases` (Project Showcases), `videoEdits` (Color Grading Projects — static, not JS-driven), `aiVideos` (AI Videos & Motion), `aiGirls` (AI Fashion Models — **to be renamed**, see Part I), `gallery` (Gallery & Moodboard), `about`, `services`, `tools` (Softwares & Tools — **to be redesigned**, see Part B), `contact`.
- `script.js` holds one big `defaultData` object with arrays: `featured`, `aiGirlModels`, `gallery`, `showcases`, `aiVideos`, `services`, plus `profile`, `social`, `about` objects. A `loadData()` function overlays `localStorage` (`portfolio_profile`, `portfolio_social`, `portfolio_services`, `portfolio_aiVideos`, `portfolio_about`) on top of these defaults. **`featured`, `gallery`, `aiGirlModels`, and `showcases` intentionally always load from defaults, never localStorage.**
- Render functions: `renderProfile()`, `renderSocial()`, `renderFeatured()`, `renderShowcases()`, `renderAIGirlModels()`, `renderGallery()`, `renderServices()`, `renderAIVideos()`.
- Shared lightbox: `openLightbox(index, galleryArray, title, tools)`, `closeLightbox()`, `nextImage()`, `prevImage()`, `updateLightboxContent()`, `isVideoFile(src)`. It works off a `currentGallery` array reference and is reused by every clickable grid.
- `.gallery-grid` (used by both the AI Girls grid and the Moodboard grid) is a **CSS column-count masonry** (`column-count: 4/3/2/1` across breakpoints) — this is the "staggered Pinterest style" I want kept.
- `.btn`, `.btn-primary`, `.btn-secondary` already exist in `styles.css` (`.btn-secondary` = transparent, outlined, hover shifts border/text to orange). Reuse `.btn-secondary` for new "View All / View Full Gallery" secondary CTAs instead of inventing a new button style.
- Design tokens already defined in `:root` — **use these, don't hardcode new colors**: `--bg-primary`, `--bg-secondary`, `--bg-tertiary`, `--text-primary`, `--text-secondary`, `--accent-pink`, `--accent-orange`, `--accent-red`, `--accent-yellow`, `--gradient-brand`, `--gradient-hover`, `--border-radius`, `--border-radius-lg`, `--transition`.
- ⚠️ I noticed CSS classes `.btn-danger` and `.login-card` already exist in `styles.css`, and `loadData()` reads specific `localStorage` keys. This strongly suggests there is an **admin/editor page elsewhere in this project folder** (not shown to you in this brief) that writes to those same `localStorage` keys. **Before renaming any data keys, IDs, or render functions referenced below, search the full project directory for any admin/editor HTML/JS file and update it in tandem so it doesn't break.** If no such file exists, ignore this note.
- Responsive breakpoints already used throughout: `1024px`, `768px`, `480px`. Match these on all new pages/components.

---

# PART B — NEW SITE ARCHITECTURE (read before writing any files)

The site is becoming a small multi-page site instead of one long scroll. **Keep all new pages at the project root**, next to `index.html` (do NOT put them in a subfolder — every asset path like `Elements/...` and `SVG Logos/...` is relative to root and would break otherwise).

Create these new root-level pages:
1. `ai-videos.html` — full AI Videos & Motion collection
2. `photography-gallery.html` — full Gallery & Moodboard (photography) collection, with category tabs
3. `graphic-design-gallery.html` — full flattened graphic design gallery (see Part D)
4. `ai-avatars-gallery.html` — full AI Avatars collection (see Part F — this one is my addition to your list of 4, reasoning below)

**Refactor the JS into shared modules so data lives in exactly one place:**
- `data.js` — the single source of truth. Move the entire (updated) `defaultData` object here as a global `portfolioData` object (or `const`, your call on exact syntax), including the new/renamed arrays described in Parts C–I. Every page loads this file first.
- `lightbox.js` — extract the existing lightbox functions (`openLightbox`, `closeLightbox`, `nextImage`, `prevImage`, `updateLightboxContent`, `isVideoFile`) so any page can include it and reuse the exact same lightbox markup/behavior. The lightbox HTML block (`#lightbox`, `#lightboxImage`, `#lightboxVideo`, etc.) needs to exist on every page that shows clickable media (homepage + all 4 new pages).
- `nav.js` — extract the mobile menu toggle and scroll-spy logic so every page shares identical nav behavior. Scroll-spy only makes sense on `index.html` (where the anchor sections physically exist); on the new pages just statically mark the relevant nav link `active` (e.g. `ai-videos.html` → "AI Videos" link gets `class="active"`) and skip scroll-spy.
- `main.js` (rename of `script.js`) — homepage-only rendering logic: profile, social, featured, showcases, AI videos (**truncated to 4**, see Part E), AI Avatars (**truncated preview**, see Part F), gallery/moodboard preview, the new before/after section (Part G), services, and the new tools/skillsets section (Part B... I mean Part C, see below). Imports `data.js`, `lightbox.js`, `nav.js`.
- One small page-specific JS file per new page (`ai-videos-page.js`, `photography-gallery-page.js`, `graphic-design-gallery-page.js`, `ai-avatars-page.js`) that renders that page's full grid and wires it into the shared lightbox. You may rename these files as you see fit as long as the separation of concerns (shared data → shared lightbox → shared nav → page-specific render) is preserved.

**Every new page's `<head>` should replicate the existing boilerplate** (Google Fonts preconnect/preload, favicon `Billy ID.jpg`) with a unique, descriptive `<title>` per page (e.g. `"AI Videos & Motion | Billy Joe Cruzada"`). **Every new page's `<nav>` is the same floating nav as `index.html`**, with in-page-only links (`Work`, `Showcases`, `Moodboard`, `Contact`, etc.) pointing back to `index.html#section` from subpages. **Every new page's footer** should be a simplified version — copyright line + a "← Back to Portfolio" link to `index.html` — do NOT duplicate the full contact form on subpages (avoids duplicate Formspree submissions/logic).

All grids on new pages must use the same lazy-loading (`loading="lazy"`), the same card/hover treatments as their homepage-preview counterparts, and must be fully responsive at the existing breakpoints.

---

# PART C — TASK 1: "Tools & Skillsets" Section Redesign

Replace the current `#tools` section (`Softwares & Tools`, the flat icon-grid `.tools-grid`/`.tool-item`) with a richer, categorized layout, in place on the homepage (no nav change needed — it's not currently a nav item).

**New section title:** "Tools & Skillsets" (section label can stay "Technologies" or change to "What I Use" — your call).

**Layout** (based on my wireframe): a **two-column layout on desktop**:
- Left column: **"Generative AI Toolkit"** — a single vertical stack of all 9 tool rows.
- Right column: split into two stacked groups, **"Graphic Design Toolkit"** (2 rows) on top and **"Video Editing Toolkit"** (4 rows) below it, visually separated by a divider (a `border-top` between the two groups, and a `border-left`/vertical rule between the left and right columns — approximate the "L-shaped" wireframe divider using simple CSS borders, no need for an SVG).
- On tablet/mobile: stack all three groups full-width in this order: Generative AI Toolkit → Graphic Design Toolkit → Video Editing Toolkit.

**Each tool is a horizontal pill/row** (redesign `.tool-item` from icon-only into a row): a circular logo badge on the left, then a two-line text block — **bold tool name** on top, **smaller gray "purpose & usage" line** underneath (use `var(--text-secondary)`). Add a subtle hover state consistent with the brand (slight lift + soft gradient-colored border glow using `var(--gradient-brand)`), matching the polish of the rest of the site.

**Exact tool list and copy to use** (use this copy verbatim — don't invent your own):

**Generative AI Toolkit**
| Tool | Purpose & usage |
|---|---|
| Higgsfield | AI video generation & motion for cinematic UGC-style ads and social content |
| Heygen | AI avatar & talking-head video generation for presenter-style content |
| Wavespeed | Fast AI image/video generation pipeline for rapid concept iteration |
| Nano Banana Pro | AI image generation & editing for photorealistic creative assets |
| Seedream | AI image generation for high-fidelity stylized visuals |
| Seedance | AI video/motion generation for dynamic short-form content |
| Kling | AI video generation for cinematic motion and camera work |
| Wan | Open-source AI video generation model (WAN 2.1/2.2) for custom workflows |
| ComfyUI | Node-based AI workflow builder for custom image/video generation pipelines |

**Graphic Design Toolkit**
| Tool | Purpose & usage |
|---|---|
| Adobe Photoshop | Photo retouching, compositing, and digital artwork |
| Adobe Illustrator | Vector-based logo design, branding, and print-ready artwork |

**Video Editing Toolkit**
| Tool | Purpose & usage |
|---|---|
| Adobe Premiere Pro | Non-linear video editing for ads, promos, and social content |
| Adobe After Effects | Motion graphics, animation, and visual effects |
| DaVinci Resolve | Professional color grading and cinematic color correction |
| CapCut | Fast-turnaround short-form video editing for social media |

**Logos:** I've added new SVG logos to `Joe_Portfolio2026/SVG Logos/`. Scan that folder and match each tool above to a logo file by filename (case-insensitive keyword match — e.g. a file with "higgsfield" in the name goes to Higgsfield). Reuse the logos already wired up in the current code where they already match (Photoshop, Illustrator, Premiere Pro, DaVinci Resolve, Higgsfield, ComfyUI). **For any tool with no matching SVG file** (likely Heygen, Wavespeed, Seedream, Seedance, Kling, Wan, After Effects, CapCut — check the folder first, some may already be there), fall back to the existing `.tool-text-badge` pattern already in the code (a colored circular badge with a 1–2 letter abbreviation, e.g. "HG" Heygen, "WS" Wavespeed, "SD" Seedream, "SC" Seedance, "K" Kling, "W" Wan, "AE" After Effects, "CC" CapCut) so no tool is left without a visual mark.

Move this new tool list into `data.js` as a structured array (grouped by category) so it's data-driven like the rest of the site, not hardcoded HTML.

---

# PART D — TASK 2 & 3: New Full-Collection Gallery Pages

## D1. Photography Gallery (`photography-gallery.html`)

The homepage `#gallery` (Gallery & Moodboard) section **stays on the homepage exactly as it currently behaves as a preview** (same initial image count, same masonry style) — but its "See more" button (currently `.gallery-show-more-btn`, which expands more images in place) must instead become a link/button to `photography-gallery.html` (relabel it "View Full Gallery" using `.btn.btn-secondary` styling, with a right-arrow icon matching the existing chevron icon already used).

⚠️ **Important data fix**: the photos have been physically reorganized on disk into subfolders under `Elements/Photography/`: `Food & Travel`, `Portrait photography`, `Sports Photography`, `Street photography`. **The current flat `gallery` array in `script.js` has stale paths that point directly at `Elements/Photography/filename.ext` and will now be broken.** Scan the actual current contents of those four subfolders on disk and rebuild the `gallery` array in `data.js` from scratch, with each item tagged with a `category` matching its subfolder (e.g. `category: "foodTravel" | "portrait" | "sports" | "street"`) and a sensible `title` derived from context (folder name is fine, e.g. "Portrait Photography", "Street Photography").

Build `photography-gallery.html` as the full browsable collection:
- Same masonry `.gallery-grid` (`column-count`) layout — **do not change this to a different grid system**, this is the one layout I explicitly want preserved.
- Add a row of pill-style filter tabs above the grid: **All / Food & Travel / Portrait / Sports / Street**, styled consistently with the site's gradient-pill brand language (active tab uses `var(--gradient-brand)`). Filtering should show/hide items (`display: none`) rather than removing them from the DOM, so the CSS column masonry reflows correctly.
- Every image opens in the shared lightbox with prev/next navigation scoped to the currently filtered set.
- No artificial cap — show the entire collection.

## D2. Graphic Design Gallery (`graphic-design-gallery.html`)

The homepage keeps both `#work` (Featured Artworks) and `#showcases` (Project Showcases) exactly as they are today — these are compact and don't need to shrink. What's missing is a way to browse **every individual design asset** across all projects in one place, not just the 3–4 preview tiles per showcase card.

Add a **"View Full Design Gallery"** button (`.btn.btn-secondary`) at the bottom of the `#showcases` section, linking to `graphic-design-gallery.html`.

Build that page by **flattening every image in every `showcases[].images` array** (images only — skip `.mov`/`.mp4` entries, or include them as playable video tiles using the same hover-to-preview pattern already used for `.video-card`/`.ai-video-card`, your call, but keep it visually consistent) into one gallery, each item tagged with its parent project's `category` (Food Product Design, Health & Wellness, Print, Shopify, AI UGC Ad). Include the same category filter-tab pattern as the photography page (All + one tab per category found). Use a responsive grid (masonry via `column-count` is fine here too, for visual consistency with the rest of the site, since these images have mixed aspect ratios) with the shared lightbox wired up, including each item's project title and tools as a caption/badge like the existing showcase lightbox already shows.

---

# PART E — TASK 4: AI Videos — Truncate + Full Page

On the homepage `#aiVideos` section: change `renderAIVideos()` (or its `main.js` equivalent) to render **only the first 4 items** from `data.aiVideos`. Below the truncated grid, add a **"View All Videos"** button (`.btn.btn-secondary`) linking to `ai-videos.html`.

Build `ai-videos.html` to render the **full** `aiVideos` array using the exact same card markup/hover-to-play/click-to-lightbox behavior as the current implementation (`.ai-video-card`, ratio classes `horizontal`/`vertical`, poster-frame-via-`currentTime`-seek trick, etc.) — just full-page instead of homepage-embedded.

---

# PART F — BONUS (my addition, not explicitly in your list, but consistent with the rest): AI Avatars — Truncate + Full Page

Your brief only explicitly asked for pagination on AI Videos (#4) and Photography (#2), but the AI Avatars/Fashion Models section has the exact same "grows the page unnecessarily long" problem — it currently expands in-place from 8 → 12 → all 28 via a "Show more" button. Since this whole revamp is about shortening the homepage and you said I could change what needs changing, **apply the same pattern here for consistency**: homepage shows the first 8 (same as today), then a **"View All AI Avatars"** button (`.btn.btn-secondary`) replaces the current in-place "Show more" expansion and links to `ai-avatars-gallery.html`, which shows the complete set using the same masonry `.gallery-grid` + lightbox. If you'd rather keep the current in-place expand-in-place behavior on the homepage instead of adding a 4th new page, that's an acceptable alternative — but pick one and implement it fully, don't leave it half-done.

---

# PART G — TASK 5: "Edited Photos Samples" — Before/After Interactive Section

Add a **new section on the homepage only**, placed directly **below the Gallery & Moodboard section** and **above the About section**. Section id: `editedPhotos` (or similar). **Do not add this to the nav bar** — it's a scroll-through section like Color Grading Projects, not a primary nav destination.

**Source images:** `Elements/Designs/Before and after edit images/`. Scan this folder on disk and pair up before/after images intelligently — most likely by matching filename prefixes/suffixes (e.g. files containing "before"/"after", or numbered pairs). Build a `beforeAfter` array in `data.js`: `{ id, title, before: "path", after: "path" }`. If pairing is ambiguous for any files, use your best judgment (alphabetical adjacency, matching base filename) and keep the titles simple/generic (e.g. "Edit 01", "Edit 02", or a descriptive name if the filenames make one obvious).

**Interaction spec** — this needs to be a real interactive comparison slider, not just two static images:
- Each card defaults to showing the "after" (edited) image, with small "BEFORE"/"AFTER" labels and a vertical divider handle visible at center.
- **On hover + mousemove (desktop):** as the cursor moves horizontally across the image, use a clip-path (or width-based overlay) driven by the cursor's X position relative to the image bounds to reveal the "before" image up to that point, with the divider handle following the cursor in real time. This should feel like the standard "drag to compare" pattern, but driven by hover position rather than requiring a mousedown-drag.
- **On click (or touch on mobile):** lock into a manual drag mode — the user can then click-and-drag (or touch-and-drag) the handle left/right to scrub the comparison, which also covers touch devices that have no hover state.
- Keep it accessible: make the divider handle a real focusable element (`tabindex="0"`, `role="slider"`, appropriate `aria-*` attributes) and support left/right arrow keys to nudge the reveal position when focused, for keyboard users.
- Grid: responsive multi-column layout (match spacing/sizing similar to `.featured-grid`), each card with a title/label caption beneath it.

Build this as its own small module (e.g. `before-after.js`) included on `main.js`'s page only (this section is homepage-only).

---

# PART H — TASK 6: Hero & About Bio Rewrite

Update the copy so it's consistent with my actual resume (attached) — notably, the current site says "5+ years experience" everywhere but my resume says **6+ years**. Fix that everywhere it appears (hero stats, about stats).

**1. Hero subtitle** (currently the `<p class="subtitle gradient-text">` line above "Hi, I'm Billy Joe Cruzada") — replace with:

> Graphic Designer · AI Content Creator · Web Developer

**2. Hero short bio** (`data.profile.bio`, rendered into `#heroBio`) — replace with:

> Creative professional with 6+ years of experience across brand identity, generative AI content, and web development. I help brands turn ideas into scroll-stopping visuals — from packaging design to AI-generated campaigns and Shopify storefronts.

**3. Hero & About stats** — change every instance of "5+ / Years Experience" to **"6+ / Years Experience"** (there are two hardcoded copies in the current HTML — one in the hero, one in the about section — plus update `data.profile`/`data.about` if you wire stats into the data layer, which I'd encourage: right now the subtitle and stat numbers are hardcoded directly in HTML rather than data-driven like the bio text is — fix that inconsistency while you're in there so all of this copy lives in `data.js` going forward, same pattern already used for `heroBio`/`aboutBio`).

**4. About section long-form bio** (`data.about.bio`, rendered into `#aboutBio`) — replace with (keep the `\n\n` paragraph breaks, same as the current field):

> I'm Billy Joe Cruzada, a graphic designer, AI content creator, and web developer based in Santa Ignacia, Tarlac, Philippines. Over the past 6+ years I've built a career at the intersection of traditional design craft and next-generation AI tooling — helping brands look good and move fast.
>
> My work spans brand identity and packaging design, generative AI content production (image, video, and UGC-style ads), photo and video editing, and Shopify e-commerce development. I've built complete branding systems for food and wellness products, produced AI-generated ad campaigns for social platforms, developed Shopify storefronts from scratch, and delivered hundreds of AI-generated assets for agency clients using tools like ComfyUI, WAN, Flux, Seedream/Seedance, Nano Banana Pro, Kling, and Higgsfield.
>
> I hold a Bachelor of Science in Information Technology (Web & Mobile Application Development) from Tarlac State University, which grounds my design work in a real understanding of how things actually get built and deployed — not just how they look.
>
> Every project starts with the same question: what does this brand need to say, and how do I say it in a way people actually stop for? Whether that's a logo, a product mockup, an AI-generated ad, or a fully working online store, I bring the same mix of craft, speed, and curiosity to make it happen.

**5. Location line** (`data.about.location` / `#aboutLocation`) — update to: `Santa Ignacia, Tarlac, Philippines` (currently says "Tarlac City, Philippines").

Leave the quote (`"Design is not just what it looks like. Design is how it works."`) as-is unless you think it clashes with the new copy tone — your call.

---

# PART I — TASK 7: Rename "AI Fashion Models" → "AI Avatars"

This needs to be a full, consistent rename — not just a label swap:

- Nav link text: `AI Fashion Models` → `AI Avatars`.
- Section title (`<h2 class="section-title">`): `AI Fashion Models` → `AI Avatars`.
- Section id: `id="aiGirls"` → `id="aiAvatars"` (update the nav `href="#aiGirls"` to match, and any scroll-spy logic).
- Data key: `aiGirlModels` → `aiAvatars` in `data.js`.
- JS variables/DOM ids: `aiGirlsGrid` → `aiAvatarsGrid`, `currentAIGirls` → `currentAIAvatars`, `renderAIGirlModels()` → `renderAIAvatars()`, CSS helper classes like `.gallery-teasers-ai` / `.gallery-show-more-ai` can keep their `-ai` suffix (still accurate) or be renamed to `-avatars` — your call, just be consistent.
- The section subtitle currently reads "Higgsfield | Seedream 4.5 | Nano Banana Pro" — leave as-is, it's accurate.
- Double check the new `ai-avatars-gallery.html` page (Part F) uses the new naming throughout from the start.

Functionality (hover behavior, click-to-lightbox, shuffle-on-load via `getRandomGallery`) must be identical after the rename — this is a rename/refactor, not a behavior change.

---

# PART J — SITE-WIDE DESIGN & POLISH PASS

This is a big revamp — beyond the specific tasks above, please also:
- Give the new "View All / View Full Gallery" secondary buttons a consistent icon (reuse the existing right-chevron SVG already used for "See more") and consistent placement (centered, below each relevant grid) across every section that gets one.
- Make sure hover/elevation treatment (shadow, lift, border-glow) is visually consistent across all card types — featured cards, showcase cards, video cards, gallery items, the new tool rows, and the new before/after cards — they should all clearly belong to the same design system.
- Double-check color contrast and spacing rhythm holds up on the new pages at all three breakpoints (1024px / 768px / 480px).
- Keep the overall dark theme, gradient-brand accent language (`--gradient-brand`), and rounded-pill nav exactly as-is — I like the current visual identity, this is a structural/content revamp, not a rebrand.
- Filter tabs (photography page, design gallery page) should use the same pill/gradient-active-state visual language as the main nav for consistency.

---

# PART K — TECHNICAL REQUIREMENTS & GUARDRAILS

- No frameworks, no build step, no new dependencies — stay vanilla HTML/CSS/JS, matching the existing project.
- Keep all existing asset paths intact except the photography `gallery` array paths, which must be rebuilt to match the real reorganized folder structure (Part D1).
- Preserve `loading="lazy"` / `preload="metadata"` patterns already used for images/videos; apply the same to all new grids.
- Preserve keyboard support already in the lightbox (`Escape`, `ArrowLeft`, `ArrowRight`) on every page that includes it.
- Before renaming any data keys/functions, grep the whole project for an admin/editor page that might depend on the old names (see the ⚠️ note in Part A) and update it too if found.
- Test that `index.html` still works standalone (no console errors) after the `script.js` → `data.js`/`lightbox.js`/`nav.js`/`main.js` split.
- Test every new page individually: nav renders, mobile menu works, lightbox opens/closes/navigates, filter tabs (where present) work, no broken image/video paths, footer back-link works.

---

# PART L — FINAL SUMMARY

When done, give me a short summary of: (1) the final file list you created/changed, (2) any implementation calls you had to make that weren't 100% spelled out above (e.g. exact before/after pairing logic, exact text-badge abbreviations used), and (3) anything you found in the project (like a possible admin page) that I should be aware of.

END OF PROMPT
