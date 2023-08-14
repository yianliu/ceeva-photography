<template>
	<ListingCard :body="body" />
</template>

<script setup lang="ts">
	import { ListingStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: ListingStoryblok }>()
	const body = computed(() => renderRichText(blok.content))
</script>
