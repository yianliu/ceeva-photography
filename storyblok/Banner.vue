<template>
	<div
		v-editable="blok"
		class="flex flex-col bg-cover bg-fixed p-12"
		:class="[blok.position, blok.alignment]"
		:style="blok.background?.filename && { backgroundImage }">
		<div class="w-full lg:w-1/2 xl:max-w-3xl">
			<div
				v-editable="body"
				class="body"
				:class="blok.dark_text ? 'text-dark' : 'text-pale'"
				v-html="body"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { BannerStoryblok } from "./component-types-sb"

	const { blok } = defineProps<{ blok: BannerStoryblok }>()
	const backgroundImage = `url(${
		blok.mobile_background?.filename ||
		blok.tablet_background?.filename ||
		blok.background?.filename
	})`
	const body = computed(() => renderRichText(blok.body))
</script>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: xx-large;
		margin: 0.5em 0;
	}
</style>
