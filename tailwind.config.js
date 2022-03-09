module.exports = {
  purge: {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    // todas as classes vai esta presente na versao final
    // usando expressao regular, tds as class q começam assim
    /^bg-/,
    /^to-/,
    /^from-/,
  ]

    },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
