import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-orange": "#F79D7D",
        "dark-green": "#586A65",
        "light-purple": "#C3CFFA",
        "light-green": "#EDF3DD",
      },
    },
  },
  plugins: [],
} satisfies Config;
