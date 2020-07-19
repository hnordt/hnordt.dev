let defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  purge: ["src/**/*.js"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/ui")],
}
