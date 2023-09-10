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
			gray: colors.stone,
			emerald: colors.emerald,
			inherit: colors.inherit,
			current: colors.current,
			transparent: colors.transparent,
			black: colors.black,
			white: colors.white
		},
		extend: {
			fontFamily: {
				quicksand: ["Quicksand"]
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme("colors.gray.800")
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
