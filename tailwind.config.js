const settings = require('./app/content/settings/general.json');

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
        main : settings.mainColor
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
