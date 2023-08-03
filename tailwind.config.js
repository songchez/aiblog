/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["garden", "dark", "cupcake"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
