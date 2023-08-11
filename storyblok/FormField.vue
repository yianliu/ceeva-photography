<template>
	<ElFormItem
		:label="blok.name + (blok.required ? '*' : '')"
		class="px-3 basis-full"
		:class="!blok.fullWidth && 'sm:basis-1/2'"
		:key="blok._uid">
		<ElDatePicker
			v-if="blok.type == 'date'"
			type="date"
			placeholder="Pick a day"
			size="large" />
		<ElInput
			v-else
			size="large"
			:type="blok.type"
			:name="blok.name"
			:required="blok.required"
			:placeholder="blok.placeholder" />
	</ElFormItem>
</template>

<script setup lang="ts">
	import { FormFieldStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: FormFieldStoryblok }>()
</script>
