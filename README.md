# NoorPholio - Premium Portfolio Website

A premium portfolio website built with React, Vite, Tailwind CSS, and Framer Motion featuring a dark luxury UI with glassmorphism effects.

## 🚀 Tech Stack

- **React 18** - UI Framework
- **Vite** - Lightning-fast build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **JavaScript/JSX** - Language

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components (buttons, cards, etc.)
│   └── sections/        # Page sections (Hero, Portfolio, Contact, etc.)
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── utils/
│   ├── animations.js    # Framer Motion variants
│   ├── theme.js         # Theme configuration
│   ├── glassmorphism.js # Glass effect utilities
│   └── index.js         # Barrel export
├── assets/              # Images, icons, fonts
├── App.jsx              # Main app component
├── App.css              # App styles
├── index.css            # Global styles (Tailwind)
└── main.jsx             # Entry point
```

## 🎨 Design System

### Colors
- **Background**: `#0a0e27` (Dark Navy)
- **Secondary**: `#1a1f3a` (Deep Gray)
- **Tertiary**: `#2d2e44` (Medium Gray)
- **Accent**: `#a78bfa` (Purple-400)

### Effects
- **Glassmorphism**: Blur + Semi-transparent backgrounds
- **Dark Luxury**: Premium dark theme with subtle gradients
- **Smooth Animations**: Tailored Framer Motion variants

## 📦 Installation & Setup ✅

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Completed Setup Steps
- ✅ Vite React project scaffolded
- ✅ Tailwind CSS installed and configured
- ✅ Framer Motion installed
- ✅ `tailwind.config.js` configured
- ✅ `postcss.config.js` configured
- ✅ `src/index.css` with Tailwind directives
- ✅ Folder structure created
- ✅ Utility files created

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎬 Animation Utilities

Pre-built Framer Motion variants in `src/utils/animations.js`:

```javascript
import { fadeInUp, scaleIn, hoverScale, glassHover } from '@/utils/animations';

<motion.div variants={fadeInUp} initial="initial" animate="animate">
  Content
</motion.div>
```

### Available Animations
- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale animation
- `staggerContainer` - Stagger children animations
- `hoverScale` - Hover scale effect
- `glassHover` - Glass effect on hover

## 🎨 Glassmorphism Classes

Use in components:
```javascript
import { glassClasses } from '@/utils/glassmorphism';

<div className={glassClasses.base}>
  Glass Effect Card
</div>
```

## 📝 Theme Configuration

Access theme values:
```javascript
import { theme } from '@/utils/theme';

theme.colors.dark.bg      // "#0a0e27"
theme.shadows.glass       // Glass shadow
theme.spacing.xl          // 32px
```

## 🔧 Development Tips

1. **Component Creation**: Use `src/components/common/` for reusable UI
2. **Section Components**: Use `src/components/sections/` for page sections
3. **Custom Hooks**: Store in `src/hooks/`
4. **Animations**: Reference `src/utils/animations.js`
5. **Styling**: Use Tailwind + Framer Motion

## 📚 Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Ready to build premium UI! 🎉**
