/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage:  {
        'Meteor': "url('/src/assets/Meteor.svg')",
      },
      fontFamily: {
        "Kanit": ['Kanit', 'sans-serif']
      },
      backgroundColor: {
        background: "rgb(0,0,0) linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,2,1) 31%, rgba(9,9,121,1) 60%, rgba(0,212,255,1) 100%)"
      }
    },
  },
  plugins: [],
}