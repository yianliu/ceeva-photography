export default async (story: string, environment: string, config = {}) => {
	const res = await useAsyncStoryblok(story, {
		version: "published",
		...config
	})

	return res
}
