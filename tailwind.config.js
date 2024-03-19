/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        clear: "url('../public/assets/clear.jpg')",
        haze: "url('../public/assets/haze.jpg')",
        clouds: "url('../public/assets/clouds.jpg')",
      },
    },
  },
  plugins: [],
};
