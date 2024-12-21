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
        background: "#fffff3",
        foreground: "var(--foreground)",
        primary: "#d44c26",
        secondary: "#142444",
        beje: "#fffff3",
      },
    },
  },
  plugins: [],
};
export default config;
