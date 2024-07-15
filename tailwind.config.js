/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // prev: '#7286D3'
        deepDark: "#121212",
        mediumDark: "#1e1e1f",
        primary: "#31a28b",
        textGray: "#d6d6d6",
      },
    },
  },

  plugins: [daisyui],
};
