<template>
	<div>
		<form
			:name="blok.name"
			method="POST"
			netlify
			class="flex flex-col flex-wrap gap-6 p-5 md:p-9 lg:p-13">
			<h2
				v-if="blok.title"
				v-text="blok.title"
				class="mx-3"></h2>
			<div class="flex flex-row flex-wrap gap-y-3">
				<label
					v-for="field in blok.fields"
					class="px-3 basis-full"
					:class="!field.fullWidth && 'sm:basis-1/2'"
					:key="field._uid">
					{{ field.name }}
					<input
						v-if="field.type != 'textarea'"
						:type="field.type"
						:name="field.name"
						class="appearance-none block w-full mt-2 bg-lighter border border-lighter py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-medium placeholder:text-dark"
						:required="field.required"
						:placeholder="field.placeholder" />
					<textarea
						v-else
						class="appearance-none block w-full mt-2 bg-lighter border border-lighter py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-medium placeholder:text-dark" />
				</label>
			</div>
			<input
				type="hidden"
				name="form-name"
				:value="blok.name" />
			<input
				type="submit"
				value="submit"
				class="cursor-pointer bg-red-400 w-fit py-3 px-4 mx-3" />
		</form>
	</div>
</template>

<script setup lang="ts">
	import { FormStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: FormStoryblok }>()
</script>
