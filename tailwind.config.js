/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#080202",  
        page: "#001C30",
        card: "#47466a",
        "card-hover": "#4f5e74",
        "blue-accent": "#068FFF",
        "blue-accent-hover": "#4E4FEB",
        "default": "#ECF8F9",
      },
    },
  },
  plugins: [],
};
