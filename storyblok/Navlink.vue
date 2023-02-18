<template>
	<div>
		<NuxtLink
			:to="isStory ? blok.cached_url : blok.url"
			:target="blok.target"
			class="block text-md p-2 text-medium hover:text-dark hover:bg-light rounded-md">
			{{ blok.name }}
		</NuxtLink>
	</div>
</template>

<script setup>
defineProps({ blok: Object })
const isStory = blok.linktype == "story"
</script>
