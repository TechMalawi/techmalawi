module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./core/**/*.{js,ts,jsx,tsx}',
		'./core/layout/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'malawi-blue': '#42C2FF',
				'malawi-green': '#00C897',
				'malawi-black': '#171717',
				'malawi-red': '#DA0037',
				'malawi-white': '#FFFFFF',
			},
		},
	},
	plugins: [],
};
