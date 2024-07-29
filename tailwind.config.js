/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #1e0a4a, #632835, #e36011)',
       

      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        'custom-equal': '0 0 5px 2px rgba(0, 0, 0, 0.1)',
            }
    },
  },
  plugins: [],
}