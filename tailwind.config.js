/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    screens: {
      xs: "320px", // — Extra small mobiles
      sm: '480px', //small mobiles
      //mm: "600px", // medium mobiles
      md: "768px", // tablets
      lg: "1024px", // Laptop (standard laptops or larger tablets)
      xl: "1280px", // Desktop (larger screens)
    },
    height: {
      'hero-sm': '65.75vh',
      'hero-md': '55vh',
      'hero-lg': '83.5vh',
      'weeding-sm': '30.75vh',
      'wedding-md': '55vh',
      'weeding-lg': '50vh',

      'banner-sm': '70vh',
      'banner-md': '55vh',
      'banner-lg': '11rem',//70.83vh, 55.34vh, 41.50vh

    },

    colors: {
      primary: "#FFFFFF",
      secondary: "#aaa6c3",
      tertiary: "#151030",

      "black-100": "#0A0A0A",
      "black-200": "#090325",

      "blue-100": "#1268FB",

      white: "#FFFFFF",
      "white-100": "#f3f3f3",
      "white-full": "rgba(255, 255, 255, 3)",
      "vivid-black": "#000000", // Custom color
      "light-gray": "#abb8c3", // subtitle
      "lighter-gray": "#676767", // card <p>
      gunmetal: "#313233", // widgets-footer bg
      "Eerie-Black": "#1F1F1F", //footer
      gray: "#444444",
      "light-blue": "#f5f8fa", // contact input
      "pastel-blue": "#cbd6e2", // contact border
      cello: "#33475b", // contact input text
      "slate-gray": "#7c98b6 ", // contact us msg txt
    },
    boxShadow: {
      natural: "6px 6px 9px rgba(0, 0, 0, 0.2)",
      deep: "12px 12px 50px rgba(0, 0, 0, 0.4)",
      sharp: "6px 6px 0px rgba(0, 0, 0, 0.2)",
      outlined:
        "6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)",
      crisp: "6px 6px 0px rgba(0, 0, 0, 1)",
    },
    borderColor: {
      "white-opacity": "rgba(255, 255, 255, 0.7)",
    },
    letterSpacing: {
      half: "0.5px",
    },
    lineHeight: {
      44: "44px", // Custom line-height of 44px
    },
    padding: {
      0.5625: "0.5625rem", // Custom padding of 9px
      2.625: "2.625rem", // Custom padding of 42px
      6.875: "6.875rem", // Custom padding of 110px (hero <h1>)

      110: "110px", // padding hero <h1>
    },
    margin: {
      4.75: "4.75rem", // Custom margin of 76px (wedding card main container)
      4.375: "4.375rem", // Custom margin of 70px
      0.65: "0.65rem", // Custom margin of 10.4px (weeding card title)

      70: "70px",
    },
    borderColor: {
      "white-75": "rgba(255, 255, 255, 0.75)",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
      "custom-hover": "#1268fb 0px 8px 15px", // Custom shadow for hover gor button
    },
    opacity: {
      24: "0.24", // Custom opacity for hover (for btn)
    },
    screens: {
      xs: "450px",
    },
    fontFamily: {
      sans: ["Open Sans", "Source Sans Pro", "sans-serif"],
    },
    backgroundImage: {
      heroImg: "url('@images/hero.jpeg')",
      banner: "url('@images/banner.jpg')",
      weeding: "url('@images/weeding.webp')",
    },
    zIndex: {
      2: "2",
    },
  },
};
export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      ".backface-hidden": {
        "backface-visibility": "hidden",
      },
    });
  },
];
