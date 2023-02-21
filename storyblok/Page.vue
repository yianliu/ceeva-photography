<template>
	<div
		v-editable="blok"
		class="px-4">
		<StoryblokComponent
			v-for="component in blok.body"
			:key="component._uid"
			:blok="component" />
	</div>
</template>

<script setup lang="ts">
	import { PageStoryblok } from "./component-types-sb"
	defineProps<{ blok: PageStoryblok }>()
</script>
