export default async (story: string, config = {}) => {
	const runtimeConfig = useRuntimeConfig()
	const res = await useAsyncStoryblok(story, {
		version: runtimeConfig.environment == "live" ? "published" : "draft",
		...config
	})
	console.log(runtimeConfig)
	return res
}
