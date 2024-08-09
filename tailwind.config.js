/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#094f47",
        brandDark: "#050e2e",
      },

      fontFamily: {
        poppins: ["poppins", "sans-serief"],
        gotham: ["gotham", "sans-serief"],
      },

      container: {
        center: true,
        padding:{
          default: "1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        },

      },
    },
  },
  plugins: [],
}