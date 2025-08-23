/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Updated color palette
        brand: {
          primary: {
            DEFAULT: '#0D47A1', // Deep Blue
            light: '#1976D2',
            dark: '#0A3A8A',
          },
          secondary: {
            DEFAULT: '#FF8F00', // Vibrant Orange
            light: '#FFB300',
            dark: '#E65100',
          },
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827', // Dark Slate Blue
          alt: {
            light: '#F9FAFB', // Off-white
            dark: '#1F2937',  // Lighter Slate
          },
        },
        text: {
          primary: {
            light: '#1F2937', // Almost Black
            dark: '#F9FAFB',  // Off-white
          },
          secondary: {
            light: '#6B7280', // Medium Gray
            dark: '#D1D5DB', // Light Gray
          },
        },
        border: {
          light: '#E5E7EB',
          dark: '#374151',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
};