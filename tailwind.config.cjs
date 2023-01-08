/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      neutral: {
        0: "#E7E7E8",
        50: "#CFCFD1",
        100: "#B7B7B9",
        200: "#9F9FA2",
        300: "#87888B",
        400: "#6F7074",
        500: "#57585D",
        600: "#3F4045",
        700: "#27282E",
        800: "#0F1017",
      },
      primary: {
        0: "#FCEDE8",
        50: "#F9DAD1",
        100: "#F6C8B9",
        200: "#F3B6A2",
        300: "#F0A48B",
        400: "#ED9174",
        500: "#EA7F5D",
        600: "#E76D45",
        700: "#E45A2E",
        800: "#E14817",
      },
      white: "#FFFFFF",
      warning: "#F9DA70",
      success: "#10B26E",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        sm: "13px 16px 34px 0 rgba(12, 11, 65, 0.03)",
        md: "21px 54px 40px 0 rgba(12, 11, 65, 0.05)",
        lg: "21px 54px 40px 0 rgba(12, 11, 65, 0.12)",
      },
    },
    fontSize: {
      h1: ["70px", "120%"],
      h2: ["56px", "120%"],
      h3: ["44px", "126%"],
      h4: ["36px", "126%"],
      h5: ["28px", "130%"],
      sm: ["12px", "120%"],
      md: ["14px", "26px"],
      lg: ["16px", "28px"],
      xl: ["20px", "34px"],
    },
  },
  plugins: [],
}