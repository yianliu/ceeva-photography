<template>
	<div
		v-editable="blok"
		class="relative bg-white flex p-4 items-center place-content-between shadow">
		<span
			class="text-2xl mx-6 text-dark"
			v-text="blok.heading"></span>
		<nav>
			<StoryblokComponent
				v-for="blok in blok.menu"
				:key="blok._uid"
				:blok="blok" />
		</nav>
	</div>
</template>

<script setup>
	defineProps({ blok: Object })
</script>
