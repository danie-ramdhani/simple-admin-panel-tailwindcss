/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js", // Flowbite ui component plugin
  ],
  theme: {
    extend: {
      colors: {
        primary: "#075985",
        "primary-reverse": "#7dd3fc",
        secondary: "#0f172a",
        "secondary-reverse": "#f1f5f9",
        default: "#0f172a",
        "default-reverse": "#cbd5e1",
      },
    },
  },
  plugins: [
    // Flowbite ui component plugin
    require("flowbite/plugin"), // https://flowbite.com/docs/getting-started/quickstart/
    // Word break multiple line
    require("@tailwindcss/line-clamp"), // https://github.com/tailwindlabs/tailwindcss-line-clamp/
    // custom scrollbar
    require("tailwind-scrollbar"), // https://github.com/adoxography/tailwind-scrollbar
  ],
  variants: {
    scrollbar: ["rounded"], // custom scrollbar rounded
  },
  darkMode: "class",
};
