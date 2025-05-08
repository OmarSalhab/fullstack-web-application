/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

	theme: {
		colors: {
			primary: "#ffffff", // White background
			secondary: "black", // Slightly lighter dark

			textPrimary: "#1a1a1a", // Dark text
			textSecondary: "#464646", // Light gray text
		},
		fontFamily: {
			primary: ["Inter", "sans-serif"], // For headings
			secondary: ["Roboto", "sans-serif"], // For body text
		},

		borderRadius: {
			sm: "4px",
			md: "8px",
			lg: "12px",
			xl: "16px",
		},

		screens: {
			sm: "630px", // Small devices
			md: "768px", // Tablets
			lg: "1024px", // Laptops
			xl: "1280px", // Desktops
		},
		extend: {
			// Custom Spacing Scale
			spacing: {
				4: "1rem",
				8: "2rem",
				12: "3rem",
				16: "4rem",
				24: "6rem",
			},
			// Custom Box Shadows
			boxShadow: {
				card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for cards
				button: "0 2px 4px rgba(0, 0, 0, 0.2)", // Shadow for buttons
			},
		},
	},
	plugins: [],
};
