module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'teal': 'rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%)',
      'pale-yellow': '#fff8c2',
      'maastricht': '#062231',
    },
    extend: {
      fontFamily: {
        justanotherhand: 'JustAnotherHand-Regular'
      },
      animation: {
        bounce: 'bounce 0.3s infinite',
        wiggle: 'wiggle 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
          transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(7deg)',
          },
      },
    },
  },
},

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
