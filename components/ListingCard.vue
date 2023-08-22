<template>
	<ElCard>
		<template #header>
			<div
				v-text="title"
				class="flex flex-row justify-center items-center"></div>
		</template>
		<div v-html="body"></div>

		{{ price }}
	</ElCard>
</template>

<script setup lang="ts">
	interface Props {
		title: string
		body: string
		price: number
	}
	const { body, title, price } = defineProps<Props>()
</script>
