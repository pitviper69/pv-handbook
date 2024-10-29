import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      minHeight: {
        dynamic_hero: "calc(100vh - 69px - 76.8px)",
        static_sidemenu: "calc(100vh - 69px - 76.8px)",
      },
      maxHeight: {
        static_sidemenu: "calc(100vh - 69px - 76.8px)",
        dynamic_search: "calc(50svh - 124px)",
        dynamic_hscreen: "calc(100dvh - 32px - 2rem)",
      },
      height: {
        dynamic_hscreen: "calc(100dvh - 36px - 2rem)",
      },
    },
    fontFamily: {
      sans: ["Lato", ...defaultTheme.fontFamily.sans],
      mono: ["'Source Code Pro Variable'", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        pvLight: {
          "primary": "#0000ff",
          "primary-content": "#00007e",
          "secondary": "#06ffff",
          "secondary-content": "#047e7e",
          "accent": "#06ff04",
          "accent-content": "#047e00",
          "neutral": "#1E8080",
          "neutral-content": "#0E0A87",
          "base-100": "#E9E9EB",
          "base-200": "#bebebe",
          "base-300": "#7e7e7e",
          "base-content": "#222",
          "info": "#fe00ff",
          "info-content": "#7e007e",
          "success": "#06ff04",
          "success-content": "#047e00",
          "warning": "#ffff04",
          "warning-content": "#7e7e00",
          "error": "#fe0000",
          "error-content": "#7a1110",
        },
      },
        "dark", "light", "halloween"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
