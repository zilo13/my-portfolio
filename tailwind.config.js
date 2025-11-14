/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0f1724',
        card: '#0b1220',
        muted: '#9aa4b2',
        accent: '#7c5cff',
        'accent-light': '#4ea8ff',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #7c5cff, #4ea8ff)',
      }
    },
  },
  plugins: [],
}
