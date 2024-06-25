import('tailwindcss').Config

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // og green
        // 'nav': '#588157',
        // 'text': '#dad7cd',
        // 'login': '#344e41',
        // 'bg': '#3a5a40'
        
        'nav': '#3a7ca5',
        'text': '#e6e8ee',
        // d9dcd6
        'login': '#16425b',
        'bg': '#2f6690',
        'button': '#81c3d7',
        'b2': '#ffd500',
        'notwhitebro': "#e6e8ee",
        'db': "#242539",

      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'madimi': ['Madimi One', 'sans-serif'],
        'exo': ['Exo 2', 'sans-serif'],
        'lexend': ['Lexend', 'sans-serif'],
        'bruno': ['Bruno Ace SC', 'sans-serif'],
        'sen': ['Sen', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

