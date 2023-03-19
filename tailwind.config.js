/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
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
			...colors,
			dark: "#333333",
			medium: "#808080",
			light: "#A9A9A9",
			pale: "#F5F5F5",
			earth: "#C7A17A"
		},
		extend: {
			fontFamily: {
				quicksand: ["Quicksand"]
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.dark")
					}
				}
			})
		}
	},
	plugins: [
		require("@tailwindcss/typography")
		// ...
	]
}
