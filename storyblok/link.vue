<template>
	<div
		class="mx-3 group relative inline-block"
		v-editable="blok">
		<StoryblokComponent
			:blok="blok.parent[0]"
			class="mx-3 nav-link" />

		<div class="group-hover:block hidden min-w-full absolute z-10">
			<ul
				v-if="blok.children?.length"
				class="mt-3 shadow bg-white">
				<li>
					<StoryblokComponent
						v-for="child in blok.children"
						:key="child._uid"
						:blok="child"
						class="block p-2 text-sm text-medium hover:text-dark" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { NavLinkStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: NavLinkStoryblok }>()
</script>
