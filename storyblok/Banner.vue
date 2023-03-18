<template>
	<div
		v-editable="blok"
		class="flex flex-col bg-cover bg-fixed p-8 md:p-12 lg:p-16 blok"
		:class="[`items-${blok.position}`, blok.alignment]">
		<div class="w-full lg:w-1/2 xl:max-w-3xl">
			<div
				v-editable="body"
				class="body"
				:class="blok.dark_text ? 'text-dark' : 'text-pale'"
				v-html="body"></div>
			{{ body }}
			<div
				v-if="blok.links?.length"
				class="w-full mt-3 p-2 flex flex-row gap-2"
				:class="`justify-items-${blok.position}`"
				v-editable="blok.links">
				<StoryLink
					v-for="link in blok.links"
					class="bg-pale border-solid p-2"
					:blok="link"
					:key="link._uid" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { BannerStoryblok } from "./component-types-sb"

	const { blok } = defineProps<{ blok: BannerStoryblok }>()

	const darkenBackground = blok.darken
		? "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),"
		: ""
	const defaultImage = blok.mobile_background?.filename
		? darkenBackground + `url(${blok.mobile_background.filename})`
		: "none"

	const tabletImage = blok.tablet_background?.filename
		? darkenBackground + `url(${blok.tablet_background.filename})`
		: defaultImage

	const desktopImage = blok.desktop_background?.filename
		? darkenBackground + `url(${blok.desktop_background.filename})`
		: defaultImage
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
	.blok {
		background-image: v-bind(defaultImage);
		background-attachment: fixed;
		background-position: center;
	}

	@media screen and (min-width: 768px) {
		.blok {
			background-image: v-bind(tabletImage);
		}
	}

	@media screen and (min-width: 1024px) {
		.blok {
			background-image: v-bind(desktopImage);
		}
	}
</style>
