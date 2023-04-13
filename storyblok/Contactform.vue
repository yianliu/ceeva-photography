<template>
	<div>
		<form
			name="contact"
			netlify
			class="flex flex-col">
			<div
				v-for="field in blok.fields"
				:key="field._uid"
				class="m-3">
				<label
					:for="field.name"
					hidden
					>{{ field.name }}</label
				>
				<input
					:type="field.type"
					:name="field.name"
					class="ring-1 ring-dark ml-3"
					:placeholder="field.name" />
			</div>
			<input
				type="submit"
				value="submit" />
		</form>
	</div>
</template>

<script setup lang="ts">
	import { ContactformStoryblok } from "./component-types-sb"
	const { blok } = defineProps<{ blok: ContactformStoryblok }>()
</script>
