<template>
	<div
		class="relative bg-white flex p-6 items-center place-content-between shadow"
	>
		<span class="text-2xl mx-6" v-text="title"></span>
		<nav>
			<HeaderLink
				v-for="page in pages"
				:key="page.slug"
				:destination="page.slug"
				:name="page.name"
			/>
		</nav>
	</div>
</template>

<script setup>
const title = useAppConfig().title
const pagesQuery = `query {
    pages {
      name
      slug
    }
  }`
const { $apiCall } = useNuxtApp()
const pages = await $apiCall(pagesQuery)
console.log(pages)
</script>
