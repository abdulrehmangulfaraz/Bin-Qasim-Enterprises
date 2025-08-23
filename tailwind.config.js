/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e3a8a', // A rich blue matching your logo
        'brand-orange': '#f97316', // The vibrant orange from your logo
      },
    },
  },
  plugins: [],
};