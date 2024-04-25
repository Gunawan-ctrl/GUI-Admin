/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "760px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        primary: "#4e73df",
        background: "#F8F9FC",
        dark: "#11235A",
        disable: "#858796",
        header: "#EEF5FF",
        header2: "#ffab59",
        info: "#69c99a",
        success: "#6bc179",
        danger: "#f75757",
        warning: "#fbf15f",
        active: "#EAFDFC",
      },
    },
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./src/**/*.css",
      "./src/**/*.html",
    ],
  },
};
