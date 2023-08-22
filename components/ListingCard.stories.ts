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
		title: "Basic Package",
		body: "<p> <span data-type='emoji' data-name='star2' emoji='🌟'>🌟</span> 500+ professionally retouched, high resolution images</p><p><span data-type='emoji' data-name='star2' emoji='🌟'>🌟</span> from prep to the last dance </p><p> <span data-type='emoji' data-name='star2' emoji='🌟'>🌟</span> password protected online gallery that you can download from, and share with your loved ones</p>",
		price: 1500
	}
}
