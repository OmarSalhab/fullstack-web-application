/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

	theme: {
		colors: {
			primary: "#ffffff", 
			secondary: "black", 

			textPrimary: "#1a1a1a", 
			textSecondary: "#464646",
		},
		fontFamily: {
			primary: ["Inter", "sans-serif"], 
			secondary: ["Roboto", "sans-serif"],
		},

		borderRadius: {
			sm: "4px",
			md: "8px",
			lg: "12px",
			xl: "16px",
		},

		screens: {
			sm: "630px", 
			md: "768px", 
			lg: "1024px",
			xl: "1280px",
		},
		extend: {
			
			spacing: {
				4: "1rem",
				8: "2rem",
				12: "3rem",
				16: "4rem",
				24: "6rem",
			},
			
			boxShadow: {
				card: "0 4px 6px rgba(0, 0, 0, 0.1)", 
				button: "0 2px 4px rgba(0, 0, 0, 0.2)",
			},
		},
	},
	plugins: [],
};
