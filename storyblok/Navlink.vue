<template>
	<div>
		<NuxtLink
			:to="isStory ? blok.link.cached_url : blok.link.url"
			:target="blok.link.target"
			class="block text-md p-2 text-medium hover:text-dark hover:bg-light rounded-md">
			{{ blok.name }}
		</NuxtLink>
		{{ blok }}
	</div>
</template>

<script setup>
	const { blok } = defineProps({ blok: Object })
	const isStory = blok.link.linktype == "story"
	console.log(isStory ? blok.cached_url : blok.url)
</script>
