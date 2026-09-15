PROMPT AND INSTRUCTIONS: {

ROLE

You are migrating my existing portfolio project from a vanilla HTML, CSS, and JavaScript multi page site into Next.js using the App Router, TypeScript, and Tailwind CSS. The current project consists of index.html plus four additional pages, ai-videos.html, photography-gallery.html, graphic-design-gallery.html, and ai-avatars-gallery.html, sharing data.js, lightbox.js, nav.js, main.js, and page specific JavaScript files, plus one styles.css file.

This is a full technology migration, not a redesign. The final site must look and behave identically to the current one, keep the same page structure and section order, and must be fully working with no bugs or errors. One new feature is also being added as part of this rebuild, described in Part E below. Read this entire brief before writing any code, and do not ask me clarifying questions, make the reasonable implementation call and note it in your final summary instead.

PART A, TECH STACK AND PROJECT SETUP

Use the latest stable version of Next.js with the App Router, not the Pages Router. Use TypeScript in strict mode throughout. Use Tailwind CSS for all styling.

Configure Tailwind's breakpoints to match the current site's media queries exactly, which are 1024px, 768px, and 480px. Do not use Tailwind's default breakpoint values if they differ, override or extend the screens configuration in tailwind.config.ts so the numeric values match exactly.

Move every static asset currently referenced by the site, including the Elements folder, the SVG Logos folder, and root level images such as the profile photo, into the Next.js public folder. Update every path referenced in the data layer to the corresponding public relative path, meaning a leading slash followed by the same folder structure, for example a path that was Elements/Photography/Street photography/example.jpg becomes /Elements/Photography/Street photography/example.jpg.

Inspect the head section of the current index.html to find the exact Google Fonts being loaded, including every font family and weight. Port those exact fonts using next/font/google, do not substitute a different font family than what is currently used.

Recreate the existing CSS custom properties as a Tailwind theme extension in tailwind.config.ts, meaning the background colors, text colors, accent colors, the brand gradient, the border radius values, and the transition timing currently defined as CSS variables at the top of styles.css should become named entries in Tailwind's theme so every component can reference them through Tailwind utility classes instead of raw hex values or inline styles.

Do not add extra dependencies beyond Next.js, React, TypeScript, and Tailwind CSS unless strictly necessary for something explicitly described below. Do not introduce animation libraries, UI component kits, or state management libraries that were not requested. Built in Next.js features such as next/font and next/image are fine to use.

Regarding deployment, a standard Next.js application suitable for hosting on Vercel or a Node server is preferred over a fully static export, since it allows use of the built in Next.js Image component with on demand optimization. If you determine a static export is a better fit for how I will host this, that is acceptable, but in that case set images unoptimized to true in next.config since the Image Optimization API is unavailable in a static export, and note this decision in your final summary.

PART B, DATA LAYER

Create a typed data layer, for example a lib folder containing one or more TypeScript files, that becomes the single source of truth for all site content, replacing the old data.js.

Define proper TypeScript interfaces or types for at least the following, using names of your choosing, Profile, SocialLink, FeaturedItem, ShowcaseProject, GalleryImage with a category field, AIVideo, AIAvatarImage, ToolItem with a category field, BeforeAfterPair, ServiceItem, and AboutInfo.

Port every existing data item from the current data.js exactly as it currently exists. Do not shorten, invent, or omit any real content. This includes every showcase project and its full image list, every gallery image across all four photography subfolders, every AI video entry, every AI avatar image, every before and after pair, and all fifteen tools across the three toolkit categories, Generative AI Toolkit, Graphic Design Toolkit, and Video Editing Toolkit, along with their purpose and usage descriptions.

The current vanilla site has a loadData function that overlays certain fields from localStorage on top of default values, specifically the profile, social links, services, AI videos, and about content, and the current styles.css contains classes such as btn danger and login card, suggesting there may be a separate admin or editor page elsewhere in the project that writes to those localStorage keys. Search the full project directory for any such admin or editor file before deciding how to handle this. If you find one, decide how to port it into the new Next.js project so its editing capability still works, for example as a separate authenticated route using the same underlying data update mechanism, and describe what you did in your final summary. If you do not find one, treat all data as static content defined directly in the typed data layer, with no localStorage overlay needed, and note that in your final summary as well.

PART C, APP ROUTING STRUCTURE

Structure the application routes as follows. The homepage containing all preview sections lives at the root route. The full AI videos collection lives at a route named ai-videos. The full photography collection with its filter tabs lives at a route named photography-gallery. The full graphic design collection with its filter tabs lives at a route named graphic-design-gallery. The full AI avatars collection lives at a route named ai-avatars-gallery. Use a shared root layout containing the fonts, global styles, the navigation component, and the lightbox provider described below.

Give every route a unique, descriptive page title using the Next.js metadata system, matching the intent of the titles already used on the current site, for example AI Videos and Motion for the ai videos route.

PART D, SHARED COMPONENTS

Build a navigation component as a client component, reproducing the current floating pill navigation with its gradient background, the mobile menu toggle, and scroll spy behavior. Scroll spy, meaning highlighting the nav link for whichever section is currently in view, should only be active on the homepage, since that is the only route where the anchor sections physically exist. On every other route, statically mark the nav link that corresponds to that page's content as active instead, for example the AI Videos link is marked active while on the ai videos route, without running scroll spy logic there.

Build a footer with two variants. The full variant, used only on the homepage, includes the complete contact section with its form. The simplified variant, used on every other route, contains only a copyright line and a link back to the homepage. Implement this as one component accepting a variant prop, or as two separate components, your choice.

Build a lightbox using React context so any component on any page can open it. Provide a hook that exposes a function to open the lightbox given an array of items, a starting index, a title, and a tools list, along with functions to close it and move to the next or previous item. Preserve keyboard support for escape to close and the left and right arrow keys to navigate.

Build a reusable filter tabs component used by both the photography gallery route and the graphic design gallery route, accepting the list of categories, the currently active category, and a change handler, styled as pill buttons using the same gradient active state as the main navigation.

Build the before and after comparison component as a drag only interaction, with no hover based reveal at all. Implement it using pointer events, meaning pointerdown, pointermove, and pointerup, which handle both mouse and touch input through one unified API. On pointerdown over the image or handle, begin a drag state. While dragging, update the reveal position based on the pointer's horizontal position relative to the image container, clamped between zero and one hundred percent, and move the handle to match. On pointerup, or if the pointer leaves the window, end the drag state and leave the slider exactly where it was released, do not reset it to a default position. The reveal position must not change at all from mouse movement alone without an active pointer press. Keep the handle focusable with an appropriate role and aria attributes, and support left and right arrow keys nudging the position when the handle has focus, since that does not depend on hover.

Build a reusable masonry grid wrapper implementing the column count layout using Tailwind's columns utility classes at the exact original breakpoints, used by the photography gallery route, the graphic design gallery route, and any homepage preview grid that needs the same staggered look. This masonry column layout must be preserved exactly as the current site's visual style, do not replace it with a different grid system such as CSS grid with fixed row heights.

PART E, NEW FEATURE, BLURRED TEASER GALLERY EFFECT

Add a new visual pattern to two homepage sections only, the AI Avatars preview section and the Gallery and Moodboard preview section. Each of these two sections should render exactly eight sharp, fully clickable images first, followed by six additional images rendered with a blur effect and reduced opacity, to visually signal that more content exists beyond what is shown.

Style the blurred images using a Tailwind blur filter utility in the moderate range, blurred enough to be clearly identifiable as a teaser rather than a normal image, but not so blurred that the underlying photo is completely unrecognizable, combined with reduced opacity around sixty to seventy percent. Do not apply the normal hover lift or zoom effect used on regular gallery tiles to these blurred tiles, since they are not meant to be interacted with the same way.

Clicking one of the blurred tiles must not open the lightbox. Instead, clicking anywhere on a blurred tile should navigate the user to the corresponding full collection route, meaning ai avatars gallery route for the AI Avatars section, and photography gallery route for the Gallery and Moodboard section. This is the same destination as the existing View All AI Avatars and View Full Gallery buttons that already sit below each grid, so the blurred tiles function as an additional, larger call to action.

If it looks good with the overall design, add a small centered overlay label across the blurred portion of the grid reading something like plus and the count of remaining items in the full collection, using the same translucent gradient pill styling used elsewhere on the site. Use your judgment on whether this overlay improves or clutters the look, and implement it if it fits.

Both of these grids, the eight sharp images and the six blurred images together, must render as one continuous masonry layout using the shared masonry grid component described above, not as two visually separate grids stacked on top of each other.

If the underlying data for either section ever has fewer than fourteen total items, show whatever is available and skip the blurred portion gracefully rather than breaking or showing empty placeholder tiles.

The View All AI Avatars and View Full Gallery buttons that already exist below each of these two grids must remain in place exactly as they currently are, this new blurred tile behavior is additive, not a replacement for those buttons.

PART F, PREVIOUSLY FIXED BEHAVIOR THAT MUST NOT REGRESS

The current vanilla site had three bugs that were already found and fixed. Implement the new React version correctly from the start so none of these three issues reappear.

First, the Tools and Skillsets section must use this exact column grouping. The left column contains only the Generative AI Toolkit group with all nine of its tools. The right column contains two groups stacked vertically, the Graphic Design Toolkit group with its two tools on top, followed by the Video Editing Toolkit group with its four tools below it, separated by a horizontal divider between the two groups. Add a vertical divider between the left and right columns. The two column container should not stretch the shorter right column to match the height of the taller left column, the right column ending shorter than the left column is expected and correct, do not add filler content or stretch anything to compensate. On mobile and tablet, stack all three groups in a single column in this order, Generative AI Toolkit, then Graphic Design Toolkit, then Video Editing Toolkit.

Second, the before and after comparison section must use the drag only interaction described in Part D, with absolutely no hover driven reveal tracking.

Third, every gallery grid, especially the full photography gallery route and the full graphic design gallery route, must render its items visibly as soon as the page loads or as soon as a filter tab changes the active category, with no dependency on a scroll triggered reveal animation that could leave items invisible while still clickable. If you choose to add scroll reveal animations anywhere in the new React version for visual polish, verify the corresponding intersection observer logic is genuinely wired up and working on every route that uses it before considering the feature done, or simply skip scroll reveal animations on these two full collection gallery grids entirely to avoid the risk.

PART G, OTHER CONTENT TO CARRY OVER UNCHANGED

Carry over the hero subtitle, the hero bio text, the about section bio text, the about section stats including the six plus years of experience figure, and the about section location line, exactly as they currently exist on the site, do not rewrite or shorten this copy.

Every reference to the AI Avatars section, in visible text, component names, file names, and code comments, must consistently use AI Avatars terminology. Do not leave any leftover references to the old naming from before that section was renamed.

Reproduce the contact form's current submission behavior in a client component with equivalent functionality to what exists today.

PART H, TESTING AND QUALITY CHECKLIST

Before considering this complete, verify all of the following. The homepage loads with no console errors and no hydration errors. Every one of the four additional routes loads with no console errors and no hydration errors. The masonry column layout matches the original breakpoint behavior at 1024px, 768px, and 480px on every grid that uses it. The lightbox opens, closes, and navigates with both the on screen controls and the keyboard on every route that includes it. The before and after slider only moves while actively being dragged and never moves from hover alone. The filter tabs on both the photography gallery route and the graphic design gallery route correctly show and hide the relevant items. The blurred teaser tiles render correctly on both the AI Avatars section and the Gallery and Moodboard section, showing eight sharp images followed by six blurred images, and clicking a blurred tile navigates to the correct full collection route rather than opening the lightbox. The Tools and Skillsets section matches the column grouping described in Part F exactly. The mobile navigation menu opens and closes correctly on every route. Every image and video asset loads correctly with no broken paths. All internal navigation, including the View All and View Full Gallery links, routes to the correct page using Next.js's Link component rather than a plain anchor tag where appropriate.

PART I, HOW TO RUN THE PROJECT AFTER MIGRATION

Note for me directly in your final summary that the workflow for previewing this site is changing. Currently I preview the site by double clicking index.html and opening it directly as a local file in the browser. That will no longer work once this migration is complete. After migration, previewing the site requires running an install step once, then a development server command to view it locally during development, and a separate build step followed by either a start command or deployment to a hosting provider such as Vercel to view the finished production version. Spell out the exact commands I need to run in your final summary so there is no confusion about how to see the new site.

FINAL SUMMARY

When finished, give me a summary covering the final file and folder structure of the new project, any implementation decisions you had to make that were not spelled out exactly above, what you found regarding the possible admin or editor page and how you handled it, confirmation that all three previously fixed bugs are verified working correctly in the new codebase, confirmation that the new blurred teaser feature is working as described, and the exact commands I need to run to install dependencies, preview the site locally, and build it for production.

}
END OF PROMPT
