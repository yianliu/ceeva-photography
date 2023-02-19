<template>
	<div
		class="dropdown relative inline-block"
		v-editable="blok">
		<StoryLink
			:blok="blok"
			class="mx-6 text-md text-medium hover:text-dark" />
		<ul
			v-if="blok.children.length"
			class="hidden min-w-full absolute z-10 bg-pale rounded-md">
			<li>
				<StoryLink
					v-for="child in blok.children"
					:key="child._uid"
					:blok="child"
					class="block text-md p-2 text-medium hover:text-dark hover:bg-light rounded-md" />
			</li>
		</ul>
	</div>
</template>

<script setup>
	const { blok } = defineProps({ blok: Object })
</script>

<style scoped>
	.dropdown:hover ul {
		display: block;
	}
</style>
