/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: 'Plus Jakarta Sans',
        urbanist: 'Urbanist',
        dmSans: 'DM Sans',
      },
      screens: {
        xxs: '390px',
        xs: "480px",
        sm: "640px",
        md: "790px",
        lg: "1080px",
        xl: "1280px",
        "2xl": "1440px",
      },

    },

  },
  plugins: [
    function ({ addVariant }) {
      addVariant('dots', '& > ul');
      addVariant('dot', '& > ul > li > button');
      addVariant('activeDot', '& > ul > li > .is-active');
    }
  ],
};

