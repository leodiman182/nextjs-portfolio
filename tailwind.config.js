/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // THEME COLORS
        "primary-main": "#d6827e",
        "primary-light": "#ffb4b0",
        "primary-dark": "#8a4743",
        "secondary-main": "#7ed6a0",
        "secondary-dark": "#368a56",
        /* PROJECT COLORS */
        project1: "#000228",
        project2: "#f4623a",
        project3: "#fcc293",
        /* STACK COLORS */
        react: "#61DAFB",
        tailwind: "#06B6D4",
        axios: "#5A29E4",
        materialui: "#007FFF",
        node: "#339933",
        next: "#fff",
      },
    },
  },
  plugins: [],
};
