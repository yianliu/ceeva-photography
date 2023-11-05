resource "aws_sns_topic" "form_submission" {
  name = "contact-form-submission"
}

resource "aws_sns_topic_subscription" "email" {
	endpoint = "ceevaliu@outlook.com"
	protocol = "email"
	topic_arn = aws_sns_topic.form_submission.arn
}