<template>
	<label
		class="px-3 basis-full"
		:class="!blok.fullWidth && 'sm:basis-1/2'"
		:key="blok._uid">
		{{ blok.name }}
		{{ blok.required ? "*" : null }}
		<input
			v-if="blok.type != 'textarea'"
			:type="blok.type"
			:name="blok.name"
			class="appearance-none block w-full mt-2 bg-lighter border border-lighter py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-medium placeholder:text-dark"
			:required="blok.required"
			:placeholder="blok.placeholder" />
		<textarea
			v-else
			:name="blok.name"
			class="appearance-none block w-full mt-2 bg-lighter border border-lighter py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-medium placeholder:text-dark" />
	</label>
</template>

<script setup lang="ts">
	import { FormFieldStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: FormFieldStoryblok }>()
</script>
