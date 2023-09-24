/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	SENDGRID: KVNamespace
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const token = await env.SENDGRID.get("TOKEN")
		const email = await env.SENDGRID.get("EMAIL")
		const text = await request.text()

		const decodedData = decodeURIComponent(text)

		const pairs: string[] = decodedData.split("&")

		const formattedData: { [key: string]: string } = {}

		pairs.forEach((pair: string) => {
			const keyValue: string[] = pair.split("=")
			const key: string = keyValue[0]
			const value: string = keyValue[1]
			formattedData[key] = value
		})

		const jsonData: string = JSON.stringify(formattedData)

		console.log(jsonData)

		await fetch("https://api.sendgrid.com/v3/mail/send", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				personalizations: [{ to: [{ email }] }],
				from: { email },
				subject: "You have received a new form submission",
				content: [
					{
						type: "text/plain",
						value: jsonData
					}
				]
			})
		})
		return Response.redirect("https://ceevaphotography.com/contact")
	}
}
