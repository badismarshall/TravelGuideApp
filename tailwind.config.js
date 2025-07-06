/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1A0F0A",
        secondary: "#D4A574",
        tertiary: "#2C1810",
        quaternary: "#E67E22",
        quinary: "#8B7355",
      },
    },
  },
  plugins: [],
}

