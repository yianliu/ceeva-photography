<template>
	<div>
		<form name="contact" netlify class="flex flex-col">
			<div v-for="field in fields" class="m-3">
				<label :for="field.name" hidden>{{ field.name }}</label>
				<input
					:type="field.type"
					:name="field.name"
					class="ring-1 ring-dark ml-3"
					:placeholder="field.name"
				/>
			</div>
		</form>
	</div>
</template>

<script setup>
const fields = useForm()
</script>
