<template>
	<div v-editable="blok">
		<StoryblokComponent
			v-for="component in blok.body"
			:key="component._uid"
			:blok="component" />
	</div>
</template>

<script setup lang="ts">
	import type { PageStoryblok } from "./component-types-sb"
	defineProps<{ blok: PageStoryblok }>()
</script>
