export default async (story: string, environment: string, config = {}) => {
	const res = await useAsyncStoryblok(story, {
		version: environment == "live" ? "published" : "draft",
		...config
	})

	return res
}
