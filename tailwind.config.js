/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#2c4267",
        highlight: "#83b6d0",
        light: "#dae9f3",
        text: "#ffffff",
      },
      boxShadow: {
        neo: "8px 8px 15px rgba(0, 0, 0, 0.2), -8px -8px 15px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
