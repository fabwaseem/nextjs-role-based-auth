import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta-sans)", ...fontFamily.sans],
      },
      colors: {
        background: "rgba(var(--background) / <alpha-value>)",
        foreground: "rgba(var(--foreground) / <alpha-value>)",
        accent: "rgba(var(--accent) / <alpha-value>)",
      },
    },
  },
  plugins: [],
} satisfies Config;
