/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        'rata': '0px 5px 65px 10px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        // 'chrome-sm': '1280px',
        'chrome-md': '1350px',
        'chrome': '1700px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}