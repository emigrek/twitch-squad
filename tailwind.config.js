/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0e0e10',
        'foreground': '#18181b'
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
