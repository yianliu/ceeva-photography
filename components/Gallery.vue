<template>
	<div class="columns-1 md:columns-2 lg:columns-3 gap-0">
		<img
			v-for="item in items"
			:src="`/img/${props.name}/${item + 1}.jpg`"
			loading="lazy"
		/>
	</div>
</template>

<script setup>
const props = defineProps({
	name: {
		type: String
	},
	number: {
		type: Number
	}
})

const items = []
for (let num = 1; num < props.number; num++) {
	items.push(num)
}
</script>
