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
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#3B4ACCAB",
        navbarBlue: "#3B4ACC",
      },
      borderRadius: {
        "5px": "5px",
      },
      boxShadow: {
        "saved-report": "35px 37px 59px -1px rgba(0,0,0,0.25)",
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
