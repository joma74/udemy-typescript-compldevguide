import { User } from "./User"
import { Event } from "./Event"

let user = new User({ id: 14, name: "2NU2", age: 111 })
user.on(Event.SAVE, (e) => {
	console.log(`event "${e}" has been called`)
	console.log(user)
})

user.save()
