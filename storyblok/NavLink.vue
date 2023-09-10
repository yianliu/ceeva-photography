<template>
	<div
		class="mx-3 group relative inline-block"
		v-editable="blok">
		<StoryblokComponent
			:blok="blok.parent[0]"
			class="mx-3 nav-link" />

		<div class="group-hover:block hidden min-w-full absolute left-0 z-10">
			<ul
				v-if="blok.children?.length"
				class="mt-3 shadow bg-white">
				<li>
					<StoryblokComponent
						v-for="child in blok.children"
						:key="child._uid"
						:blok="child"
						class="block p-2 text-sm text-gray-500 hover:text-gray-800" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { NavLinkStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: NavLinkStoryblok }>()
</script>
