<template>
	<div
		v-editable="blok"
		class="relative bg-white flex p-4 items-baseline place-content-between shadow whitespace-nowrap">
		<NuxtLink
			class="text-lg md:text-2xl md:mx-6 text-gray-800"
			to="/">
			{{ blok.title }}
		</NuxtLink>
		<nav class="hidden md:inline-block">
			<StoryblokComponent
				v-for="item in blok.menu"
				:key="item._uid"
				:blok="item" />
		</nav>

		<button
			@click="showMenu = !showMenu"
			class="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
			aria-label="Toggle navigation">
			<svg
				class="w-6 h-6"
				fill="currentColor"
				viewBox="0 0 20 20">
				<path
					v-if="!showMenu"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
				<path
					v-else
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M2 6.5A1.5 1.5 0 0 1 3.5 5h13A1.5 1.5 0 0 1 18 6.5v0A1.5 1.5 0 0 1 16.5 8h-13A1.5 1.5 0 0 1 2 6.5v0zm0 5A1.5 1.5 0 0 1 3.5 10h13A1.5 1.5 0 0 1 18 11.5v0A1.5 1.5 0 0 1 16.5 13h-13A1.5 1.5 0 0 1 2 11.5v0zM4 16.5A1.5 1.5 0 0 1 5.5 15h10A1.5 1.5 0 0 1 17 16.5v0A1.5 1.5 0 0 1 15.5 18h-10A1.5 1.5 0 0 1 4 16.5v0z" />
			</svg>
		</button>
		<nav
			v-if="showMenu"
			class="md:hidden absolute top-full left-0 w-full bg-white shadow flex flex-col">
			<StoryblokComponent
				v-for="item in blok.menu"
				:key="item._uid"
				:blok="item"
				class="block py-2 px-4 text-gray-800 hover:bg-gray-100" />
		</nav>
	</div>
</template>

<script setup lang="ts">
	import { NavBarStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: NavBarStoryblok }>()
	const showMenu = useState("counter", () => false)
</script>
