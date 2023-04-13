<template>
	<div
		class="mx-3 group relative inline-block"
		v-editable="blok">
		<StoryLink
			:blok="blok"
			class="mx-3 nav-link" />
		<div class="group-hover:block hidden min-w-full absolute z-10">
			<ul
				v-if="blok.children?.length"
				class="mt-3 shadow bg-white">
				<li>
					<StoryLink
						v-for="child in blok.children"
						v-editable="child"
						:key="child._uid"
						:blok="child"
						class="block p-2 text-sm text-medium hover:text-dark" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { NavlinkStoryblok } from "./component-types-sb"
	defineProps<{ blok: NavlinkStoryblok }>()
</script>
