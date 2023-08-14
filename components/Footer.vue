<template>
	<ElCarousel
		:interval="4000"
		class="bg-gray"
		type="card"
		height="200px">
		<ElCarouselItem
			v-for="item in data"
			:key="item.name">
			<ElCard class="h-full">
				{{ item }}
			</ElCard>
		</ElCarouselItem>
	</ElCarousel>
</template>

<script setup lang="ts">
	const data = [
		{
			name: "Verina Duly",
			review: "85"
		},
		{
			name: "Onfre Cornier",
			review: "7"
		},
		{
			name: "Velvet Juares",
			review: "63043"
		},
		{
			name: "Susanna Casterton",
			review: "72"
		},
		{
			name: "Yale Lawlan",
			review: "19653"
		},
		{
			name: "Gard Pounder",
			review: "4"
		},
		{
			name: "Burnaby Ciotti",
			review: "47"
		},
		{
			name: "Otha Mulvin",
			review: "0"
		},
		{
			name: "Joby Austin",
			review: "6398"
		},
		{
			name: "Quintana Bellord",
			review: "662"
		}
	]
	const reviews = fetch(
		"https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews"
	)
</script>
