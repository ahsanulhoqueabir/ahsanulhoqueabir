/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        philosopher: ["Philosopher", "sans-serif"],
        playwrite: ["Playwrite AT", "system-ui"],
        playfair: ["Playfair Display", "system-ui"],
        jacquard: ["Jacquard 12", "sans-serif"],
        grey: ["Grey Qo", "system-ui"],
        garamond: ["EB Garamond", "system-ui"],
        changa: ["Changa", "system-ui"],
        nova: ["Bona Nova SC", "system-ui"],
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
