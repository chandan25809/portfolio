import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        journal: ['"Caveat"', "cursive"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        pixel: ['"Press Start 2P"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#1d2b4d",
          muted: "#4a5a78",
        },
        paper: {
          DEFAULT: "#fdf8ed",
          dark: "#f3e8d4",
        },
        accent: {
          coral: "#e85d4c",
          sage: "#4a8575",
          gold: "#c9a227",
        },
        chunk: {
          ink: "#1e2f2d",
          panel: "#fffef8",
          cream: "#f4f1e5",
          grass: "#5fa84a",
          sky: "#8ecae6",
        },
      },
      boxShadow: {
        stamp: "4px 4px 0 0 #1d2b4d",
        "stamp-sm": "3px 3px 0 0 #1d2b4d",
        chunk: "5px 5px 0 0 #1e2f2d",
        "chunk-sm": "3px 3px 0 0 #1e2f2d",
      },
    },
  },
  plugins: [],
};

export default config;
