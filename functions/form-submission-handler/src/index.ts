import { PublishCommand, SNSClient } from "@aws-sdk/client-sns"

interface Env {
	AWS: KVNamespace
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const accessKeyId = (await env.AWS.get("ACCESS_KEY_ID")) || " "
		const secretAccessKey = (await env.AWS.get("SECRET_ACCESS_KEY")) || ""
		const snsClient = new SNSClient({
			region: "eu-west-2",
			credentials: {
				accessKeyId,
				secretAccessKey
			}
		})
		const referrer = request.headers.get("referer")
		const text = await request.text()

		if (
			text === "" ||
			request.method != "POST" ||
			!referrer?.includes("ceevaphotography.com")
		) {
			return new Response("Bad Request", { status: 400 })
		}

		const decodedData = decodeURIComponent(text.replace(/\+/g, " "))

		const pairs: string[] = decodedData.split("&")

		const formattedData: { [key: string]: string } = {}

		pairs.forEach((pair: string) => {
			const keyValue: string[] = pair.split("=")
			const key: string = keyValue[0]
			const value: string = keyValue[1]
			formattedData[key] = value
		})

		if (!formattedData.Name || !formattedData["E-mail"]) {
			return new Response(null, { status: 418 })
		}

		const formattedString: string = `Name: ${formattedData.Name}\nE-mail: ${formattedData["E-mail"]}\nDate: ${formattedData.Date}\nMessage: ${formattedData.Message}`

		console.log({ jsonData: formattedString })

		const response = await snsClient.send(
			new PublishCommand({
				Subject: "New Form Submission",
				Message: formattedString,
				TopicArn: "arn:aws:sns:eu-west-2:169135823480:contact-form-submission"
			})
		)
		console.log({ response })
		return Response.redirect("https://ceevaphotography.com/contact")
	}
}
