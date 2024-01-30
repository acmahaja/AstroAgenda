/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'stars-background': "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png')",
      },
      fontFamily: {
        'body': ['Inter', 'sans-serif']
      }

    },
  },
  plugins: [],
};
