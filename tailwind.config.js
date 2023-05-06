/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gelion: ["gelion"],
      "dm-sans": ["DM Sans"],
      poppins: ["Poppins"],
      "hind-siliguri": ["Hind Siliguri"],
      epilogue: ['"Epilogue"', "sans-serif"],
      gilroy: ['"Gilroy-Regular"', "sans-serif"],
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
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "slide-in": "slide-in 1s ease-out",
      },
      screens: {
        wideScreen: "1400px",
        xmd: "920px",
        // => @media (min-width: 1400px) { ... }
      },
    },
  },
  plugins: [],
};
