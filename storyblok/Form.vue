<template>
	<div class="flex flex-col items-center">
		<form
			label-position="top"
			:name="blok.name"
			@submit="submitHandler"
			action="https://form.ceevaphotography.com"
			method="POST"
			class="flex flex-col flex-wrap gap-6 p-5 md:p-9 lg:p-13 max-w-sm sm:max-w-2xl">
			<h2
				v-if="blok.title"
				v-text="blok.title"
				class="mx-3"></h2>
			<div class="flex flex-row flex-wrap gap-y-3">
				<StoryblokComponent
					v-for="field in blok.fields"
					:key="field._uid"
					:blok="field" />
			</div>
			<input
				type="submit"
				value="submit"
				class="cursor-pointer cta w-fit mx-3" />
		</form>
	</div>
</template>

<script setup lang="ts">
	import type { FormStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: FormStoryblok }>()
	const submitHandler = (event: Event) => {
		alert(blok.message)
	}
</script>
