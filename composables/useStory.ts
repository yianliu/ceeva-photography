export default async (story: string, config = {}) => {
	const env = useAppConfig().environment
	const res = await useAsyncStoryblok(story, {
		version: env == "live" ? "published" : "draft",
		...config
	})
	return res
}
