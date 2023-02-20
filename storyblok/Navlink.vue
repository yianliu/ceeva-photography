<template>
	<div
		class="group relative inline-block"
		v-editable="blok">
		<StoryLink
			:blok="blok"
			class="mx-6 text-md text-medium hover:text-dark" />
		<ul
			v-if="blok.children?.length"
			class="hidden min-w-full absolute z-10 bg-pale rounded-md group-hover:block">
			<li>
				<StoryLink
					v-for="child in blok.children"
					:key="child._uid"
					:blok="child"
					class="block text-md p-2 text-medium hover:text-dark hover:bg-light rounded-md" />
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { NavlinkStoryblok } from "./component-types-sb"
	defineProps<{ blok: NavlinkStoryblok }>()
</script>
