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
        "dark-green": "#49573e",
        "light-purple": "#C3CFFA",
        "light-green": "#EDF3DD",
        "light-peach": "#FBE5DB",
      },
    },
  },
  plugins: [],
} satisfies Config;
