<template>
	<NuxtImg
		:src="`${image.filename}/m/`"
		loading="lazy"
		quality="1"
		placeholder
		:height="height"
		:width="width"
		class="block ease-in-out duration-500 w-full"
		:class="image.title && 'group-hover:brightness-50'" />
</template>

<script setup lang="ts">
	interface Image {
		[k: string]: any
		alt?: string | undefined
		copyright?: string | undefined
		id: number
		filename: string
		name: string
		title?: string | undefined
	}
	const { image } = defineProps<{ image: Image }>()
	const dimensions = image.filename.split("/")[5].split("x")
	const width = dimensions[0]
	const height = dimensions[1]
</script>
