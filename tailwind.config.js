/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      LightYellow: "#F9F3F0",
      LightSalmon: "#FDDAC9",
      DarkSalmon: "#FEB48F",
      blue: "#3577F0",
      lightWhite: "#F6F7FB",
      white: "#fff",
      red: " #FF0000",
      bColor: " rgb(210, 210, 210)",
      success: "#36C81F",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      rubik: ["Rubik, sans-serif"],
    },

    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
