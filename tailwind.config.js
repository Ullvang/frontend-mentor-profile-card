const { url } = require("inspector");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },
    extend: {
      width: {
        76: "19rem",
      },
      backgroundImage: {
        topHalf: 'url("/src/images/bg-pattern-top.svg")',
        bottomHalf: 'url("/src/images/bg-pattern-bottom.svg")',
        cardPattern: 'url("/src/images/bg-pattern-card.svg")',
      },
      minHeight: {
        55: "55vh",
      },
      inset: {
        picture: "48px",
      },
      backgroundSize: {
        half: "100vh",
      },
      textColor: {
        gray: "hsl(0, 0%, 59%)",
      },
    },
    // width: {
    //   bgFull: "978px",
    //   bgHalf: "489px",
    // },
    // height: {
    //   bgFull: "978px",
    //   bgHalf: "489px",
    // },
    // inset: {
    //   custom: "489px",
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
