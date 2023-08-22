<template>
	<ElCard>
		<template #header>
			<div
				v-text="title"
				class="text-center text-xl"></div>
		</template>
		<div v-html="body"></div>
		<ElDivider class="mx-6">
			<ElIcon><ElIconStarFilled /></ElIcon
		></ElDivider>
		<div
			class="text-center"
			v-text="displayedPrice"></div>
	</ElCard>
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
