/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Add this line for App Router
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Add this line if you have components outside app
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}", // Make sure this path is correct based on your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}