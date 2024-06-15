<template>
	<ListingCard
		:title="blok.title"
		:body="body"
		:price="parseInt(blok.price)" />
</template>

<script setup lang="ts">
	import type { ListingStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: ListingStoryblok }>()
	const body = computed(() => renderRichText(blok.content))
</script>
