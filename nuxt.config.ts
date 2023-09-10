export default defineNuxtConfig({
	typescript: {
		strict: true
	},
	css: ["~/assets/css/main.css"],
	ssr: true,
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	modules: [
		"@nuxt/image-edge",
		"@nuxtjs/google-fonts",
		"@nuxtjs/tailwindcss",
		["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }]
	],
	runtimeConfig: {
		public: {
			environment: process.env.ENVIRONMENT
		}
	},
	googleFonts: {
		download: true,
		families: {
			Quicksand: [100, 300, 400],
			Lato: [100, 300, 400, 700]
		}
	},
	image: {
		storyblok: {
			baseURL: "https://a.storyblok.com"
		}
	}
})
