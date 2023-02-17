/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
		"./storyblok/**/*.{vue,js,ts}"
	],
	theme: {
		colors: {
			dark: "#696969",
			medium: "#808080",
			light: "#A9A9A9",
			pale: "#F5F5F5"
		},
		extend: {}
	},
	plugins: []
}
