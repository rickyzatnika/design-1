/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
