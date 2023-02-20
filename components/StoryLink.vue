<template>
	<NuxtLink
		:to="'/' + (isStory ? blok.link.cached_url : blok.link.url)"
		:target="blok.link.target">
		{{ blok.name }}
	</NuxtLink>
</template>

<script setup>
	const { blok } = defineProps({ blok: Object })
	const isStory = blok.link.linktype == "story"
</script>
