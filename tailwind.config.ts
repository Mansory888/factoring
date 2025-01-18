import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "var(--foreground)",
        primary: "#d44c26",
        secondary: "#142444",
        beje: "#ffffff",
        
      },
      maxWidth: {
        '8xl': '1440px',  // Existing custom value
        '9xl': '1563px',  // Newly added
        '10xl': '1687px',  // Newly added
      },
      fontSize: {
        '7.5xl': '5.5rem', // Add a size between 7xl and 8xl
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter as a custom font
      },
    },
  },
  plugins: [],
};
export default config;
