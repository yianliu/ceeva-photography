export default defineNuxtPlugin(() => {
	return {
		provide: {
			storyblok: async (story, config) => {
				return await useAsyncStoryblok(story, {
					version: process.env.ENVIRONMENY == "dev" ? "draft" : "published",
					...config
				})
			}
		}
	}
})
