/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login": "url('../../assets/images/bg.png')",
        "logo": "url('../../assets/images/logo.png')",
        "banner": "url('../../assets/images/banner-2.jpg')",
        "deal": "url('../../assets/images/deal_section_bg.png')",
      }
    },
  },
  plugins: [],
}
