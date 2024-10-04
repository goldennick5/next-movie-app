import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'current-nav-link': 'linear-gradient(270deg, transparent 0.17%, #2253b2 15%, #fff 50%, #2253b2 85%, transparent)',
      },
    },
  },
  plugins: [],
};
export default config;
