<template>
	<div v-editable="blok">
		<h1
			v-text="blok.title"
			class="text-3xl text-center my-12"></h1>
		<div class="columns-1 md:columns-2 lg:columns-3 gap-0">
			<div
				v-for="image in blok.images"
				:key="image.id"
				class="group relative">
				<NuxtImg
					:src="`${image.filename}/m/`"
					loading="lazy"
					placeholder
					class="block" />
				<div
					v-text="'Hello'"
					class="absolute inset-0 h-full w-full opacity-0 transition-colors group-hover:opacity-1"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { GalleryStoryblok } from "./component-types-sb"
	defineProps<{ blok: GalleryStoryblok }>()
</script>

<style scoped>
	.text {
		color: white;
		font-size: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
	}
</style>
