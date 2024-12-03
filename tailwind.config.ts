import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto-mono": ["var(--font-roboto-mono)", "monospace"],
        "roboto-serif": ["var(--font-roboto-serif)"],
        inter: ["var(--font-inter)", "serif"],
        "roboto-condensed": ["var(--font-roboto-condensed)", "serif"],
        roboto: ["var(--font-roboto)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#3B4ACCAB",
        navbarBlue: "#3B4ACC",
        "gradient-start": "rgba(33, 161, 215, 0.698039)",
        "gradient-end": "#3B4ACC",
      },
      backgroundImage: {
        "navbar-gradient":
          "linear-gradient(90deg, rgba(33, 161, 215, 0.7) 0%, #3B4ACC 49.5%)",
        "tab-button-gradient":
          "linear-gradient(90deg, #2C2A48 0%, #6B66AE 100%)",
        "filter-gradient":
          "linear-gradient(90deg, rgba(33, 161, 215, 0.7) 0%, #3B4ACC 100%)",
        "categories-filter-gradient":
          "linear-gradient(90deg, rgba(33, 161, 215, 0.698039) 0%, #3B4ACC 100%)",
      },
      borderRadius: {
        "5px": "5px",
      },
      boxShadow: {
        "saved-report": "-25px 12px 40px 0px #00000040",
        "related-report": "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
        "nexus-card": "0px_4px_4px_0px_rgba(0,0,0,0.25)",
        "table-content": "0px 4px 4px 0px #00000040",
        avatar: "0px 4px 4px 0px #00000040",
      },
    },
  },
  plugins: [],
};
export default config;
