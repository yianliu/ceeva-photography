import type { Meta, StoryObj } from "@storybook/vue3"
import ListingCardVue from "./ListingCard.vue"

const meta: Meta<typeof ListingCardVue> = {
	component: ListingCardVue,
	tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof ListingCardVue>

export const Main: Story = {
	args: {
		title: "Basic",
		body: "Hello",
		price: 5
	}
}
