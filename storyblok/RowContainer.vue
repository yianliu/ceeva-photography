<template>
	<div class="px-12 my-16 flex flex-row gap-12">
		<div
			v-for="child in blok.children"
			:key="child._uid">
			<StoryblokComponent
				class="flex-1"
				:blok="child" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { RowContainerStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: RowContainerStoryblok }>()
</script>
