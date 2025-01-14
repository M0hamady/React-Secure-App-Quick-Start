// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#334B35',
        secondary: '#334B35',
        third: '#534B35',
      },
      fontFamily: {
        primary: ['Nico Moji', 'sans-serif'],
        secondary: ['Luckiest Guy', 'cursive'],
        pop: ['popines', 'cursive'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
