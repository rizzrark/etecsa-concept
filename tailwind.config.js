module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f6fb",
          100: "#ebeef8",
          200: "#cdd4ed",
          300: "#aebae2",
          400: "#7287cd",
          500: "#3553b7",
          600: "#304ba5",
          700: "#283e89",
          800: "#20326e",
          900: "#1a295a",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
