// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: {
		strict: true
	},
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	routeRules: {
		"/**": { static: true }
	},
	modules: [["@storyblok/nuxt", { accessToken: "TEqsO4gWeekIMrVr22vA3wtt" }]]
})
