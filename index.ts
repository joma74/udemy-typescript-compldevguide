import axios from "axios"
import TypicodeTodoResponse from "./types/TypicodeTodoResponse"
import { default as validateTypicodeTodoResponse } from "./types/TypicodeTodoResponse.validator"

const URL = "https://jsonplaceholder.typicode.com/todos/1"

axios
	.get(URL)
	.then((rs) => {
		const todo: TypicodeTodoResponse = validateTypicodeTodoResponse(rs.data)
		const ID = todo.id
		const title = todo.title
		const completed = todo.completed
		console.log(
			`The Todo with ID: ${ID}, title: ${title}, completed: ${completed}`,
		)
	})
	.catch((e) => {
		console.log(e)
	})
