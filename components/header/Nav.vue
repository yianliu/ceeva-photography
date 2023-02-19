<script setup>
	const story = await useStory("header", {
		resolve_links: "url"
	})
</script>

<template>
	<StoryblokComponent
		v-if="story"
		:blok="story.content" />
</template>
