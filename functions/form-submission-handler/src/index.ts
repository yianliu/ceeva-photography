import { PublishCommand, SNSClient } from "@aws-sdk/client-sns"
export const snsClient = new SNSClient({})

export interface Env {
	SENDGRID: KVNamespace
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
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

		console.log({ jsonData })

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
