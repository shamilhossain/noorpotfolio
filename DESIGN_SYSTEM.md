# Design System - NoorPholio Premium Portfolio

## Color Palette

### Dark Premium Background
```
Primary Dark: #0a0e27    - Main background (darkest)
Dark 900:     #0f1425    - Slightly lighter variant
Dark 850:     #1a1f3a    - Secondary background
Dark 800:     #2d2e44    - Tertiary background
Dark 700:     #3d3e54    - Hover/interactive states
```

### Accent Gradient (Blue → Purple)
```
Blue:         #3b82f6    - Primary accent (bright blue)
Purple:       #a855f7    - Secondary accent (vibrant purple)
Pink:         #ec4899    - Tertiary accent
Cyan:         #06b6d4    - Complementary accent
```

### Text Hierarchy
```
Primary:      #f3f4f6    - Headings, primary text (white-ish)
Secondary:    #d1d5db    - Body text (light gray)
Muted:        #9ca3af    - Hints, secondary info
Subtle:       #6b7280    - Very subtle, disabled text
```

### Glass Effect
```
Light:        rgba(255, 255, 255, 0.1)
Lighter:      rgba(255, 255, 255, 0.15)
Lightest:     rgba(255, 255, 255, 0.2)
```

## Typography

### Heading Sizes
```
H1: 3rem → 3.75rem (md)  - Font weight 700
H2: 2.25rem → 3rem (md)  - Font weight 700
H3: 1.875rem → 2.25rem (md) - Font weight 600
H4: 1.5rem → 1.875rem (md)  - Font weight 600
```

### Body Text
```
Large:        1.125rem   - Body with emphasis
Base:         1rem       - Default body text (1.625 line-height)
Small:        0.875rem   - Secondary info (1 line-height)
```

## Shadows & Glows

### Glow Effects (Box Shadows)
```
.shadow-glow-sm    - 0 0 20px rgba(59, 130, 246, 0.3)
.shadow-glow-md    - 0 0 30px rgba(168, 85, 247, 0.4)
.shadow-glow-lg    - 0 0 40px rgba(59, 130, 246, 0.5)
.shadow-glow-xl    - 0 0 60px rgba(168, 85, 247, 0.6)
```

### Glass Shadows
```
.shadow-glass-sm   - 0 8px 32px rgba(31, 38, 135, 0.37)
.shadow-glass-md   - Glass SM + inset highlight
.shadow-glass-lg   - Enhanced with stronger depth
```

### Smooth Shadows
```
.shadow-smooth-sm  - 0 2px 8px rgba(0, 0, 0, 0.15)
.shadow-smooth-md  - 0 4px 16px rgba(0, 0, 0, 0.2)
.shadow-smooth-lg  - 0 8px 24px rgba(0, 0, 0, 0.25)
.shadow-smooth-xl  - 0 12px 32px rgba(0, 0, 0, 0.3)
```

## Component Classes

### Buttons

#### Primary Button
```html
<button class="btn-primary">Click Me</button>
```
- Gradient accent background (#3b82f6 → #a855f7)
- White text
- Hover: glowing effect + scale up
- Active: scale down

#### Secondary Button
```html
<button class="btn-secondary">Secondary</button>
```
- Dark 850 background
- White/20 border
- Hover: darker background + blue accent border

#### Ghost Button
```html
<button class="btn-ghost">Ghost</button>
```
- Transparent background
- Hover: light background + blue text

#### Accent Button
```html
<button class="btn-accent">Accent</button>
```
- Gradient accent + glow pulse animation
- Maximum visual impact

### Cards

#### Glass Card (Light)
```html
<div class="card-glass">Content</div>
```
- Lightweight glassmorphism effect
- White/10 background + white/20 border
- Glass shadow

#### Glass Card (Interactive)
```html
<div class="card-glass-interactive">Content</div>
```
- Responds to hover with scale + enhanced glow
- Better for clickable/hoverable elements

#### Premium Card
```html
<div class="card-premium">Content</div>
```
- Enhanced glassmorphism with gradient background
- Larger padding (p-8)
- Maximum visual hierarchy

#### Premium Card (Interactive)
```html
<div class="card-premium-interactive">Content</div>
```
- Responds to hover with blue accent border + glow

#### Minimal Card
```html
<div class="card-minimal">Content</div>
```
- Subtle dark background
- Minimal white border
- Light shadow

#### Minimal Card (Interactive)
```html
<div class="card-minimal-interactive">Content</div>
```
- Responds to hover with background + border color

### Sections

#### Section Container
```html
<section class="section-container">Content</section>
```
- Max width 80rem
- Responsive padding
- Centered container

#### Section with Background
```html
<section class="section-bg">Content</section>
```
- Dark 950 background
- Overflow hidden (for better background effects)

#### Section Grid
```html
<div class="section-grid">
  <!-- Auto-responsive grid -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```
- 1 column (mobile)
- 2 columns (tablet)
- 3 columns (desktop)
- 6px gap

## Text Classes

### Headings
```html
<h1 class="h1">Title</h1>
<h2 class="h2">Subtitle</h2>
<h3 class="h3">Section</h3>
<h4 class="h4">Subsection</h4>
```

### Body Text
```html
<p class="body-lg">Large body text</p>
<p class="body-base">Regular body text</p>
<p class="body-sm">Small body text</p>
<span class="label">LABEL</span>
<span class="caption">Caption text</span>
```

## Utility Classes

### Glassmorphism
```html
<div class="glass-bg">Light glass effect</div>
<div class="glass-bg-strong">Strong glass effect</div>
```

### Gradient Text
```html
<span class="gradient-text">Gradient Text</span>
<span class="gradient-text-reverse">Reverse Gradient</span>
<span class="gradient-text-animated">Animated Gradient</span>
```

### Glow Effects
```html
<div class="border-glow-blue">Blue glow border</div>
<div class="border-glow-purple">Purple glow border</div>
```

### Hover Glow Effects
```html
<div class="hover-glow-blue">Hovers with blue glow</div>
<div class="hover-glow-purple">Hovers with purple glow</div>
<div class="hover-glow-cyan">Hovers with cyan glow</div>
```

### Transitions
```html
<div class="transition-smooth">300ms transition</div>
<div class="transition-faster">150ms transition</div>
<div class="transition-slower">500ms transition</div>
```

### Animations
```html
<div class="animate-glow-pulse">Pulsing glow</div>
<div class="animate-float">Floating animation</div>
```

### Layout Utilities
```html
<!-- Flex -->
<div class="flex-center">Centered flex</div>
<div class="flex-between">Spaced flex</div>

<!-- Grid -->
<div class="grid-center">Centered grid</div>

<!-- Positioning -->
<div class="absolute-center">Centered absolute</div>

<!-- Container Sizes -->
<div class="container-full">Full container (80rem)</div>
<div class="container-2xl">2XL container</div>

<!-- Aspect Ratios -->
<div class="aspect-video">16:9 video</div>
<div class="aspect-square">1:1 square</div>

<!-- Line Clamping -->
<p class="line-clamp-1">Single line with ellipsis</p>
<p class="line-clamp-2">Two lines max</p>
<p class="line-clamp-3">Three lines max</p>
```

### Disabled States
```html
<button disabled class="disabled-state">Disabled Button</button>
```

### Other Utilities
```html
<!-- Backdrop Blur -->
<div class="backdrop-blur-premium">Maximum blur</div>

<!-- Animated Border -->
<div class="border-accent-animated">Border glows on hover</div>

<!-- Focus Ring -->
<input class="focus-ring" type="text" />

<!-- Overflow Gradient -->
<div class="overflow-gradient">
  <!-- Content fades at bottom -->
</div>
```

## Animations

### Keyframes

**Glow Pulse** - Opacity fade in and out
```css
animation: glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

**Float** - Vertical floating motion
```css
animation: float 6s ease-in-out infinite;
```

**Gradient Shift** - Background position animation
```css
animation: gradient-shift 3s ease infinite;
```

## Backdrop Blur Values

```
backdrop-blur-xs    - 2px
backdrop-blur-sm    - 4px
backdrop-blur-md    - 12px
backdrop-blur-lg    - 20px
backdrop-blur-xl    - 40px
backdrop-blur-premium - 40px (xl)
```

## Border Radius

```
xs    - 6px
sm    - 8px
md    - 12px
lg    - 16px
xl    - 24px
2xl   - 32px
```

## Responsive Breakpoints

```
sm  - 640px
md  - 768px  (used in most utilities)
lg  - 1024px
xl  - 1280px
2xl - 1536px
```

## Usage Examples

### Hero Section with Gradient Text
```html
<section class="section-bg">
  <div class="section-container">
    <h1 class="h1 gradient-text-animated">Welcome to NoorPholio</h1>
    <p class="body-lg text-text-muted">Your premium portfolio</p>
    <button class="btn-primary">Get Started</button>
  </div>
</section>
```

### Portfolio Card Grid
```html
<section class="section-container">
  <h2 class="h2">My Work</h2>
  <div class="section-grid">
    <div class="card-premium-interactive hover-glow-purple">
      <h4 class="h4">Project Title</h4>
      <p class="body-sm">Project description</p>
    </div>
    <!-- More cards -->
  </div>
</section>
```

### CTA Section with Glass Effect
```html
<section class="section-bg bg-premium-gradient">
  <div class="section-container">
    <div class="card-glass-interactive">
      <h3 class="h3">Ready to create something amazing?</h3>
      <button class="btn-accent">Let's Work Together</button>
    </div>
  </div>
</section>
```

## Best Practices

1. **Color Usage**: Use accent colors (#3b82f6, #a855f7) for CTAs and highlights
2. **Glassmorphism**: Apply to secondary content; use premium variant for emphasis
3. **Text**: Maintain hierarchy with defined heading/body classes
4. **Interactions**: Combine base class with hover states (e.g., `.card-glass-interactive`)
5. **Animations**: Use sparingly; primarily for buttons and cards
6. **Shadows**: Glass shadows for translucent effects; smooth shadows for solid elements
7. **Responsive**: All components scale appropriately via media queries

## File Structure

```
src/
├── index.css                     - Main styles with design system
├── utils/
│   ├── animations.js             - Framer Motion variants
│   ├── theme.js                  - Theme configuration
│   ├── glassmorphism.js          - Glass utility functions
│   └── index.js                  - Barrel export
├── components/
│   ├── common/                   - Reusable UI components
│   └── sections/                 - Page sections
└── tailwind.config.js            - Tailwind theme extensions
```

---

**Design System Ready! 🎨** Start building components with these utilities and classes.
