# GrassFRONT — React Website

## Project Memory (for new chats)

### What this is
A React + CSS Modules website for **GrassFRONT Technologies Pvt. Ltd.**, a registered IT company based in Gurugram, India. The site is a single-page marketing/portfolio website.

### Design System
- **Fonts**: Space Grotesk (headings, bold), DM Sans (body, light/400), DM Mono (labels, tags, monospace)
- **Colors**:
  - `--black: #0A0A14` — page background (dark sections)
  - `--white: #FFFFFF`
  - `--accent: #1F00FF` — primary blue
  - `--accent-dark: #0D00B8`
  - `--accent-mid: #C0B8FF` — lavender
  - `--gray-1: #1A1A2E` — dark card surface
  - `--gray-4: #6B6B88`, `--gray-5: #8888AA` — muted text
  - `--light-bg: #F7F7FC` — light sections
  - `--light-surface: #F0EFFE`
  - `--light-border: #DDD9FF`
  - `--text-primary: #0A0A14`, `--text-body: #2D2D3F`, `--text-muted: #6B6B88`
- **Border radius**: mostly `2px` (very sharp), `4px` for some cards
- **Borders**: `rgba(31,0,255,0.12)` on dark, `#DDD9FF` on light
- **Theme**: Mixed — dark hero/projects/stats/process, light about/capabilities/testimonials/media, blue gradient CTA

### Project Structure
```
src/
  App.jsx                  — root component
  index.jsx                — ReactDOM entry
  styles/
    globals.css            — CSS variables, base reset, .reveal animation
  data/
    siteData.js            — ALL content (nav links, stats, projects, testimonials, etc.)
  hooks/
    useReveal.js           — IntersectionObserver scroll-reveal hook
  components/
    layout/
      Navbar.jsx + .module.css
      Footer.jsx + .module.css
    sections/
      Hero.jsx + .module.css         — dark, 2-col grid, animated rings visual
      Trusted.jsx + .module.css      — light strip, logo names
      About.jsx + .module.css        — light, 2-col with image placeholder
      Process.jsx + .module.css      — dark, 5-col grid (5 process steps)
      Capabilities.jsx + .module.css — light, 3×2 card grid
      Projects.jsx + .module.css     — dark, featured top + 2-col below
      Testimonials.jsx + .module.css — light, 3-col cards
      Stats.jsx + .module.css        — dark, 4 big numbers
      Media.jsx + .module.css        — light, 3 article cards
      Contact.jsx + .module.css      — blue gradient CTA strip
  pages/
    Home.jsx               — assembles all sections + runs IntersectionObserver
```

### Key Implementation Details
- **Scroll reveal**: `.reveal` class + `.visible` = `opacity:1; transform:none`. Observer initialized in `Home.jsx` useEffect.
- **CSS Modules**: Each component has a paired `.module.css`. No global utility classes except `reveal`/`visible` (applied directly to elements).
- **No router**: Single page, anchor links only (`#about`, `#process`, etc.).
- **Data-driven**: All copy, stats, projects, testimonials come from `src/data/siteData.js`. Easy to update.
- **Icons**: Inline SVGs inside `Capabilities.jsx` (no icon library dependency).
- **Project visuals**: Custom CSS-only UI mockups inside `Projects.jsx` (no images needed).

### Running the project
```bash
npm install
npm run dev
```

### Pages / Sections Order
1. Navbar (fixed)
2. Hero — "Engineering digital systems businesses can depend."
3. Trusted strip — client logos
4. About — "Technology partnerships built beyond development."
5. Process — 5 steps: Discovery, System Design, Agile Dev, QA, Launch & Support
6. Capabilities — 6 cards: Enterprise Systems, Automation, Cloud, Data, API, Consulting
7. Projects — 3 projects: Horeca Mall (featured), Bizz Studio, Platter
8. Testimonials — 3 testimonials: Rohan Mehta, Priya Agarwal, Sameer Kapoor
9. Stats — 100+, 20+, 98%, 4.9
10. Media — 3 insight cards
11. Contact CTA — blue gradient
12. Footer

### What still needs to be added / customized
- Real team/office photo in the About section (`.imgPlaceholder`)
- Real media/blog thumbnail images in Media section (`.thumb`)
- Actual mailto/link hrefs in Footer contact items
- Animation polish (framer-motion optional if desired)
- Mobile hamburger menu (Navbar hides links below 992px — needs a burger menu)
