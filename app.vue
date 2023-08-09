<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<script setup lang="ts">
	useHead({
		title: "Ceeva Photography | Manchester",
		meta: [
			{
				name: "description",
				content: "Freelance photographer based in Manchester"
			}
		],
		htmlAttrs: { lang: "en" }
	})
</script>
