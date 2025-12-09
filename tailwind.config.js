/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'deep-red': '#C00000',
        'royal-blue': '#0033AA'
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'soft-lg': '0 18px 45px rgba(15, 23, 42, 0.18)'
      }
    }
  },
  plugins: []
};
