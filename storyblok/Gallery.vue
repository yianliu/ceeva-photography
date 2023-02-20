<template>
	<div v-editable="blok">
		<h1
			v-text="blok.title"
			class="text-3xl text-center my-12"></h1>
		<div class="columns-1 md:columns-2 lg:columns-3 gap-0">
			<div
				v-for="image in blok.images"
				:key="image.id">
				<img
					:src="image.filename"
					loading="lazy" />
				<div v-text="image.title"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { GalleryStoryblok } from "./component-types-sb"
	defineProps<{ blok: GalleryStoryblok }>()
</script>
