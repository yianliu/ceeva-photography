<template>
	<div class="h-screen">
		<h1>{{ props.heading }}</h1>
		<NuxtLink :to="props.destination">{{ props.ctaText }}</NuxtLink>
	</div>
</template>

<script setup>
const props = defineProps({
	imageUrl: {
		type: String,
		required: false
	},
	heading: String,
	ctaText: String,
	destination: String
})
</script>

<style scoped>
div {
	background-image: url("img/commercial/2.jpg");
	background-size: contain;
	background-repeat: no-repeat;
}
</style>
