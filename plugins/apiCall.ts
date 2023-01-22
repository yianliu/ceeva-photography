export default defineNuxtPlugin(() => {
	return {
		provide: {
			apiCall: async (query: string, variables = {}) => {
				return $fetch(apiUrl(), {
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify({ query, variables })
				})
			}
		}
	}
})
