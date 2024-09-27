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
        escuroLab: "#262833",
        rosaLab: "#D05D81",
        verdeLab: "#ADCA87",
        roxoLab: "#7E628D"
      },
      backgroundImage: {
        'roxo-gradient': 'linear-gradient(180deg, #7E628D 0%, #6F537F 62%, #593C69 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
