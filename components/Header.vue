<script setup>
	const environment = useRuntimeConfig().environment

	const story = await useStory("header", environment, {
		resolve_links: "url"
	})
</script>

<template>
	<div>
		<StoryblokComponent
			v-if="story"
			:blok="story.content" />
		{{ environment }}
	</div>
</template>
