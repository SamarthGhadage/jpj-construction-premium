# JPJ Construction Premium Homepage

A modern, premium homepage redesign for JPJ Construction, a Faridabad/NCR-based architecture and construction firm. The project is deploy-ready and uses plain HTML, CSS, and JavaScript so it can be reviewed, shared, and hosted on GitHub Pages without a build step.

## What I implemented

- Reworked the homepage into a clear editorial flow: hero, founder story, services, achievements, portfolio, testimonials, consultation CTA, and footer.
- Added a sticky header that changes from transparent over the hero to a solid concrete background after scrolling.
- Added a responsive mobile navigation menu with `aria-expanded` state and keyboard focus styles.
- Added six service cards: Architectural Design, Structural Engineering, Construction & Execution, Interior Design, Renovation & Remodeling, and Project Consultancy.
- Added six responsive portfolio cards with project category, location, hover image treatment, and enquiry links.
- Added scroll-triggered achievement counters for experience, delivered projects, client satisfaction, and NCR locations served.
- Added a horizontally scrollable testimonial area with previous/next controls.
- Added contact actions using JPJ Construction's email, phone, WhatsApp, and social links.
- Added descriptive image alt text, semantic section landmarks, heading hierarchy, reduced-motion support, and visible focus states.

## Major changes from the existing website

This is a visual and structural redesign rather than a direct copy of the original website.

- Replaced the older presentation with a restrained architecture-led editorial layout.
- Introduced a stronger hierarchy using large serif display headings and compact sans-serif UI text.
- Reorganized the services into a six-item grid with consistent interaction patterns.
- Replaced the original gallery presentation with a responsive portfolio grid and hover reveals.
- Added a clearer conversion path from the hero and project sections to a free consultation.
- Consolidated the most important company information into a scannable homepage while keeping the design focused and uncluttered.
- Kept the core business context relevant to JPJ Construction, including Faridabad/NCR service coverage, the founder story requested for this brief, services, achievements, testimonials, and contact information.

## Design system

The visual direction is premium, warm, and architectural rather than decorative.

- `--concrete-900: #1E1C19` for dark sections and the footer
- `--ink: #171512` for primary text
- `--stone-50: #F5F1E8` for light page backgrounds
- `--stone-200: #E7DDC8` for secondary surfaces and borders
- `--steel: #4A5654` for supporting text and line icons
- `--brass: #B8863C` used sparingly for CTAs, hover states, and key statistics
- `--white: #FFFFFF` for contrast on dark sections

Typography uses Newsreader for expressive architectural headings and DM Sans for body copy and interface text. Spacing, color, transitions, and shadows are controlled through CSS custom properties.

## Requirements fulfilled

- Modern, premium, professional visual design
- Fully responsive desktop, tablet, and mobile layouts
- Mobile-first responsive breakpoint at `767px` plus large-screen container behavior at `1439px`
- Semantic HTML with one primary H1 and ordered heading hierarchy
- Clean typography, spacing, and visual hierarchy
- Suitable construction and architecture imagery
- Smooth 250ms hover transitions
- One-time hero entrance animation
- Scroll-triggered stat count-up animation
- Testimonial carousel-style horizontal interaction
- Accessible focus states and descriptive labels
- `prefers-reduced-motion` support
- Reusable CSS classes and design tokens
- GitHub Pages deployment support

## Project structure

```text
jpj-construction-premium/
|-- index.html   Homepage markup and content
|-- style.css    Design tokens, layout, responsive styles, and states
|-- script.js    Navigation, header, counters, carousel controls, and footer year
|-- README.md    Project documentation
```

## Run locally

### Option 1: Open directly

Open `index.html` in a browser. This is enough to review the layout, interactions, and local markup.

### Option 2: Start a local static server

From the project folder, run one of these commands:

```powershell
# Python
py -m http.server 5500
```

```powershell
# Node.js, if the serve package is available
npx serve .
```

Then open:

```text
http://localhost:5500
```

Press `Ctrl+C` in the terminal to stop the server.

## Validation performed

- Checked JavaScript syntax with `node --check script.js`.
- Checked the HTML, CSS, and JavaScript files for editor diagnostics.
- Tested the homepage at desktop width and at `375px` mobile width.
- Verified the mobile menu opens without horizontal overflow.
- Verified all six service cards and six project cards render.
- Verified the stats animate to their target values when scrolled into view.
- Verified lazy-loaded project images load when reached.

## Deploy to GitHub Pages

The repository is configured to publish the `main` branch root through GitHub Pages.

For a new repository using Git from the project folder:

```powershell
git init
git add .
git commit -m "Create JPJ Construction premium homepage"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Then open **Repository settings -> Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.

## Known limitations

- Project imagery currently uses external Unsplash image URLs and needs network access.
- The consultation CTA opens email or WhatsApp; there is no backend form submission in this static version.
- The project names and imagery are presentation content for the redesign and should be replaced with approved JPJ project assets before production launch.
