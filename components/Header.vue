<script setup>
	const story = await useStory("header", {
		resolve_links: "url"
	})
	const runtimeConfig = useRuntimeConfig()
</script>

<template>
	<div>
		<StoryblokComponent
			v-if="story"
			:blok="story.content" />
		{{ runtimeConfig }}
	</div>
</template>
