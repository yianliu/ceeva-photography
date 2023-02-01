import VueGtag from "vue-gtag-next"

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VueGtag, {
		property: {
			id: "G-VJ7PD1FV89"
		}
	})
})
