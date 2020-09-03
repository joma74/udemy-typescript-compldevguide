import { Event } from "./models/Event"
import { User } from "./models/User"

const users = User.buildUserCollection()
users.on(Event.CHANGE, (e) => {
	console.log(users)
})
users.fetch()
