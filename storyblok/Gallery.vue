<template>
	<div v-editable="blok">
		<h1
			v-text="blok.title"
			class="text-center my-12"></h1>
		<div class="columns-1 md:columns-2 lg:columns-3 gap-0">
			<div
				v-for="image in blok.images"
				:key="image.id"
				v-editable="image"
				class="group relative">
				<Image :image="image" />
				<div
					class="absolute inset-0 h-full w-full opacity-0 group-hover:opacity-100 ease-out duration-75"
					v-if="image.title">
					<div
						class="text-overlay text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-mono"
						style="color: white">
						{{ image.title }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { GalleryStoryblok } from "./component-types-sb"
	defineProps<{ blok: GalleryStoryblok }>()
</script>
