<script setup>
	// const { slug } = useRoute().params

	// const environment = useRuntimeConfig().environment
	// const story = await useStory(
	// 	slug && slug.length > 0 ? slug.join("/") : "home",
	// 	environment
	// )
	const env = useAppConfig().environment
</script>

<template>
	<!-- <StoryblokComponent
		v-if="story"
		:blok="story.content" /> -->
	{{ env }}
</template>
