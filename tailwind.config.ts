import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Josefin: ["var(--font-Josefin)"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/bg.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear-one":
          "linear-gradient(180deg, #000000C9 0%, #1D1D1D00 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(147.92deg, hsla(0,0%,100%,.4) 11.41%, hsla(0,0%,100%,0) 90.25%)",
      },
      screens: {
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1400px": "1400px",
        "1500px": "1500px",
        "800": "800px",
        "400": "400px",
      },
    },
  },
  plugins: [],
};

export default config;
