<template>
	<div v-editable="blok">
		<h1
			v-text="blok.title"
			class="text-3xl text-center my-12"></h1>
		<div class="columns-1 md:columns-2 lg:columns-3 gap-0">
			<img
				v-for="image in blok.images"
				:key="image.id"
				:src="image.filename"
				loading="lazy" />
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({ blok: Object })
</script>
