module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        blue: '0 8px 4px 0 #C1D9FD',
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
