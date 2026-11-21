---
name: Midnight Sunrise
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393f'
  surface-container-lowest: '#0c0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#282a2f'
  surface-container-highest: '#33353a'
  on-surface: '#e2e2e9'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e2e2e9'
  inverse-on-surface: '#2e3036'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#ffb783'
  on-secondary: '#4f2500'
  secondary-container: '#d97722'
  on-secondary-container: '#451f00'
  tertiary: '#3cddc7'
  on-tertiary: '#003731'
  tertiary-container: '#00a392'
  on-tertiary-container: '#00302a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb783'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#713700'
  tertiary-fixed: '#62fae3'
  tertiary-fixed-dim: '#3cddc7'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005047'
  background: '#111318'
  on-background: '#e2e2e9'
  surface-variant: '#33353a'
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system defines the digital portfolio presence for a Technical Project Manager & Business Analyst operating in Dubai's dynamic tech landscape. The aesthetic balances deep, focused technical authority with optimistic, forward-looking energy. 

### Brand Personality & Core Mood
- **Strategic & Analytical:** Emphasizes precision, data clarity, and architectural soundness through crisp geometry and deliberate spacing.
- **Tech-Forward & Modern:** Employs futuristic touches—subtle ambient gradients, glass surfaces, and glowing hover states—evoking modern developer environments and AI workflows.
- **Approachable & Confident:** Avoids sterile coldness by injecting warm sunrise accents (coral/amber) and fresh mint highlights against deep cosmic obsidian.

### Visual Style
A refined fusion of **Glassmorphism** and **High-Contrast Dark Mode**. Interfaces leverage deep space layered backgrounds (`#0B0D12` up through `#1D2330`), frosted card backdrops with `backdrop-filter: blur(16px)`, low-opacity structural borders, and targeted sunrise gradients (`#8B5CF6` to `#FB923C`) that guide focal points and calls to action.

## Colors

The palette is engineered specifically for deep dark mode, drawing inspiration from midnight cityscapes illuminated by vibrant morning auroras.

### Palette Architecture
- **Canvas Base (`#0B0D12`):** Primary viewport backdrop. Deep, true black-violet tone that minimizes visual fatigue.
- **Section Base (`#151923`):** Segmented background level providing soft sectional zoning without high-contrast hard dividing lines.
- **Card Surface (`#1D2330`):** Interactive surface level, tuned to host high-contrast typography and subtle glassmorphic alpha layers (`rgba(29, 35, 48, 0.75)`).
- **Subtle Outline (`#2A303C`):** Structural borders with low visual weight; transitions to luminous gradient borders on hover.
- **Text Hierarchy:**
  - **Text Primary (`#F8FAFC`):** Pure off-white for headers and prominent data points.
  - **Text Secondary (`#A1A1AA`):** Muted zinc for body descriptions, metadata, and supporting documentation.
- **Accent Signals:**
  - **Brand Violet (`#8B5CF6`):** Applied to brand identity, primary section badges, and deep focus elements.
  - **Sunrise Coral/Amber (`#FB923C`):** High-priority CTAs, interactive highlights, and calendar/booking triggers.
  - **Mint Signal (`#2DD4BF`):** Dedicated to active status indicators (e.g., "Available Immediately in Dubai"), successful deliverable metrics, and positive verification tags.

### Gradient Accents
- **Sunrise Linear Accent:** `linear-gradient(135deg, #8B5CF6 0%, #FB923C 100%)` for hero headlines, prime CTA buttons, and interactive border strokes.
- **Ambient Glow Orbs:** Radial gradients with `rgba(139, 92, 246, 0.12)` and `rgba(251, 146, 60, 0.08)` positioned behind key hero and feature modules with 120px blur.

## Typography

The typographic pairing reflects the synthesis of engineering rigour and strategic business communication.

### Family Pairing
- **Headlines & Metric Display (`Space Grotesk`):** A geometric, technically-informed grotesque typeface with distinctive mechanical features. It provides structural impact in large hero statements, numbers, and KPI trackers.
- **Body & Editorial Content (`Inter`):** A battle-tested screen typeface that maintains high legibility across dense project specs, PRD timelines, and lists.
- **Monospace & Metadata:** When rendering API endpoints, tool chips, or system tags, `Space Grotesk` at smaller scales with uppercase tracking reinforces technical precision.

### Scaling & Readability
Large display elements compress on viewports under 768px (`display` moves to 38px, `headline-lg` shifts to 28px) to prevent awkward hyphenation or edge collisions on mobile screens.

## Layout & Spacing

The portfolio employs a responsive 12-column fluid grid system bounded by a maximum container width of `1240px`.

### Grid Structure
- **Desktop (1024px+):** 12 columns with `1.5rem` (24px) gutters and `2rem` (32px) margins. Ideal for dual-column project breakdowns and multi-column skill sets.
- **Tablet (640px - 1023px):** 6 or 8 columns with `1.25rem` (20px) gutters and `1.5rem` (24px) margins.
- **Mobile (<640px):** Single-column stacked layouts utilizing `1rem` (16px) gutters and `1.25rem` (20px) outer margins.

### Spacing Cadence
Component internals follow consistent rhythm:
- Spacing between consecutive sections utilizes `space-xl` (56px) on mobile and expands to `5rem` (80px) on desktop to provide generous negative space.
- Cards maintain internal padding of `space-md` on mobile and expand to `space-lg` on wide screens.

## Elevation & Depth

Visual depth is achieved through glassmorphic stratification, translucent backdrops, and gradient boundary lighting rather than traditional dark drop shadows.

### Atmospheric Layering
1. **Base Layer:** Raw canvas background (`#0B0D12`) overlaid with an ultra-fine 32px CSS background grid (`rgba(255, 255, 255, 0.02)`).
2. **Ambient Layer:** Radial glow orbs positioned behind key modules (e.g., hero photo, stats block) using `filter: blur(100px)`.
3. **Card Layer:** Cards use `background: rgba(29, 35, 48, 0.7)`, frosted with `backdrop-filter: blur(16px)` and a default rim stroke of `1px solid rgba(42, 48, 60, 0.8)`.
4. **Interactive Hover Elevation:** 
   - Hovered cards trigger a dual-state border glow: `border-color: rgba(139, 92, 246, 0.5)` combined with a soft outer ring: `box-shadow: 0 0 25px -5px rgba(139, 92, 246, 0.25)`.
   - Action elements elevate upward by `-2px` with smooth micro-transitions (`cubic-bezier(0.16, 1, 0.3, 1)`).

## Shapes

The interface embraces a modern, softened geometric silhouette:
- **Cards & Major Panels:** Sized at `16px` (`rounded-lg`) to `24px` (`rounded-xl`) corner radii, establishing a comfortable, modern look.
- **Interactive Buttons & Badges:** Use either `rounded-lg` (12px) for structured tools or fully rounded pill styles (`9999px`) for status pills and category filter chips.
- **Inputs & Form Controls:** Match standard button geometry at `12px` to preserve visual cohesion across the contact flow.

## Components

### Buttons & Interactive Controls
- **Primary CTA:** Sunrise linear gradient background (`#8B5CF6` to `#FB923C`), white bold typography (`Space Grotesk`), subtle inset light highlight on the top edge, and an amber ambient glow on hover (`box-shadow: 0 10px 20px -8px rgba(251, 146, 60, 0.4)`).
- **Secondary / Ghost Button:** Dark glass fill (`rgba(29, 35, 48, 0.6)`), 1px solid border (`#2A303C`), text primary (`#F8FAFC`). On hover, transitions border to Brand Violet (`#8B5CF6`).

### Status Badges & Chips
- **"Available Immediately in Dubai" Badge:** Pill-shaped, tinted Mint background (`rgba(45, 212, 191, 0.1)`), 1px border (`rgba(45, 212, 191, 0.3)`), mint text (`#2DD4BF`), accompanied by a live pulsating mint radar dot.
- **Skill / Tech Stack Chips:** Compact pill or 8px rounded tags with subtle dark fill (`#151923`), low-contrast border (`#2A303C`), and zinc text (`#A1A1AA`). Hover transitions text to off-white with violet accent stroke.

### Project & Experience Cards
- **Structure:** Frosted glass panel with rounded corners (20px). Features a top metadata header (Role, Company, Timeline), followed by an impactful title, bulleted delivery metrics, and a footer containing technical tags (MERN, Next.js, JIRA, APIs).
- **Hover State:** Rim glows softly in violet-to-coral tones; card subtly translates vertically by `-3px`.

### Metric & KPI Blocks
- Large numerical callouts rendered in `Space Grotesk` display size using the sunrise gradient text mask (`background-clip: text; -webkit-text-fill-color: transparent`).
- Clear labels below in uppercase `Inter` or `Space Grotesk` label size (`#A1A1AA`).

### Input Fields & Contact Modules
- Background fill matching `#151923`, border `#2A303C`, text `#F8FAFC` with placeholder text in `#71717A`.
- Active focus state: Ring border glowing in `#8B5CF6` with zero default browser outlines.