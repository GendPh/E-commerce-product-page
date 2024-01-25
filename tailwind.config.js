/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "hsl(26, 100%, 55%)",
        "primary-pale-orange": "hsl(25, 100%, 94%)",

        "neutral-very-dark-blue": "hsl(220, 13%, 13%)",
        "neutral-Dark-grayish-blue": "hsl(219, 9%, 45%)",
        "neutral-Grayish-blue": "hsl(220, 14%, 75%)",
        "neutral-Light-grayish-blue": "hsl(223, 64%, 98%)",
        "neutral-White": "hsl(0, 0%, 100%)",
        "neutral-Black": "hsl(0, 0%, 0%)",//(with 75% opacity for lightbox background)
      },
      fontSize: {
        "paragraph": "16px",
      },
      fontFamily: {
        "Kumbh-Sans": ['Kumbh Sans', "sans-serif"],
      },
    },
  },
  plugins: [],
}