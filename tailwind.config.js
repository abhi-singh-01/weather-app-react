/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // <- scan all React/Vite files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
