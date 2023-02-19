export default async (story: string, config = {}) => {
	const res = await useAsyncStoryblok(story, {
		version: process.env.ENVIRONMENT == "live" ? "published" : "draft",
		...config
	})
	return res
}
