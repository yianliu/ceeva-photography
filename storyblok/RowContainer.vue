<template>
	<ElRow
		:gutter="24"
		class="px-12 my-16">
		<ElCol
			:span="span"
			v-for="child in blok.children"
			:key="child._uid">
			<StoryblokComponent
				class="flex-1"
				:blok="child" />
		</ElCol>
	</ElRow>
</template>

<script setup lang="ts">
	import { RowContainerStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: RowContainerStoryblok }>()
	const numOfChildren = blok.children.length
	const span = 24 / numOfChildren
</script>
