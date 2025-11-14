/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // Just-in-Time mode for Tailwind CSS
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      scale: {
        105: "1.05",
        98: "0.98",
      },
      fontSize: {
        h1: "3.25rem", // text-5xl (~52px)
        h2: "2.5rem", // text-4xl (~40px)
        h3: "2rem", // text-3xl (~32px)
        h4: "1.5rem", // text-2xl (~24px)
        h5: "1.25rem", // text-xl (~20px)
        h6: "1rem", // text-base (~16px)
        p: "0.875rem", // text-sm  (~14px)
        span: "0.875rem", // text-sm (~14px)
        small: "0.75rem", // text-xs (~12px)
      },
      fontWeight: {
        h1: "100", // font-thin
        h2: "100", // font-thin
        h3: "100", // font-normal
        h4: "100", // font-normal
        h5: "100", // font-normal
        h6: "100", // font-normal
      },
      lineHeight: {
        p: "1", // leading-relaxed
      },
      textColor: {
        small: "#6B7280", // text-gray-500
      },
      height: {
        "10r": "10rem",
        "11r": "11rem",
        "12r": "12rem",
        "13r": "13rem",
        "14r": "14rem",
        "15r": "15rem",
        "16r": "16rem",
        "17r": "17rem",
        "18r": "18rem",
        "19r": "19rem",
        "20r": "20rem",
        "21r": "21rem",
        "22r": "22rem",
        "23r": "23rem",
        "24r": "24rem",
        "25r": "25rem",
        "26r": "26rem",
        "27r": "27rem",
        "28r": "28rem",
        "29r": "29rem",
        "30r": "30rem",
        "31r": "31rem",
        "32r": "32rem",
        "33r": "33rem",
        "34r": "34rem",
        "35r": "35rem",
      },
      colors: {
        'custom-green': '#1C351C',
        "emerald-green": "#0A4834",
        "black-hole": "#222222",
        "pyramid-gold": "#BF9C79",
        "sustainable-linen": "#FAF3E1",
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease-in-out", // Custom animation
    },
  },
  plugins: [
    require("daisyui"), // DaisyUI plugin for Tailwind
    require("@tailwindcss/typography"), // Typography plugin
    require("tailwindcss-animated"), // Animation plugin
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-thin": {
          "::-webkit-scrollbar": {
            width: "2px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "#a0aec0",
            borderRadius: "2px",
          },
        },
        ".scrollbar-none": {
          "::-webkit-scrollbar": {
            display: "none",
          },
        },
        
      });
    },
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          background: "#FFFFFF",
          color: "#222222",
          primary: "#E2AF6C",
          secondary: "gray",
          neutral: "#222222",
        },
      }
    ],
  },
};
