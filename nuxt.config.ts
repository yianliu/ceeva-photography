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
	modules: [["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }]],
	runtimeConfig: {
		public: {
			environment: process.env.ENVIRONMENT
		}
	}
})
