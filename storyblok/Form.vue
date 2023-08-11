<template>
	<div>
		<ElForm
			label-position="top"
			:name="blok.name"
			@submit="submitHandler"
			action="https://formspree.io/f/xzbleebq"
			method="POST"
			class="flex flex-col flex-wrap gap-6 p-5 md:p-9 lg:p-13">
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
		</ElForm>
	</div>
</template>

<script setup lang="ts">
	import { FormStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: FormStoryblok }>()
	const submitHandler = (event: Event) => {
		alert(blok.message)
	}
</script>
