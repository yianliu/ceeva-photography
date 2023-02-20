<script setup>
	const { slug } = useRoute().params
	const environment = useRuntimeConfig().public.environment
	const story = await useStory(
		slug && slug.length > 0 ? slug.join("/") : "home",
		environment
	)
</script>

<template>
	<div>
		HELLO
		{{ slug }}
		{{ environment }}
		{{ story }}
		<!-- <StoryblokComponent
			v-if="story"
			:blok="story.content" /> -->
	</div>
</template>
