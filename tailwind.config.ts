import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        greyPrimary: "#F7F8FA",
        greySecondary: "#6F6F6F",
        redPrimary: "#F6285B",
      },
      screens: {
        phoneSm: "430px",
        phone: "575px",
        tabletsm: "768px",
        tablet: "992px",
        laptopSm: "1024px",
        laptop: "1280px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
