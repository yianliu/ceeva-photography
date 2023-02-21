<template>
	<div
		v-editable="blok"
		class="relative bg-white flex p-4 items-center place-content-between shadow">
		<NuxtLink
			class="text-2xl mx-6 text-dark"
			to="/">
			{{ blok.title }}
		</NuxtLink>
		<nav>
			<StoryblokComponent
				v-for="item in blok.menu"
				:key="item._uid"
				:blok="item" />
		</nav>
	</div>
</template>

<script setup lang="ts">
	import { NavbarStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: NavbarStoryblok }>()
</script>
