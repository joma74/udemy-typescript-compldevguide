import axios from "axios"
import TypicodeTodoResponse from "./types/TypicodeTodoResponse"
import { default as validateTypicodeTodoResponse } from "./types/TypicodeTodoResponse.validator"

const URL = "https://jsonplaceholder.typicode.com/todos/1"

axios
	.get(URL)
	.then((rs) => {
		const todo = validateTypicodeTodoResponse(rs.data) as TypicodeTodoResponse
		const id = todo.id
		const title = todo.title
		const completed = todo.completed
		console.log(
			`The todo with id: ${id}, title: ${title}, completed: ${completed}`,
		)
	})
	.catch((e) => {
		console.log(e)
	})
