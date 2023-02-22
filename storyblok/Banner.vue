<template>
	<div
		v-editable="blok"
		class="bg-cover bg-fixed p-12"
		:style="blok.background?.filename && { backgroundImage }">
		<h1>{{ blok.heading }}</h1>
		{{ blok }}
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
</script>
