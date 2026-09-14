# Design

## Approved Direction

Rose-gold and dusty rose tones paired with deep velvet charcoal surfaces in dark mode, and soft alabaster with executive berry-rose accents in light mode: "Pink, but professional." The portfolio establishes Jalaica Jaramillo as an Analytical Sciences & Quality Engineer in combination products and medical devices.

## Composition

- Sticky text navigation with instant PDF resume access and accessible theme toggling.
- Split hero: left-aligned value proposition and credentials paired with an accessible, semantic SVG lifecycle diagram (Medical Device Lifecycle & Analytical Validation).
- Professional experience rendered via interactive, keyboard-accessible native `<details>` disclosures with explicit problem/challenge statements, concrete engineering contributions, and key takeaways.
- Standards & technical toolkit mapped across Quality Systems, Validation & Testing, Core Risk Methodologies, and Enterprise Software.
- Dedicated section highlighting major capstone engineering (Hexaflow DHF/DMR $60k sponsorship) and community STEM leadership (SWE/BMES).
- About section featuring a clean engineering identity card and academic honors from Florida International University.
- Direct contact details (email, phone, Miami/Deerfield Beach FL) and an accessible contact form.

## Visual Identity & Color System

- "Pink, but professional":
  - Avoids playful or neon pinks. Instead employs dusty rose, rose quartz, soft blush, and deep berry-magenta with warm slate/charcoal undertones.
  - Implemented with OKLCH semantic variables ensuring high dynamic range and strict contrast standards:
    - **Dark Theme (Default):**
      - `--background`: `oklch(0.165 0.015 350)` (warm plum-charcoal)
      - `--surface`: `oklch(0.205 0.018 350)`
      - `--surface-raised`: `oklch(0.25 0.024 350)`
      - `--ink`: `oklch(0.965 0.008 350)` (soft pearl white)
      - `--muted`: `oklch(0.77 0.018 350)` (blush-gray)
      - `--accent`: `oklch(0.80 0.12 355)` (luminous rose pink, contrast > 7:1)
      - `--on-accent`: `oklch(0.18 0.03 350)`
    - **Light Theme:**
      - `--background`: `oklch(0.985 0.008 350)` (crisp rose-tinted alabaster)
      - `--surface`: `oklch(0.955 0.014 350)`
      - `--ink`: `oklch(0.22 0.028 350)` (deep espresso plum, contrast > 12:1)
      - `--accent`: `oklch(0.50 0.18 355)` (executive deep berry rose, contrast > 5.5:1)
      - `--on-accent`: `oklch(0.985 0.008 350)`

## Typography & Iconography

- Primary typeface: `Manrope` (variable font loaded locally), selected for technical precision, compact uppercase eyebrows, and high legibility.
- Custom vector SVG icons embedded as symbols (ISO/QMS shield, laboratory flask, physiological activity, multilayer biomaterials, verification checkmark, users/mentorship).

## Accessibility & Interaction

- Native HTML semantics (`<header>`, `<main>`, `<section>`, `<details>`, `<summary>`, `<footer>`, `<figure>`).
- Full keyboard operability and visible focus outlines.
- Reduced motion support (`@media (prefers-reduced-motion)`).
- Complete content and layout functional with or without JavaScript.
- Direct link to printable resume view (`assets/resume.html`) and official resume PDF (`assets/pdf/jalaica-jaramillo-resume.pdf`).
