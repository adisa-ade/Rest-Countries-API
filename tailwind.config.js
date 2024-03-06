/** @type {import('tailwindcss').Config} */
module.exports = {  
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],      
    },
    extend: {
      colors:{
        'dark-blue-dark-mode-elements': 'hsl(209, 23%, 22%)',
        'very-dark-blue-dark-mode-background': 'hsl(207, 26%, 17%)',
        'very-barkblue-light-mode-text': 'hsl(200, 15%, 8%)',
        'vark-gray-light-mode-input': 'hsl(0, 0%, 52%)',
        'very-lightgray-light-mode-background': 'hsl(0, 0%, 98%)',
        'white-darkmodetext-and-lightmode-elements': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}

