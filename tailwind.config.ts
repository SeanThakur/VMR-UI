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
      },
      borderRadius: {
        "5px": "5px",
      },
      boxShadow: {
        "saved-report": "-34px 33px 47px -16px rgba(107, 106, 107, 1)",
        "related-report": "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
        "nexus-card": "0px_4px_4px_0px_rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
