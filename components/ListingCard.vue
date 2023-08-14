<template>
	<ElCard> <div v-html="body"></div></ElCard>
</template>

<script setup lang="ts">
	const { body } = defineProps<{ body: string }>()
</script>
