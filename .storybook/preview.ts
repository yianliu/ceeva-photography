import "../assets/css/main.css"
import type { Preview } from "@storybook/vue3"
import { setup } from "@storybook/vue3"

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/
			}
		}
	}
}

export default preview
