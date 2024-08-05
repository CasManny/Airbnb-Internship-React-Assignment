/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "airbnb-bg-white": "#FFFFFF",
      "airbnb-bg-red": "#E41C58",
      "airbnb-text-black": "#4F4F4F",
      "airbnb-hover": "#F7F7F7"
    },
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}

