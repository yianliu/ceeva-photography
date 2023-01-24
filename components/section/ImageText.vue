<template>
	<div class="grid grid-cols-2 items-center">
		<div class="flex flex-col items-center">
			<div class="md:w-3/4 w-full px-6 py-24">
				<component
					:is="headingLevel"
					class="text-4xl lg:text-5xl text-justify pb-8"
					>{{ section.heading }}</component
				>
				<div
					v-html="section.body.html"
					class="prose text-justify max-w-full"
				></div>
			</div>
		</div>

		<img
			v-if="section.image"
			:src="section.image.url"
			class="object-cover"
			:alt="section.imageDescription"
		/>
	</div>
</template>
<script>
export default {
	props: {
		section: {
			required: true,
			type: Object
		}
	},
	data() {
		return {
			headingLevel: `h${this.section.headingLevel}`
		}
	}
}
</script>
