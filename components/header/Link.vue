<template>
	<div class="dropdown relative inline-block">
		<NuxtLink
			:to="page.slug"
			class="mx-6 text-md text-slate-700 hover:text-slate-900"
		>
			{{ page.name }}
		</NuxtLink>
		<ul
			v-if="hasChildPages"
			class="hidden min-w-full absolute z-10 bg-slate-200 rounded-md"
		>
			<NuxtLink
				v-for="childPage in page.childpages"
				:to="childPage.slug"
				class="block text-md p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-400 rounded-md"
			>
				{{ childPage.name }}
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

const hasChildPages = props.page.childpages.length
</script>
<style scoped>
.dropdown:hover ul {
	display: block;
}
</style>
