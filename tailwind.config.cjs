/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/{routes,lib}/**/*.{svelte,js,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
