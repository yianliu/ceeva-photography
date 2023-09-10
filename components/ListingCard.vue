<template>
	<div
		class="text-gray-800 shadow-lg border border-solid border-gray-200 rounded-md p-6">
		<div
			v-text="title"
			class="text-center lg:text-lg py-2 lg:py-8"></div>
		<div
			v-html="body"
			class="[&_li]:my-2 [&_li]:md:my-3 [&_li]:lg:my-6 [&_ul]:list-disc pl-4 text-gray-500 align-baseline hyphens-auto"></div>
		<div
			class="text-center py-2 lg:py-8 lg:text-2xl font-bold"
			v-text="displayedPrice"></div>
	</div>
</template>

<script setup lang="ts">
	interface Props {
		title: string
		body: string
		price: number
	}
	const { price } = defineProps<Props>()

	const formatter = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
		maximumFractionDigits: 0
	})
	const displayedPrice = formatter.format(price)
</script>
