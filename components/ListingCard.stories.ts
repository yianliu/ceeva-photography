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
		body: "<ul><li><p>500+ professionally retouched, high resolution images</p></li><li><p>from prep to the last dance</p></li><li><p>password protected online gallery that you can download from, and share with your loved ones</p></li></ul>",
		price: 1500
	}
}
