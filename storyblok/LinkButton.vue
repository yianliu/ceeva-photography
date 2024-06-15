<template>
	<div v-editable="blok">
		<StoryLink
			:blok="blok"
			v-if="blok.link?.url || blok.link?.cached_url" />
		<div
			v-else
			v-text="blok.name"
			class="cursor-default"></div>
	</div>
</template>

<script setup lang="ts">
	import type { LinkButtonStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: LinkButtonStoryblok }>()
</script>
