/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        limestone: "#EDEAE0",
        paper: "#F7F5EE",
        ink: "#232220",
        bronze: "#9C8253",
        "bronze-light": "#C7B48C",
        verdigris: "#58705F",
        charcoal: "#1F1E1C",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        content: "42rem",
      },
    },
  },
  plugins: [],
};
