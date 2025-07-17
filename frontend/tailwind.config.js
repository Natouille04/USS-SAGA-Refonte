module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['"Antonio"', 'sans-serif'],
      },
    },

    screens: {
      xs: { raw: '(max-height: 650px)' },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}