module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
    "./src/pages-layout/**/*.{js,ts,jsx,tsx}",
    "./src/pages-component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // Mantine UI側のサイズに合わせる
    screen: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
  },
  plugins: [],
}
