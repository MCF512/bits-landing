import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
      },
      fontFamily: {
        heading: [
          'var(--roboto-font)',
          {
            fontVariationSettings: '"wdth" 150'
          }
        ]
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
