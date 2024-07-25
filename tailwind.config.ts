/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "buddha-gold": "#FFD700",
        "buddha-red": "#FF4136",
        "buddha-purple": "#6E44FF",
        "buddha-green": "#2ECC40",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        display: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};
