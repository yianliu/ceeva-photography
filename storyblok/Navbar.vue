<template>
	<div
		v-editable="blok"
		class="py-32 text-[#50b0ae] font-bold text-center"
	>
		{{blok.menu}}
	</div>
</template>

<script setup>
	defineProps({ blok: Object })
</script>
