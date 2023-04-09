/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ["Aboreto", "cursive"],
      body: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
