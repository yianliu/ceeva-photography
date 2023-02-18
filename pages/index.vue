<script setup>
	const story = await useAsyncStoryblok("home", { version: "draft", resolve_links: "url" })
</script>

<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>
