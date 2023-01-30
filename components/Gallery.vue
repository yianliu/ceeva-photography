<template>
	<MasonryWall :items="items" :ssr-columns="2">
		<template #default="{ item, index }">
			<img :src="`/img/${props.name}/${item + 1}.jpg`" loading="lazy" />
		</template>
	</MasonryWall>
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
