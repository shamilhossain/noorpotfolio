# Quick Reference - TailwindCSS Design System

## Color Palette Quick Reference

### Backgrounds
```
bg-dark-950  → #0a0e27 (Primary)
bg-dark-900  → #0f1425
bg-dark-850  → #1a1f3a (Secondary)
bg-dark-800  → #2d2e44
bg-dark-700  → #3d3e54 (Hover)
```

### Text Colors
```
text-text-primary   → #f3f4f6 (Headings)
text-text-secondary → #d1d5db (Body)
text-text-muted     → #9ca3af (Hints)
text-text-subtle    → #6b7280 (Disabled)
```

### Accents
```
text-accent-blue      → #3b82f6
text-accent-purple    → #a855f7
text-accent-pink      → #ec4899
text-accent-cyan      → #06b6d4
```

### Glass
```
bg-glass-light        → rgba(255, 255, 255, 0.1)
bg-glass-lighter      → rgba(255, 255, 255, 0.15)
bg-glass-lightest     → rgba(255, 255, 255, 0.2)
```

## Shadow Quick Reference

### Glow Shadows
```
shadow-glow-sm   → Blue glow (small)
shadow-glow-md   → Purple glow (medium)
shadow-glow-lg   → Blue glow (large)
shadow-glow-xl   → Purple glow (extra large)
```

### Glass Shadows
```
shadow-glass-sm  → Standard glass effect
shadow-glass-md  → Glass with highlight
shadow-glass-lg  → Enhanced glass
```

### Smooth Shadows
```
shadow-smooth-sm   → 0 2px 8px
shadow-smooth-md   → 0 4px 16px
shadow-smooth-lg   → 0 8px 24px
shadow-smooth-xl   → 0 12px 32px
```

## Button Classes

```html
<!-- Primary (Use for main CTAs) -->
<button class="btn-primary">Primary Action</button>

<!-- Secondary (Use for secondary actions) -->
<button class="btn-secondary">Secondary Action</button>

<!-- Ghost (Use for tertiary actions) -->
<button class="btn-ghost">Ghost Action</button>

<!-- Accent (Use for highlighted actions) -->
<button class="btn-accent">Accent Action</button>
```

## Card Classes

```html
<!-- Light Glass (Default) -->
<div class="card-glass">Content</div>

<!-- Light Glass Interactive (Responds to hover) -->
<div class="card-glass-interactive">Clickable Content</div>

<!-- Premium Glass (Maximum impact) -->
<div class="card-premium">Featured Content</div>

<!-- Premium Interactive (Premium + hover) -->
<div class="card-premium-interactive">Featured Clickable</div>

<!-- Minimal Dark (Subtle) -->
<div class="card-minimal">Simple Content</div>

<!-- Minimal Interactive (Subtle + hover) -->
<div class="card-minimal-interactive">Subtle Clickable</div>
```

## Glow Effects

```html
<!-- Hover with Blue Glow -->
<div class="hover-glow-blue">Hovers with blue</div>

<!-- Hover with Purple Glow -->
<div class="hover-glow-purple">Hovers with purple</div>

<!-- Hover with Cyan Glow -->
<div class="hover-glow-cyan">Hovers with cyan</div>

<!-- Gradient Text -->
<span class="gradient-text">Gradient Text</span>
<span class="gradient-text-animated">Animated Gradient</span>

<!-- Border Glow -->
<div class="border-glow-blue">Blue glow border</div>
<div class="border-glow-purple">Purple glow border</div>
```

## Animations

```html
<!-- Glow Pulse (opacity) -->
<div class="animate-glow-pulse">Pulses</div>

<!-- Float (vertical motion) -->
<div class="animate-float">Floats up/down</div>

<!-- Animated Border -->
<div class="border-accent-animated">Border glows on hover</div>

<!-- Animated Gradient Text -->
<span class="gradient-text-animated">Shifts gradient</span>
```

## Layout Utilities

```html
<!-- Flexbox -->
<div class="flex-center">Centered</div>
<div class="flex-between">Space between</div>

<!-- Grid -->
<div class="grid-center">Grid centered</div>
<div class="section-grid">3-column responsive</div>

<!-- Container -->
<div class="section-container">Centered section</div>
<div class="section-bg">Dark background section</div>

<!-- Positioning -->
<div class="absolute-center">Absolute centered</div>

<!-- Aspect Ratios -->
<div class="aspect-video">16:9</div>
<div class="aspect-square">1:1</div>

<!-- Line Clamping -->
<p class="line-clamp-1">...</p>
<p class="line-clamp-2">...</p>
<p class="line-clamp-3">...</p>
<p class="line-clamp-4">...</p>

<!-- Container Sizes -->
<div class="container-sm">small</div>
<div class="container-full">80rem max</div>
```

## Typography Classes

```html
<!-- Headings (auto-responsive) -->
<h1 class="h1">Heading 1</h1>
<h2 class="h2">Heading 2</h2>
<h3 class="h3">Heading 3</h3>
<h4 class="h4">Heading 4</h4>

<!-- Body Text -->
<p class="body-lg">Large body</p>
<p class="body-base">Regular body</p>
<p class="body-sm">Small body</p>

<!-- Special Text -->
<span class="label">LABEL TEXT</span>
<span class="caption">Caption text</span>
```

## Transition Classes

```html
<div class="transition-faster">150ms</div>
<div class="transition-smooth">300ms (default)</div>
<div class="transition-slower">500ms</div>
```

## Disabled States

```html
<button class="disabled-state" disabled>Disabled</button>
```

## Special Effects

```html
<!-- Premium Background -->
<div class="bg-premium-gradient">Subtle gradient bg</div>

<!-- Backdrop Blur -->
<div class="backdrop-blur-premium">Maximum blur</div>

<!-- Overflow Gradient -->
<div class="overflow-gradient">Fades at bottom</div>

<!-- Focus Ring -->
<input class="focus-ring" type="text" />

<!-- Glass Effect -->
<div class="glass-bg">Light glass</div>
<div class="glass-bg-strong">Strong glass</div>
```

## Common Patterns

### Hero with CTA
```html
<section class="section-bg">
  <div class="section-container flex-center flex-col gap-4">
    <h1 class="h1 gradient-text-animated">Welcome</h1>
    <p class="body-lg text-text-muted">Subtitle</p>
    <button class="btn-primary">Get Started</button>
  </div>
</section>
```

### Portfolio Grid
```html
<section class="section-container">
  <h2 class="h2">My Work</h2>
  <div class="section-grid">
    <div class="card-premium-interactive hover-glow-purple">
      <h4 class="h4">Project</h4>
      <p class="body-sm">Description</p>
    </div>
  </div>
</section>
```

### CTA Section
```html
<section class="section-bg bg-premium-gradient">
  <div class="section-container">
    <div class="card-glass-interactive">
      <h3 class="h3">Ready?</h3>
      <button class="btn-accent">Let's Go</button>
    </div>
  </div>
</section>
```

## Responsive Breakpoints

```
md  → 768px  (Most responsive utilities scale here)
lg  → 1024px
xl  → 1280px
```

---

For complete documentation, see **DESIGN_SYSTEM.md**
