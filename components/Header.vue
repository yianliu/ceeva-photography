<script setup>
	const story = await useStory("header", {
		resolve_links: "url"
	})
	const env = process.env.ENVIRONMENT
</script>

<template>
	<div>
		<StoryblokComponent
			v-if="story"
			:blok="story.content" />
		{{ env }}
	</div>
</template>
