module.exports = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "nuxt.config.{js,ts}",
  ],

  theme: {
    extend: {
      colors: {
        main : '#15334d'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
