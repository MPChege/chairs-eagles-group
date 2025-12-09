/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'deep-red': '#C00000',
        'royal-blue': '#0033AA',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #C00000, 0 0 10px #C00000, 0 0 15px #C00000' },
          '100%': { boxShadow: '0 0 10px #0033AA, 0 0 20px #0033AA, 0 0 30px #0033AA' },
        }
      }
    },
  },
  plugins: [],
}

