<template>
	<div
		class="relative bg-white flex p-4 items-center place-content-between shadow"
	>
		<span class="text-2xl mx-6" v-text="title"></span>
		<nav>
			<HeaderLink v-for="page in pages" :key="page.slug" :page="page" />
		</nav>
	</div>
</template>

<script setup>
const title = useAppConfig().title
const pagesQuery = `query Assets {
  pages(where: {parentpage: null}) {
    name
    slug
    showInNav
    childpages {
      name
      slug
      showInNav
    }
  }
}
`
const { $apiCall } = useNuxtApp()
const pages = await $apiCall(pagesQuery).then((res) =>
	res.data.pages.filter((page) => page.showInNav)
)
console.log(pages)
</script>
