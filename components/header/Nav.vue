<template>
	<div
		class="relative bg-white flex p-4 items-center place-content-between shadow"
	>
		<span class="text-2xl mx-6 text-dark" v-text="title"></span>
		<nav>
			<HeaderLink v-for="page in pages" :key="page.slug" :page="page" />
		</nav>
	</div>
</template>

<script setup>
const title = useAppConfig().title
const pages = usePages()
</script>
