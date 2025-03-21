/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_1000: "#E65100",
        primary_900: "#F66A00",
        primary_800: "#FF8500",
        primary_0: "#FFFCF7",
        neutral_1000: "#020617",
        neutral_900: "#3E4452",
        neutral_800: "#606673",
        neutral_700: "#9096A3",
        neutral_500: "#DFE2E5",
        neutral_400: "#E8EBED",

      },
      fontFamily: {
        body: ['"Figtree"', "sans-serif"],
      },
      keyframes: {
        zoom: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      animation: {
        zoom: "zoom 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
