<template>
	<div
		v-editable="blok"
		class="flex flex-col bg-cover bg-fixed p-8 md:p-12 lg:p-16 blok"
		:class="[
			`items-${blok.position}`,
			blok.alignment && alignmentClasses[blok.alignment].text
		]">
		<div class="w-full lg:w-1/2 xl:max-w-3xl">
			<div
				v-editable="body"
				class="body"
				:class="blok.dark_text ? 'text-dark' : 'text-pale'"
				v-html="body"></div>
			<div
				v-if="blok.links?.length"
				class="w-full mt-3 p-2 flex flex-row gap-2"
				:class="blok.alignment && alignmentClasses[blok.alignment].links"
				v-editable="blok.links">
				<StoryLink
					v-for="link in blok.links"
					class="inline-block border border-gray-400 hover:border-gray-500 active:border-gray-600 bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-800 font-medium py-2 px-4 transition duration-300"
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
	const alignmentClasses = {
		left: { text: "text-left", links: "justify-start" },
		center: { text: "text-center", links: "justify-center" },
		right: { text: "text-right", links: "justify-end" },
		justify: { text: "text-justify", links: "justify-evenly" }
	}
</script>

<style>
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
