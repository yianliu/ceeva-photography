<template>
	<div v-editable="blok" class="px-4">
		<StoryblokComponent
			v-for="blok in blok.body"
			:key="blok._uid"
			:blok="blok"
		/>
	</div>
	{{ blok }}
</template>

<script setup>
	defineProps({ blok: Object })
</script>
