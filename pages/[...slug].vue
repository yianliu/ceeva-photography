<script setup>
	const { slug } = useRoute().params
	const environment = useRuntimeConfig().public.environment
	const story = await useStory(
		slug && slug.length > 0 ? slug.join("/").replace(/\/$/, "") : "home",
		environment
	)
</script>

<template>
	<StoryblokComponent
		v-if="story"
		:blok="story.content" />
</template>
