/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "twitter-blue": "#1DA1F2",
      },
      fontFamily:{
        "tahoma": "Tahoma, Geneva, Verdana, sans-serif",
        "lato": "Lato, sans-serif",
        "montserat": "Montserrat, sans-serif",
        "Raleway": "Raleway, sans-serif",
        "play-fair": "Playfair Display, sans-serif",
        "nunito": "Nunito, sans-serif",
        "verdana": "Verdana, Geneva, Tahoma, sans-serif"
        // "monoton": "'Monoton', sans-serif"
      }
    },
  },
  plugins: [],
}

 