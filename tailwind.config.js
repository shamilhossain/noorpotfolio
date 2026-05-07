/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Premium Background - flattened
        "dark-950": "#0a0e27",
        "dark-900": "#0f1425",
        "dark-850": "#1a1f3a",
        "dark-800": "#2d2e44",
        "dark-700": "#3d3e54",
        // Accent Gradient - Blue to Purple
        "accent-blue": "#3b82f6",
        "accent-purple": "#a855f7",
        "accent-pink": "#ec4899",
        "accent-cyan": "#06b6d4",
        // Text Hierarchy
        "text-primary": "#f3f4f6",
        "text-secondary": "#d1d5db",
        "text-muted": "#9ca3af",
        "text-subtle": "#6b7280",
        // Glass Effect
        "glass-light": "rgba(255, 255, 255, 0.1)",
        "glass-lighter": "rgba(255, 255, 255, 0.15)",
        "glass-lightest": "rgba(255, 255, 255, 0.2)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
        lg: "20px",
        xl: "40px",
      },
      boxShadow: {
        // Glow effects
        "glow-sm": "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-md": "0 0 30px rgba(168, 85, 247, 0.4)",
        "glow-lg": "0 0 40px rgba(59, 130, 246, 0.5)",
        "glow-xl": "0 0 60px rgba(168, 85, 247, 0.6)",
        // Glass shadows
        "glass-sm": "0 8px 32px rgba(31, 38, 135, 0.37)",
        "glass-md": "0 8px 32px rgba(31, 38, 135, 0.37), inset 0 0 1px rgba(255, 255, 255, 0.2)",
        "glass-lg": "0 25px 50px rgba(0, 0, 0, 0.3), inset 0 0 1px rgba(255, 255, 255, 0.2)",
        // Smooth shadows
        "smooth-sm": "0 2px 8px rgba(0, 0, 0, 0.15)",
        "smooth-md": "0 4px 16px rgba(0, 0, 0, 0.2)",
        "smooth-lg": "0 8px 24px rgba(0, 0, 0, 0.25)",
        "smooth-xl": "0 12px 32px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        xs: "6px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
      },
      backgroundImage: {
        // Gradient backgrounds
        "gradient-accent": "linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)",
        "gradient-accent-reverse": "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
        "gradient-glow": "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      spacing: {
        "safe-sm": "clamp(0.75rem, 5vw, 1rem)",
        "safe-md": "clamp(1rem, 8vw, 1.5rem)",
        "safe-lg": "clamp(1.5rem, 10vw, 2rem)",
        "safe-xl": "clamp(2rem, 15vw, 3rem)",
      },
      fontSize: {
        // Text hierarchy
        "xs": ["0.75rem", { lineHeight: "1rem" }],
        "sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "base": ["1rem", { lineHeight: "1.5rem" }],
        "lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      transitionDuration: {
        "fast": "150ms",
        "smooth": "300ms",
        "slower": "500ms",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      const buttons = {
        // Primary Button
        ".btn-primary": {
          "@apply px-6 py-3 rounded-lg font-medium transition-all duration-smooth": {},
          "@apply bg-gradient-accent text-white": {},
          "@apply hover:shadow-glow-md hover:scale-105": {},
          "@apply active:scale-95": {},
          "@apply disabled:opacity-50 disabled:cursor-not-allowed": {},
        },
        // Secondary Button
        ".btn-secondary": {
          "@apply px-6 py-3 rounded-lg font-medium transition-all duration-smooth": {},
          "@apply bg-dark-850 border border-white/20 text-text-primary": {},
          "@apply hover:bg-dark-700 hover:border-accent-blue/50 hover:shadow-glow-sm": {},
          "@apply active:scale-95": {},
          "@apply disabled:opacity-50 disabled:cursor-not-allowed": {},
        },
        // Ghost Button
        ".btn-ghost": {
          "@apply px-6 py-3 rounded-lg font-medium transition-all duration-smooth": {},
          "@apply text-text-primary": {},
          "@apply hover:bg-white/5 hover:text-accent-blue": {},
          "@apply active:scale-95": {},
        },
        // Accent Button with glow
        ".btn-accent": {
          "@apply px-6 py-3 rounded-lg font-medium transition-all duration-smooth": {},
          "@apply bg-gradient-accent text-white": {},
          "@apply hover:shadow-glow-lg hover:scale-105 hover:animate-glow-pulse": {},
          "@apply active:scale-95": {},
        },
      };

      const cards = {
        // Glass Card - Light
        ".card-glass": {
          "@apply rounded-xl p-6": {},
          "@apply bg-glass-light backdrop-blur-md": {},
          "@apply border border-white/20": {},
          "@apply shadow-glass-sm": {},
          "@apply transition-all duration-smooth": {},
        },
        // Glass Card - Interactive
        ".card-glass-interactive": {
          "@apply rounded-xl p-6": {},
          "@apply bg-glass-light backdrop-blur-md": {},
          "@apply border border-white/20": {},
          "@apply shadow-glass-sm": {},
          "@apply transition-all duration-smooth": {},
          "@apply hover:bg-glass-lighter hover:border-white/30 hover:shadow-glass-md": {},
          "@apply hover:scale-[1.02]": {},
        },
        // Premium Card
        ".card-premium": {
          "@apply rounded-2xl p-8": {},
          "@apply bg-gradient-glow backdrop-blur-lg": {},
          "@apply border border-white/20": {},
          "@apply shadow-glass-lg": {},
          "@apply transition-all duration-smooth": {},
        },
        // Premium Card - Interactive
        ".card-premium-interactive": {
          "@apply rounded-2xl p-8": {},
          "@apply bg-gradient-glow backdrop-blur-lg": {},
          "@apply border border-white/20": {},
          "@apply shadow-glass-lg": {},
          "@apply transition-all duration-smooth": {},
          "@apply hover:border-accent-blue/50 hover:shadow-glow-md": {},
          "@apply hover:bg-gradient-glow hover:scale-[1.02]": {},
        },
        // Minimal Card
        ".card-minimal": {
          "@apply rounded-lg p-4": {},
          "@apply bg-dark-850 border border-white/10": {},
          "@apply shadow-smooth-sm": {},
          "@apply transition-all duration-smooth": {},
        },
        // Minimal Card - Interactive
        ".card-minimal-interactive": {
          "@apply rounded-lg p-4": {},
          "@apply bg-dark-850 border border-white/10": {},
          "@apply shadow-smooth-sm": {},
          "@apply transition-all duration-smooth": {},
          "@apply hover:bg-dark-700 hover:border-white/20": {},
        },
      };

      const sections = {
        // Section Container
        ".section-container": {
          "@apply mx-auto px-4 sm:px-6 lg:px-8": {},
          "@apply py-safe-lg": {},
          "@apply max-w-7xl": {},
        },
        // Section with Background
        ".section-bg": {
          "@apply relative w-full": {},
          "@apply bg-dark-950": {},
          "@apply overflow-hidden": {},
        },
        // Section Grid
        ".section-grid": {
          "@apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6": {},
        },
      };

      const textHierarchy = {
        // Heading 1
        ".h1": {
          "@apply text-5xl md:text-6xl font-bold": {},
          "@apply text-text-primary": {},
          "@apply leading-tight": {},
        },
        // Heading 2
        ".h2": {
          "@apply text-4xl md:text-5xl font-bold": {},
          "@apply text-text-primary": {},
          "@apply leading-tight": {},
        },
        // Heading 3
        ".h3": {
          "@apply text-3xl md:text-4xl font-semibold": {},
          "@apply text-text-primary": {},
          "@apply leading-snug": {},
        },
        // Heading 4
        ".h4": {
          "@apply text-2xl md:text-3xl font-semibold": {},
          "@apply text-text-primary": {},
        },
        // Body Text
        ".body-lg": {
          "@apply text-lg leading-relaxed": {},
          "@apply text-text-secondary": {},
        },
        ".body-base": {
          "@apply text-base leading-relaxed": {},
          "@apply text-text-secondary": {},
        },
        ".body-sm": {
          "@apply text-sm leading-normal": {},
          "@apply text-text-muted": {},
        },
        // Label
        ".label": {
          "@apply text-xs uppercase tracking-wider font-semibold": {},
          "@apply text-text-muted": {},
        },
        // Caption
        ".caption": {
          "@apply text-xs": {},
          "@apply text-text-subtle": {},
        },
      };

      const utilities = {
        // Glass backgrounds
        ".glass-bg": {
          "@apply bg-glass-light backdrop-blur-md": {},
        },
        ".glass-bg-strong": {
          "@apply bg-glass-lightest backdrop-blur-lg": {},
        },
        // Gradient text
        ".gradient-text": {
          "@apply bg-gradient-accent bg-clip-text text-transparent": {},
        },
        ".gradient-text-reverse": {
          "@apply bg-gradient-accent-reverse bg-clip-text text-transparent": {},
        },
        // Glow text
        ".text-glow": {
          "@apply drop-shadow-lg": {},
          "text-shadow": "0 0 20px rgba(59, 130, 246, 0.5)",
        },
        // Border glow
        ".border-glow-blue": {
          "@apply border border-accent-blue/50": {},
          "box-shadow": "inset 0 0 20px rgba(59, 130, 246, 0.1), 0 0 20px rgba(59, 130, 246, 0.2)",
        },
        ".border-glow-purple": {
          "@apply border border-accent-purple/50": {},
          "box-shadow": "inset 0 0 20px rgba(168, 85, 247, 0.1), 0 0 20px rgba(168, 85, 247, 0.2)",
        },
      };

      addComponents({
        ...buttons,
        ...cards,
        ...sections,
        ...textHierarchy,
        ...utilities,
      });
    },
  ],
}
