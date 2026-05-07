// Theme Configuration

export const theme = {
  colors: {
    dark: {
      bg: "#0a0e27",
      secondary: "#1a1f3a",
      tertiary: "#2d2e44",
      accent: "#a78bfa", // Purple-400
    },
    glass: {
      light: "rgba(255, 255, 255, 0.1)",
      lighter: "rgba(255, 255, 255, 0.15)",
      lightest: "rgba(255, 255, 255, 0.2)",
    },
    text: {
      primary: "#f3f4f6",
      secondary: "#d1d5db",
      muted: "#9ca3af",
    },
  },
  borderRadius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    glass: "0 8px 32px rgba(31, 38, 135, 0.37)",
  },
  transitions: {
    smooth: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    smoothFast: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    smoothSlow: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const contentAnimationDelay = {
  fast: 0.1,
  normal: 0.2,
  slow: 0.3,
};
