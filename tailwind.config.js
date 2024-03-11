/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*/src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      primaryContrast: "var(--color-primaryContrast)",
      secondaryContrast: "var(--color-secondaryContrast)",
      danger: "var(--color-danger)",
      warning: "var(--color-warning)",
      info: "var(--color-info)",
      background: "var(--color-background)",
      white: "var(--color-white)",
      black: "var(--color-black)",
      overlay: "var(--color-overlay)",
    },
  },
  plugins: [],
};
