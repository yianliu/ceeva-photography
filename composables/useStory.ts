const env = useAppConfig().environment

export default async (story: string, config = {}) => {
	const res = await useAsyncStoryblok(story, {
		version: env == "live" ? "published" : "draft",
		...config
	})

	return res
}
