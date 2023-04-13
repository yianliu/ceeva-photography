<script setup>
	const env = useRuntimeConfig().public.environment
	const story = await useStory("header", env, {
		resolve_links: "url"
	})
</script>

<template>
	<div>
		<StoryblokComponent
			v-if="story"
			:blok="story.content" />{{ env }}
	</div>
</template>
