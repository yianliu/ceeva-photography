import type { Meta, StoryObj } from "@storybook/vue3"

import FormFieldVue from "./FormField.vue"
import { FormFieldStoryblok } from "./component-types-sb"

const meta: Meta<typeof FormFieldVue> = {
	component: FormFieldVue
}

export default meta
type Story = StoryObj<typeof FormFieldVue>

const blok: FormFieldStoryblok = {
	_uid: "454accc9-245c-4a8e-9fa4-102592e4d174",
	name: "Name",
	type: "text",
	required: true,
	component: "FormField",
	fullWidth: false,
	placeholder: "John Doe"
}

export const Field: Story = {
	args: {
		blok
	}
}
