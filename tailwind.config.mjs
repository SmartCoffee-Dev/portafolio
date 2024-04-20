/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Montserrat Variable', 'system-ui', 'sans-serif'],
				'headers': ['MuseoModerno Variable', 'system-ui', 'sans-serif']
			}
		},
	},
	plugins: [],
}
