/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'gelion': ['gelion'],
      'dm-sans': ['DM Sans'],
      'poppins': ['Poppins'],
      'epilogue': ['"Epilogue"', 'sans-serif'],
      'gilroy': ['"Gilroy-Regular"', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#5D5CD6',
        'light-purple': '#6463D9',
        'grey': '#A19A9A'
      }
    },
  },
  plugins: [],
}
