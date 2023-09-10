<template>
	<div
		class="px-6 xl:px-12 my-16 flex flex-row gap-6 xl:gap-12 justify-center flex-wrap md:flex-nowrap">
		<div
			v-for="child in blok.children"
			:key="child._uid">
			<StoryblokComponent
				class="flex-1 w-72 lg:w-80 xl:w-96"
				:blok="child" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { RowContainerStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: RowContainerStoryblok }>()
</script>
