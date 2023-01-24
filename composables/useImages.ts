const fs = require("fs")

export default (dir: string) => {
	const res = fs.readdirSync("~/assets/images/" + dir + "/")
	console.log(res)
	return res
}
