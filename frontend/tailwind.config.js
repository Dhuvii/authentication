/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "spin-circle": {
          "0%": {
            transform:
              "rotate(0deg) translateX(var(--spin-radius, 100px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateX(var(--spin-radius, 100px)) rotate(-360deg)",
          },
        },
      },
      animation: {
        "spin-circle": "spin-circle var(--spin-duration, 4s) linear infinite",
      },
      textColor: {
        skin: {
          primary: "rgba(var(--primary-bg), <alpha-value>)",
          "btn-text": "rgba(var(--btn-text-color), <alpha-value>)",
          "btn-spinner": "rgba(var(--btn-spinner-color), <alpha-value>)",
          "navlink-selected":
            "rgba(var(--navlink-text-selected), <alpha-value>)",
        },
      },

      backgroundColor: {
        skin: {
          primary: "rgba(var(--primary-bg), <alpha-value>)",
          "primary-light": "rgba(var(--primary-bg-light), <alpha-value>)",
          secondary: "rgba(var(--secondary-bg), <alpha-value>)",
          "btn-bg": "rgba(var(--btn-bg-color), <alpha-value>)",
          "btn-bg-hover": "rgba(var(--btn-bg-hover-color), <alpha-value>)",
          "btn-active": "rgba(var(--btn-bg-active-color), <alpha-value>)",
          "btn-disabled": "rgba(var(--btn-disabled-color), <alpha-value>)",
          "navlink-selected": "rgba(var(--navlink-bg-selected), <alpha-value>)",
        },
      },

      ringColor: {
        skin: {
          primary: "rgba(var(--primary-bg), <alpha-value>)",
          "btn-ring": "rgba(var(--btn-ring-color), <alpha-value>)",
        },
      },

      ringOffsetColor: {
        skin: {
          "navlink-ring-offset":
            "rgba(var(--navlink-ring-offset-color), <alpha-value>)",
          primary: "rgba(var(--primary-bg), <alpha-value>)",
          secondary: "rgba(var(--secondary-bg), <alpha-value>)",
        },
      },

      borderColor: {
        skin: {
          primary: "rgba(var(--primary-bg), <alpha-value>)",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/typography"),
  ],
};
