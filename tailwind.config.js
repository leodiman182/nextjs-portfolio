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
        "primary-main": "#D74769",
        "primary-dark": "#8A2038",
        "secondary-main": "#31ABD6",
        "secondary-dark": "#27708A",
        "tertiary-main": "#D6CF5C",
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
