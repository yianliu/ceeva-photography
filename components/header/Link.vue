<template>
	<div class="dropdown relative inline-block">
		<NuxtLink :to="page.slug" class="mx-6 text-md text-medium hover:text-dark">
			{{ page.name }}
		</NuxtLink>
		<ul
			v-if="hasChildren"
			class="hidden min-w-full absolute z-10 bg-pale rounded-md"
		>
			<NuxtLink
				v-for="child in page.children"
				:to="child.slug"
				:target="undefined"
				class="block text-md p-2 text-medium hover:text-dark hover:bg-light rounded-md"
			>
				{{ child.name }}
			</NuxtLink>
		</ul>
	</div>
</template>

<script setup>
const props = defineProps({
	page: {
		type: Object
	}
})

const hasChildren = props.page.children?.length
</script>
<style scoped>
.dropdown:hover ul {
	display: block;
}
</style>
