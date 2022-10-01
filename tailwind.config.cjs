/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        borderGradient: {
          "0%": { "background-position-x": "0" },
          "100%": { "background-position-x": "1000px" },
        },
      },
      animation: {
        borderGradient: "borderGradient 8s ease-in-out infinite alternate",
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
