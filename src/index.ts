import { User } from "./User"
import { Event } from "./Event"

let user = new User({ id: 1 })
user.on(Event.change, (e) => {
	console.log(`event "${e}" has been called`)
	console.log(user)
})

user.fetch()
