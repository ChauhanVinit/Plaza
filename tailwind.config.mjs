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
  			urbanist: 'Urbanist'
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
