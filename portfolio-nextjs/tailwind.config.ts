import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        bg: {
          primary: "#1A1A1A",
          secondary: "#252525",
          tertiary: "#2A2A2A",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#B0B0B0",
        },
        accent: {
          pink: "#FF1493",
          orange: "#FF6B00",
          red: "#E91E63",
          yellow: "#FFA500",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #FF6B00, #FF1493)",
        "gradient-hover": "linear-gradient(135deg, #FF1493, #FF6B00)",
      },
      borderRadius: {
        DEFAULT: "16px",
        lg: "50px",
      },
      transitionTimingFunction: {
        DEFAULT: "0.3s ease",
      },
    },
  },
  plugins: [],
};
export default config;
