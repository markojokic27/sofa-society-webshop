import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /w-column-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /offset-(1|2|3|4|5|6|7|8|9|10|11)/,
      variants: ["sm", "md", "lg", "xl"],
    },
  ],
  theme: {
    extend: {
      screens: {
        xl: "1296px",
      },
      colors: {
        red: {
          700: "#DF4718",
          900: "#BD3207",
        },
        grayscale: {
          10: "#FDFDFD",
          20: "#FBFBFB",
          30: "#F8F8F9",
          50: "#F4F4F4",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#BBBBBB",
          400: "#A3A3A3",
          500: "#808080",
          600: "#545457",
          700: "#3A3A3B",
          800: "#1F1F20",
          900: "#050505",
        },
        yellow: {
          400: "#FFEFB7",
        },
      },
      fontSize: {
        "2xs": "12px",
        xs: "14px",
        base: "16px",
        md: "20px",
        lg: "24px",
        xl: "32px",
        "2xl": "36px",
        "3xl": "40px",
        "4xl": "48px",
        "5xl": "56px",
        "6xl": "64px",
        "7xl": "72px",
        "8xl": "80px",
      },
      borderRadius: {
        "1": "4px",
      },
      borderWidth: {
        "6": "6px",
      },
      height: {
        18: "4.5rem",
      },
      padding: {
        7.5: "1.875rem",
      },
      margin: {
        18: "4.5rem",
        26: "6.5rem",
        34: "8.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
