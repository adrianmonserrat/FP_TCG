/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // detecta los ficheros donde Tailwind debe buscar clases
  ],
  theme: {
// ...existing code...
extend: {
  colors: {
    primary: '#1D4ED8',
    secondary: '#9333EA',
    accent: '#F59E0B',
  },
  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
  },
  backgroundImage: {
    'jafar': "url('/return_of_jafar.webp')", // barra inicial para public
  },
},
// ...existing code...
    
  },
  plugins: [],
}
