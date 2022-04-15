module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    colors: {
      'orange': '#DB5A42',
      'black': '#4D4B44',
      'white': '#F2F2F2',
      'grey': '#A9A79E'
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      borderWidth: {
        '6': '6px'
      },
      backgroundImage: {
        'code': "url('../public/assets/fond-code.png')"
      },
    },
  },
  plugins: [],
}