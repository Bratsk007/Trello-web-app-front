/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Указывает на все JS/JSX/TS/TSX файлы в папке src
    "./public/index.html",        // Указывает на HTML файл
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

