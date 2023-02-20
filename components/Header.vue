<script setup>
	const story = await useStory("header", {
		resolve_links: "url"
	})
	const env = useAppConfig().environment
</script>

<template>
	<div>
		<StoryblokComponent
			v-if="story"
			:blok="story.content" />
		{{ env }}
	</div>
</template>
