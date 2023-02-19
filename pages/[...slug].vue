<script setup>
	const { slug } = useRoute().params

	const story = await useStory(
		slug && slug.length > 0 ? slug.join("/") : "home"
	)
</script>

<template>
	<StoryblokComponent
		v-if="story"
		:blok="story.content" />
</template>
