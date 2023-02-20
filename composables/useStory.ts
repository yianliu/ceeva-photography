export default async (story: string, env: string, config = {}) => {
	const res = await useAsyncStoryblok(story, {
		version: env == "live" ? "published" : "draft",
		...config
	})
	return res
}
