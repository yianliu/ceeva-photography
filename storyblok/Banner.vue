<template>
	<div
		v-editable="blok"
		class="bg-cover bg-fixed p-12 flex flex-col"
		:class="alignClass"
		:style="blok.background?.filename && { backgroundImage }">
		<div
			class="border-solid border-cyan-300 border-2 xl:max-w-3xl lg:w-1/2 w-full">
			<div
				class="body"
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
	const alignClass =
		blok.alignment == "left"
			? "items-start"
			: blok.alignment == "centre"
			? "items-center"
			: "items-end"
</script>

<style>
	.body h1 {
		color: blue;
	}

	.body p {
		color: red;
	}
</style>
