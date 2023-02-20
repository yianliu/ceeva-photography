<script setup>
	const story = await useStory("header", {
		resolve_links: "url"
	})
</script>

<template>
	<div>
		<StoryblokComponent
			v-if="story"
			:blok="story.content" />
		{{ environment }}
		{{ story }}
	</div>
</template>
