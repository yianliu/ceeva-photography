import type { Meta, StoryObj } from "@storybook/vue3"
import ListingVue from "./Listing.vue"
import { ListingStoryblok } from "./component-types-sb"
const meta: Meta<typeof ListingVue> = {
	component: ListingVue,
	tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof ListingVue>

export const Basic: Story = {
	args: {
		blok: {
			_uid: "test",
			component: "Listing",
			title: "Basic",
			price: "100",
			content: { type: "" }
		}
	}
}
