<template>
	<div class="text-gray-800 border-2 rounded-md px-6">
		<div
			v-text="title"
			class="text-center text-xl border-b-2 py-8"></div>
		<div
			v-html="body"
			class="border-b-2 leading-16 [&_li]:my-6 [&_ul]:list-disc pl-4"></div>
		<div
			class="text-center py-8"
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
