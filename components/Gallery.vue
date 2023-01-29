<template>
	<MasonryWall :items="items" :ssr-columns="2">
		<template #default="{ item, index }">
			<nuxt-img :src="`/img/${props.name}/${item + 1}.jpg`" />
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
// const numPerCol = number / 2
</script>
