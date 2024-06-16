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

		const text = await request.text()

		if (text === "" || request.method != "POST") {
			return new Response("Bad Request", { status: 400 })
		}

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

		console.log({ text, decodedData, formattedData, jsonData })

		const response = await snsClient.send(
			new PublishCommand({
				Message: jsonData,
				TopicArn: "arn:aws:sns:eu-west-2:169135823480:contact-form-submission"
			})
		)
		console.log({ response })
		return Response.redirect("https://ceevaphotography.com/contact")
	}
}
