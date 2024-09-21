/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0",
        },
      },

      colors: {
        dark: "rgb(33, 36, 43)",
        light: "rgb(250, 250, 250)",
        red: "rgb(217, 17, 74)",
        green: " rgb(17, 217, 27)",
      },
    },
  },
  plugins: [],
};
