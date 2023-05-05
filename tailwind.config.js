/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gelion: ["gelion", "sans-serif"],
      "dm-sans": ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      "hind-siliguri": ["Hind Siliguri"],
    },
    extend: {
      colors: {
        primary: "#5D5CD6",
        "light-purple": "#6463D9",
        grey: "#A19A9A",
        "black-shade": "#121212",
        "dark-blue": "#0B0A29",
        "nav-text": "#070F18",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      screens: {
        wideScreen: "1400px",
        // => @media (min-width: 1400px) { ... }
      },
    },
  },
  plugins: [],
};
