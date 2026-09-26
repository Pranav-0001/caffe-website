/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCFAF6",
          100: "#F7F3EA",
          200: "#EFE8DA",
        },
        beige: {
          100: "#F2EBE0",
          200: "#E8DED0",
          300: "#D9CBB9",
        },
        espresso: {
          DEFAULT: "#3B2B24",
          light: "#523E34",
          dark: "#2A1E19",
        },
        charcoal: {
          DEFAULT: "#262522",
          light: "#3A3935",
          muted: "#595752",
        },
        sage: {
          DEFAULT: "#899A7A",
          dark: "#6F8061",
          light: "#A4B496",
        },
        taupe: {
          DEFAULT: "#B8AA99",
          light: "#CCC0B1",
          dark: "#998B7A",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        brand: "0.28em",
      },
      borderRadius: {
        editorial: "22px",
      },
    },
  },
  plugins: [],
};
