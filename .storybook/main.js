/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
	stories: ["../stories/**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        {
			name: "@storybook/addon-styling",
			options: {
				postCss: {
					implementation: require.resolve("postcss")
				}
			}
		},
        "@storybook/addon-mdx-gfm"
    ],
	framework: {
		name: "@storybook/vue3-vite",
		options: {}
	},
	docs: {
		autodocs: "tag"
	}
}
export default config
