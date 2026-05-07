// Glassmorphism Utility Classes

export const glassClasses = {
  base: "backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl",
  elevated: "backdrop-blur-lg bg-white/15 border border-white/30 rounded-3xl shadow-2xl",
  card: "backdrop-blur-md bg-white/[0.05] border border-white/10 rounded-xl",
  cardHover: "hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300",
};

export const getGlassClass = (variant = "base") => {
  return glassClasses[variant] || glassClasses.base;
};

// Utility function to apply glass effect to components
export const applyGlassEffect = (customClasses = "") => {
  return `${glassClasses.base} ${customClasses}`;
};
