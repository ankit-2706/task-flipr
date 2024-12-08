/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-image': "url('/src/assets/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home-1.svg')",
      }
    },
  },
  plugins: [],
}