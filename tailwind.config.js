/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["'Volkhov', serif"],
        text: ["'Poppins', sans-serif"],
      },
      colors: {
        "primary-o": "#FA7436",
        "primary-b": "#222222",
        "secondary-b": "#4086F4",
        "secondary-y": "#FFB60A",
        "text-b": "#222222",
        "text-gray": "#444444",
        "text-light": "#666666",
        "icon-gray": "#999999",
        "icon-light": "#e5e5e5",
        "icon-o": "#fa7436",
        "btn-o": "#fa7436",
        "bg-o": "#fa7436",
        "bg-c": "#fefcfb",
        "bg-off": "#f7f8fc",
      },
      backgroundImage: {
        "card-o": "url('./assets/bgLineO.png')",
        "card-b": "url('./assets/bgLineB.png')",
        "card-y": "url('./assets/bgLineY.png')",
      },
      gridTemplateColumns: {
        custom: "repeat(8, 10.5%)",
        carousel: "repeat(4, minmax(0, 15rem))",
      },
      gridTemplateRows: {
        custom: "repeat(7, 10.5%)",
      },
      gridTemplateColumnsMobile: {
        "custom-mobile": "repeat(5, 10.5%)",
      },
      gridTemplateRowsMobile: {
        "custom-mobile": "repeat(6, 10.5%)",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
      screens: {
        xs: "320px",
        // => @media (min-width: 640px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
