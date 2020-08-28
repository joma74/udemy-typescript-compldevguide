import axios from "axios"

const URL = "https://jsonplaceholder.typicode.com/todos/1"

axios
	.get(URL)
	.then((rs) => {
		console.log(rs.data)
	})
	.catch((e) => {
		console.log(e)
	})
