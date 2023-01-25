<template>
	<div class="container">
		<div class="item">
			<nuxt-img
				v-for="num in Array(number).keys()"
				:src="`/${props.name}/${num + 1}.jpg`"
				class="w-1/2"
			/>
		</div>
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

Vue.use
// const numPerCol = number / 2
</script>
