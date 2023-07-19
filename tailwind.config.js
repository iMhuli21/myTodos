/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "lightBlack":"#353535"
      },
      fontFamily:{
        poppins:["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

