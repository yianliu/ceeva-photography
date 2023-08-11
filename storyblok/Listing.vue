<template>
	<ElCard>
		{{ blok }}
	</ElCard>
</template>

<script setup lang="ts">
	import { ListingStoryblok } from "./component-types-sb"
	defineProps<{ blok: ListingStoryblok }>()
</script>
