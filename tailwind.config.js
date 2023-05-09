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
      gilroy: ["svn-gilroy", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#5D5CD6",
        "light-purple": "#F6F6FF",
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
        floatAnimation: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "slide-in": "slide-in 1s ease-out",
        float: "floatAnimation 3s infinite ease-in-out;",
      },
      screens: {
        wideScreen: "1400px",
        mobileM:'425px',
        smallest: "375px",
        xmd: "920px",
        // => @media (min-width: 1400px) { ... }
      },
      backgroundImage:{
        'bgTemplate':'url("src/assets/images/emailHero.png")'
      }
    },
  },
  plugins: [],
};
