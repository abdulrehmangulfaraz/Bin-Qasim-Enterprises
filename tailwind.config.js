/** @type {import('tailwindcss').Config} */
export default {
  // darkMode has been removed.
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0D47A1',   // Deep, professional blue
          secondary: '#FF8F00', // Vibrant, energetic orange
        },
        background: {
          DEFAULT: '#FFFFFF',      // Clean white background
          alt: '#F9FAFB',         // Slightly off-white for sections
        },
        text: {
          primary: '#1F2937',      // Dark gray for headings and primary text
          secondary: '#4B5563',   // Lighter gray for subheadings and body text
        },
        border: '#E5E7EB',           // Light gray for borders
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
};