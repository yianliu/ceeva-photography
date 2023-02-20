<template>
	<div v-editable="blok">
		<h1
			v-text="blok.title"
			class="text-3xl text-center my-12"></h1>
		<div class="columns-1 md:columns-2 lg:columns-3 gap-0">
			<nuxt-img
				v-for="image in blok.images"
				:key="image.id"
				:src="`${image.filename}/m/`"
				loading="lazy" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { GalleryStoryblok } from "./component-types-sb"
	defineProps<{ blok: GalleryStoryblok }>()
</script>
