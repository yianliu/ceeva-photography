<template>
	<NuxtLink
		:to="isStory ? blok.link.cached_url : blok.link.url"
		:target="blok.link.target">
		{{ blok.name }}
	</NuxtLink>
</template>

<script setup>
	const props = defineProps({ blok: Object })
	const isStory = props.blok.link.linktype == "story"
</script>
