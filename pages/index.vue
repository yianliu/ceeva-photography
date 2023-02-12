<template>
	<div>
		<NuxtLink to="commercial">View Commercial</NuxtLink>
		<SectionBanner
			heading="Commercial"
			cta-text="view"
			destination="commercial"
		/>
	</div>
</template>

<script setup>
const data = await useAsyncStoryblok("cdn/stories/config", {
	version: process.env.STORYBLOK_VERSION
})

const headerMenu = ref(null)
</script>
