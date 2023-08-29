 /** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        dark: "#0B0C10",
        mygrey: "#1F2833",
        lightgrey: "#C5C6C7",
        turq: "#66FCF1",
        darkerblue: "#45A29E",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

