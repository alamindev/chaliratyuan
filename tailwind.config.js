module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      gilroy: ["Gilroy", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-pink": "#FF0642",
        "brand-gray": "#848484",
        "brand-gray-300": "#BBB8B8",
        "brand-gray-dark": "#3C3C3C",
        "brand-green": "#0E8F14",
        "brand-dark": "#121111",
      },
      fontSize: {
        "fs-28": "28px",
      },
    },
  },
  plugins: [],
};
