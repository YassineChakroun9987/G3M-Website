/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        g3mBlue: '#3B82C4',
        g3mGold: '#F5B335',
        g3mDark: '#1F2933'
      }
    }
  },
  plugins: []
}
